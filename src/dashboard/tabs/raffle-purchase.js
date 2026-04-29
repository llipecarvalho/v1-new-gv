export default {
    render: (state) => {
        const raffle = state.collections.raffles.find(r => r.title.includes('Salvatore')) || state.collections.raffles[0];
        
        return `
        <div id="tab-raffle-purchase" class="tab-pane animate-fade bg-black min-h-screen pb-12 relative overflow-x-hidden">
            <!-- Header Fixo (Destaque) -->
            <div id="purchase-hero-container" class="relative h-[250px] w-full overflow-hidden">
                <img id="purchase-hero-img" src="${raffle?.image || 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1920&auto=format'}" class="w-full h-full object-cover" style="object-position: center 65%;">
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
                    
                    <!-- PASSO 1: SELEÇÃO SLIM -->
                    <div id="step-selection" class="purchase-step space-y-4 animate-fade">
                        <div class="text-center mb-2">
                            <h2 class="text-lg font-black text-white uppercase tracking-tight">Escolha a <span class="text-[#f085aa]">Quantidade</span></h2>
                            <p class="text-[8px] text-gray-500 font-bold uppercase tracking-[0.2em]">R$ 20,00 por número</p>
                        </div>

                        <!-- Grade de Botões Compactos (Pedido do João) -->
                        <div class="grid grid-cols-5 gap-2 px-2">
                            <button class="qty-btn h-12 bg-white/5 border border-white/5 rounded-xl text-sm font-black text-white transition-all active:scale-90" data-amount="1">1</button>
                            <button class="qty-btn h-12 bg-white/5 border border-white/5 rounded-xl text-sm font-black text-white transition-all active:scale-90" data-amount="5">5</button>
                            <button class="qty-btn h-12 bg-[#f085aa]/20 border-2 border-[#f085aa] rounded-xl text-sm font-black text-[#f085aa] transition-all active:scale-90 shadow-[0_0_15px_rgba(240,133,170,0.2)]" data-amount="10">10</button>
                            <button class="qty-btn h-12 bg-white/5 border border-white/5 rounded-xl text-sm font-black text-white transition-all active:scale-90" data-amount="50">50</button>
                            <button class="qty-btn h-12 bg-white/5 border border-white/5 rounded-xl text-sm font-black text-white transition-all active:scale-90" data-amount="100">100</button>
                        </div>

                        <!-- ÁREA PERSONALIZADA COMPACTA -->
                        <div class="bg-white/5 border border-white/5 rounded-2xl p-4 text-center mx-2">
                            <div class="flex items-center justify-between gap-4">
                                <div class="flex items-center gap-3">
                                    <button id="btn-minus" class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all">
                                        <span class="material-symbols-outlined text-xs">remove</span>
                                    </button>
                                    <div class="text-center min-w-[30px]">
                                        <span id="custom-amount" class="text-xl font-black text-white leading-none">05</span>
                                    </div>
                                    <button id="btn-plus" class="w-8 h-8 rounded-lg bg-[#f085aa] flex items-center justify-center text-white shadow-lg active:scale-90 transition-all">
                                        <span class="material-symbols-outlined text-xs">add</span>
                                    </button>
                                </div>
                                <div class="h-8 w-px bg-white/10"></div>
                                <button id="btn-buy-custom" class="flex-1 py-3 bg-white text-black text-[10px] font-black uppercase rounded-xl shadow-2xl active:scale-[0.98] transition-all tracking-tight">Comprar R$ 100,00</button>
                            </div>
                        </div>
                    </div>

                    <!-- PASSO 2: CHECKOUT (SEM SALDO - ULTRA COMPACTO) -->
                    <div id="step-checkout" class="purchase-step space-y-3 animate-fade hidden px-2">
                        <!-- RESUMO SLIM -->
                        <div class="bg-[#111] border border-white/5 rounded-2xl p-3 flex justify-between items-center relative overflow-hidden">
                            <div class="absolute -right-10 -top-10 w-20 h-20 bg-[#f085aa]/5 rounded-full blur-2xl"></div>
                            <div class="relative z-10">
                                <p class="text-[6px] font-black text-gray-600 uppercase tracking-[0.2em] mb-0.5">Total a Pagar</p>
                                <h3 class="text-xl font-black text-white tracking-tighter">R$ <span id="checkout-total">0,00</span></h3>
                            </div>
                            <div class="relative z-10 text-right">
                                <p class="text-[6px] font-black text-gray-600 uppercase tracking-[0.2em] mb-0.5">Quantidade</p>
                                <h4 class="text-[11px] font-black text-[#f085aa] uppercase tracking-tighter"><span id="checkout-amount">0</span> Números</h4>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-2 mt-2">
                            <!-- PIX -->
                            <div class="payment-method-card group relative p-3 bg-[#f085aa]/10 border-2 border-[#f085aa] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-[0_0_15px_rgba(240,133,170,0.1)]" data-method="pix">
                                <span class="material-symbols-outlined text-[#f085aa] text-lg">pix</span>
                                <span class="text-[8px] font-black text-white uppercase tracking-widest">Via Pix</span>
                            </div>

                            <!-- CARD -->
                            <div class="payment-method-card group relative p-3 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 opacity-60" data-method="card">
                                <span class="material-symbols-outlined text-white/40 text-lg">credit_card</span>
                                <span class="text-[8px] font-black text-white uppercase tracking-widest">Cartão</span>
                            </div>
                        </div>            
                        
                        <div id="payment-method-details" class="animate-fade mt-1">
                            <!-- Injetado via JS -->
                        </div>

                        <button id="btn-confirm-payment" class="w-full py-4 bg-gradient-to-tr from-[#f085aa] to-[#320075] text-white font-black rounded-xl text-[9px] uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all mt-2">
                            Finalizar Pagamento
                        </button>
                    </div>

                    <!-- PASSO 3: TELA DE PIX (ULTRA SLIM) -->
                    <div id="step-pix" class="purchase-step hidden space-y-3 animate-fade text-center pb-10">
                        <div class="pt-1">
                            <h2 class="text-lg font-black text-white uppercase tracking-tight">Pagamento via Pix</h2>
                            <p class="text-[7px] text-gray-500 font-bold uppercase tracking-[0.2em] px-8">Escaneie o QR Code abaixo</p>
                        </div>
                        <div class="bg-white p-3 rounded-[2rem] mx-auto w-36 h-36 shadow-2xl flex items-center justify-center">
                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=versiani-payment" class="w-full h-full">
                        </div>
                        <div class="bg-[#111] border border-white/10 rounded-2xl p-3 mx-6 flex items-center justify-between">
                            <div class="text-left overflow-hidden">
                                <p class="text-[6px] text-gray-600 font-black uppercase mb-0.5">Copia e Cola</p>
                                <p class="text-[8px] text-white font-mono truncate w-28">00020126580014br.gov.bcb.pix0136...</p>
                            </div>
                            <button class="w-8 h-8 bg-[#f085aa] rounded-lg flex items-center justify-center text-white active:scale-90 transition-all shadow-lg">
                                <span class="material-symbols-outlined text-base">content_copy</span>
                            </button>
                        </div>
                        <div class="px-8">
                            <button id="btn-pix-confirm" class="w-full py-4 bg-white text-black font-black rounded-[2rem] text-[9px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                                Já realizei o pagamento
                            </button>
                        </div>
                    </div>

                    <!-- PASSO 4: SUCESSO -->
                    <div id="step-success" class="purchase-step hidden space-y-8 animate-fade text-center py-10 pb-32">
                        <div class="relative mx-auto w-24 h-24">
                            <div class="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                            <div class="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center border-4 border-white/10 shadow-2xl">
                                <span class="material-symbols-outlined text-white text-4xl">verified</span>
                            </div>
                        </div>
                        <div>
                            <h2 class="text-3xl font-black text-white uppercase tracking-tighter mb-2">Boa Sorte!</h2>
                            <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-10 leading-relaxed">Sua participação foi confirmada com sucesso.</p>
                        </div>
                        <div class="px-8 space-y-4">
                            <button id="btn-success-view" class="w-full py-5 bg-[#f085aa] text-white font-black rounded-[2rem] text-[10px] uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                                Ver meus números
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
        let selectedAmount = 10;
        let selectedPrice = 200;
        let selectedMethod = 'pix';
        const PRICE_PER_UNIT = 20;

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

            const heroContainer = document.getElementById('purchase-hero-container');
            if (stepId === 'success') {
                if (heroContainer) heroContainer.style.display = 'none';
            } else {
                if (heroContainer) heroContainer.style.display = 'block';
            }
        };

        const updateCustom = () => {
            const display = document.getElementById('custom-amount');
            const buyBtn = document.getElementById('btn-buy-custom');
            if (display) display.innerText = customAmount.toString().padStart(2, '0');
            if (buyBtn) buyBtn.innerText = `Comprar R$ ${(customAmount * PRICE_PER_UNIT).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
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
                    b.className = "qty-btn h-12 bg-white/5 border border-white/5 rounded-xl text-sm font-black text-white transition-all active:scale-90";
                });
                btn.className = "qty-btn h-12 bg-[#f085aa]/20 border-2 border-[#f085aa] rounded-xl text-sm font-black text-[#f085aa] transition-all active:scale-90 shadow-[0_0_15px_rgba(240,133,170,0.2)]";
            });
        });

        document.getElementById('btn-buy-custom')?.addEventListener('click', () => {
            document.getElementById('checkout-total').innerText = selectedPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
            document.getElementById('checkout-amount').innerText = selectedAmount;
            switchStep('checkout');
        });

        const updatePaymentDetails = () => {
            const detailsContainer = document.getElementById('payment-method-details');
            if (!detailsContainer) return;

            if (selectedMethod === 'pix') {
                detailsContainer.innerHTML = `
                    <div class="p-3 bg-white/5 border border-white/10 rounded-2xl text-center animate-fade">
                        <p class="text-[8px] text-gray-500 font-bold uppercase tracking-widest">Liberação instantânea via QR Code</p>
                    </div>
                `;
            } else if (selectedMethod === 'card') {
                detailsContainer.innerHTML = `
                    <div class="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-3 animate-fade">
                        <div class="space-y-1">
                            <label class="text-[7px] text-gray-600 font-black uppercase tracking-widest ml-1">Número do Cartão</label>
                            <input type="text" placeholder="0000 0000 0000 0000" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none">
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <input type="text" placeholder="MM/AA" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none">
                            <input type="text" placeholder="CVV" class="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-xs outline-none">
                        </div>
                    </div>
                `;
            }
        };

        document.querySelectorAll('.payment-method-card').forEach(card => {
            card.addEventListener('click', () => {
                selectedMethod = card.dataset.method;
                document.querySelectorAll('.payment-method-card').forEach(c => {
                    c.className = "payment-method-card group relative p-4 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 opacity-60";
                });
                card.className = "payment-method-card group relative p-4 bg-[#f085aa]/10 border-2 border-[#f085aa] rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 shadow-[0_0_20px_rgba(240,133,170,0.1)]";
                updatePaymentDetails();
            });
        });

        document.getElementById('btn-confirm-payment')?.addEventListener('click', () => {
            if (selectedMethod === 'pix') switchStep('pix');
            else switchStep('success');
        });

        document.getElementById('btn-pix-confirm')?.addEventListener('click', () => switchStep('success'));

        document.getElementById('btn-purchase-back')?.addEventListener('click', () => {
            if (currentStep === 'selection') import('../main.js').then(m => m.switchTab('home'));
            else if (currentStep === 'checkout') switchStep('selection');
            else if (currentStep === 'pix') switchStep('checkout');
        });

        document.getElementById('btn-success-view')?.addEventListener('click', () => {
            import('../main.js').then(m => m.switchTab('hub'));
        });
    }
};
