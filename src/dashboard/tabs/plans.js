/**
 * Módulo da Aba Planos (+ Benefícios)
 */

export default {
    render: (state) => `
        <div id="tab-plans" class="tab-pane animate-fade px-6 space-y-6 pt-4 pb-32">
            <div class="text-center mb-6">
                <h2 class="text-xl font-black uppercase tracking-tighter text-white">Benefícios <span class="text-[#f085aa]">Elite</span></h2>
                <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Sua jornada no clube.</p>
            </div>

            <!-- CARD STATUS ATUAL: BRONZE -->
            <div class="relative group overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[2.5rem] p-[1px] shadow-2xl mb-8">
                <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                <div class="relative bg-[#111] rounded-[2.5rem] p-6 h-full overflow-hidden">
                    <!-- Mesh Gradient Decor -->
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#f085aa]/20 rounded-full blur-[60px]"></div>
                    <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-sky-500/10 rounded-full blur-[60px]"></div>

                    <div class="relative z-10">
                        <div class="flex justify-between items-start mb-6">
                            <div class="max-w-full">
                                <span class="text-[8px] font-black text-white/30 uppercase tracking-[0.4em] mb-2 block">Status do Assinante</span>
                                <h4 class="text-3xl font-black text-white tracking-tighter uppercase leading-none whitespace-nowrap">Plano ${state.user.level.toUpperCase()}</h4>
                                <div class="flex items-center gap-2 mt-3">
                                    <span class="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    <span class="text-[9px] font-black text-green-400 uppercase tracking-widest">Assinatura Ativa</span>
                                </div>
                            </div>
                        </div>

                        <div class="pt-6 border-t border-white/5 flex items-center gap-6">
                            <div class="flex items-center gap-3">
                                <div class="w-10 h-10 rounded-2xl bg-[#f085aa]/10 border border-[#f085aa]/20 flex items-center justify-center text-[#f085aa] shadow-[0_0_15px_rgba(240,133,170,0.2)]">
                                    <span class="material-symbols-outlined text-xl">monetization_on</span>
                                </div>
                                <div>
                                    <p class="text-lg font-black text-white leading-none">20 PONTOS</p>
                                    <p class="text-[8px] font-black text-[#f085aa] uppercase tracking-[0.2em] mt-0.5">Saldo Mensal Ativo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="h-px bg-white/5 mb-8"></div>

            <h3 class="text-[13px] font-black uppercase tracking-widest mb-6 px-2 text-white/50 text-center">Turbine seus Benefícios:</h3>

            <!-- PLANO 2: PRATA (ULTRA PREMIUM) -->
            <div class="relative group overflow-hidden bg-gradient-to-br from-gray-300 via-gray-600 to-gray-400 rounded-[2.5rem] p-[1.5px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:-translate-y-2">
                <!-- Metallic Shimmer Effect -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                
                <div class="relative bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[2.5rem] p-6 h-full overflow-hidden">
                    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-gray-400/10 rounded-full blur-[70px]"></div>
                    
                    <div class="relative z-10">
                        <div class="flex justify-between items-center mb-5">
                            <div>
                                <h4 class="text-3xl font-black text-white tracking-tighter uppercase leading-none bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">PLANO PRATA</h4>
                            </div>
                        </div>

                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-4 py-2 border-b border-white/5">
                                <div class="w-2 h-2 rounded-full bg-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.5)]"></div>
                                <p class="text-[12px] font-black text-white/90 uppercase">03 NÚMEROS EXTRAS</p>
                            </div>
                            <div class="flex items-center gap-4 py-2 border-b border-white/5">
                                <div class="w-2 h-2 rounded-full bg-gray-400 shadow-[0_0_10px_rgba(156,163,175,0.5)]"></div>
                                <p class="text-[12px] font-black text-white/90 uppercase">60 PONTOS</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <div class="flex flex-col">
                                <span class="text-[7px] font-black text-gray-600 uppercase tracking-widest mb-1">Investimento</span>
                                <div class="flex items-baseline">
                                    <span class="text-xs font-black text-gray-500 mr-1">R$</span>
                                    <span class="text-4xl font-black text-white tracking-tighter">50</span>
                                    <span class="text-xs font-black text-gray-500">,00</span>
                                </div>
                            </div>
                            <button class="h-12 px-8 bg-gradient-to-b from-white to-gray-300 text-black text-[11px] font-black uppercase rounded-2xl shadow-[0_10px_20px_rgba(255,255,255,0.1)] active:scale-95 transition-all flex items-center gap-2">
                                <span>Adicionar</span>
                                <span class="material-symbols-outlined text-sm font-bold">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- PLANO 3: OURO (ULTRA PREMIUM) -->
            <div class="relative group overflow-hidden bg-gradient-to-br from-yellow-200 via-yellow-600 to-amber-500 rounded-[2.5rem] p-[1.5px] shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-700 hover:-translate-y-2">
                <!-- Metallic Shimmer Effect -->
                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-200/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                
                <div class="relative bg-gradient-to-b from-[#1c160a] to-[#0a0804] rounded-[2.5rem] p-6 h-full overflow-hidden">
                    <div class="absolute inset-0 opacity-5 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-yellow-600/10 rounded-full blur-[70px]"></div>
                    
                    <div class="relative z-10">
                        <div class="flex justify-between items-center mb-5">
                            <div>
                                <h4 class="text-3xl font-black text-white tracking-tighter uppercase leading-none bg-gradient-to-b from-yellow-200 to-yellow-600 bg-clip-text text-transparent">PLANO OURO</h4>
                            </div>
                        </div>

                        <div class="space-y-3 mb-6">
                            <div class="flex items-center gap-4 py-2 border-b border-yellow-500/5">
                                <div class="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
                                <p class="text-[12px] font-black text-white/90 uppercase">10 NÚMEROS EXTRAS</p>
                            </div>
                            <div class="flex items-center gap-4 py-2 border-b border-yellow-500/5">
                                <div class="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10_rgba(245,158,11,0.8)]"></div>
                                <p class="text-[12px] font-black text-white/90 uppercase">200 PONTOS</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mt-8">
                            <div class="flex flex-col">
                                <span class="text-[7px] font-black text-yellow-700 uppercase tracking-widest mb-1">Investimento</span>
                                <div class="flex items-baseline">
                                    <span class="text-xs font-black text-yellow-700 mr-1">R$</span>
                                    <span class="text-4xl font-black text-white tracking-tighter">140</span>
                                    <span class="text-xs font-black text-yellow-700">,00</span>
                                </div>
                            </div>
                            <button class="h-12 px-8 bg-gradient-to-b from-yellow-300 via-yellow-500 to-amber-600 text-black text-[11px] font-black uppercase rounded-2xl shadow-[0_10px_20px_rgba(245,158,11,0.2)] active:scale-95 transition-all flex items-center gap-2">
                                <span>Adicionar</span>
                                <span class="material-symbols-outlined text-sm font-bold">rocket_launch</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    init: (state) => {
        // Lógica de compra será integrada aqui
    }
};
