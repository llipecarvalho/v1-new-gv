/**
 * Módulo da Aba Home
 * Restaurado para ser 100% FIEL ao dashboard2.html (V2) - Versão Final
 */

export default {
    render: (state) => `
        <div id="tab-home" class="tab-pane animate-fade space-y-8">
            <!-- Hero Section -->
            <div class="px-6 lg:px-12 xl:px-16 pt-4 lg:pt-8">
                <div class="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/5 h-[380px] lg:h-[380px]">
                    <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover lg:hidden" style="object-position: center;">
                    <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop" class="w-full h-full object-cover hidden lg:block" style="object-position: center 80%;">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                    <div class="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 right-8 lg:right-12 flex items-end justify-between">
                        <div class="max-w-[180px] lg:max-w-[300px]">
                            <p class="text-[9px] lg:text-[11px] font-black text-[#f085aa] uppercase tracking-widest mb-1 lg:mb-2">Prêmio do Mês</p>
                            <h2 class="text-xl lg:text-4xl font-black text-white uppercase leading-tight tracking-tighter">Salvatore <br>Ferragamo</h2>
                        </div>
                        <button id="btn-home-hero-quero" class="px-5 py-2.5 lg:px-8 lg:py-4 bg-white text-black text-[9px] lg:text-[11px] font-black uppercase rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all">Eu quero!</button>
                    </div>
                </div>
            </div>

            <!-- Carteira Section (Atalho) -->
            <div id="btn-home-go-to-wallet" class="px-6 lg:hidden -mb-6 relative z-20 cursor-pointer active:scale-95 transition-all">
                <div class="p-8 glass-card border border-white/10 rounded-[2.5rem] flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer shadow-2xl">
                    <div>
                        <p class="text-[10px] font-black text-[#f085aa] uppercase tracking-[0.3em] mb-3">PONTOS ACUMULADOS</p>
                        <div class="flex items-baseline gap-2">
                            <h2 class="text-4xl font-black text-white tracking-tighter points-display">${state.user.points.toLocaleString('pt-BR')}</h2>
                            <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">pts</span>
                        </div>
                    </div>
                    <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f085aa] transition-all duration-500 group-hover:rotate-[360deg] shadow-lg">
                        <span class="material-symbols-outlined text-white text-2xl font-light">redeem</span>
                    </div>
                </div>
            </div>

            <!-- Fundo Cinza Premium -->
            <section class="bg-[#f8f8fa] rounded-t-[3.5rem] lg:rounded-t-[4rem] pt-16 lg:pt-24 pb-40 min-h-screen">

                <div class="section-header lg:px-12 xl:px-16 lg:mb-8">
                    <h3 class="text-black font-black uppercase tracking-tighter lg:text-2xl">Minhas recompensas</h3>
                </div>
                
                <!-- GRID DE 4 CARDS -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 px-6 lg:px-12 xl:px-16 mb-12 lg:mb-16 lg:max-w-[1400px] mx-auto">
                    <div class="reward-card lg:h-[150px] lg:p-6 lg:hover:-translate-y-2 lg:hover:shadow-2xl">
                        <span class="text-4xl lg:text-5xl font-black text-black">08</span>
                        <p class="text-[10px] lg:text-[11px] font-bold text-black/40 uppercase tracking-tight leading-tight mt-2">cotas no <span class="block lg:inline">sorteio elite</span></p>
                    </div>
                    <div id="btn-home-go-to-wallet-desktop" class="reward-card lg:h-[150px] lg:p-6 lg:hover:-translate-y-2 lg:hover:shadow-2xl cursor-pointer group active:scale-95 transition-all">
                        <div class="flex items-center justify-between">
                            <div class="flex items-baseline gap-1">
                                <span class="text-4xl lg:text-5xl font-black text-black">${state.user.points.toLocaleString('pt-BR')}</span>
                                <span class="text-[8px] lg:text-[10px] font-black text-black/40 uppercase">pts</span>
                            </div>
                            <div class="hidden lg:flex w-10 h-10 rounded-full bg-gray-50 border border-gray-100 items-center justify-center group-hover:bg-[#f085aa] group-hover:text-white group-hover:border-[#f085aa] transition-all duration-300">
                                <span class="material-symbols-outlined text-[20px]">redeem</span>
                            </div>
                        </div>
                        <p class="text-[10px] lg:text-[11px] font-bold text-black/40 uppercase tracking-tight leading-tight mt-2">pontos para <span class="block lg:inline">resgate vip</span></p>
                    </div>
                    <div class="reward-card lg:h-[150px] lg:p-6 lg:hover:-translate-y-2 lg:hover:shadow-2xl">
                        <span class="text-4xl lg:text-5xl font-black text-black">1</span>
                        <p class="text-[10px] lg:text-[11px] font-bold text-black/40 uppercase tracking-tight leading-tight mt-2">mimo versiani <span class="block lg:inline">disponível</span></p>
                    </div>
                    <div class="reward-card lg:h-[150px] lg:p-6 lg:hover:-translate-y-2 lg:hover:shadow-2xl">
                        <span class="text-4xl lg:text-5xl font-black text-black">12</span>
                        <p class="text-[10px] lg:text-[11px] font-bold text-black/40 uppercase tracking-tight leading-tight mt-2">amigas na <span class="block lg:inline">sua rede elite</span></p>
                    </div>
                </div>

                <!-- VITRINE (MIMOS E SORTEIOS EM CARROSSEL/GRID) -->
                <div class="mt-12 lg:mt-20 px-6 lg:px-12 xl:px-16 lg:max-w-[1400px] mx-auto">
                    <div class="section-header !px-0 lg:mb-10 flex items-center justify-between">
                        <h3 class="text-black font-black uppercase tracking-tighter lg:text-2xl">Mimos e Sorteios</h3>
                        <div class="flex items-center gap-2 lg:gap-4">
                            <!-- SETAS DE NAVEGAÇÃO (Apenas Desktop) -->
                            <div class="hidden lg:flex items-center gap-2">
                                <button id="btn-home-carousel-prev" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 shadow-sm transition-all text-gray-600">
                                    <span class="material-symbols-outlined">arrow_back</span>
                                </button>
                                <button id="btn-home-carousel-next" class="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 shadow-sm transition-all text-gray-600">
                                    <span class="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                            <button id="btn-home-ver-tudo-mimos" class="btn-ver-tudo font-black lg:px-6 lg:py-2.5 lg:text-[10px] hover:bg-black/5 transition-colors !m-0">Ver Tudo</button>
                        </div>
                    </div>
                    
                    <div id="home-mimos-carousel" class="carousel-container no-scrollbar lg:gap-6 lg:scroll-smooth">
                        ${state.collections.rewards.map(item => `
                            <div class="carousel-item lg:!flex-[0_0_calc(25%-18px)]">
                                <div class="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-4 lg:p-5 shadow-xl border border-black/5 flex flex-col h-[240px] lg:h-[320px] transition-all hover:-translate-y-2 lg:hover:shadow-2xl active:scale-95 cursor-pointer">
                                    <div class="aspect-square w-full rounded-2xl lg:rounded-[1.5rem] ${item.gradient || 'bg-gray-50'} overflow-hidden flex items-center justify-center mb-3 lg:mb-5 shadow-inner">
                                        ${item.image_url 
                                            ? `<img src="${item.image_url}" class="w-full h-full object-cover lg:hover:scale-110 transition-transform duration-500">`
                                            : `<span class="material-symbols-outlined text-white text-4xl lg:text-6xl">${item.image || 'local_activity'}</span>`
                                        }
                                    </div>
                                    <div class="mt-auto">
                                        <h4 class="text-[11px] lg:text-[13px] font-black text-black uppercase mb-1 lg:mb-2 truncate">${item.name}</h4>
                                        <div class="flex items-center gap-1 mb-3 lg:mb-4">
                                            <span class="text-[11px] lg:text-[12px] font-black text-orange-500">${item.status || item.cost}</span>
                                            <span class="text-[9px] lg:text-[10px] font-black text-gray-400 uppercase">${item.type === 'coupon' ? 'CRÉDITOS' : 'SORTEIO'}</span>
                                        </div>
                                        <button class="w-full py-3 lg:py-3.5 bg-black text-white text-[9px] lg:text-[10px] font-black uppercase rounded-full lg:rounded-[1.5rem] hover:bg-gray-800 transition-colors">
                                            ${item.type === 'coupon' ? 'Resgatar' : 'Ver Detalhes'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}

                        <!-- Item Final: Ver Mais (UX Hint) -->
                        <div class="carousel-item pr-6 lg:!flex-[0_0_calc(25%-18px)] lg:pr-6">
                            <div id="btn-home-ver-mais-mimos-card" class="bg-gray-100 rounded-[2rem] lg:rounded-[2.5rem] p-4 flex flex-col items-center justify-center h-[240px] lg:h-[320px] border-2 border-dashed border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors">
                                <span class="material-symbols-outlined text-gray-400 text-3xl lg:text-4xl mb-2 lg:mb-4">add_circle</span>
                                <span class="text-[9px] lg:text-[11px] font-black text-gray-400 uppercase tracking-widest text-center">Ver todos<br>os mimos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- HALL DA FAMA (GANHADORAS) -->
                ${state.collections.winners && state.collections.winners.length > 0 ? `
                <div class="mt-12 lg:mt-24 px-6 lg:px-12 xl:px-16 lg:max-w-[1400px] mx-auto">
                    <div class="section-header !px-0 lg:mb-10 flex items-center justify-between">
                        <h3 class="text-black font-black uppercase tracking-tighter lg:text-2xl">Hall da Fama</h3>
                        <button onclick="document.getElementById('btn-nav-hub')?.click(); setTimeout(() => document.getElementById('btn-hub-winners')?.click(), 100);" class="btn-ver-tudo font-black lg:px-6 lg:py-2.5 lg:text-[10px] hover:bg-black/5 transition-colors !m-0">Ver Todas</button>
                    </div>
                    
                    <div class="flex overflow-x-auto gap-4 lg:gap-6 pb-6 snap-x snap-mandatory no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
                        ${state.collections.winners.slice(0, 5).map(winner => `
                            <div class="bg-white rounded-[2rem] lg:rounded-[2.5rem] p-5 shadow-lg border border-black/5 flex flex-col justify-between min-w-[260px] lg:min-w-[calc(33.333%-16px)] snap-start shrink-0 hover:-translate-y-2 lg:hover:shadow-xl transition-all">
                                <div>
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-10 h-10 rounded-full bg-[#f085aa]/10 flex items-center justify-center text-[#f085aa] font-black text-lg border border-[#f085aa]/20">
                                            ${winner.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 class="text-[12px] font-black text-black uppercase leading-none">${winner.name}</h4>
                                            <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">${winner.location}</span>
                                        </div>
                                    </div>
                                    <p class="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Prêmio Recebido:</p>
                                    <p class="text-[13px] font-black text-[#f085aa] uppercase tracking-tighter leading-tight">${winner.prize}</p>
                                </div>
                                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">${winner.date}</span>
                                    <span class="material-symbols-outlined text-gray-300 text-sm">verified</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}

                <!-- FOOTER BANNERS -->
                <div class="px-6 lg:px-12 xl:px-16 space-y-4 mt-12 lg:mt-24 pb-10 lg:max-w-[1400px] mx-auto">
                    <div class="bg-gray-50 rounded-3xl lg:rounded-[2.5rem] p-5 lg:p-8 flex items-center justify-between text-gray-400 border border-gray-100 shadow-sm hover:shadow-md hover:bg-white cursor-pointer transition-all">
                        <span class="text-[9px] lg:text-[11px] font-bold uppercase tracking-[0.2em] lg:tracking-[0.3em]">Dúvidas frequentes do Clube</span>
                        <span class="material-symbols-outlined lg:text-3xl">chevron_right</span>
                    </div>
                </div>
            </section>
        </div>
    `,

    init: (state) => {
        // Vincula botões de navegação
        document.getElementById('btn-home-hero-quero')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('raffle-purchase'));
        });
        document.getElementById('btn-home-ver-tudo-mimos')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('rewards'));
        });
        document.getElementById('btn-home-ver-mais-mimos-card')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('rewards'));
        });
        document.getElementById('btn-home-go-to-wallet')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('store'));
        });
        document.getElementById('btn-home-go-to-wallet-desktop')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('store'));
        });

        // Lógica das Setas do Carrossel (Desktop)
        const carousel = document.getElementById('home-mimos-carousel');
        const btnPrev = document.getElementById('btn-home-carousel-prev');
        const btnNext = document.getElementById('btn-home-carousel-next');

        if (carousel && btnPrev && btnNext) {
            btnPrev.addEventListener('click', () => {
                // Rola 304px para a esquerda (280px do card + 24px do gap)
                carousel.scrollBy({ left: -304, behavior: 'smooth' });
            });
            btnNext.addEventListener('click', () => {
                // Rola 304px para a direita
                carousel.scrollBy({ left: 304, behavior: 'smooth' });
            });
        }
    }
};
