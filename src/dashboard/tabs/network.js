/**
 * Módulo da Aba Rede Elite (Network)
 * Fluxo Onboarding 100% FIEL ao Dashboard2 (V2)
 */

export default {
    render: (state) => `
        <div id="tab-network" class="tab-pane animate-fade px-6 pt-4 lg:pt-12 pb-48">
            <!-- HEADER DA ABA -->
            <div class="flex items-center justify-between mb-8 relative w-full">
                <button id="btn-network-back" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 active:scale-90 transition-all relative z-10">
                    <span class="material-symbols-outlined text-sm ml-1">arrow_back_ios</span>
                </button>
                <h2 class="text-lg font-black text-white uppercase tracking-tighter absolute left-1/2 -translate-x-1/2 w-full text-center pointer-events-none">Área <span class="text-gradient-versiani">Afiliada</span></h2>
                <div class="w-10 h-10"></div>
            </div>

            <!-- CONTÊINER REDE ELITE -->
            <div id="affiliate-onboarding" class="space-y-4 lg:max-w-2xl lg:mx-auto w-full">
                <div class="text-center mb-2">
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed px-4">Faça parte do time Versiani e ganhe comissões exclusivas.</p>
                </div>

                <!-- PROGRESS BAR (4 SEGMENTOS) -->
                <div id="affiliate-progress-bar" class="flex gap-2 px-2 mb-4">
                    <div id="progress-1" class="h-1 flex-1 bg-gradient-to-r from-[#f085aa] to-[#320075] rounded-full"></div>
                    <div id="progress-2" class="h-1 flex-1 bg-white/10 rounded-full"></div>
                    <div id="progress-3" class="h-1 flex-1 bg-white/10 rounded-full"></div>
                    <div id="progress-4" class="h-1 flex-1 bg-white/10 rounded-full"></div>
                </div>

                <!-- STEP 1: IDENTIFICAÇÃO -->
                <div id="affiliate-step-1" class="affiliate-step space-y-4 animate-fade">
                    <div class="space-y-2">
                        <p class="text-xs font-black text-white uppercase tracking-widest">Você é?</p>
                        <div class="flex p-1 bg-white/5 rounded-xl border border-white/10">
                            <button id="btn-type-pf" class="flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg">Pessoa Física</button>
                            <button id="btn-type-empresa" class="flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500">Empresa</button>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div id="group-empresa" class="hidden space-y-2">
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">CNPJ</label>
                                <input type="text" id="net-cnpj" placeholder="00.000.000/0000-00" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Razão Social</label>
                                <input type="text" id="net-razao" placeholder="Sua empresa LTDA" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">E-mail</label>
                            <input type="email" id="net-email" placeholder="seuemail@exemplo.com" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Nome completo</label>
                            <input type="text" id="net-nome" placeholder="Seu Nome Completo" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Nº de Celular</label>
                                <input type="text" id="net-celular" placeholder="(00) 0 0000-0000" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">CPF</label>
                                <input type="text" id="net-cpf" placeholder="000.000.000-00" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                        </div>
                    </div>

                    <button data-next="2" class="w-full h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all mt-4">
                        Prosseguir
                    </button>
                </div>

                <!-- STEP 2: SOCIAL -->
                <div id="affiliate-step-2" class="affiliate-step hidden space-y-4 animate-fade">
                    <p class="text-xs font-black text-white uppercase tracking-[0.2em] text-center mt-2">Sua presença digital</p>
                    
                    <div class="bg-white/5 rounded-[2rem] p-6 border border-white/5 space-y-4">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Rede Social</label>
                                <div class="relative">
                                    <select id="net-social-type" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none appearance-none">
                                        <option value="Instagram">Instagram</option>
                                        <option value="TikTok">TikTok</option>
                                        <option value="YouTube">YouTube</option>
                                    </select>
                                    <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none">expand_more</span>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Nº de Seguidores</label>
                                <input type="text" id="net-social-followers" placeholder="Ex: 10k" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                        </div>

                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Link do Perfil</label>
                            <input type="text" id="net-social-link" placeholder="instagram.com/seuuser" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                        </div>
                    </div>

                    <button class="flex items-center justify-center gap-2 w-full text-[#f085aa] font-black text-[10px] uppercase tracking-widest opacity-80 hover:opacity-100 transition-all">
                        <span class="material-symbols-outlined text-lg">add_circle</span>
                        Adicionar nova rede
                    </button>

                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button data-next="1" class="h-14 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-xl border border-white/10 active:scale-95 transition-all">Voltar</button>
                        <button data-next="3" class="h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl active:scale-95 transition-all">Prosseguir</button>
                    </div>
                </div>

                <!-- STEP 3: FINANCEIRO & ENDEREÇO -->
                <div id="affiliate-step-3" class="affiliate-step hidden space-y-4 animate-fade">
                    <div class="space-y-3">
                        <p class="text-xs font-black text-white uppercase tracking-[0.2em] text-left mt-2">Onde você recebe?</p>
                        <div class="space-y-3">
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Chave PIX</label>
                                <input type="text" id="net-pix" placeholder="CPF, E-mail ou Celular" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Instituição Bancária</label>
                                <input type="text" id="net-banco" placeholder="Ex: Nubank, Itaú..." class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                        </div>

                        <p class="text-xs font-black text-white uppercase tracking-[0.2em] text-left pt-2">Seu Endereço</p>
                        <div class="grid grid-cols-2 gap-3">
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">CEP</label>
                                <input type="text" id="net-cep" placeholder="00000-000" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                            <div class="space-y-1">
                                <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Estado</label>
                                <input type="text" id="net-estado" placeholder="Ex: SP" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                            </div>
                        </div>
                        <div class="space-y-1">
                            <label class="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-1">Cidade</label>
                            <input type="text" id="net-cidade" placeholder="Sua cidade" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none shadow-inner">
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button data-next="2" class="h-14 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-xl border border-white/10 active:scale-95 transition-all">Voltar</button>
                        <button data-next="4" class="h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl active:scale-95 transition-all">Prosseguir</button>
                    </div>
                </div>

                <!-- STEP 4: CONFIRMAÇÃO -->
                <div id="affiliate-step-4" class="affiliate-step hidden space-y-4 animate-fade">
                    <p class="text-xs font-black text-white uppercase tracking-[0.2em] text-left mt-2">Confirme seus dados</p>
                    
                    <div class="bg-white/5 rounded-[2rem] p-6 border border-white/5 space-y-4 relative overflow-hidden">
                        <div class="space-y-4 relative z-10">
                            <div>
                                <span class="text-[9px] font-black text-[#f085aa] uppercase tracking-[0.2em] block mb-1">Identificação</span>
                                <p id="summary-nome" class="text-sm font-black text-white uppercase">Nome não informado</p>
                                <p class="text-[10px] text-gray-400 font-bold mt-1">CPF: <span id="summary-cpf">-</span></p>
                            </div>

                            <div class="w-full h-px bg-white/5"></div>

                            <div>
                                <span class="text-[9px] font-black text-[#f085aa] uppercase tracking-[0.2em] block mb-1">Financeiro & Logística</span>
                                <p class="text-[10px] text-white font-bold">PIX: <span id="summary-pix" class="text-gray-400 font-medium">Não informado</span></p>
                                <p id="summary-endereco" class="text-[10px] text-gray-400 font-medium mt-1">-</p>
                            </div>
                        </div>
                    </div>

                    <label class="flex items-start gap-3 px-4 cursor-pointer group">
                        <div class="relative flex items-center justify-center mt-0.5">
                            <input type="checkbox" id="net-terms-check" class="peer appearance-none w-5 h-5 bg-white/5 border border-white/10 rounded-md checked:bg-[#f085aa] checked:border-[#f085aa] transition-all cursor-pointer">
                            <span class="material-symbols-outlined absolute text-white text-sm scale-0 peer-checked:scale-100 transition-all pointer-events-none">check</span>
                        </div>
                        <p class="text-[9px] text-gray-500 font-bold leading-relaxed text-left group-hover:text-gray-400 transition-all">
                            Ao finalizar, você declara que as informações acima são verdadeiras e está de acordo com as regras de afiliação.
                        </p>
                    </label>

                    <div class="grid grid-cols-2 gap-3 pt-2">
                        <button data-next="1" class="h-14 bg-white/5 text-white font-black uppercase tracking-widest text-[10px] rounded-xl border border-white/10 active:scale-95 transition-all">Corrigir</button>
                        <button id="btn-finalize" class="h-14 bg-white/10 text-white/30 font-black uppercase tracking-widest text-[10px] rounded-xl shadow-xl active:scale-95 transition-all pointer-events-none" disabled>Finalizar Cadastro</button>
                    </div>
                </div>
            </div>

            <!-- PAINEL REDE ELITE (PÓS-CADASTRO) -->
            <div id="affiliate-dashboard" class="hidden space-y-8 animate-fade lg:max-w-2xl lg:mx-auto w-full">
                <div class="text-center mb-6 pt-4 lg:pt-12">
                    <h2 class="text-xl font-black text-white uppercase tracking-tighter">Painel <span class="text-gradient-versiani">Rede Elite</span></h2>
                </div>

                <!-- CARDS DE SALDO -->
                <div class="grid grid-cols-2 gap-4">
                    <div class="bg-[#121212] rounded-[2.5rem] p-8 border border-white/5 shadow-xl">
                        <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Saldo</span>
                        <h4 class="text-2xl font-black text-white tracking-tighter">R$ <span class="text-gradient-versiani">0,00</span></h4>
                    </div>
                    <div class="bg-[#121212] rounded-[2.5rem] p-8 border border-white/5 shadow-xl">
                        <span class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-2 block">A Receber</span>
                        <h4 class="text-2xl font-black text-white tracking-tighter opacity-80">R$ 0,00</h4>
                    </div>
                </div>

                <!-- BOTÃO DE SAQUE -->
                <button class="w-full h-16 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-[0.2em] text-xs rounded-full shadow-2xl active:scale-95 transition-all">
                    Solicitar Saque
                </button>

                <!-- LINK DE AFILIADA -->
                <div class="bg-white/5 rounded-[2.5rem] p-8 border border-white/5 space-y-4">
                    <span class="text-[9px] font-black text-gray-400 uppercase tracking-widest block ml-1">Seu Link de Afiliada</span>
                    <div class="flex items-center gap-3 bg-black/40 rounded-[1.5rem] p-4 border border-white/5">
                        <p class="flex-1 text-[11px] font-bold text-gray-500 italic truncate">Aguardando aprovação...</p>
                        <button class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all">
                            <span class="material-symbols-outlined text-lg">content_copy</span>
                        </button>
                    </div>
                </div>

                <!-- MELHORES DICAS -->
                <div class="space-y-4">
                    <div class="flex items-center gap-2 px-2">
                        <h3 class="text-[11px] font-black text-white uppercase tracking-widest">Melhores Dicas</h3>
                        <span>💰</span>
                    </div>
                    <div class="bg-white/5 rounded-[2rem] p-6 flex items-center gap-5 border border-white/5">
                        <div class="w-14 h-14 rounded-2xl bg-[#f085aa]/10 flex items-center justify-center flex-shrink-0">
                            <span class="material-symbols-outlined text-[#f085aa] text-3xl">rocket_launch</span>
                        </div>
                        <p class="text-[11px] font-bold text-gray-300 leading-relaxed">Compartilhe seu link nos stories para converter 3x mais.</p>
                    </div>
                </div>

                <!-- RODAPÉ -->
                <button id="btn-edit-registration" class="w-full text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] hover:text-white transition-all pt-4">
                    Revisar ou editar cadastro
                </button>
            </div>
        </div>
    `,

    init: (state) => {
        setupOnboarding(state);
    }
};

function setupOnboarding(state) {
    let currentStep = 1;
    let userType = 'pf';

    const onboardingContainer = document.getElementById('affiliate-onboarding');
    const dashboardContainer = document.getElementById('affiliate-dashboard');

    const steps = {
        1: document.getElementById('affiliate-step-1'),
        2: document.getElementById('affiliate-step-2'),
        3: document.getElementById('affiliate-step-3'),
        4: document.getElementById('affiliate-step-4')
    };

    const progress = {
        1: document.getElementById('progress-1'),
        2: document.getElementById('progress-2'),
        3: document.getElementById('progress-3'),
        4: document.getElementById('progress-4')
    };

    // Toggle Empresa/PF
    const btnPF = document.getElementById('btn-type-pf');
    const btnEmpresa = document.getElementById('btn-type-empresa');
    const groupEmpresa = document.getElementById('group-empresa');
    const bottomNav = document.querySelector('nav.fixed.bottom-0');

    // Inicialmente esconde a bottom bar se estiver no onboarding
    if (!dashboardContainer.classList.contains('hidden')) {
        bottomNav?.classList.remove('hidden');
    } else {
        bottomNav?.classList.add('hidden');
    }

    btnPF?.addEventListener('click', () => {
        userType = 'pf';
        btnPF.className = "flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg";
        btnEmpresa.className = "flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500";
        groupEmpresa.classList.add('hidden');
    });

    btnEmpresa?.addEventListener('click', () => {
        userType = 'empresa';
        btnEmpresa.className = "flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg";
        btnPF.className = "flex-1 flex items-center justify-center text-center py-2 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500";
        groupEmpresa.classList.remove('hidden');
    });

    // Navegação de Passos
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = parseInt(btn.getAttribute('data-next'));
            if (next === 4) updateSummary();
            goToStep(next);
        });
    });

    document.getElementById('btn-network-back')?.addEventListener('click', () => {
        if (dashboardContainer && !dashboardContainer.classList.contains('hidden')) {
            showOnboarding();
            return;
        }

        if (currentStep > 1) {
            goToStep(currentStep - 1);
        } else {
            bottomNav?.classList.remove('hidden');
            import('../main.js').then(m => m.switchTab('home'));
        }
    });

    // Aceite de Termos e Finalização
    const termsCheck = document.getElementById('net-terms-check');
    const btnFinalize = document.getElementById('btn-finalize');

    termsCheck?.addEventListener('change', () => {
        if (termsCheck.checked) {
            btnFinalize.classList.remove('bg-white/10', 'text-white/30', 'pointer-events-none');
            btnFinalize.classList.add('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]', 'text-white');
            btnFinalize.disabled = false;
        } else {
            btnFinalize.classList.add('bg-white/10', 'text-white/30', 'pointer-events-none');
            btnFinalize.classList.remove('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]', 'text-white');
            btnFinalize.disabled = true;
        }
    });

    btnFinalize?.addEventListener('click', () => {
        showSuccessModal();
    });

    // Editar Cadastro
    document.getElementById('btn-edit-registration')?.addEventListener('click', () => {
        showOnboarding();
        goToStep(1);
    });

    function showDashboard() {
        onboardingContainer?.classList.add('hidden');
        dashboardContainer?.classList.remove('hidden');
        bottomNav?.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showOnboarding() {
        onboardingContainer?.classList.remove('hidden');
        dashboardContainer?.classList.add('hidden');
        bottomNav?.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateSummary() {
        const nome = document.getElementById('net-nome')?.value || "Não informado";
        const cpf = document.getElementById('net-cpf')?.value || "-";
        const pix = document.getElementById('net-pix')?.value || "Não informado";
        const cidade = document.getElementById('net-cidade')?.value || "";
        const estado = document.getElementById('net-estado')?.value || "";
        
        document.getElementById('summary-nome').textContent = nome;
        document.getElementById('summary-cpf').textContent = cpf;
        document.getElementById('summary-pix').textContent = pix;
        document.getElementById('summary-endereco').textContent = cidade && estado ? `${cidade} - ${estado}` : "-";
    }

    function goToStep(step) {
        // Esconde todos
        Object.values(steps).forEach(s => s?.classList.add('hidden'));
        // Mostra o atual
        steps[step]?.classList.remove('hidden');
        
        // Atualiza progresso
        for (let i = 1; i <= 4; i++) {
            if (i <= step) {
                progress[i].classList.remove('bg-white/10');
                progress[i].classList.add('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]');
            } else {
                progress[i].classList.add('bg-white/10');
                progress[i].classList.remove('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]');
            }
        }
        currentStep = step;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showSuccessModal() {
        if (typeof Swal !== 'undefined') {
            Swal.fire({
                html: `
                    <div class="text-center py-6">
                        <h3 class="text-3xl font-black text-white uppercase mb-4 leading-tight">CADASTRO<br>ENVIADO!</h3>
                        <p class="text-sm text-gray-400 font-bold mb-8">Análise em andamento. Em breve você receberá a confirmação.</p>
                        <button id="swal-btn-ok" class="w-full h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-widest rounded-full shadow-xl">Entendido</button>
                    </div>
                `,
                background: '#121212',
                showConfirmButton: false,
                customClass: {
                    popup: 'rounded-[3rem] border border-white/10'
                },
                didOpen: () => {
                    document.getElementById('swal-btn-ok').onclick = () => {
                        Swal.close();
                        showDashboard();
                    };
                }
            });
        } else {
            showDashboard();
        }
    }
}
