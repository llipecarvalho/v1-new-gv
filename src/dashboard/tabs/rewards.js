/**
 * Módulo de Página Interna: Central de Prêmios
 * Acessível via botão "Ver Tudo" da Home. 
 * Mostra Mimos e Sorteios em um só lugar sem alterar a Bottom Bar.
 */

export default {
    render: (state) => {
        const rewards = state.collections.rewards || [];
        const raffles = state.collections.raffles || [];
        
        // Unifica os itens identificando o tipo real de cada um
        const allItems = [
            ...rewards.map(r => ({ ...r, type: (r.type === 'raffle_highlight' || r.type === 'raffle') ? 'raffle' : 'reward' })),
            ...raffles.map(r => ({ ...r, type: 'raffle' }))
        ];

        return `
        <div id="tab-rewards" class="tab-pane animate-fade space-y-6 px-6 pb-32">
            <!-- Header com botão voltar -->
            <div class="flex items-center gap-4 pt-4 mb-6">
                <button id="btn-back-to-home" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all">
                    <span class="material-symbols-outlined text-white">arrow_back</span>
                </button>
                <div>
                    <h2 class="text-xl font-black uppercase tracking-tighter text-white">Central de <span class="text-[#f085aa]">Prêmios</span></h2>
                    <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Tudo o que você pode ganhar</p>
                </div>
            </div>

            <!-- Filtros -->
            <div class="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                <button data-filter="all" class="filter-pill active">Todos</button>
                <button data-filter="reward" class="filter-pill">Mimos</button>
                <button data-filter="raffle" class="filter-pill">Sorteios</button>
            </div>

            <!-- Grid de Itens -->
            <div id="rewards-grid" class="grid grid-cols-1 gap-6 mt-4">
                ${allItems.map(item => renderItemCard(item)).join('')}
            </div>
        </div>
        `;
    },

    init: (state) => {
        // Lógica de Filtros
        const filters = document.querySelectorAll('[data-filter]');
        const items = document.querySelectorAll('.reward-item');

        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                filters.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-type') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Botão Voltar
        document.getElementById('btn-back-to-home')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('home'));
        });

        // Lógica de Redirecionamento dos Cards
        document.querySelectorAll('.reward-item button').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.closest('.reward-item').getAttribute('data-type');
                const targetTab = type === 'reward' ? 'store' : 'hub';
                
                import('../main.js').then(m => m.switchTab(targetTab));
            });
        });
    }
};

function renderItemCard(item) {
    const isRaffle = item.type === 'raffle';
    const tagLabel = isRaffle ? 'SORTEIO' : 'MIMO';
    const tagColor = isRaffle ? 'bg-orange-500' : 'bg-[#f085aa]';
    const btnLabel = isRaffle ? 'Ver Detalhes' : 'Resgatar';
    
    return `
    <div class="reward-item" data-type="${item.type}">
        <div class="bg-white rounded-[2.5rem] p-4 flex flex-col shadow-xl border border-black/5">
            <div class="relative rounded-[2rem] overflow-hidden mb-4 aspect-video">
                <img src="${item.image_url || 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400'}" class="w-full h-full object-cover">
                <div class="absolute top-4 left-4 ${tagColor} text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    ${tagLabel}
                </div>
            </div>
            <div class="px-2">
                <h3 class="text-xl font-black text-black uppercase tracking-tighter leading-tight">${item.name}</h3>
                <div class="flex items-center justify-between mt-4 pb-2">
                    <span class="text-lg font-black text-[#f085aa]">${item.cost || 'ATUAL'} <span class="text-[9px] text-gray-400 uppercase">pts</span></span>
                    <button ${isRaffle ? '' : `data-redeem-coupon="${item.code}" data-cost="${item.cost}"`} class="px-6 py-3 bg-black text-white text-[10px] font-black uppercase rounded-full active:scale-95 transition-all">
                        ${btnLabel}
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
}
