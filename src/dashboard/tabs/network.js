/**
 * Módulo da Aba Rede Elite (Network)
 * Gerencia o onboarding de afiliados em múltiplas etapas
 */

export default {
    render: (state) => `
        <div id="tab-network" class="tab-pane animate-fade px-6 pt-4 pb-48">
            <!-- HEADER DA ABA -->
            <div class="flex items-center justify-between mb-8">
                <button id="btn-network-back" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 active:scale-90 transition-all">
                    <span class="material-symbols-outlined text-sm">arrow_back_ios</span>
                </button>
                <h2 class="text-lg font-black text-white uppercase tracking-tighter">Área <span class="text-gradient-versiani">Afiliada</span></h2>
                <div class="w-10 h-10"></div>
            </div>

            <!-- CONTÊINER REDE ELITE -->
            <div id="affiliate-onboarding" class="space-y-8">
                <div class="text-center mb-4">
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-relaxed px-4">Faça parte do time Versiani e ganhe comissões exclusivas.</p>
                </div>

                <!-- PROGRESS BAR -->
                <div id="affiliate-progress-bar" class="flex gap-2 px-2 mb-8">
                    <div id="progress-1" class="h-1 flex-1 bg-gradient-to-r from-[#f085aa] to-[#320075] rounded-full"></div>
                    <div id="progress-2" class="h-1 flex-1 bg-white/10 rounded-full"></div>
                    <div id="progress-3" class="h-1 flex-1 bg-white/10 rounded-full"></div>
                </div>

                <!-- STEP 1: IDENTIFICAÇÃO -->
                <div id="affiliate-step-1" class="affiliate-step space-y-6 animate-fade">
                    <div class="space-y-4">
                        <p class="text-xs font-black text-white uppercase tracking-widest">Você é?</p>
                        <div class="flex p-1 bg-white/5 rounded-xl border border-white/10">
                            <button id="btn-type-empresa" class="flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500">Sou Empresa</button>
                            <button id="btn-type-pf" class="flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg">Sou Pessoa Física</button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4">
                        <div id="group-empresa" class="hidden space-y-4">
                            <input type="text" placeholder="CNPJ" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                            <input type="text" placeholder="Razão Social" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                        </div>
                        <input type="email" placeholder="Seu e-mail" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                        <input type="text" placeholder="Nome completo" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Celular" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                            <input type="text" placeholder="CPF" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                        </div>
                    </div>

                    <button data-next="2" class="w-full h-11 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-xl hover:scale-[1.02] active:scale-95 transition-all mt-8">
                        Prosseguir
                    </button>
                </div>

                <!-- STEP 2: SOCIAL (SIMPLIFICADO) -->
                <div id="affiliate-step-2" class="affiliate-step hidden space-y-6 animate-fade">
                    <p class="text-xs font-black text-white uppercase tracking-widest text-center">Suas Redes Sociais</p>
                    <input type="text" placeholder="@seuinstagram" class="w-full h-11 bg-white rounded-xl px-5 text-black font-semibold text-xs outline-none">
                    <button data-next="3" class="w-full h-11 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase tracking-[0.2em] text-xs rounded-xl shadow-xl transition-all">
                        Finalizar Cadastro
                    </button>
                </div>

                <!-- STEP 3: SUCESSO -->
                <div id="affiliate-step-3" class="affiliate-step hidden text-center space-y-6 animate-fade">
                    <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                        <span class="material-symbols-outlined text-green-500 text-4xl">verified</span>
                    </div>
                    <h3 class="text-xl font-black text-white uppercase">Solicitação Enviada!</h3>
                    <p class="text-xs text-gray-400">Nossa equipe analisará seu perfil e entrará em contato em até 48h.</p>
                </div>
            </div>
        </div>
    `,

    init: (state) => {
        setupOnboarding(state);
    }
};

function setupOnboarding(state) {
    let currentStep = 1;

    const steps = {
        1: document.getElementById('affiliate-step-1'),
        2: document.getElementById('affiliate-step-2'),
        3: document.getElementById('affiliate-step-3')
    };

    const progress = {
        1: document.getElementById('progress-1'),
        2: document.getElementById('progress-2'),
        3: document.getElementById('progress-3')
    };

    // Toggle Empresa/PF
    const btnPF = document.getElementById('btn-type-pf');
    const btnEmpresa = document.getElementById('btn-type-empresa');
    const groupEmpresa = document.getElementById('group-empresa');

    btnPF?.addEventListener('click', () => {
        btnPF.className = "flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg";
        btnEmpresa.className = "flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500";
        groupEmpresa.classList.add('hidden');
    });

    btnEmpresa?.addEventListener('click', () => {
        btnEmpresa.className = "flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-gradient-to-r from-[#f085aa] to-[#320075] text-white shadow-lg";
        btnPF.className = "flex-1 py-3 rounded-lg text-[10px] font-black uppercase transition-all bg-white/5 text-gray-500";
        groupEmpresa.classList.remove('hidden');
    });

    // Navegação de Passos
    document.querySelectorAll('[data-next]').forEach(btn => {
        btn.addEventListener('click', () => {
            const next = parseInt(btn.getAttribute('data-next'));
            goToStep(next);
        });
    });

    document.getElementById('btn-network-back')?.addEventListener('click', () => {
        if (currentStep > 1) {
            goToStep(currentStep - 1);
        } else {
            // Se estiver no passo 1, volta para a home
            import('../main.js').then(m => m.switchTab('home'));
        }
    });

    function goToStep(step) {
        // Esconde todos
        Object.values(steps).forEach(s => s?.classList.add('hidden'));
        // Mostra o atual
        steps[step]?.classList.remove('hidden');
        
        // Atualiza progresso
        for (let i = 1; i <= 3; i++) {
            if (i <= step) {
                progress[i].classList.remove('bg-white/10');
                progress[i].classList.add('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]');
            } else {
                progress[i].classList.add('bg-white/10');
                progress[i].classList.remove('bg-gradient-to-r', 'from-[#f085aa]', 'to-[#320075]');
            }
        }
        currentStep = step;
    }
}
