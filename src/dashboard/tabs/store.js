/**
 * Módulo da Aba Loja (Mimos)
 */

export default {
    render: (state) => {
        const coupons = state.collections.rewards.filter(item => item.type === 'coupon');

        return `
        <div id="tab-store" class="tab-pane animate-fade space-y-6 px-6 pb-48">
            <!-- Header -->
            <div class="flex items-center justify-between mb-6 pt-4">
                <div>
                    <h2 class="text-xl font-black uppercase tracking-tighter text-white">Mimos do <span class="text-gradient-versiani">Clube</span></h2>
                    <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Troque seus pontos por benefícios.</p>
                </div>
                <div class="flex items-center gap-1.5 bg-[#f085aa]/10 px-3 py-1.5 rounded-full border border-[#f085aa]/20 shadow-[0_0_15px_rgba(240,133,170,0.1)]">
                    <span class="material-symbols-outlined text-[#f085aa] text-sm leading-none">stars</span>
                    <span class="text-[10px] font-black text-white leading-none">${state.user.points.toLocaleString('pt-BR')} PTS</span>
                </div>
            </div>

            <div class="bg-[#1a1a1a] p-1 rounded-2xl flex items-center mb-6 relative border border-white/5">
                <button id="btn-store-shop" class="flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10">Mimos</button>
                <button id="btn-store-history" class="flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Resgates</button>
            </div>

            <!-- VIEW: LOJA -->
            <div id="store-shop-view" class="space-y-6">
                <!-- Filtros por Categoria -->
                <div class="flex items-center gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    <button id="btn-cat-skin" class="px-5 py-2 rounded-full bg-[#f085aa] text-black text-[10px] font-black uppercase whitespace-nowrap transition-all">Skin</button>
                    <button id="btn-cat-swim" class="px-5 py-2 rounded-full bg-white/5 text-gray-500 border border-white/5 text-[10px] font-black uppercase whitespace-nowrap transition-all">Swim</button>
                </div>

                <!-- GRID DE CUPONS -->
                <div id="coupons-grid" class="grid grid-cols-1 gap-6">
                    ${coupons.map(item => `
                        <div class="store-item" data-category="${item.category}">
                            <div class="bg-white border border-black/5 rounded-[3rem] p-4 flex flex-col h-full transition-all hover:scale-[1.02] active:scale-95 group store-card overflow-hidden shadow-xl">
                                <div class="store-card-image relative mb-4 overflow-hidden rounded-[2.2rem]">
                                    <img src="${item.image_url}" class="group-hover:scale-110 transition-transform duration-700 w-full aspect-[1.8/1] object-cover brightness-[0.85]">
                                    <div class="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none">
                                        <div class="drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                                            <h3 class="text-4xl font-black text-white leading-none tracking-tighter">R$ ${item.name.match(/\d+/)[0]}</h3>
                                            <p class="text-[10px] font-black text-white uppercase tracking-[0.3em] mt-2">CARTÃO PRESENTE</p>
                                        </div>
                                        <div class="flex items-baseline gap-1.5 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                                            <span class="text-3xl font-black text-[#f085aa]">${item.cost}</span>
                                            <span class="text-[11px] font-black text-white uppercase tracking-widest">PTS</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-2 flex items-center justify-between mt-auto pb-2">
                                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-normal">COMPRA MÍNIMA R$ ${item.minPurchase}</span>
                                    <button data-redeem-coupon="${item.code}" data-id="${item.id}" data-name="${item.name}" data-cost="${item.cost}" data-min="${item.minPurchase}" data-category="${item.category}" class="px-7 py-3 bg-white text-black text-[10px] font-black uppercase rounded-full shadow-xl transition-all hover:bg-[#f085aa] hover:text-white border border-gray-100">Trocar</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>



            <!-- VIEW: HISTÓRICO DE RESGATES -->
            <div id="store-history-view" class="hidden space-y-4">
                <div id="redemption-list" class="space-y-4">
                    <!-- Dinâmico via JS -->
                </div>
            </div>
        </div>
        `;
    },

    init: (state) => {
        setupStoreLogic(state);
    }
};

function setupStoreLogic(state) {
    const btnShop = document.getElementById('btn-store-shop');
    const btnHistory = document.getElementById('btn-store-history');
    const viewShop = document.getElementById('store-shop-view');
    const viewHistory = document.getElementById('store-history-view');

    const btnSkin = document.getElementById('btn-cat-skin');
    const btnSwim = document.getElementById('btn-cat-swim');
    const storeItems = document.querySelectorAll('.store-item');

    // TAB SWITCH PRINCIPAL
    btnShop?.addEventListener('click', () => {
        btnShop.className = "flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        btnHistory.className = "flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        viewShop.classList.remove('hidden');
        viewHistory.classList.add('hidden');
    });

    btnHistory?.addEventListener('click', () => {
        btnHistory.className = "flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        btnShop.className = "flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        viewHistory.classList.remove('hidden');
        viewShop.classList.add('hidden');
        renderHistory();
    });



    // FILTRO DE CATEGORIAS
    function filter(cat) {
        const bSkin = document.getElementById('btn-cat-skin');
        const bSwim = document.getElementById('btn-cat-swim');
        const storeItems = document.querySelectorAll('.store-item');

        if (cat === 'skin') {
            if(bSkin) bSkin.className = "px-5 py-2 rounded-full bg-[#f085aa] text-black text-[10px] font-black uppercase whitespace-nowrap transition-all";
            if(bSwim) bSwim.className = "px-5 py-2 rounded-full bg-white/5 text-gray-500 border border-white/5 text-[10px] font-black uppercase whitespace-nowrap transition-all";
        } else {
            if(bSwim) bSwim.className = "px-5 py-2 rounded-full bg-[#f085aa] text-black text-[10px] font-black uppercase whitespace-nowrap transition-all";
            if(bSkin) bSkin.className = "px-5 py-2 rounded-full bg-white/5 text-gray-500 border border-white/5 text-[10px] font-black uppercase whitespace-nowrap transition-all";
        }
        
        storeItems.forEach(item => {
            item.style.display = item.getAttribute('data-category') === cat ? 'block' : 'none';
        });
    }

    document.getElementById('btn-cat-skin')?.addEventListener('click', () => filter('skin'));
    document.getElementById('btn-cat-swim')?.addEventListener('click', () => filter('swim'));
    
    // Pequeno delay para garantir que o DOM renderizou
    setTimeout(() => filter('skin'), 100);

    // RENDERIZAÇÃO DO HISTÓRICO
    function renderHistory() {
        const history = JSON.parse(localStorage.getItem('versiani_redemptions') || '[]');
        const container = document.getElementById('redemption-list');
        
        if (!container) return;

        if (history.length === 0) {
            container.innerHTML = `
                <div class="text-center py-20">
                    <span class="material-symbols-outlined text-gray-700 text-5xl mb-4">redeem</span>
                    <p class="text-xs font-black text-gray-500 uppercase tracking-widest">Nenhum cupom resgatado ainda.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = history.reverse().map(item => `
            <div class="bg-[#121212] rounded-3xl p-6 border border-white/5 flex items-center justify-between">
                <div>
                    <div class="flex items-center gap-2 mb-1">
                        <span class="px-2 py-0.5 rounded-full bg-white/5 text-[7px] font-black text-[#f085aa] uppercase tracking-widest border border-[#f085aa]/20">${item.category || 'Skin'}</span>
                        <h4 class="text-sm font-black text-white uppercase tracking-tight">${item.name}</h4>
                    </div>
                    <p class="text-[9px] font-bold text-[#f085aa] uppercase tracking-widest">${item.code}</p>
                    <p class="text-[8px] font-bold text-gray-600 uppercase tracking-widest mt-2">${item.date}</p>
                </div>
                <button onclick="window.open('https://6be6du-45.myshopify.com/discount/${item.code}?redirect=/collections/colecao_cupom_${item.cost}', '_blank')" 
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#f085aa] transition-colors border border-white/10">
                    <span class="material-symbols-outlined text-base">open_in_new</span>
                </button>
            </div>
        `).join('');
    }

    // LÓGICA DE RESGATE
    document.querySelectorAll('[data-redeem-coupon]').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const name = btn.getAttribute('data-name');
            const cost = parseInt(btn.getAttribute('data-cost'));
            const code = btn.getAttribute('data-redeem-coupon');
            const min = btn.getAttribute('data-min');
            const category = btn.getAttribute('data-category');

            Swal.fire({
                html: `
                    <div class="text-center p-2">
                        <div class="w-20 h-20 bg-[#f085aa]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#f085aa]/20">
                            <span class="material-symbols-outlined text-[#f085aa] text-4xl">redeem</span>
                        </div>
                        <h2 class="text-2xl font-black text-white uppercase tracking-tight mb-3">Trocar Pontos?</h2>
                        <p class="text-[11px] text-gray-400 font-medium mb-8 leading-relaxed px-4">
                            Deseja trocar <span class="text-white font-bold">${cost} pontos</span> por um<br>
                            <span class="text-[#f085aa] font-black uppercase tracking-wider text-xs">${name} (${category})</span>?
                        </p>
                    </div>
                `,
                background: '#0a0a0a',
                showCancelButton: true,
                confirmButtonText: 'Sim, trocar!',
                cancelButtonText: 'Cancelar',
                buttonsStyling: false,
                customClass: {
                    popup: 'rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl bg-black/40',
                    confirmButton: 'w-full h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg mb-3',
                    cancelButton: 'w-full h-12 bg-white/5 text-white font-bold uppercase tracking-widest text-[9px] rounded-full',
                    actions: 'flex flex-col w-full px-6 pb-4'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    if (state.user.points < cost) {
                        Swal.fire({ title: 'Pontos Insuficientes', icon: 'error', background: '#0a0a0a', color: '#fff' });
                        return;
                    }

                    state.user.points -= cost;
                    document.querySelectorAll('.points-display').forEach(el => {
                        el.textContent = `${state.user.points.toLocaleString('pt-BR')} pts`;
                    });

                    const history = JSON.parse(localStorage.getItem('versiani_redemptions') || '[]');
                    history.push({
                        id, name, code, cost, min, category,
                        date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                    });
                    localStorage.setItem('versiani_redemptions', JSON.stringify(history));

                    Swal.fire({
                        html: `
                            <div class="text-center p-2">
                                <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                    <span class="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                                </div>
                                <h2 class="text-2xl font-black text-white uppercase tracking-tight mb-2">Sucesso!</h2>
                                <p class="text-[10px] text-gray-400 font-medium mb-8 text-center px-4">Seu cupom está disponível em "Meus Resgates" e pronto para uso na loja.</p>
                                <button onclick="window.open('https://6be6du-45.myshopify.com/discount/${code}?redirect=/collections/colecao_cupom_${cost}', '_blank')" class="w-full h-14 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full flex items-center justify-center gap-2">
                                    Ir para a Loja <span class="material-symbols-outlined text-sm">open_in_new</span>
                                </button>
                            </div>
                        `,
                        background: '#0a0a0a',
                        showConfirmButton: false,
                        showCloseButton: true,
                        customClass: { popup: 'rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl' }
                    });
                }
            });
        });
    });
}
