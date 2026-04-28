export default {
    render: (state) => {
        const raffle = state.collections.raffles.find(r => r.title.includes('Salvatore')) || state.collections.raffles[0];
        
        return `
        <div id="tab-raffle-purchase" class="tab-pane animate-fade bg-black min-h-screen pb-12 relative overflow-x-hidden">
            <!-- Header Fixo (Sempre visível) -->
            <div id="purchase-hero-container" class="relative h-[280px] w-full overflow-hidden">
                <img id="purchase-hero-img" src="${raffle?.image || 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1920&auto=format'}" class="w-full h-full object-cover transition-all duration-700" style="object-position: center 65%;">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                
                <button id="btn-purchase-back" class="absolute top-6 left-6 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 active:scale-95 transition-all z-50">
                    <span class="material-symbols-outlined text-white text-xl">arrow_back</span>
                </button>

                <div class="absolute bottom-8 left-8 right-8 z-20 transition-all" id="purchase-header-info">
                    <span class="px-3 py-1 bg-[#f085aa] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg mb-3 inline-block">Checkout Premium</span>
                    <h1 class="text-3xl font-black text-white uppercase tracking-tighter leading-none">${raffle?.title || 'Salvatore Ferragamo'}</h1>
                </div>
            </div>

            <!-- CONTAINER DE PASSOS -->
            <div id="purchase-steps-container" class="px-6 -mt-6 relative z-30">
                <div class="bg-[#0a0a0a] rounded-t-[2.5rem] pt-10 min-h-[500px]">
                    
                    <!-- PASSO 1: SELEÇÃO -->
                    <div id="step-selection" class="purchase-step space-y-8 animate-fade">
                        <div class="text-center">
                            <h2 class="text-xl font-black text-white uppercase tracking-tight">Escolha seus <span class="text-[#f085aa]">Números</span></h2>
                            <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Quanto mais números, mais chances de ganhar</p>
                        </div>

                        <div class="space-y-3">
                            <div class="package-option group bg-white/5 border border-white/5 rounded-3xl p-5 flex items-center justify-between cursor-pointer active:scale-95 transition-all hover:bg-white/10" data-amount="1" data-price="5">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-[#f085aa]/50 transition-colors">
                                        <span class="text-lg font-black text-white">01</span>
                                    </div>
                                    <div>
                                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight">01 Número</h4>
                                        <p class="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Sorteio Avulso</p>
                                    </div>
                                </div>
                                <span class="text-sm font-black text-white">R$ 5,00</span>
                            </div>

                            <div class="package-option group relative bg-white/5 border border-[#f085aa]/30 rounded-3xl p-5 flex items-center justify-between cursor-pointer active:scale-95 transition-all hover:bg-white/10" data-amount="10" data-price="40">
                                <div class="absolute -top-2 right-6 px-3 py-1 bg-[#f085aa] text-white text-[7px] font-black uppercase rounded-full tracking-widest shadow-lg">Popular</div>
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-[#f085aa]/20 rounded-2xl flex items-center justify-center border border-[#f085aa]/30 group-hover:border-[#f085aa]/50 transition-colors">
                                        <span class="text-lg font-black text-[#f085aa]">10</span>
                                    </div>
                                    <div>
                                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight">10 Números</h4>
                                        <p class="text-[8px] text-[#f085aa] font-bold uppercase tracking-widest">Economize 20%</p>
                                    </div>
                                </div>
                                <span class="text-sm font-black text-white">R$ 40,00</span>
                            </div>

                            <div class="package-option group bg-white/5 border border-white/5 rounded-3xl p-5 flex items-center justify-between cursor-pointer active:scale-95 transition-all hover:bg-white/10" data-amount="50" data-price="150">
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 bg-[#320075]/40 rounded-2xl flex items-center justify-center border border-[#320075]/60 group-hover:border-[#f085aa]/50 transition-colors">
                                        <span class="text-lg font-black text-white">50</span>
                                    </div>
                                    <div>
                                        <h4 class="text-[11px] font-black text-white uppercase tracking-tight">50 Números</h4>
                                        <p class="text-[8px] text-[#320075] font-black uppercase tracking-widest">Economize 40%</p>
                                    </div>
                                </div>
                                <span class="text-sm font-black text-white">R$ 150,00</span>
                            </div>
                        </div>

                        <div class="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 space-y-6">
                            <p class="text-[9px] text-center text-gray-500 font-bold uppercase tracking-[0.2em]">Personalizar quantidade</p>
                            <div class="flex items-center justify-center gap-6">
                                <button id="btn-minus" class="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center active:scale-90 transition-all"><span class="material-symbols-outlined text-white">remove</span></button>
                                <div class="text-center min-w-[80px]">
                                    <span id="custom-val" class="text-4xl font-black text-white tracking-tighter">05</span>
                                    <p class="text-[8px] text-[#f085aa] font-black uppercase tracking-widest mt-1">Números</p>
                                </div>
                                <button id="btn-plus" class="w-14 h-14 bg-[#f085aa] rounded-2xl flex items-center justify-center active:scale-90 transition-all"><span class="material-symbols-outlined text-white">add</span></button>
                            </div>
                            <button id="btn-go-to-checkout" class="w-full py-5 bg-white text-black text-[10px] font-black uppercase rounded-2xl tracking-[0.2em] active:scale-95 transition-all shadow-xl">
                                Comprar <span id="custom-price-label">R$ 25,00</span>
                            </button>
                        </div>
                    </div>

                    <!-- PASSO 2: CHECKOUT (FORMA DE PAGAMENTO) -->
                    <div id="step-checkout" class="purchase-step hidden space-y-8 animate-fade">
                        <div class="text-center">
                            <h2 class="text-xl font-black text-white uppercase tracking-tight">Forma de <span class="text-[#f085aa]">Pagamento</span></h2>
                            <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-2">Escolha como deseja concluir sua compra</p>
                        </div>

                        <div class="bg-white/5 border border-white/5 rounded-3xl p-6 flex justify-between items-center mx-2">
                            <div>
                                <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">Total a pagar</p>
                                <h3 id="checkout-total-label" class="text-2xl font-black text-white tracking-tighter">R$ 40,00</h3>
                            </div>
                            <div class="text-right">
                                <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">Quantidade</p>
                                <h3 id="checkout-amount-label" class="text-lg font-black text-[#f085aa] tracking-tight">10 Números</h3>
                            </div>
                        </div>

                        <div class="grid grid-cols-3 gap-3 px-2">
                            <!-- PIX -->
                            <div class="payment-method-card group relative p-4 bg-white/5 border-2 border-[#f085aa] rounded-3xl flex flex-col items-center justify-center min-h-[100px] cursor-pointer transition-all active:scale-95" data-method="pix">
                                <span class="text-sm font-black text-white uppercase tracking-[0.2em]">Pix</span>
                            </div>

                            <!-- CARD -->
                            <div class="payment-method-card group relative p-4 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center min-h-[100px] cursor-pointer transition-all active:scale-95 opacity-60" data-method="card">
                                <span class="text-sm font-black text-white uppercase tracking-[0.2em]">Cartão</span>
                            </div>

                            <!-- WALLET -->
                            <div class="payment-method-card group relative p-4 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center min-h-[100px] cursor-pointer transition-all active:scale-95 opacity-60" data-method="wallet">
                                <span class="text-sm font-black text-white uppercase tracking-[0.2em]">Saldo</span>
                            </div>
                        </div>

                        <!-- Detalhes Dinâmicos do Pagamento -->
                        <div id="payment-method-details" class="px-2 animate-fade">
                            <div class="p-5 bg-white/5 border border-white/10 rounded-3xl text-center">
                                <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">O QR Code do Pix será gerado no próximo passo</p>
                            </div>
                        </div>

                        <button id="btn-confirm-payment" class="w-full py-6 text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-2xl"
                            style="background: linear-gradient(135deg, #f085aa 0%, #320075 100%);">
                            Finalizar Pagamento
                        </button>
                    </div>

                    <!-- PASSO 3: TELA DE PIX -->
                    <div id="step-pix" class="purchase-step hidden space-y-8 animate-fade text-center">
                        <div class="w-20 h-20 bg-[#32bcad]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[#32bcad]/20">
                            <span class="material-symbols-outlined text-[#32bcad] text-4xl">pix</span>
                        </div>
                        <h2 class="text-2xl font-black text-white uppercase tracking-tight">Quase lá!</h2>
                        <p class="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] px-10">Escaneie o QR Code abaixo para concluir sua participação</p>
                        
                        <div class="bg-white p-6 rounded-[3rem] mx-auto w-64 h-64 shadow-2xl flex items-center justify-center border-8 border-white/5">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=versiani-payment" class="w-full h-full">
                        </div>

                        <div class="bg-white/5 border border-white/10 rounded-3xl p-5 mx-4 flex items-center justify-between">
                            <div class="text-left overflow-hidden">
                                <p class="text-[8px] text-gray-600 font-black uppercase mb-1">Pix Copia e Cola</p>
                                <p class="text-[10px] text-white font-mono truncate w-40">00020126580014br.gov.bcb.pix0136...</p>
                            </div>
                            <button class="w-12 h-12 bg-[#f085aa] rounded-2xl flex items-center justify-center text-white active:scale-90 transition-all">
                                <span class="material-symbols-outlined">content_copy</span>
                            </button>
                        </div>

                        <div class="px-4">
                            <button id="btn-pix-confirm" class="w-full py-6 bg-white text-black font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                                Já realizei o pagamento
                            </button>
                        </div>
                    </div>

                    <!-- PASSO 4: SUCESSO -->
                    <div id="step-success" class="purchase-step hidden space-y-10 animate-fade text-center py-10 pb-32">
                        <div class="relative mx-auto w-32 h-32">
                            <div class="absolute inset-0 bg-[#f085aa]/20 rounded-full animate-ping"></div>
                            <div class="relative w-32 h-32 bg-gradient-to-tr from-[#f085aa] to-[#320075] rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl">
                                <span class="material-symbols-outlined text-white text-6xl">verified</span>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Boa Sorte!</h2>
                            <p id="success-msg" class="text-xs text-gray-500 font-bold uppercase tracking-widest px-10 leading-relaxed">Sua participação foi confirmada com sucesso. Seus números já estão no seu perfil.</p>
                        </div>

                        <div class="px-8 space-y-4">
                            <button id="btn-success-view" class="w-full py-6 bg-[#f085aa] text-white font-black rounded-[2rem] text-xs uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                                Ver meus números
                            </button>
                            <button id="btn-success-home" class="w-full py-4 text-gray-500 font-black text-[10px] uppercase tracking-widest">
                                Voltar para o início
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
        let customAmount = 5;
        let selectedAmount = 5;
        let selectedPrice = 25;
        let selectedMethod = 'pix';
        const PRICE_PER_UNIT = 5;

        const steps = {
            selection: document.getElementById('step-selection'),
            checkout: document.getElementById('step-checkout'),
            pix: document.getElementById('step-pix'),
            success: document.getElementById('step-success')
        };

        const switchStep = (stepId) => {
            Object.values(steps).forEach(s => s?.classList.add('hidden'));
            steps[stepId]?.classList.remove('hidden');
            currentStep = stepId;
            window.scrollTo(0, 0);

            // Ajusta hero dependendo do passo
            const hero = document.getElementById('purchase-hero-img');
            const heroContainer = document.getElementById('purchase-hero-container');
            const headerInfo = document.getElementById('purchase-header-info');
            const backBtn = document.getElementById('btn-purchase-back');
            const mainContainer = document.getElementById('tab-raffle-purchase');

            if (stepId === 'success') {
                if (heroContainer) heroContainer.style.display = 'none';
                headerInfo.style.opacity = '0';
                if (backBtn) backBtn.style.display = 'none';
                if (mainContainer) {
                    mainContainer.style.overflow = 'hidden';
                    mainContainer.style.height = '100vh';
                }
            } else {
                if (heroContainer) heroContainer.style.display = 'block';
                hero.style.height = '280px';
                hero.style.filter = 'none';
                headerInfo.style.opacity = '1';
                if (backBtn) backBtn.style.display = 'flex';
                if (mainContainer) {
                    mainContainer.style.overflow = 'auto';
                    mainContainer.style.height = 'auto';
                }
            }
        };

        // Lógica de +/- 
        const updateCustom = () => {
            const display = document.getElementById('custom-val');
            const priceLabel = document.getElementById('custom-price-label');
            if (display) display.innerText = customAmount.toString().padStart(2, '0');
            if (priceLabel) priceLabel.innerText = `R$ ${(customAmount * PRICE_PER_UNIT).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            selectedAmount = customAmount;
            selectedPrice = customAmount * PRICE_PER_UNIT;
        };

        document.getElementById('btn-minus')?.addEventListener('click', () => {
            if (customAmount > 1) { customAmount--; updateCustom(); }
        });
        document.getElementById('btn-plus')?.addEventListener('click', () => {
            customAmount++; updateCustom();
        });

        // Clique nos Pacotes
        document.querySelectorAll('.package-option').forEach(card => {
            card.addEventListener('click', () => {
                selectedAmount = parseInt(card.dataset.amount);
                selectedPrice = parseFloat(card.dataset.price);
                
                document.getElementById('checkout-total-label').innerText = `R$ ${selectedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
                document.getElementById('checkout-amount-label').innerText = `${selectedAmount} Números`;
                switchStep('checkout');
            });
        });

        document.getElementById('btn-go-to-checkout')?.addEventListener('click', () => {
            document.getElementById('checkout-total-label').innerText = `R$ ${selectedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
            document.getElementById('checkout-amount-label').innerText = `${selectedAmount} Números`;
            switchStep('checkout');
        });

        // Função para atualizar os detalhes do método selecionado
        const updatePaymentDetails = () => {
            const detailsContainer = document.getElementById('payment-method-details');
            if (!detailsContainer) return;

            if (selectedMethod === 'pix') {
                detailsContainer.innerHTML = `
                    <div class="p-5 bg-white/5 border border-white/10 rounded-3xl text-center animate-fade">
                        <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">O QR Code do Pix será gerado no próximo passo</p>
                    </div>
                `;
            } else if (selectedMethod === 'card') {
                detailsContainer.innerHTML = `
                    <div class="p-6 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 animate-fade">
                        <div class="space-y-2">
                            <label class="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-1">Número do Cartão</label>
                            <input type="text" placeholder="0000 0000 0000 0000" class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-[#f085aa] outline-none transition-all">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-1">Validade</label>
                                <input type="text" placeholder="MM/AA" class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-[#f085aa] outline-none">
                            </div>
                            <div class="space-y-2">
                                <label class="text-[9px] text-gray-500 font-black uppercase tracking-widest ml-1">CVV</label>
                                <input type="text" placeholder="000" class="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm focus:border-[#f085aa] outline-none">
                            </div>
                        </div>
                    </div>
                `;
            } else if (selectedMethod === 'wallet') {
                const balance = state.user.wallet;
                const after = balance - selectedPrice;
                detailsContainer.innerHTML = `
                    <div class="p-6 bg-white/5 border border-white/10 rounded-[2rem] space-y-4 animate-fade">
                        <div class="flex justify-between items-center px-2">
                            <span class="text-[10px] text-gray-500 font-black uppercase">Saldo Atual</span>
                            <span class="text-sm font-black text-white">R$ ${balance.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                        </div>
                        <div class="h-px bg-white/5"></div>
                        <div class="flex justify-between items-center px-2">
                            <span class="text-[10px] text-gray-500 font-black uppercase">Saldo Após Compra</span>
                            <span class="text-sm font-black ${after >= 0 ? 'text-green-500' : 'text-red-500'}">R$ ${after.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</span>
                        </div>
                        ${after < 0 ? '<p class="text-[9px] text-red-500 font-bold uppercase text-center mt-2">Saldo Insuficiente</p>' : ''}
                    </div>
                `;
            }
        };

        // Seleção de Método de Pagamento
        document.querySelectorAll('.payment-method-card').forEach(card => {
            card.addEventListener('click', () => {
                selectedMethod = card.dataset.method;
                
                // Atualiza Visual dos Cards
                document.querySelectorAll('.payment-method-card').forEach(c => {
                    c.className = "payment-method-card group relative p-4 bg-white/5 border border-white/5 rounded-3xl flex flex-col items-center justify-center min-h-[100px] cursor-pointer transition-all active:scale-95 opacity-60";
                });
                
                card.className = "payment-method-card group relative p-4 bg-white/5 border-2 border-[#f085aa] rounded-3xl flex flex-col items-center justify-center min-h-[100px] cursor-pointer transition-all active:scale-95";

                updatePaymentDetails();
            });
        });

        // Chama inicialmente
        updatePaymentDetails();

        document.getElementById('btn-confirm-payment')?.addEventListener('click', () => {
            if (selectedMethod === 'pix') switchStep('pix');
            else {
                // Simulação simples de sucesso para outros métodos por enquanto
                switchStep('success');
            }
        });

        document.getElementById('btn-pix-confirm')?.addEventListener('click', () => {
            switchStep('success');
        });

        // Finalização
        document.getElementById('btn-success-view')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('hub'));
            setTimeout(() => document.getElementById('btn-hub-numbers')?.click(), 100);
        });

        document.getElementById('btn-success-home')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('home'));
        });

        document.getElementById('btn-purchase-back')?.addEventListener('click', () => {
            if (currentStep === 'selection') import('../main.js').then(m => m.switchTab('home'));
            else if (currentStep === 'checkout') switchStep('selection');
            else if (currentStep === 'pix') switchStep('checkout');
            else import('../main.js').then(m => m.switchTab('home'));
        });
    }
};
