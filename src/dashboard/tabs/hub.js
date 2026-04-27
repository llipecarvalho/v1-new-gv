/**
 * Módulo da Aba Hub (Sorteios)
 * Totalmente dinâmico consumindo dados da API centralizada.
 */

export default {
    render: (state) => `
        <div id="tab-hub" class="tab-pane animate-fade space-y-6 px-6 pb-48">
            <!-- Header -->
            <div class="text-center mb-8 pt-4">
                <h2 class="text-xl font-black uppercase tracking-tighter text-white">Sorteios</h2>
                <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Acompanhe os sorteios e resultados</p>
            </div>
            
            <!-- Alternador de Visão -->
            <div class="bg-[#1a1a1a] p-1 rounded-2xl flex items-center mb-8 relative border border-white/5">
                <button id="btn-hub-active" class="flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10">Sorteios</button>
                <button id="btn-hub-numbers" class="flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Meus Números</button>
                <button id="btn-hub-winners" class="flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Ganhadoras</button>
            </div>

            <!-- VIEW 1: SORTEIOS ATIVOS (DINÂMICO) -->
            <div id="hub-active-view" class="hub-view space-y-6">
                ${state.collections.raffles.map(raffle => `
                    <div class="raffle-card group h-[390px] flex flex-col" data-raffle="${raffle.title}">
                        <div class="relative h-[300px] shrink-0 overflow-hidden">
                            <img src="${raffle.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style="object-position: center 65%;">
                            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            
                            <!-- Badges -->
                            <div class="absolute top-4 left-4 flex gap-2">
                                ${raffle.status === 'active' 
                                    ? `<span class="px-3 py-1 bg-[#22c55e] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Venda Aberta</span>`
                                    : (raffle.status === 'future' 
                                        ? `<span class="px-3 py-1 bg-[#320075] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Em Breve</span>`
                                        : `<span class="px-3 py-1 bg-[#f085aa] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Realizado</span>`
                                      )
                                }
                            </div>

                            <!-- Botão Flutuante (Apenas se ativo) -->
                            ${raffle.status === 'active' ? `
                                <button class="btn-buy-numbers absolute bottom-4 right-4 px-5 py-3 bg-[#f085aa] hover:bg-white text-white hover:text-black text-[9px] font-black uppercase rounded-full shadow-[0_10px_20px_rgba(240,133,170,0.3)] transition-all active:scale-95 flex items-center gap-2 z-20 border border-white/10" data-raffle="${raffle.title}">
                                    <span class="material-symbols-outlined text-[14px]">add_shopping_cart</span>
                                    Comprar Números
                                </button>
                            ` : ''}
                        </div>
                        
                        <div class="p-5 flex-1 flex flex-col justify-center">
                            <div class="flex justify-between items-end gap-4">
                                <div class="flex-1 min-w-0">
                                    <h3 class="text-base font-black text-white uppercase leading-none tracking-tighter truncate">${raffle.title}</h3>
                                    <p class="text-[10px] font-bold text-[#f085aa] uppercase tracking-widest mt-3">
                                        ${raffle.status === 'active' ? `${raffle.numbers} Números` : (raffle.status === 'future' ? 'Início das vendas em breve' : 'Resultado Finalizado')}
                                    </p>
                                </div>
                                <div class="text-right shrink-0">
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block opacity-50 whitespace-nowrap mb-1">Resultado em</span>
                                    <span class="text-lg font-black text-white tracking-tighter leading-none">${raffle.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- VIEW 2: MEUS NÚMEROS -->
            <div id="hub-numbers-view" class="hub-view hidden space-y-4">
                ${state.collections.raffles.filter(r => r.numbers > 0).length > 0 
                    ? state.collections.raffles.filter(r => r.numbers > 0).map(raffle => `
                        <div class="bg-[#121212] rounded-[2rem] p-6 border border-white/5 shadow-xl">
                            <div class="flex items-center justify-between mb-4">
                                <div>
                                    <h4 class="text-sm font-black text-white uppercase tracking-tight">${raffle.title}</h4>
                                    <p class="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Resultado em ${raffle.date}</p>
                                </div>
                                <div class="bg-[#f085aa]/10 px-3 py-1.5 rounded-full border border-[#f085aa]/20">
                                    <span class="text-[10px] font-black text-[#f085aa] uppercase tracking-tight">${raffle.numbers} números</span>
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-3 gap-2">
                                ${Array.from({length: raffle.numbers}).map((_, i) => `
                                    <div class="bg-white/5 border border-white/10 rounded-xl py-2 text-center">
                                        <span class="text-[10px] font-black text-white opacity-90">${127157560 + i}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')
                    : `<div class="text-center py-20">
                         <span class="material-symbols-outlined text-gray-700 text-5xl mb-4">confirmation_number</span>
                         <p class="text-xs font-black text-gray-500 uppercase tracking-widest">Você ainda não possui números.</p>
                       </div>`
                }
            </div>

            <!-- VIEW 3: GANHADORAS -->
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
    const btnNumbers = document.getElementById('btn-hub-numbers');
    const btnWinners = document.getElementById('btn-hub-winners');
    
    const viewActive = document.getElementById('hub-active-view');
    const viewNumbers = document.getElementById('hub-numbers-view');
    const viewWinners = document.getElementById('hub-winners-view');

    const setActive = (btn, view) => {
        [btnActive, btnNumbers, btnWinners].forEach(b => {
            if(b) b.className = "flex-1 py-3 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        });
        [viewActive, viewNumbers, viewWinners].forEach(v => {
            if(v) v.classList.add('hidden');
        });

        if(btn) btn.className = "flex-1 py-3 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        if(view) view.classList.remove('hidden');
    };

    btnActive?.addEventListener('click', () => setActive(btnActive, viewActive));
    btnNumbers?.addEventListener('click', () => setActive(btnNumbers, viewNumbers));
    btnWinners?.addEventListener('click', () => setActive(btnWinners, viewWinners));

    // Lógica de compra de números
    document.querySelectorAll('.btn-buy-numbers').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const raffleName = btn.getAttribute('data-raffle');
            openBuyNumbersModal(raffleName, state);
        });
    });

    // Lógica de clique nos cards (Abre modal de números)
    document.querySelectorAll('.raffle-card').forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-raffle');
            if(!name) return;
            Swal.fire({
                title: `<span class="text-sm uppercase font-black tracking-tighter">Sorteio: ${name}</span>`,
                html: `
                    <div class="mt-4 space-y-3">
                        <p class="text-[10px] uppercase font-bold text-gray-400 mb-4">Meus Números:</p>
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

function openBuyNumbersModal(raffleName, state) {
    Swal.fire({
        html: `
            <div class="text-left">
                <div class="mb-4 text-center">
                    <div class="w-12 h-12 bg-[#f085aa]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-[#f085aa]/20">
                        <span class="material-symbols-outlined text-[#f085aa] text-2xl">confirmation_number</span>
                    </div>
                    <h2 class="text-lg font-black text-white uppercase tracking-tighter leading-none">Turbine suas <span class="text-[#f085aa]">Chances</span></h2>
                    <p class="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">${raffleName}</p>
                </div>

                <div class="space-y-2">
                    <!-- Pacote 1 -->
                    <div class="buy-package-card bg-white rounded-2xl p-3 flex items-center justify-between cursor-pointer border-2 border-transparent hover:border-[#f085aa] transition-all" data-amount="1" data-price="5">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 font-black text-xs">01</div>
                            <div>
                                <h4 class="text-[10px] font-black text-black uppercase leading-none">01 Número</h4>
                                <p class="text-[7px] text-gray-400 font-bold uppercase mt-1">Sorteio Avulso</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[11px] font-black text-black">R$ 5,00</span>
                        </div>
                    </div>

                    <!-- Pacote 10 (Destaque) -->
                    <div class="buy-package-card bg-white rounded-2xl p-3 flex items-center justify-between cursor-pointer border-2 border-[#f085aa] relative shadow-lg" data-amount="10" data-price="40">
                        <div class="absolute -top-2 right-4 px-2 py-0.5 bg-[#f085aa] text-white text-[6px] font-black uppercase rounded-full tracking-widest">Popular</div>
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-[#f085aa]/10 flex items-center justify-center text-[#f085aa] font-black text-xs shadow-inner border border-[#f085aa]/10">10</div>
                            <div>
                                <h4 class="text-[10px] font-black text-black uppercase leading-none">10 Números</h4>
                                <p class="text-[7px] text-green-500 font-bold uppercase mt-1">Economize 20%</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[11px] font-black text-black">R$ 40,00</span>
                        </div>
                    </div>

                    <!-- Pacote 50 -->
                    <div class="buy-package-card bg-white rounded-2xl p-3 flex items-center justify-between cursor-pointer border-2 border-transparent hover:border-[#f085aa] transition-all" data-amount="50" data-price="150">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-xl bg-[#320075]/5 flex items-center justify-center text-[#320075] font-black text-xs">50</div>
                            <div>
                                <h4 class="text-[10px] font-black text-black uppercase leading-none">50 Números</h4>
                                <p class="text-[7px] text-green-500 font-bold uppercase mt-1">Economize 40%</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="text-[11px] font-black text-black">R$ 150,00</span>
                        </div>
                    </div>

                    <!-- Custom Selector -->
                    <div class="mt-2">
                        <div class="flex items-center justify-between mb-2 px-1">
                            <span class="text-[8px] font-black text-white/40 uppercase tracking-widest">Outra quantidade</span>
                            <span id="custom-price-display" class="text-[9px] font-black text-[#f085aa]">R$ 0,00</span>
                        </div>
                        <div class="flex items-center bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                            <input type="number" id="custom-amount-input" placeholder="Ex: 5" class="flex-1 bg-transparent border-0 text-white text-xs font-black focus:ring-0 placeholder:text-white/10 px-3 py-2.5" min="1">
                            <button id="btn-add-custom" class="px-4 self-stretch bg-white/5 text-white text-[8px] font-black uppercase border-l border-white/10 hover:bg-white/10 transition-all opacity-50 cursor-not-allowed whitespace-nowrap shrink-0" disabled>Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        `,
        background: '#0a0a0a',
        showConfirmButton: false,
        showCloseButton: true,
        backdrop: `rgba(0,0,0,1)`, // Fundo preto sólido para esconder TUDO atrás
        customClass: {
            container: 'z-[10000]', // Garante que o modal fique acima da bottom bar (z-2000)
            popup: 'rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl',
            closeButton: 'text-white'
        },
        didOpen: () => {
            const cards = document.querySelectorAll('.buy-package-card');
            const input = document.getElementById('custom-amount-input');
            const btnCustom = document.getElementById('btn-add-custom');
            const priceDisplay = document.getElementById('custom-price-display');

            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const amount = card.getAttribute('data-amount');
                    const price = card.getAttribute('data-price');
                    processPurchase(amount, price, raffleName, state);
                });
            });

            input?.addEventListener('input', (e) => {
                const val = parseInt(e.target.value);
                if(val > 0) {
                    const price = val * 5;
                    priceDisplay.textContent = `R$ ${price.toFixed(2).replace('.', ',')}`;
                    btnCustom.disabled = false;
                    btnCustom.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    priceDisplay.textContent = `R$ 0,00`;
                    btnCustom.disabled = true;
                    btnCustom.classList.add('opacity-50', 'cursor-not-allowed');
                }
            });

            btnCustom?.addEventListener('click', () => {
                const val = parseInt(input.value);
                processPurchase(val, val * 5, raffleName, state);
            });
        }
    });
}

function processPurchase(amount, price, raffleName, state) {
    // Passo 1: Confirmação de Checkout
    Swal.fire({
        html: `
            <div class="text-center">
                <div class="w-16 h-16 bg-[#f085aa]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#f085aa]/20">
                    <span class="material-symbols-outlined text-[#f085aa] text-3xl">shopping_cart_checkout</span>
                </div>
                
                <h2 class="text-xl font-black text-white uppercase tracking-tight mb-2">Resumo da Compra</h2>
                <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Confirme os detalhes antes de prosseguir</p>
                
                <div class="bg-white/5 border border-white/5 rounded-3xl p-4 mb-8 text-left">
                    <div class="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap mr-3">Quantidade</span>
                        <span class="text-xs font-black text-white whitespace-nowrap">${amount} Números</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap mr-3">Total a Pagar</span>
                        <span class="text-lg font-black text-[#f085aa] whitespace-nowrap">R$ ${parseFloat(price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                </div>

                <div class="space-y-3">
                    <button id="btn-confirm-pay" class="w-full py-5 text-white font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-[0_15px_30px_rgba(233,126,177,0.3)]"
                        style="background: linear-gradient(135deg, #e97eb1 0%, #4c1d95 100%);">
                        CONFIRMAR E PAGAR
                    </button>
                    <button onclick="Swal.close()" class="w-full py-4 text-gray-500 font-black rounded-full text-[9px] uppercase tracking-[0.2em] hover:text-white transition-all">
                        CANCELAR
                    </button>
                </div>
            </div>
        `,
        background: '#0a0a0a',
        showConfirmButton: false,
        backdrop: `rgba(0,0,0,1)`,
        customClass: {
            container: 'z-[10001]',
            popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl p-6 md:p-8'
        },
        didOpen: () => {
            document.getElementById('btn-confirm-pay').addEventListener('click', () => {
                executePayment(amount, price, raffleName, state);
            });
        }
    });
}

function executePayment(amount, price, raffleName, state) {
    Swal.fire({
        html: `
            <div class="py-10">
                <div class="mb-8 relative">
                    <div class="w-16 h-16 border-4 border-[#f085aa]/20 border-t-[#f085aa] rounded-full animate-spin mx-auto"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <div class="w-2 h-2 bg-[#f085aa] rounded-full animate-pulse"></div>
                    </div>
                </div>
                <h2 class="text-xl font-black text-white uppercase tracking-tighter mb-2">Processando...</h2>
                <p class="text-[10px] text-gray-500 font-bold uppercase tracking-widest px-8">Aguarde um momento enquanto validamos sua transação</p>
            </div>
        `,
        allowOutsideClick: false,
        showConfirmButton: false,
        background: '#0a0a0a',
        backdrop: `rgba(0,0,0,1)`,
        customClass: {
            container: 'z-[10001]',
            popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl'
        },
        didOpen: () => {
            setTimeout(() => {
                // Atualizar estado
                const raffle = state.collections.raffles.find(r => r.title === raffleName);
                if (raffle) {
                    raffle.numbers += parseInt(amount);
                }

                Swal.fire({
                    html: `
                        <div class="text-center">
                            <div class="w-20 h-20 bg-[#f085aa]/10 rounded-[30px] flex items-center justify-center mx-auto mb-8 border border-[#f085aa]/20 shadow-[0_0_30px_rgba(240,133,170,0.1)]">
                                <span class="material-symbols-outlined text-[#f085aa] text-4xl font-light">verified_user</span>
                            </div>
                            
                            <h2 class="text-2xl font-black text-white uppercase tracking-tight mb-4">Compra Concluída!</h2>
                            
                            <p class="text-[11px] text-gray-400 font-bold uppercase tracking-[0.1em] mb-10 leading-relaxed px-6">
                                Você acaba de adquirir <span class="text-white font-black">${amount} números</span> para o sorteio 
                                <br><span class="text-[#f085aa] font-black tracking-widest text-[13px] inline-block mt-2">${raffleName}</span>
                            </p>
                            
                            <div class="px-2">
                                <button onclick="document.getElementById('btn-hub-numbers')?.click(); Swal.close();" class="w-full py-5 text-white font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-[0_15px_30px_rgba(233,126,177,0.3)]"
                                    style="background: linear-gradient(135deg, #e97eb1 0%, #4c1d95 100%);">
                                    VER MEUS NÚMEROS
                                </button>
                            </div>
                        </div>
                    `,
                    background: '#0a0a0a',
                    showConfirmButton: false,
                    showCloseButton: true,
                    backdrop: `rgba(0,0,0,1)`,
                    customClass: {
                        container: 'z-[10001]',
                        popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl p-8',
                        closeButton: 'text-white'
                    }
                });
            }, 1500);
        }
    });
}
