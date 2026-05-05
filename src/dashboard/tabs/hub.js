/**
 * Módulo da Aba Hub (Sorteios)
 * Totalmente dinâmico consumindo dados da API centralizada.
 */

export default {
    render: (state) => `
        <div id="tab-hub" class="tab-pane animate-fade space-y-6 px-6 pb-48">
            <!-- Header -->
            <div class="text-center mb-8 pt-4 lg:pt-12">
                <h2 class="text-xl font-black uppercase tracking-tighter text-white">Meus <span class="text-gradient-versiani">Números</span></h2>
                <p class="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">Acompanhe seus sorteios e resultados</p>
            </div>
            
            <!-- Alternador de Visão -->
            <div class="bg-[#1a1a1a] p-1 rounded-2xl flex items-center mb-8 relative border border-white/5 lg:max-w-sm lg:mx-auto">
                <button id="btn-hub-active" class="flex-1 flex items-center justify-center text-center py-2 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10">Meus Números</button>
                <button id="btn-hub-winners" class="flex-1 flex items-center justify-center text-center py-2 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10">Ganhadoras</button>
            </div>

            <!-- VIEW 1: SORTEIOS ATIVOS E REALIZADOS (DINÂMICO) -->
            <div id="hub-active-view" class="hub-view space-y-12 lg:max-w-5xl lg:mx-auto">
                
                <!-- Ativos e Em Breve -->
                <div class="space-y-6">
                    ${state.collections.raffles.filter(r => r.status !== 'finished').map(raffle => `
                        <div class="raffle-card group h-[390px] lg:h-[460px] flex flex-col" data-raffle="${raffle.title}">
                            <div class="relative h-[300px] lg:h-[360px] shrink-0 overflow-hidden">
                                <img src="${raffle.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${raffle.imageDesktop ? 'lg:hidden' : ''}" style="object-position: center 65%;">
                                ${raffle.imageDesktop ? `<img src="${raffle.imageDesktop}" class="w-full h-full object-cover hidden lg:block group-hover:scale-105 transition-transform duration-700" style="object-position: center 80%;">` : ''}
                                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                
                                <!-- Badges -->
                                <div class="absolute top-4 left-4 flex gap-2">
                                    ${raffle.status === 'active' 
                                        ? `<span class="px-3 py-1 bg-[#22c55e] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Venda Aberta</span>`
                                        : `<span class="px-3 py-1 bg-[#320075] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Em Breve</span>`
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
                                            ${raffle.status === 'active' ? `2 Números` : 'Início das vendas em breve'}
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

                <!-- Realizados -->
                ${state.collections.raffles.filter(r => r.status === 'finished').length > 0 ? `
                <div>
                    <h3 class="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Sorteios Realizados</h3>
                    <div id="finished-raffles-carousel" class="carousel-container no-scrollbar lg:gap-6 lg:scroll-smooth">
                        ${state.collections.raffles.filter(r => r.status === 'finished').map(raffle => `
                            <div class="carousel-item raffle-card group bg-[#1a1a1a] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col h-[320px] lg:!flex-[0_0_calc(33.333%-(var(--carousel-gap)*0.666))] shrink-0" data-raffle="${raffle.title}">
                                <div class="relative h-[200px] shrink-0 overflow-hidden">
                                    <img src="${raffle.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" style="object-position: center;">
                                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                                    <div class="absolute top-4 left-4">
                                        <span class="px-3 py-1 bg-[#f085aa] text-white text-[8px] font-black uppercase rounded-full tracking-widest shadow-lg">Realizado</span>
                                    </div>
                                </div>
                                
                                <div class="p-5 flex-1 flex flex-col justify-between">
                                    <h3 class="text-sm font-black text-white uppercase leading-none tracking-tighter line-clamp-1">${raffle.title}</h3>
                                    <div class="flex justify-between items-end mt-2">
                                        <span class="text-[9px] font-bold text-[#f085aa] uppercase tracking-widest">Resultado<br>Finalizado</span>
                                        <div class="text-right">
                                            <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest block opacity-50 whitespace-nowrap mb-1">Data</span>
                                            <span class="text-base font-black text-white tracking-tighter leading-none">${raffle.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
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
            <div id="hub-winners-view" class="hub-view hidden lg:max-w-6xl lg:mx-auto w-full">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    ${state.collections.winners.map(winner => `
                        <div class="bg-[#121212] rounded-[2rem] overflow-hidden border border-white/5 shadow-xl relative flex flex-col h-full">
                            <!-- Top Badge -->
                            <div class="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#f085aa]/10 flex items-center justify-center border border-[#f085aa]/20">
                                <span class="material-symbols-outlined text-[#f085aa] text-lg">workspace_premium</span>
                            </div>

                            <div class="p-6 md:p-8 flex flex-col flex-1">
                                <!-- Header Info -->
                                <div class="mb-5">
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1 block">${winner.category}</span>
                                    <h4 class="text-xl font-black text-white uppercase tracking-tighter mb-0.5">${winner.name}</h4>
                                    <p class="text-xs font-black text-white tracking-widest opacity-80">${winner.secondary}</p>
                                </div>

                                <div class="w-full h-px bg-white/5 mb-5"></div>

                                <!-- Grid Info -->
                                <div class="grid grid-cols-2 gap-4 mb-6">
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
                                <div class="bg-white/5 rounded-2xl p-4 border border-white/5 mt-auto">
                                    <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Prêmio</span>
                                    <p class="text-xs font-black text-white uppercase leading-tight tracking-tight">${winner.prize}</p>
                                </div>
                            </div>

                            <!-- Footer Result -->
                            <div class="bg-white/[0.02] px-6 py-3 flex items-center gap-2 border-t border-white/5 mt-auto">
                                <span class="material-symbols-outlined text-[#22c55e] text-base">check_circle</span>
                                <span class="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">Resultado em ${winner.date}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `,

    init: (state) => {
        setupHubLogic(state);
    }
};

function setupHubLogic(state) {
    const carousel = document.getElementById('finished-raffles-carousel');
    if (carousel) {
        let autoScrollInterval;
        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                const card = carousel.firstElementChild;
                if (!card) return;
                const scrollAmount = card.offsetWidth + 24; // card width + gap
                
                // If reached the end, loop back
                if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3000); // Passa a cada 3 segundos
        };

        const stopAutoScroll = () => clearInterval(autoScrollInterval);

        startAutoScroll();
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
        carousel.addEventListener('touchstart', stopAutoScroll, {passive: true});
        carousel.addEventListener('touchend', startAutoScroll);
    }

    const btnActive = document.getElementById('btn-hub-active');
    const btnWinners = document.getElementById('btn-hub-winners');
    
    const viewActive = document.getElementById('hub-active-view');
    const viewWinners = document.getElementById('hub-winners-view');

    const setActive = (btn, view) => {
        [btnActive, btnWinners].forEach(b => {
            if(b) b.className = "flex-1 flex items-center justify-center text-center py-2 rounded-xl text-gray-500 text-[10px] font-black uppercase transition-all z-10";
        });
        [viewActive, viewWinners].forEach(v => {
            if(v) v.classList.add('hidden');
        });

        if(btn) btn.className = "flex-1 flex items-center justify-center text-center py-2 rounded-xl bg-[#f085aa] text-black text-[10px] font-black uppercase transition-all z-10";
        if(view) view.classList.remove('hidden');
    };

    btnActive?.addEventListener('click', () => setActive(btnActive, viewActive));
    btnWinners?.addEventListener('click', () => setActive(btnWinners, viewWinners));

    // Botão Comprar Números (Redireciona para a nova página completa)
    document.querySelectorAll('.btn-buy-numbers').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            import('../main.js').then(m => m.switchTab('raffle-purchase'));
        };
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

export function processPurchase(amount, price, raffleName, state) {
    // Passo 1: Resumo e Seleção de Pagamento
    Swal.fire({
        html: `
            <div class="text-center">
                <div class="w-16 h-16 bg-[#f085aa]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#f085aa]/20">
                    <span class="material-symbols-outlined text-[#f085aa] text-3xl">shopping_cart_checkout</span>
                </div>
                
                <h2 class="text-xl font-black text-white uppercase tracking-tight mb-2">Checkout</h2>
                <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Escolha como deseja pagar</p>
                
                <!-- Resumo -->
                <div class="bg-white/5 border border-white/5 rounded-3xl p-5 mb-6 text-left">
                    <div class="flex justify-between items-center mb-3 pb-3 border-b border-white/5">
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap mr-3">Produto</span>
                        <span class="text-[10px] font-black text-white whitespace-nowrap">${amount} Números - ${raffleName}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap mr-3">Total</span>
                        <span class="text-lg font-black text-[#f085aa] whitespace-nowrap">R$ ${parseFloat(price).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                    </div>
                </div>

                <!-- Opções de Pagamento -->
                <div class="space-y-3 mb-8">
                    <div id="pay-method-pix" class="pay-method-option group p-4 bg-white/5 border-2 border-[#f085aa] rounded-2xl flex items-center justify-between cursor-pointer transition-all shadow-[0_0_20px_rgba(240,133,170,0.1)]">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-[#f085aa]/10 rounded-xl flex items-center justify-center">
                                <span class="material-symbols-outlined text-[#f085aa]">pix</span>
                            </div>
                            <div class="text-left">
                                <h4 class="text-[11px] font-black text-white uppercase leading-none">Pix</h4>
                                <p class="text-[8px] text-green-500 font-bold uppercase mt-1">Aprovação imediata</p>
                            </div>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-[#f085aa] flex items-center justify-center">
                            <div class="w-2.5 h-2.5 bg-[#f085aa] rounded-full"></div>
                        </div>
                    </div>

                    <div id="pay-method-card" class="pay-method-option group p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between cursor-pointer transition-all hover:bg-white/10">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                <span class="material-symbols-outlined text-gray-400">credit_card</span>
                            </div>
                            <div class="text-left">
                                <h4 class="text-[11px] font-black text-white uppercase leading-none">Cartão de Crédito</h4>
                                <p class="text-[8px] text-gray-500 font-bold uppercase mt-1">Em até 12x</p>
                            </div>
                        </div>
                        <div class="w-5 h-5 rounded-full border-2 border-white/10"></div>
                    </div>
                </div>

                <button id="btn-proceed-payment" class="w-full py-5 text-white font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-[0_15px_30px_rgba(233,126,177,0.3)]"
                    style="background: linear-gradient(135deg, #e97eb1 0%, #4c1d95 100%);">
                    PAGAR AGORA
                </button>
            </div>
        `,
        background: '#0a0a0a',
        showConfirmButton: false,
        backdrop: `rgba(0,0,0,1)`,
        customClass: {
            container: 'z-[10001]',
            popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl p-8'
        },
        didOpen: () => {
            let selectedMethod = 'pix';
            const pixOpt = document.getElementById('pay-method-pix');
            const cardOpt = document.getElementById('pay-method-card');

            pixOpt.onclick = () => {
                selectedMethod = 'pix';
                pixOpt.className = "pay-method-option group p-4 bg-white/5 border-2 border-[#f085aa] rounded-2xl flex items-center justify-between cursor-pointer transition-all shadow-[0_0_20px_rgba(240,133,170,0.1)]";
                cardOpt.className = "pay-method-option group p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between cursor-pointer transition-all hover:bg-white/10";
                pixOpt.querySelector('.w-5').innerHTML = '<div class="w-2.5 h-2.5 bg-[#f085aa] rounded-full"></div>';
                cardOpt.querySelector('.w-5').innerHTML = '';
            };

            cardOpt.onclick = () => {
                selectedMethod = 'card';
                cardOpt.className = "pay-method-option group p-4 bg-white/5 border-2 border-[#f085aa] rounded-2xl flex items-center justify-between cursor-pointer transition-all shadow-[0_0_20px_rgba(240,133,170,0.1)]";
                pixOpt.className = "pay-method-option group p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between cursor-pointer transition-all hover:bg-white/10";
                cardOpt.querySelector('.w-5').innerHTML = '<div class="w-2.5 h-2.5 bg-[#f085aa] rounded-full"></div>';
                pixOpt.querySelector('.w-5').innerHTML = '';
            };

            document.getElementById('btn-proceed-payment').addEventListener('click', () => {
                if (selectedMethod === 'pix') {
                    showPixPayment(amount, price, raffleName, state);
                } else {
                    showCardPayment(amount, price, raffleName, state);
                }
            });
        }
    });
}

function showPixPayment(amount, price, raffleName, state) {
    Swal.fire({
        html: `
            <div class="text-center">
                <div class="w-16 h-16 bg-[#32bcad]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#32bcad]/20">
                    <span class="material-symbols-outlined text-[#32bcad] text-3xl font-light">pix</span>
                </div>
                
                <h2 class="text-xl font-black text-white uppercase tracking-tight mb-2">Pagamento via Pix</h2>
                <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Escaneie o QR Code ou copie o código</p>
                
                <!-- QR Code Simulado -->
                <div class="bg-white p-4 rounded-3xl mb-8 mx-auto w-48 h-48 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=versiani-pix-payment" class="w-full h-full opacity-90">
                </div>

                <div class="bg-white/5 border border-white/5 rounded-3xl p-4 mb-8">
                    <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-2">Pix Copia e Cola</p>
                    <div class="flex items-center gap-2">
                        <input type="text" readonly value="00020126580014br.gov.bcb.pix0136..." class="bg-transparent border-none text-[10px] text-white font-mono w-full outline-none opacity-60">
                        <span class="material-symbols-outlined text-[#f085aa] text-lg">content_copy</span>
                    </div>
                </div>

                <button id="btn-simulate-pix-paid" class="w-full py-5 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl mb-4">
                    JÁ REALIZEI O PAGAMENTO
                </button>
                <button onclick="Swal.close()" class="text-[9px] font-black text-gray-500 uppercase tracking-widest">CANCELAR</button>
            </div>
        `,
        background: '#0a0a0a',
        showConfirmButton: false,
        backdrop: `rgba(0,0,0,1)`,
        customClass: {
            container: 'z-[10001]',
            popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl p-8'
        },
        didOpen: () => {
            document.getElementById('btn-simulate-pix-paid').onclick = () => {
                executePayment(amount, price, raffleName, state);
            };
        }
    });
}

function showCardPayment(amount, price, raffleName, state) {
    Swal.fire({
        html: `
            <div class="text-center">
                <div class="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <span class="material-symbols-outlined text-white text-3xl font-light">credit_card</span>
                </div>
                
                <h2 class="text-xl font-black text-white uppercase tracking-tight mb-2">Cartão de Crédito</h2>
                <p class="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-8">Insira os dados do seu cartão</p>
                
                <div class="space-y-4 mb-8 text-left">
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                        <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">Número do Cartão</p>
                        <input type="text" placeholder="0000 0000 0000 0000" class="bg-transparent border-none w-full text-sm text-white font-bold outline-none">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">Validade</p>
                            <input type="text" placeholder="MM/AA" class="bg-transparent border-none w-full text-sm text-white font-bold outline-none">
                        </div>
                        <div class="bg-white/5 border border-white/10 rounded-2xl p-4">
                            <p class="text-[8px] text-gray-500 font-black uppercase tracking-widest mb-1">CVV</p>
                            <input type="text" placeholder="123" class="bg-transparent border-none w-full text-sm text-white font-bold outline-none">
                        </div>
                    </div>
                </div>

                <button id="btn-simulate-card-paid" class="w-full py-5 text-white font-black rounded-full text-[10px] uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl mb-4"
                    style="background: linear-gradient(135deg, #e97eb1 0%, #4c1d95 100%);">
                    FINALIZAR PAGAMENTO
                </button>
                <button onclick="Swal.close()" class="text-[9px] font-black text-gray-500 uppercase tracking-widest">CANCELAR</button>
            </div>
        `,
        background: '#0a0a0a',
        showConfirmButton: false,
        backdrop: `rgba(0,0,0,1)`,
        customClass: {
            container: 'z-[10001]',
            popup: 'rounded-[40px] border border-white/10 shadow-2xl backdrop-blur-xl p-8'
        },
        didOpen: () => {
            document.getElementById('btn-simulate-card-paid').onclick = () => {
                executePayment(amount, price, raffleName, state);
            };
        }
    });
}


export function executePayment(amount, price, raffleName, state) {
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
