/**
 * Módulo da Aba Hub (Sorteios)
 * Totalmente dinâmico consumindo dados da API centralizada.
 */

export default {
    render: (state) => `
        <div id="tab-hub" class="tab-pane animate-fade space-y-6 px-6 pb-48">
            <!-- Header -->
            <div class="text-center mb-8 pt-4">
                <h2 class="text-xl font-black uppercase tracking-tighter text-white">Hub de <span class="text-gradient-versiani">Sorteios</span></h2>
                <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Confira suas chances e resultados.</p>
            </div>
            
            <!-- Alternador de Visão -->
            <div class="bg-[#1a1a1a] p-1 rounded-2xl flex items-center mb-8 relative border border-white/5">
                <button id="btn-hub-active" class="flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10">Sorteios</button>
                <button id="btn-hub-winners" class="flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Ganhadoras</button>
            </div>

            <!-- VIEW 1: SORTEIOS ATIVOS (DINÂMICO) -->
            <div id="hub-active-view" class="hub-view space-y-6">
                ${state.collections.raffles.map(raffle => `
                    <div class="raffle-card group h-[240px] flex flex-col" data-raffle="${raffle.title}">
                        <div class="relative h-[156px] shrink-0 overflow-hidden">
                            <img src="${raffle.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            
                            <!-- Badges -->
                            <div class="absolute top-4 left-4 flex gap-2">
                                ${raffle.status === 'future' 
                                    ? `<span class="px-3 py-1 bg-[#320075] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Em Breve</span>`
                                    : `<span class="px-3 py-1 bg-[#f085aa] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Realizado</span>`
                                }
                            </div>
                        </div>
                        
                        <div class="p-4 flex-1 flex flex-col justify-center">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="text-base font-black text-white uppercase leading-none tracking-tighter">${raffle.title}</h3>
                                    <p class="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-2">
                                        ${raffle.status === 'future' ? 'Início das vendas em breve' : (raffle.status === 'finished' ? '' : 'Você está participando!')}
                                    </p>
                                </div>
                                <div class="text-right">
                                    <span class="text-[7px] font-black text-gray-500 uppercase tracking-widest block mb-1">Resultado em</span>
                                    <span class="text-base font-black text-white tracking-tighter">${raffle.date}</span>
                                </div>
                            </div>

                            ${raffle.status !== 'future' && raffle.status !== 'finished' ? `
                                <div class="bg-white/5 rounded-2xl p-4 flex items-center justify-between border border-white/5">
                                    <div class="flex items-center gap-3">
                                        <div class="w-10 h-10 rounded-full bg-[#f085aa]/10 flex items-center justify-center">
                                            <span class="material-symbols-outlined text-[#f085aa] text-xl">confirmation_number</span>
                                        </div>
                                        <div>
                                            <p class="text-[10px] font-black text-white uppercase tracking-tight">Você possui</p>
                                            <p class="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Números da sorte</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-2xl font-black text-white">${raffle.numbers}</span>
                                        <span class="material-symbols-outlined text-gray-600 text-sm">chevron_right</span>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- VIEW 2: GANHADORAS (DESIGN EQUILIBRADO) -->
            <div id="hub-winners-view" class="hub-view hidden space-y-4">
                ${state.collections.winners.map(winner => `
                    <div class="bg-[#121212] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl relative">
                        <!-- Top Badge -->
                        <div class="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#f085aa]/10 flex items-center justify-center border border-[#f085aa]/20">
                            <span class="material-symbols-outlined text-[#f085aa] text-lg">workspace_premium</span>
                        </div>

                        <div class="p-6 md:p-8">
                            <!-- Header Info -->
                            <div class="mb-5">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1 block">${winner.category}</span>
                                <h4 class="text-xl font-black text-white uppercase tracking-tighter mb-0.5">${winner.name}</h4>
                                <p class="text-xs font-black text-white tracking-widest opacity-80">${winner.secondary}</p>
                            </div>

                            <div class="w-full h-px bg-white/5 mb-5"></div>

                            <!-- Grid Info -->
                            <div class="grid grid-cols-2 gap-6 mb-6">
                                <div>
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1 block">N. da Sorte</span>
                                    <span class="text-lg font-black text-[#f085aa] tracking-tight">${winner.luckyNumber}</span>
                                </div>
                                <div>
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1 block">CPF</span>
                                    <span class="text-sm font-black text-white tracking-tighter">${winner.cpf}</span>
                                </div>
                            </div>

                            <!-- Location -->
                            <div class="mb-6">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1 block">Localização</span>
                                <div class="flex items-center gap-1.5">
                                    <span class="material-symbols-outlined text-[#f085aa] text-base">location_on</span>
                                    <span class="text-xs font-black text-white uppercase tracking-tight">${winner.location}</span>
                                </div>
                            </div>

                            <!-- Prize Box -->
                            <div class="bg-white/5 rounded-2xl p-4 border border-white/5">
                                <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Prêmio</span>
                                <p class="text-xs font-black text-white uppercase leading-tight tracking-tight">${winner.prize}</p>
                            </div>
                        </div>

                        <!-- Footer Result -->
                        <div class="bg-white/[0.02] px-6 py-3 flex items-center gap-2 border-t border-white/5">
                            <span class="material-symbols-outlined text-[#22c55e] text-base">check_circle</span>
                            <span class="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">Resultado em ${winner.date}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    init: (state) => {
        setupHubLogic(state);
    }
};

function setupHubLogic(state) {
    const btnActive = document.getElementById('btn-hub-active');
    const btnWinners = document.getElementById('btn-hub-winners');
    const viewActive = document.getElementById('hub-active-view');
    const viewWinners = document.getElementById('hub-winners-view');

    btnActive?.addEventListener('click', () => {
        btnActive.className = "flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        btnWinners.className = "flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        viewActive.classList.remove('hidden');
        viewWinners.classList.add('hidden');
    });

    btnWinners?.addEventListener('click', () => {
        btnWinners.className = "flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        btnActive.className = "flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        viewWinners.classList.remove('hidden');
        viewActive.classList.add('hidden');
    });

    // Lógica de clique nos cards
    document.querySelectorAll('.raffle-card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-raffle');
            if(!name) return;
            Swal.fire({
                title: `<span class="text-sm uppercase font-black tracking-tighter">Sorteio: ${name}</span>`,
                html: `
                    <div class="mt-4 space-y-3">
                        <p class="text-[10px] uppercase font-bold text-gray-400 mb-4">Seus números da sorte:</p>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black text-[#f085aa]">127157560</span>
                            <span class="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black text-[#f085aa]">127157561</span>
                        </div>
                    </div>
                `,
                background: '#121212',
                color: '#fff',
                showConfirmButton: false,
                showCloseButton: true,
                customClass: {
                    popup: 'rounded-[2.5rem] border border-white/10',
                    closeButton: 'text-white'
                }
            });
        });
    });
}
