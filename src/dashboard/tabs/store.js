/**
 * Módulo da Aba Loja (Mimos)
 */

export default {
    render: (state) => {
        const coupons = state.collections.rewards.filter(item => item.type === 'coupon');

        return `
        <div id="tab-store" class="tab-pane animate-fade space-y-6 px-6 pb-48">
            <!-- Header -->
            <div class="flex items-center justify-between mb-8 pt-4">
                <div>
                    <h2 class="text-xl font-black uppercase tracking-tighter text-white">Mimos do <span class="text-gradient-versiani">Clube</span></h2>
                    <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Troque seus pontos por benefícios.</p>
                </div>
                <div class="flex items-center gap-1.5 bg-[#f085aa]/10 px-3 py-1.5 rounded-full border border-[#f085aa]/20 shadow-[0_0_15px_rgba(240,133,170,0.1)]">
                    <span class="material-symbols-outlined text-[#f085aa] text-sm leading-none">stars</span>
                    <span class="text-[10px] font-black text-white leading-none">${state.user.points.toLocaleString('pt-BR')} PTS</span>
                </div>
            </div>

            <!-- Filtros por Categoria -->
            <div class="bg-[#1a1a1a] p-1 rounded-2xl flex items-center mb-8 relative border border-white/5">
                <div id="filter-highlight" class="absolute h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[#f085aa] rounded-xl transition-all duration-300 ease-out z-0"></div>
                <button id="btn-store-skin" class="flex-1 py-3 rounded-xl text-black text-[10px] font-black uppercase transition-all z-10">Skin</button>
                <button id="btn-store-swim" class="flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Swim</button>
            </div>

            <!-- GRID DE CUPONS DINÂMICO COM DESIGN ORIGINAL -->
            <div id="coupons-grid" class="grid grid-cols-1 gap-6">
                ${coupons.map(item => `
                    <div class="store-item" data-category="${item.category}">
                        <div class="bg-white border border-black/5 rounded-[3rem] p-4 flex flex-col h-full transition-all hover:scale-[1.02] active:scale-95 group store-card overflow-hidden shadow-xl">
                            <div class="store-card-image relative mb-4 overflow-hidden rounded-[2.2rem]">
                                <img src="${item.image_url || 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400'}" class="group-hover:scale-110 transition-transform duration-700 w-full aspect-[1.8/1] object-cover brightness-[0.85]">
                                <div class="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none">
                                    <div class="drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                                        <h3 class="text-4xl font-black text-white leading-none tracking-tighter">R$ ${item.cost}</h3>
                                        <p class="text-[10px] font-black text-white uppercase tracking-[0.3em] mt-2">CARTÃO PRESENTE</p>
                                    </div>
                                    <div class="flex items-baseline gap-1.5 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                                        <span class="text-3xl font-black text-[#f085aa]">${item.cost}</span>
                                        <span class="text-[11px] font-black text-white uppercase tracking-widest">PTS</span>
                                    </div>
                                </div>
                            </div>
                            <div class="px-2 flex items-center justify-between mt-auto pb-2">
                                <span class="text-[9px] font-black text-gray-400 uppercase tracking-normal">COMPRA MÍNIMA DE R$ ${item.minPurchase || '200'}</span>
                                <button data-redeem-coupon="${item.code}" data-name="${item.name}" data-cost="${item.cost}" class="px-7 py-3 bg-white text-black text-[10px] font-black uppercase rounded-full shadow-xl transition-all hover:bg-[#f085aa] hover:text-white border border-gray-100">Trocar</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
    },

    init: (state) => {
        setupStoreLogic(state);
    }
};

function setupStoreLogic(state) {
    const btnSkin = document.getElementById('btn-store-skin');
    const btnSwim = document.getElementById('btn-store-swim');
    const filterHighlight = document.getElementById('filter-highlight');
    const storeItems = document.querySelectorAll('.store-item');

    function filterCategory(category, btnActive, btnInactive, isLeft) {
        btnActive.classList.add('text-black');
        btnActive.classList.remove('text-gray-500');
        btnInactive.classList.add('text-gray-500');
        btnInactive.classList.remove('text-black');
        filterHighlight.style.transform = isLeft ? 'translateX(0)' : 'translateX(100%)';

        storeItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                item.classList.add('animate-fade');
            } else {
                item.style.display = 'none';
            }
        });
    }

    btnSkin?.addEventListener('click', () => filterCategory('skin', btnSkin, btnSwim, true));
    btnSwim?.addEventListener('click', () => filterCategory('swim', btnSwim, btnSkin, false));

    document.querySelectorAll('[data-redeem-coupon]').forEach(btn => {
        btn.addEventListener('click', () => {
            const couponName = btn.getAttribute('data-name');
            const cost = btn.getAttribute('data-cost');
            const code = btn.getAttribute('data-redeem-coupon');

            Swal.fire({
                html: `
                    <div class="text-center p-2">
                        <div class="w-20 h-20 bg-[#f085aa]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#f085aa]/20 shadow-[0_0_20px_rgba(240,133,170,0.1)]">
                            <span class="material-symbols-outlined text-[#f085aa] text-4xl">redeem</span>
                        </div>
                        <h2 class="text-2xl font-black text-white uppercase tracking-tight mb-3">Confirmar Troca?</h2>
                        <p class="text-[11px] text-gray-400 font-medium mb-8 leading-relaxed px-4">
                            Deseja trocar <span class="text-white font-bold">${cost} pontos</span> por um<br>
                            <span class="text-[#f085aa] font-black uppercase tracking-wider text-xs">${couponName}</span>?
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
                    confirmButton: 'w-full h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg active:scale-95 transition-all mb-3',
                    cancelButton: 'w-full h-12 bg-white/5 text-white font-bold uppercase tracking-widest text-[9px] rounded-full hover:bg-white/10 transition-all',
                    actions: 'flex flex-col w-full px-6 pb-4'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    if (state.user.points < cost) {
                        Swal.fire({
                            title: 'Pontos Insuficientes',
                            text: 'Você não tem pontos suficientes para este resgate.',
                            icon: 'error',
                            confirmButtonColor: '#f085aa'
                        });
                        return;
                    }

                    state.user.points -= cost;
                    document.querySelectorAll('.points-display').forEach(el => {
                        el.textContent = `${state.user.points.toLocaleString('pt-BR')} pts`;
                    });

                    Swal.fire({
                        html: `
                            <div class="text-center p-2">
                                <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                                    <span class="material-symbols-outlined text-green-500 text-4xl">check_circle</span>
                                </div>
                                <h2 class="text-2xl font-black text-white uppercase tracking-tight mb-2">Resgatado!</h2>
                                <p class="text-[10px] text-gray-400 font-medium mb-8">Seu código foi copiado e está pronto para uso.</p>
                                <div class="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                                    <p class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2">Código do Cupom</p>
                                    <div class="flex items-center justify-center gap-3">
                                        <span class="text-xl font-black text-[#f085aa] tracking-widest uppercase">${code}</span>
                                        <span class="material-symbols-outlined text-gray-400 text-sm">content_copy</span>
                                    </div>
                                </div>
                                <button onclick="window.open('https://6be6du-45.myshopify.com/discount/${code}?redirect=/collections/colecao_cupom_${cost}', '_blank')" class="w-full h-14 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                                    Ir para a Loja <span class="material-symbols-outlined text-sm">open_in_new</span>
                                </button>
                            </div>
                        `,
                        background: '#0a0a0a',
                        showConfirmButton: false,
                        customClass: {
                            popup: 'rounded-[2.5rem] border border-white/10 shadow-2xl backdrop-blur-xl'
                        }
                    });

                    navigator.clipboard.writeText(code);
                }
            });
        });
    });
}
