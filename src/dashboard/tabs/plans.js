/**
 * Módulo da Aba Planos (+ Benefícios)
 */

export default {
    render: (state) => {
        const currentLevel = state.user.level.toLowerCase();

        // Definição dos dados dos planos
        const allPlans = [
            {
                id: 'bronze',
                name: 'PLANO BRONZE',
                points: 20,
                extras: '0 NÚMEROS DA SORTE',
                price: '0',
                colorClasses: 'from-[#1a1a1a] to-[#0a0a0a]',
                borderClasses: 'from-white/20 to-transparent',
                accentColor: '#f085aa',
                btnText: 'Assinar',
                icon: 'monetization_on'
            },
            {
                id: 'prata',
                name: 'PLANO PRATA',
                points: 60,
                extras: '03 NÚMEROS DA SORTE',
                price: '50',
                colorClasses: 'from-[#1a1a1a] to-[#0d0d0d]',
                borderClasses: 'from-gray-300 via-gray-600 to-gray-400',
                accentColor: '#9ca3af',
                btnText: 'Adicionar',
                icon: 'add'
            },
            {
                id: 'ouro',
                name: 'PLANO OURO',
                points: 200,
                extras: '10 NÚMEROS DA SORTE',
                price: '140',
                colorClasses: 'from-[#1c160a] to-[#0a0804]',
                borderClasses: 'from-yellow-200 via-yellow-600 to-amber-500',
                accentColor: '#fbbf24',
                btnText: 'Adicionar',
                icon: 'rocket_launch'
            }
        ];

        const currentPlan = allPlans.find(p => p.id === currentLevel) || allPlans[0];
        const otherPlans = allPlans.filter(p => p.id !== currentLevel);

        return `
            <div id="tab-plans" class="tab-pane animate-fade px-6 space-y-6 pt-4 pb-32">
                <div id="plans-main-view" class="space-y-6 lg:max-w-4xl lg:mx-auto w-full">
                    <div class="text-center mb-6 pt-4 lg:pt-12">
                        <h2 class="text-xl font-black uppercase tracking-tighter text-white">Benefícios <span class="text-[#f085aa]">Elite</span></h2>
                        <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Sua jornada no clube.</p>
                    </div>

                    <!-- CARD STATUS ATUAL -->
                    <div class="relative group overflow-hidden bg-gradient-to-br ${currentPlan.borderClasses} rounded-[2rem] p-[1px] shadow-2xl mb-4">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                        <div class="relative bg-[#111] rounded-[2rem] p-4 h-full overflow-hidden">
                            <div class="absolute -right-10 -top-10 w-40 h-40 bg-[${currentPlan.accentColor}]/10 rounded-full blur-[60px]"></div>

                            <div class="relative z-10">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="max-w-full">
                                        <span class="text-[7px] font-black text-white/20 uppercase tracking-[0.4em] mb-1.5 block">Status do Assinante</span>
                                        <h4 class="text-2xl font-black text-white tracking-tighter uppercase leading-none whitespace-nowrap">${currentPlan.name}</h4>
                                        <div class="flex items-center gap-3 mt-2">
                                            <div class="flex items-center gap-1">
                                                <span class="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                                                <span class="text-[8px] font-black text-green-400 uppercase tracking-widest">Ativa</span>
                                            </div>
                                            <div class="w-px h-2 bg-white/10"></div>
                                            <div class="flex items-center gap-1 text-white/30">
                                                <span class="material-symbols-outlined text-[10px]">schedule</span>
                                                <span class="text-[8px] font-black uppercase tracking-widest">Renova em 24d</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pt-4 border-t border-white/5 flex items-center gap-6">
                                    <div class="flex items-center gap-3">
                                        <div class="w-9 h-9 rounded-xl bg-[#f085aa]/10 border border-[#f085aa]/20 flex items-center justify-center text-[#f085aa] shadow-[0_0_10px_rgba(240,133,170,0.2)]">
                                            <span class="material-symbols-outlined text-lg">monetization_on</span>
                                        </div>
                                        <div>
                                            <p class="text-base font-black text-white leading-none">${state.user.level.toLowerCase() === 'bronze' ? '20' : (state.user.level.toLowerCase() === 'prata' ? '60' : '200')} PONTOS</p>
                                            <p class="text-[7px] font-black text-[#f085aa] uppercase tracking-[0.2em] mt-0.5">Saldo Mensal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="h-px bg-white/5 mb-8"></div>

                    <h3 class="text-[13px] font-black uppercase tracking-widest mb-6 px-2 text-white/50 text-center">Planos Disponíveis:</h3>

                    <!-- LISTA DINÂMICA DE OUTROS PLANOS -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        ${otherPlans.map(plan => `
                            <div class="relative group overflow-hidden bg-gradient-to-br ${plan.borderClasses} rounded-[2.5rem] p-[1.5px] shadow-2xl transition-all duration-700 hover:-translate-y-2 flex flex-col">
                                <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                                <div class="relative bg-gradient-to-b ${plan.colorClasses} rounded-[2.5rem] p-6 h-full overflow-hidden flex flex-col">
                                    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                                    
                                    <div class="relative z-10 flex-1">
                                        <div class="flex justify-between items-center mb-5">
                                            <div>
                                                <h4 class="text-3xl font-black text-white tracking-tighter uppercase leading-none bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">${plan.name}</h4>
                                            </div>
                                        </div>

                                        <div class="space-y-3 mb-6">
                                            <div class="flex items-center gap-4 py-2 border-b border-white/5">
                                                <div class="w-2 h-2 rounded-full bg-[${plan.accentColor}] shadow-[0_0_10px_${plan.accentColor}] shrink-0"></div>
                                                <p class="text-[12px] font-black text-white/90 uppercase">${plan.extras}</p>
                                            </div>
                                            <div class="flex items-center gap-4 py-2 border-b border-white/5">
                                                <div class="w-2 h-2 rounded-full bg-[${plan.accentColor}] shadow-[0_0_10px_${plan.accentColor}] shrink-0"></div>
                                                <p class="text-[12px] font-black text-white/90 uppercase">${plan.points} PONTOS</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative z-10 flex flex-col gap-4 mt-auto border-t border-white/5 pt-4">
                                        <div class="flex flex-col">
                                            <span class="text-[7px] font-black text-white/30 uppercase tracking-widest mb-1">Investimento</span>
                                            <div class="flex items-baseline gap-0.5">
                                                <span class="text-xs font-black text-white/40 mr-1">R$</span>
                                                <span class="text-4xl font-black text-white tracking-tighter">${plan.price}</span>
                                                <span class="text-[10px] font-bold text-white/30 lowercase ml-0.5">/mês</span>
                                            </div>
                                        </div>
                                        <button class="btn-upgrade-trigger h-12 w-full justify-center bg-gradient-to-b ${plan.id === 'ouro' ? 'from-yellow-300 via-yellow-500 to-amber-600' : 'from-white to-gray-300'} text-black text-[11px] font-black uppercase rounded-2xl shadow-xl active:scale-95 transition-all flex items-center gap-2 group/btn mt-2" 
                                                data-plan="${plan.id}" 
                                                data-price="${plan.price}" 
                                                data-name="${plan.id === 'prata' ? 'Prata' : (plan.id === 'ouro' ? 'Ouro' : 'Bronze')}">
                                            <span class="btn-text">${plan.btnText}</span>
                                            <span class="material-symbols-outlined text-sm font-bold group-hover/btn:translate-x-1 transition-transform">${plan.icon}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- VIEW DE CHECKOUT -->
                <div id="plans-upgrade-view" class="hidden animate-fade-up lg:max-w-xl lg:mx-auto w-full">
                    <!-- Conteúdo dinâmico via JS -->
                </div>
            </div>
        `;
    },

    init: (state) => {
        const plansMainView = document.getElementById('plans-main-view');
        const upgradeView = document.getElementById('plans-upgrade-view');

        const showCheckout = (planName, price) => {
            if (!plansMainView || !upgradeView) return;

            plansMainView.classList.add('hidden');
            upgradeView.classList.remove('hidden');
            window.scrollTo(0, 0);

            let selectedMethod = null;

            const renderStepSelection = () => {
                upgradeView.innerHTML = `
                    <div class="-mt-6 space-y-2 pb-32">
                        <button id="btn-back-plans" class="flex items-center gap-2 text-gray-500 font-black text-[10px] uppercase tracking-widest pt-2">
                            <span class="material-symbols-outlined text-sm">arrow_back</span>
                            Voltar
                        </button>

                        <div class="text-center">
                            <h2 class="text-xl font-black text-white uppercase tracking-tighter leading-tight">Escolha como <br>Pagar seu Upgrade</h2>
                        </div>

                        <!-- CARD RESUMO -->
                        <div class="bg-[#111] rounded-3xl p-5 border border-white/5 shadow-2xl relative overflow-hidden">
                            <div class="absolute -right-20 -top-20 w-40 h-40 bg-[#f085aa]/10 rounded-full blur-[60px]"></div>
                            <div class="relative z-10 space-y-4">
                                <div class="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span class="text-[9px] font-black text-gray-500 uppercase tracking-widest">Upgrade Para</span>
                                    <span class="text-xs font-black text-white uppercase tracking-tight">PLANO ${planName.toUpperCase()}</span>
                                </div>
                                <div class="pt-2 flex justify-between items-end">
                                    <div class="flex flex-col gap-1">
                                        <p class="text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">Total do Investimento</p>
                                        <div class="flex items-baseline gap-1">
                                            <span class="text-[14px] font-black text-white/60 tracking-tight">R$</span>
                                            <span class="text-4xl font-black text-white tracking-tighter leading-none">${price},00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SELEÇÃO DE PAGAMENTO -->
                        <div class="space-y-2 pt-4">
                            <p class="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] ml-2 mb-2">Selecione o Método:</p>
                            
                            <div class="payment-method-opt group flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-2xl cursor-pointer transition-all active:scale-[0.98] opacity-60" data-method="pix">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-[#32bcad]/10 flex items-center justify-center text-[#32bcad] border border-[#32bcad]/20 group-hover:bg-[#32bcad]/20 transition-colors">
                                        <span class="material-symbols-outlined text-xl">pix</span>
                                    </div>
                                    <div>
                                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight">Pagamento via Pix</h4>
                                        <p class="text-[7px] font-black text-gray-500 uppercase tracking-widest mt-0.5">Liberação Instantânea</p>
                                    </div>
                                </div>
                                <div class="w-5 h-5 rounded-full border-2 border-white/10 flex items-center justify-center"></div>
                            </div>

                            <div class="payment-method-opt group flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-2xl cursor-pointer transition-all active:scale-[0.98] opacity-60" data-method="card">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <span class="material-symbols-outlined text-xl">credit_card</span>
                                    </div>
                                    <div>
                                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight">Cartão de Crédito</h4>
                                        <p class="text-[7px] font-black text-gray-500 uppercase tracking-widest mt-0.5">Até 12x no cartão</p>
                                    </div>
                                </div>
                                <div class="w-5 h-5 rounded-full border-2 border-white/10 flex items-center justify-center"></div>
                            </div>
                        </div>

                        <div class="pt-6 space-y-4">
                            <button id="btn-next-upgrade" class="w-full py-6 bg-white/5 text-white/20 font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] transition-all pointer-events-none border border-white/5">
                                AVANÇAR
                            </button>
                            <p class="text-[8px] text-gray-500 text-center font-bold uppercase tracking-widest">Transação segura e criptografada</p>
                        </div>
                    </div>
                `;

                // Lógica de seleção visual
                document.querySelectorAll('.payment-method-opt').forEach(opt => {
                    opt.addEventListener('click', () => {
                        selectedMethod = opt.dataset.method;
                        document.querySelectorAll('.payment-method-opt').forEach(o => {
                            o.classList.remove('border-[#f085aa]', 'border-2');
                            o.classList.add('border-white/5', 'opacity-60');
                            o.querySelector('.rounded-full.border-2').innerHTML = '';
                            o.querySelector('.rounded-full.border-2').classList.replace('border-[#f085aa]', 'border-white/10');
                        });
                        opt.classList.add('border-[#f085aa]', 'border-2');
                        opt.classList.remove('border-white/5', 'opacity-60');
                        opt.querySelector('.rounded-full.border-2').classList.replace('border-white/10', 'border-[#f085aa]');
                        opt.querySelector('.rounded-full.border-2').innerHTML = '<div class="w-3 h-3 rounded-full bg-[#f085aa]"></div>';

                        const nextBtn = document.getElementById('btn-next-upgrade');
                        nextBtn.classList.remove('bg-white/5', 'text-white/20', 'pointer-events-none', 'border-white/5');
                        nextBtn.classList.add('bg-gradient-to-tr', 'from-[#f085aa]', 'to-[#320075]', 'text-white', 'shadow-xl', 'active:scale-95');
                    });
                });

                document.getElementById('btn-back-plans')?.addEventListener('click', () => {
                    upgradeView.classList.add('hidden');
                    plansMainView.classList.remove('hidden');
                });

                document.getElementById('btn-next-upgrade')?.addEventListener('click', () => {
                    if (selectedMethod === 'pix') renderPixView();
                    else if (selectedMethod === 'card') renderCardView();
                });
            };

            const renderPixView = () => {
                upgradeView.innerHTML = `
                    <div class="-mt-6 space-y-4 pb-32 animate-fade-left text-center">
                        <button id="btn-back-selection" class="flex items-center gap-2 text-gray-500 font-black text-[10px] uppercase tracking-widest pt-2">
                            <span class="material-symbols-outlined text-sm">arrow_back</span>
                            Voltar
                        </button>
                        <div class="pt-2">
                            <h2 class="text-xl font-black text-white uppercase tracking-tight">Pagamento via Pix</h2>
                            <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] px-8 mt-1">Escaneie o QR Code ou copie o código abaixo</p>
                        </div>
                        <div class="bg-white p-4 rounded-[2.5rem] mx-auto w-48 h-48 shadow-2xl flex items-center justify-center">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=versiani-upgrade" class="w-full h-full">
                        </div>
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4 mx-2 flex items-center justify-between">
                            <div class="text-left overflow-hidden">
                                <p class="text-[7px] text-gray-600 font-black uppercase mb-1">Pix Copia e Cola</p>
                                <p class="text-[9px] text-white font-mono truncate w-40">00020126580014br.gov.bcb.pix0136...</p>
                            </div>
                            <button class="w-10 h-10 bg-[#f085aa] rounded-xl flex items-center justify-center text-white active:scale-90 transition-all shadow-lg">
                                <span class="material-symbols-outlined text-lg">content_copy</span>
                            </button>
                        </div>
                        <button id="btn-finish-pix" class="w-full py-6 bg-gradient-to-tr from-[#f085aa] to-[#320075] text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                            Já realizei o pagamento
                        </button>
                    </div>
                `;
                document.getElementById('btn-back-selection')?.addEventListener('click', renderStepSelection);
                document.getElementById('btn-finish-pix')?.addEventListener('click', renderSuccessView);
            };

            const renderCardView = () => {
                upgradeView.innerHTML = `
                    <div class="-mt-6 space-y-6 pb-32 animate-fade-left">
                        <button id="btn-back-selection" class="flex items-center gap-2 text-gray-500 font-black text-[10px] uppercase tracking-widest pt-2">
                            <span class="material-symbols-outlined text-sm">arrow_back</span>
                            Voltar
                        </button>
                        <div class="text-center">
                            <h2 class="text-xl font-black text-white uppercase tracking-tight">Cartão de Crédito</h2>
                            <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-2">Insira os dados para upgrade</p>
                        </div>
                        <div class="bg-[#111] border border-white/10 rounded-[2rem] p-6 space-y-4">
                            <div class="space-y-1">
                                <label class="text-[8px] text-gray-500 font-black uppercase tracking-widest ml-1">Número do Cartão</label>
                                <input type="text" placeholder="0000 0000 0000 0000" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-xs outline-none focus:border-[#f085aa]">
                            </div>
                            <div class="grid grid-cols-2 gap-4">
                                <div class="space-y-1">
                                    <label class="text-[8px] text-gray-500 font-black uppercase tracking-widest ml-1">Validade</label>
                                    <input type="text" placeholder="MM/AA" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-xs outline-none focus:border-[#f085aa]">
                                </div>
                                <div class="space-y-1">
                                    <label class="text-[8px] text-gray-500 font-black uppercase tracking-widest ml-1">CVV</label>
                                    <input type="text" placeholder="000" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white text-xs outline-none focus:border-[#f085aa]">
                                </div>
                            </div>
                        </div>
                        <button id="btn-finish-card" class="w-full py-6 bg-gradient-to-tr from-[#f085aa] to-[#320075] text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                            Confirmar Upgrade
                        </button>
                    </div>
                `;
                document.getElementById('btn-back-selection')?.addEventListener('click', renderStepSelection);
                document.getElementById('btn-finish-card')?.addEventListener('click', renderSuccessView);
            };

            const renderSuccessView = () => {
                state.user.level = planName.toLowerCase();
                const newPoints = planName === 'Prata' ? 60 : (planName === 'Ouro' ? 200 : 20);
                state.user.points = newPoints;

                upgradeView.innerHTML = `
                    <div class="flex flex-col items-center justify-center min-h-[400px] text-center space-y-8 animate-fade">
                        <div class="relative w-32 h-32">
                            <div class="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                            <div class="relative w-32 h-32 bg-green-500 rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl">
                                <span class="material-symbols-outlined text-white text-6xl">verified</span>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Sucesso!</h2>
                            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-8 leading-relaxed">Você agora é ${planName.toUpperCase()}.</p>
                        </div>
                        <button id="btn-finish-upgrade" class="px-12 py-5 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                            Ver meus Benefícios
                        </button>
                    </div>
                `;
                document.getElementById('btn-finish-upgrade')?.addEventListener('click', () => {
                    import('../main.js').then(m => {
                        m.updatePointsUI();
                        m.switchTab('plans');
                    });
                });
            };

            renderStepSelection();
        };

        // Event delegation para os botões de upgrade dinâmicos
        document.querySelectorAll('.btn-upgrade-trigger').forEach(btn => {
            btn.addEventListener('click', () => {
                showCheckout(btn.dataset.name, btn.dataset.price);
            });
        });
    }
};
