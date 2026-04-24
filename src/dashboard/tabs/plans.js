/**
 * Módulo da Aba Planos (+ Benefícios)
 */

export default {
    render: (state) => `
        <div id="tab-plans" class="tab-pane animate-fade px-6 space-y-6 pt-4 pb-32">
            <div class="text-center mb-6">
                <h2 class="text-xl font-black uppercase tracking-tighter text-white">Benefícios <span class="text-[#f085aa]">Elite</span></h2>
                <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1 italic">Sua jornada no clube.</p>
            </div>

            <!-- CARD STATUS ATUAL -->
            <div class="relative h-32 rounded-[2rem] bg-gradient-to-br from-gray-200/10 to-gray-400/20 border border-white/5 p-6 overflow-hidden mb-8">
                <div class="relative z-10 flex justify-between items-center h-full">
                    <div>
                        <p class="text-[7px] font-black text-white/40 uppercase tracking-widest">Nível de Membro</p>
                        <h4 class="text-lg font-black text-white tracking-widest mt-1">PLANO ${state.user.level.toUpperCase()}</h4>
                    </div>
                    <div class="text-right">
                        <span class="text-[7px] font-black text-[#f085aa] bg-[#f085aa]/10 px-2 py-1 rounded uppercase">Ativo</span>
                    </div>
                </div>
                <div class="absolute -right-4 -bottom-4 opacity-5">
                    <span class="material-symbols-outlined text-[80px] text-white">auto_awesome</span>
                </div>
            </div>

            <div class="h-px bg-white/5 mb-8"></div>

            <h3 class="text-[13px] font-black uppercase tracking-widest mb-6 px-2 text-white/50 text-center">Turbine seus Benefícios:</h3>

            <!-- PACOTE 1: PLANO OURO MODULAR -->
            <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                <div class="h-40 bg-gradient-to-br from-yellow-400 to-amber-600 p-8 flex items-center justify-between relative overflow-hidden">
                    <div class="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    <div class="relative z-10 text-white">
                        <h4 class="text-2xl font-black leading-none italic uppercase">Plano <br>OURO</h4>
                        <p class="text-[9px] font-bold uppercase mt-3 bg-black/20 inline-block px-2 py-1 rounded leading-none">Status Máximo</p>
                    </div>
                    <span class="material-symbols-outlined text-white text-7xl opacity-20 relative z-10">workspace_premium</span>
                </div>
                <div class="p-6">
                    <h5 class="text-[13px] font-black text-black uppercase mb-1">Versiani Ouro Individual</h5>
                    <p class="text-[10px] text-gray-400 font-medium leading-tight">A experiência completa com sorteios e mimos.</p>
                    
                    <div class="mt-6 space-y-3 pt-6 border-t border-gray-100">
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center">
                                <span class="material-symbols-outlined text-orange-400 text-[14px]">confirmation_number</span>
                            </div>
                            <span class="text-[10px] font-bold text-gray-700">01 Número da Sorte Extra</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="w-6 h-6 rounded-lg bg-sky-50 flex items-center justify-center">
                                <span class="material-symbols-outlined text-sky-400 text-[14px]">monetization_on</span>
                            </div>
                            <span class="text-[10px] font-bold text-gray-700">20 Créditos para trocar no Lojão</span>
                        </div>
                    </div>

                    <div class="mt-8 flex items-center justify-between">
                        <div class="flex flex-col">
                            <span class="text-[8px] font-black text-gray-300 uppercase">Valor Mensal</span>
                            <span class="text-lg font-black text-black">R$ 89,90</span>
                        </div>
                        <button class="px-8 py-3.5 bg-[#f085aa] text-white text-[10px] font-black uppercase rounded-full shadow-lg active:scale-95 transition-all">+ ADICIONAR</button>
                    </div>
                </div>
            </div>

            <!-- PACOTE 2: CRÉDITOS AVULSOS -->
            <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100">
                <div class="p-6 flex items-center gap-5">
                    <div class="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-500 flex flex-col items-center justify-center text-white shadow-lg">
                        <span class="text-xl font-black leading-none">50</span>
                        <span class="text-[7px] font-black uppercase opacity-70">Créditos</span>
                    </div>
                    <div class="flex-1">
                        <h5 class="text-[12px] font-black text-black uppercase leading-tight">50 Créditos valem R$ 50,00</h5>
                        <p class="text-[9px] text-gray-400 font-medium mt-1 uppercase tracking-tight">Vá direto ao ponto e resgate seu mimo hoje.</p>
                        <div class="mt-3 flex items-center justify-between">
                            <span class="text-xs font-black text-black">R$ 50,00</span>
                            <button class="px-5 py-2 bg-black text-white text-[8px] font-black uppercase rounded-full">+ Adicionar</button>
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
