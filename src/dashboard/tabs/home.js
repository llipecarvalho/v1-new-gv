/**
 * Módulo da Aba Home
 * Restaurado para ser 100% FIEL ao dashboard2.html (V2) - Versão Final
 */

export default {
    render: (state) => `
        <div id="tab-home" class="tab-pane animate-fade space-y-8">
            <!-- Hero Section -->
            <div class="px-6 pt-4">
                <div class="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 h-[380px]">
                    <img src="/src/assets/bolsa.png" class="w-full h-full object-cover" style="object-position: center;">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
                    <div class="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                        <div class="max-w-[180px]">
                            <p class="text-[9px] font-black text-[#f085aa] uppercase tracking-widest mb-1">Prêmio do Mês</p>
                            <h2 class="text-xl font-black text-white uppercase leading-tight tracking-tighter">Salvatore <br>Ferragamo</h2>
                        </div>
                        <button id="btn-home-hero-quero" class="px-5 py-2.5 bg-white text-black text-[9px] font-black uppercase rounded-full shadow-lg active:scale-95 transition-all">Eu quero!</button>
                    </div>
                </div>
            </div>

            <!-- Carteira Section (Atalho) -->
            <div id="btn-home-go-to-wallet" class="px-6 -mb-6 relative z-20 cursor-pointer active:scale-95 transition-all">
                <div class="p-8 glass-card border border-white/10 rounded-[2.5rem] flex items-center justify-between group active:scale-[0.98] transition-all cursor-pointer shadow-2xl">
                    <div>
                        <p class="text-[10px] font-black text-[#f085aa] uppercase tracking-[0.3em] mb-3">PONTOS ACUMULADOS</p>
                        <div class="flex items-baseline gap-2">
                            <h2 class="text-4xl font-black text-white tracking-tighter points-display">${state.user.points.toLocaleString('pt-BR')}</h2>
                            <span class="text-sm font-bold text-gray-500 uppercase tracking-widest">pts</span>
                        </div>
                    </div>
                    <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f085aa] transition-all duration-500 group-hover:rotate-[360deg]">
                        <span class="material-symbols-outlined text-white text-2xl font-light">redeem</span>
                    </div>
                </div>
            </div>

            <!-- Fundo Cinza Premium -->
            <section class="bg-[#f8f8fa] rounded-t-[3.5rem] pt-16 pb-40 min-h-screen">
                <div class="section-header">
                    <h3 class="text-black font-black uppercase tracking-tighter">Minhas recompensas</h3>
                </div>
                
                <!-- GRID DE 4 CARDS -->
                <div class="grid grid-cols-2 gap-4 px-6 mb-12">
                    <div class="reward-card">
                        <span class="text-4xl font-black text-black">08</span>
                        <p class="text-[10px] font-bold text-black/40 uppercase tracking-tight leading-tight">cotas no <br>sorteio elite</p>
                    </div>
                    <div class="reward-card">
                        <div class="flex items-baseline gap-1">
                            <span class="text-4xl font-black text-black">${state.user.points.toLocaleString('pt-BR')}</span>
                            <span class="text-[8px] font-black text-black/40 uppercase">pts</span>
                        </div>
                        <p class="text-[10px] font-bold text-black/40 uppercase tracking-tight leading-tight">pontos para <br>resgate vip</p>
                    </div>
                    <div class="reward-card">
                        <span class="text-4xl font-black text-black">1</span>
                        <p class="text-[10px] font-bold text-black/40 uppercase tracking-tight leading-tight">mimo versiani <br>disponível</p>
                    </div>
                    <div class="reward-card">
                        <span class="text-4xl font-black text-black">12</span>
                        <p class="text-[10px] font-bold text-black/40 uppercase tracking-tight leading-tight">amigas na <br>sua rede elite</p>
                    </div>
                </div>

                <!-- VITRINE (MIMOS E SORTEIOS EM CARROSSEL) -->
                <div class="mt-12 px-6">
                    <div class="section-header !px-0">
                        <h3 class="text-black font-black uppercase tracking-tighter">Mimos e Sorteios</h3>
                        <button id="btn-home-ver-tudo-mimos" class="btn-ver-tudo font-black">Ver Tudo</button>
                    </div>
                    
                    <div class="carousel-container no-scrollbar">
                        ${state.collections.rewards.map(item => `
                            <div class="carousel-item">
                                <div class="bg-white rounded-[2rem] p-4 shadow-xl border border-black/5 flex flex-col h-[240px] transition-all active:scale-95">
                                    <div class="aspect-square w-full rounded-2xl ${item.gradient || 'bg-gray-50'} overflow-hidden flex items-center justify-center mb-3 shadow-inner">
                                        ${item.image_url 
                                            ? `<img src="${item.image_url}" class="w-full h-full object-cover">`
                                            : `<span class="material-symbols-outlined text-white text-4xl">${item.image || 'local_activity'}</span>`
                                        }
                                    </div>
                                    <div class="mt-auto">
                                        <h4 class="text-[11px] font-black text-black uppercase mb-1 truncate">${item.name}</h4>
                                        <div class="flex items-center gap-1 mb-3">
                                            <span class="text-[11px] font-black text-orange-500">${item.status || item.cost}</span>
                                            <span class="text-[9px] font-black text-gray-400 uppercase">${item.type === 'coupon' ? 'CRÉDITOS' : 'SORTEIO'}</span>
                                        </div>
                                        <button class="w-full py-3 bg-black text-white text-[9px] font-black uppercase rounded-full">
                                            ${item.type === 'coupon' ? 'Resgatar' : 'Ver Detalhes'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}

                        <!-- Item Final: Ver Mais (UX Hint) -->
                        <div class="carousel-item pr-6">
                            <div id="btn-home-ver-mais-mimos-card" class="bg-gray-100 rounded-[2rem] p-4 flex flex-col items-center justify-center h-[240px] border-2 border-dashed border-gray-200 cursor-pointer">
                                <span class="material-symbols-outlined text-gray-400 text-3xl mb-2">add_circle</span>
                                <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest text-center">Ver todos<br>os mimos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- FOOTER BANNERS -->
                <div class="px-6 space-y-4 mt-12 pb-10">
                    <div class="bg-gray-50 rounded-3xl p-5 flex items-center justify-between text-gray-400 border border-gray-100 shadow-sm">
                        <span class="text-[9px] font-bold uppercase tracking-[0.1em]">Dúvidas frequentes do Clube</span>
                        <span class="material-symbols-outlined">chevron_right</span>
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
    }
};
