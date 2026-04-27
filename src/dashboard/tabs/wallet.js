/**
 * Módulo da Aba Carteira (Grandiosa)
 * Página centralizada para gestão de saldo, pontos e recargas.
 */

export default {
    render: (state) => `
        <div id="tab-wallet" class="tab-pane animate-fade space-y-8 pb-40">
            <!-- Header Minimalista -->
            <div class="px-6 pt-4 flex items-center justify-between">
                <button id="btn-wallet-back" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 active:scale-95 transition-all">
                    <span class="material-symbols-outlined text-white text-xl">arrow_back</span>
                </button>
                <h2 class="text-[10px] font-black text-white uppercase tracking-[0.3em]">Minha Carteira</h2>
                <div class="w-10"></div> <!-- Spacer -->
            </div>

            <!-- Hero Financeiro (Grandioso) -->
            <div class="px-6 text-center py-6">
                <p class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Saldo Total Disponível</p>
                <div class="flex items-center justify-center gap-1 mb-2">
                    <span class="text-2xl font-black text-white/30 tracking-tighter mt-2">R$</span>
                    <h1 class="text-6xl font-black text-white tracking-tighter">${state.user.wallet.toLocaleString('pt-BR', { minimumFractionDigits: 2 }).split(',')[0]}<span class="text-3xl text-white/50">,${state.user.wallet.toLocaleString('pt-BR', { minimumFractionDigits: 2 }).split(',')[1]}</span></h1>
                </div>
                <div class="inline-flex items-center gap-2 px-4 py-2 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full">
                    <div class="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-pulse"></div>
                    <span class="text-[9px] font-black text-[#22c55e] uppercase tracking-widest">Conta Protegida</span>
                </div>
            </div>

            <!-- Dashboard de Pontos Elite -->
            <div class="px-6">
                <div class="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#f085aa]/5 rounded-full blur-3xl"></div>
                    <div class="relative z-10 flex justify-between items-center">
                        <div>
                            <p class="text-[9px] font-black text-[#f085aa] uppercase tracking-[0.2em] mb-2">Pontos Elite</p>
                            <div class="flex items-baseline gap-2">
                                <span class="text-4xl font-black text-white tracking-tighter">${state.user.points.toLocaleString('pt-BR')}</span>
                                <span class="text-[10px] font-black text-gray-500 uppercase">pts</span>
                            </div>
                        </div>
                        <button class="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-white text-[9px] font-black uppercase tracking-widest active:scale-95 transition-all">Trocar por Créditos</button>
                    </div>
                </div>
            </div>

            <!-- Central de Recarga (Ações Rápidas) -->
            <div class="px-6 space-y-4">
                <h3 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-4 mb-4">Serviços Financeiros</h3>
                
                <div class="grid grid-cols-2 gap-4">
                    <!-- Pix -->
                    <div class="bg-white/5 border border-white/5 rounded-3xl p-6 transition-all active:scale-95 cursor-pointer hover:bg-white/10">
                        <div class="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center border border-cyan-500/20 mb-4">
                            <span class="material-symbols-outlined text-cyan-500 text-2xl">pix</span>
                        </div>
                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight mb-1">Recarregar via PIX</h4>
                        <p class="text-[9px] text-gray-500 font-bold uppercase">Instantâneo</p>
                    </div>

                    <!-- Cartão -->
                    <div class="bg-white/5 border border-white/5 rounded-3xl p-6 transition-all active:scale-95 cursor-pointer hover:bg-white/10">
                        <div class="w-12 h-12 bg-[#f085aa]/10 rounded-2xl flex items-center justify-center border border-[#f085aa]/20 mb-4">
                            <span class="material-symbols-outlined text-[#f085aa] text-2xl">credit_card</span>
                        </div>
                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight mb-1">Cartão de Crédito</h4>
                        <p class="text-[9px] text-gray-500 font-bold uppercase">Até 12x</p>
                    </div>

                    <!-- Resgate -->
                    <div class="bg-white/5 border border-white/5 rounded-3xl p-6 transition-all active:scale-95 cursor-pointer hover:bg-white/10">
                        <div class="w-12 h-12 bg-[#320075]/20 rounded-2xl flex items-center justify-center border border-[#320075]/40 mb-4">
                            <span class="material-symbols-outlined text-[#320075] text-2xl">payments</span>
                        </div>
                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight mb-1">Solicitar Resgate</h4>
                        <p class="text-[9px] text-gray-500 font-bold uppercase">Saldo Disponível</p>
                    </div>

                    <!-- Extrato -->
                    <div class="bg-white/5 border border-white/5 rounded-3xl p-6 transition-all active:scale-95 cursor-pointer hover:bg-white/10">
                        <div class="w-12 h-12 bg-gray-500/10 rounded-2xl flex items-center justify-center border border-gray-500/20 mb-4">
                            <span class="material-symbols-outlined text-gray-400 text-2xl">history_edu</span>
                        </div>
                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight mb-1">Ver Extrato</h4>
                        <p class="text-[9px] text-gray-500 font-bold uppercase">Toda atividade</p>
                    </div>
                </div>
            </div>

            <!-- Últimas Transações -->
            <div class="px-6 mt-12">
                <div class="flex justify-between items-center mb-6 px-4">
                    <h3 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Últimas Movimentações</h3>
                    <button class="text-[9px] font-black text-[#f085aa] uppercase tracking-widest">Ver Tudo</button>
                </div>
                
                <div class="space-y-3">
                    <div class="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-[#22c55e]/10 rounded-xl flex items-center justify-center border border-[#22c55e]/20">
                                <span class="material-symbols-outlined text-[#22c55e] text-lg">add</span>
                            </div>
                            <div>
                                <h4 class="text-[10px] font-black text-white uppercase">Recarga via PIX</h4>
                                <p class="text-[8px] text-gray-500 font-bold uppercase">Hoje às 10:45</p>
                            </div>
                        </div>
                        <span class="text-sm font-black text-[#22c55e]">+ R$ 500,00</span>
                    </div>

                    <div class="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 bg-[#ef4444]/10 rounded-xl flex items-center justify-center border border-[#ef4444]/20">
                                <span class="material-symbols-outlined text-[#ef4444] text-lg">remove</span>
                            </div>
                            <div>
                                <h4 class="text-[10px] font-black text-white uppercase">Compra de Números</h4>
                                <p class="text-[8px] text-gray-500 font-bold uppercase">Ontem às 18:20</p>
                            </div>
                        </div>
                        <span class="text-sm font-black text-white">- R$ 150,00</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    init: (state) => {
        document.getElementById('btn-wallet-back')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('home'));
        });
    }
};
