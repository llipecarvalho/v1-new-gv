export default {
    render: (state) => {
        const raffle = state.collections.raffles.find(r => r.title.includes('Salvatore')) || state.collections.raffles[0];
        
        return `
        <div id="tab-raffle-purchase" class="tab-pane animate-fade bg-black min-h-screen pb-12 relative overflow-x-hidden">
            <!-- Header Fixo (Destaque) -->
            <div id="purchase-hero-container" class="relative h-[280px] w-full overflow-hidden bg-black">
                <img id="purchase-hero-img" src="${raffle?.image || '/src/assets/bolsa.png'}" class="w-full h-full object-cover" style="object-position: center 65%;">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <button id="btn-purchase-back" class="absolute top-4 left-4 w-9 h-9 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 active:scale-95 transition-all z-50">
                    <span class="material-symbols-outlined text-white text-lg">arrow_back</span>
                </button>

                <div class="absolute bottom-6 left-6 right-6 z-20" id="purchase-header-info">
                    <span class="px-2 py-0.5 bg-[#f085aa] text-white text-[7px] font-black uppercase rounded-full tracking-widest shadow-lg mb-2 inline-block">Checkout</span>
                    <h1 class="text-2xl font-black text-white uppercase tracking-tighter leading-none">${raffle?.title || 'Salvatore Ferragamo'}</h1>
                </div>
            </div>

            <!-- CONTAINER DE PASSOS -->
            <div id="purchase-steps-container" class="px-6 -mt-4 relative z-30">
                <div class="bg-[#0a0a0a] rounded-t-[2.5rem] pt-6 min-h-[400px]">
                    
                    <!-- PASSO 1: SELEÇÃO -->
                    <div id="step-selection" class="purchase-step animate-fade">
                        <div class="bg-white/5 border border-white/10 rounded-[2rem] p-3.5 space-y-4">
                            <!-- QUANTIDADE -->
                            <div class="space-y-3">
                                <div class="flex justify-between items-center px-1">
                                    <h3 class="text-[9px] font-black text-white uppercase tracking-widest">Escolha a <span class="text-[#f085aa]">Quantidade</span></h3>
                                </div>
                                <div class="flex justify-between gap-1.5">
                                    <button class="qty-btn flex-1 h-9 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/40 hover:text-[#f085aa] hover:bg-[#f085aa]/10 transition-all" data-amount="1">1</button>
                                    <button class="qty-btn flex-1 h-9 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/40 hover:text-[#f085aa] hover:bg-[#f085aa]/10 transition-all" data-amount="5">5</button>
                                    <button class="qty-btn flex-1 h-9 bg-[#f085aa]/20 border-2 border-[#f085aa] rounded-xl text-[10px] font-black text-[#f085aa] shadow-[0_0_10px_rgba(240,133,170,0.1)] transition-all" data-amount="10">10</button>
                                    <button class="qty-btn flex-1 h-9 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/40 hover:text-[#f085aa] hover:bg-[#f085aa]/10 transition-all" data-amount="50">50</button>
                                    <button class="qty-btn flex-1 h-9 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/40 hover:text-[#f085aa] hover:bg-[#f085aa]/10 transition-all" data-amount="100">100</button>
                                </div>
                                <div class="bg-black/40 py-2 rounded-xl border border-white/5 flex items-center justify-center gap-8">
                                    <button id="btn-minus" class="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white transition-all active:scale-75">
                                        <span class="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <div class="flex flex-col items-center">
                                        <span id="custom-amount" class="text-xl font-black text-white tracking-tighter">10</span>
                                        <span class="text-[6px] font-black text-[#f085aa] uppercase tracking-[0.3em] -mt-1">Cotas</span>
                                    </div>
                                    <button id="btn-plus" class="w-8 h-8 flex items-center justify-center text-[#f085aa] transition-all active:scale-75">
                                        <span class="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                            </div>

                            <div class="h-px bg-white/5 mx-2"></div>

                            <!-- PAGAMENTO E AÇÃO -->
                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <p class="text-[7px] font-black text-gray-600 uppercase tracking-widest ml-1">Pagamento</p>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="payment-method-card group relative p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all opacity-50" data-method="pix">
                                            <span class="material-symbols-outlined text-white/40 text-lg">pix</span>
                                            <span class="text-[8px] font-black text-white uppercase tracking-widest">Via Pix</span>
                                        </div>
                                        <div class="payment-method-card group relative p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all opacity-50" data-method="card">
                                            <span class="material-symbols-outlined text-white/40 text-lg">credit_card</span>
                                            <span class="text-[8px] font-black text-white uppercase tracking-widest">Cartão</span>
                                        </div>
                                    </div>
                                </div>

                                <button id="btn-advance" class="w-full py-4 bg-white text-black text-[10px] font-black uppercase rounded-[2rem] shadow-[0_10px_30px_rgba(255,255,255,0.1)] active:scale-[0.97] transition-all tracking-[0.2em] opacity-20 pointer-events-none">
                                    Avançar
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- PASSO 2: PIX REFINADO -->
                    <div id="step-pix" class="purchase-step hidden animate-fade">
                        <div class="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 text-center space-y-4 relative overflow-hidden">
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#f085aa]/50 to-transparent"></div>
                            
                            <div class="space-y-1">
                                <h3 class="text-xs font-black text-white uppercase tracking-[0.3em]">Pagamento via <span class="text-[#f085aa]">Pix</span></h3>
                                <p class="text-[8px] text-gray-500 font-bold uppercase">Escaneie o QR Code abaixo</p>
                            </div>

                            <div class="py-1">
                                <span class="text-2xl font-black text-[#f085aa] uppercase tracking-tighter">R$ <span id="payment-total-pix">0,00</span></span>
                            </div>

                            <!-- QR CODE -->
                            <div class="relative inline-block p-3 bg-white rounded-2xl shadow-[0_0_30px_rgba(240,133,170,0.1)]">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ClubeVersianiPix" alt="QR Code" class="w-28 h-28 opacity-90">
                            </div>

                            <!-- CÓDIGO COPIA E COLA -->
                            <div class="bg-black/40 border border-white/5 rounded-xl p-2.5 flex items-center justify-between gap-3">
                                <div class="text-left overflow-hidden">
                                    <p class="text-[8px] text-white/70 font-mono truncate w-40 uppercase">00020126580014br.gov.bcb.pix0136clubeversiani...</p>
                                </div>
                                <button id="btn-copy-pix" class="shrink-0 w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white active:scale-90 transition-all">
                                    <span class="material-symbols-outlined text-sm">content_copy</span>
                                </button>
                            </div>

                            <!-- AÇÕES -->
                            <div class="space-y-3 pt-1">
                                <button id="btn-pix-confirm" class="w-full py-3.5 bg-white text-black text-[10px] font-black uppercase rounded-xl shadow-xl active:scale-[0.97] transition-all tracking-widest">
                                    Já realizei o pagamento
                                </button>
                                
                                <button id="btn-back-pix" class="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-all">
                                    ← Voltar e alterar método
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- PASSO 3: CARTÃO REFINADO -->
                    <div id="step-card" class="purchase-step hidden animate-fade">
                        <div class="bg-white/5 border border-white/10 rounded-[2.5rem] p-6 space-y-4 relative overflow-hidden">
                            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#f085aa]/50 to-transparent"></div>
                            
                            <div class="space-y-1 text-center">
                                <h3 class="text-xs font-black text-white uppercase tracking-[0.3em]">Pagamento via <span class="text-[#f085aa]">Cartão</span></h3>
                                <p class="text-[8px] text-gray-500 font-bold uppercase">Insira os dados do seu cartão</p>
                            </div>

                            <div class="space-y-3">
                                <div class="text-center py-2 bg-white/5 rounded-xl border border-white/5">
                                    <span class="text-2xl font-black text-[#f085aa] uppercase tracking-tighter">R$ <span id="payment-total-card">0,00</span></span>
                                </div>

                                <div class="space-y-1">
                                    <label class="text-[7px] text-gray-600 font-black uppercase tracking-widest ml-1">Nome no Cartão</label>
                                    <input type="text" placeholder="NOME COMO ESTÁ NO CARTÃO" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none focus:border-[#f085aa]/50 transition-all uppercase">
                                </div>
                                <div class="space-y-1">
                                    <label class="text-[7px] text-gray-600 font-black uppercase tracking-widest ml-1">Número do Cartão</label>
                                    <input type="text" placeholder="0000 0000 0000 0000" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none focus:border-[#f085aa]/50 transition-all">
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="space-y-1">
                                        <label class="text-[7px] text-gray-600 font-black uppercase tracking-widest ml-1">Validade</label>
                                        <input type="text" placeholder="MM/AA" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none focus:border-[#f085aa]/50 transition-all">
                                    </div>
                                    <div class="space-y-1">
                                        <label class="text-[7px] text-gray-600 font-black uppercase tracking-widest ml-1">CVV</label>
                                        <input type="text" placeholder="000" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none focus:border-[#f085aa]/50 transition-all">
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-3 pt-1">
                                <button id="btn-card-confirm" class="w-full py-3.5 bg-white text-black text-[10px] font-black uppercase rounded-xl shadow-xl active:scale-[0.97] transition-all tracking-widest">
                                    Pagar Agora
                                </button>
                                <button id="btn-back-card" class="w-full text-center text-[8px] font-black text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-all">
                                    ← Voltar e alterar método
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- PASSO 4: SUCESSO -->
                    <div id="step-success" class="purchase-step hidden animate-fade">
                        <div class="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-6 text-center">
                            <div class="w-20 h-20 bg-[#f085aa]/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(240,133,170,0.2)]">
                                <span class="material-symbols-outlined text-[#f085aa] text-4xl">check_circle</span>
                            </div>
                            <div class="space-y-2">
                                <h3 class="text-lg font-black text-white uppercase tracking-tighter">Pedido Realizado!</h3>
                                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Suas cotas serão liberadas em instantes</p>
                            </div>
                            <button id="btn-success-view" class="w-full py-4 bg-white text-black text-[10px] font-black uppercase rounded-2xl shadow-xl active:scale-95 transition-all tracking-widest">
                                Ver Meus Números
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    init: (state) => {
        let currentStep = 'selection';
        let customAmount = 10;
        let selectedAmount = 10;
        let selectedPrice = 200;
        let selectedMethod = null;
        const PRICE_PER_UNIT = 20;

        const steps = {
            selection: document.getElementById('step-selection'),
            pix: document.getElementById('step-pix'),
            card: document.getElementById('step-card'),
            success: document.getElementById('step-success')
        };

        const switchStep = (stepId) => {
            Object.values(steps).forEach(s => s?.classList.add('hidden'));
            steps[stepId]?.classList.remove('hidden');
            currentStep = stepId;
            window.scrollTo(0, 0);

            const heroContainer = document.getElementById('purchase-hero-container');
            const stepsWrapper = document.getElementById('purchase-steps-container');

            if (stepId !== 'selection') {
                if (heroContainer) heroContainer.style.display = 'none';
                if (stepsWrapper) {
                    stepsWrapper.classList.remove('-mt-4');
                    stepsWrapper.classList.add('pt-12');
                }
                
                // Atualiza o total na tela de pagamento
                const totalEl = document.getElementById(`payment-total-${stepId}`);
                if (totalEl) totalEl.innerText = selectedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            } else {
                if (heroContainer) heroContainer.style.display = 'block';
                if (stepsWrapper) {
                    stepsWrapper.classList.add('-mt-4');
                    stepsWrapper.classList.remove('pt-12');
                }
            }
        };

        const updateCustom = () => {
            const display = document.getElementById('custom-amount');
            if (display) display.innerText = customAmount.toString().padStart(2, '0');
            selectedAmount = customAmount;
            selectedPrice = customAmount * PRICE_PER_UNIT;
        };

        document.getElementById('btn-minus')?.addEventListener('click', () => {
            if (customAmount > 1) { customAmount--; updateCustom(); }
        });
        document.getElementById('btn-plus')?.addEventListener('click', () => {
            customAmount++; updateCustom();
        });

        // Clique nos Botões de Quantidade (Grade) - APENAS SELECIONA
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const amount = parseInt(btn.dataset.amount);
                customAmount = amount;
                updateCustom();

                // Atualiza visual dos botões da grade
                document.querySelectorAll('.qty-btn').forEach(b => {
                    b.className = "qty-btn flex-1 h-9 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black text-white/40 hover:text-[#f085aa] hover:bg-[#f085aa]/10 transition-all";
                });
                btn.className = "qty-btn flex-1 h-9 bg-[#f085aa]/20 border-2 border-[#f085aa] rounded-xl text-[10px] font-black text-[#f085aa] shadow-[0_0_10px_rgba(240,133,170,0.1)] transition-all";
            });
        });

        document.getElementById('btn-advance')?.addEventListener('click', () => {
            if (selectedMethod === 'pix') {
                switchStep('pix');
            } else if (selectedMethod === 'card') {
                switchStep('card');
            }
        });

        const updatePaymentDetails = () => {
            // Removido pois agora as telas são em novas páginas
        };

        document.querySelectorAll('.payment-method-card').forEach(card => {
            card.addEventListener('click', () => {
                selectedMethod = card.dataset.method;
                document.querySelectorAll('.payment-method-card').forEach(c => {
                    c.className = "payment-method-card group relative p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all opacity-50";
                    // Reset icons color if needed
                    const icon = c.querySelector('.material-symbols-outlined');
                    if (icon) icon.className = "material-symbols-outlined text-white/40 text-lg";
                });
                card.className = "payment-method-card group relative p-2.5 bg-[#f085aa]/10 border-2 border-[#f085aa] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all";
                const activeIcon = card.querySelector('.material-symbols-outlined');
                if (activeIcon) activeIcon.className = "material-symbols-outlined text-[#f085aa] text-lg";

                // Habilita botão avançar
                const advanceBtn = document.getElementById('btn-advance');
                if (advanceBtn) {
                    advanceBtn.classList.remove('opacity-20', 'pointer-events-none');
                }

                updatePaymentDetails();
            });
        });

        document.getElementById('btn-confirm-payment')?.addEventListener('click', () => {
            if (selectedMethod === 'pix') switchStep('pix');
            else switchStep('success');
        });

        document.getElementById('btn-pix-confirm')?.addEventListener('click', () => {
            switchStep('success');
        });

        document.getElementById('btn-card-confirm')?.addEventListener('click', () => {
            const btn = document.getElementById('btn-card-confirm');
            const originalText = btn.innerText;
            btn.innerText = "PROCESSANDO...";
            btn.disabled = true;
            setTimeout(() => {
                switchStep('success');
                btn.innerText = originalText;
                btn.disabled = false;
            }, 2000);
        });

        document.getElementById('btn-back-card')?.addEventListener('click', () => {
            switchStep('selection');
        });

        document.getElementById('btn-back-pix')?.addEventListener('click', () => {
            switchStep('selection');
        });

        document.getElementById('btn-purchase-back')?.addEventListener('click', () => {
            if (currentStep === 'selection') import('../main.js').then(m => m.switchTab('home'));
            else switchStep('selection');
        });

        document.getElementById('btn-success-view')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('hub'));
        });
    }
};
