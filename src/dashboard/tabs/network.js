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

            <!-- PAINEL DO AFILIADO (DASHBOARD) -->
            <div id="affiliate-dashboard" class="hidden space-y-3 lg:space-y-4 animate-fade lg:max-w-3xl lg:mx-auto w-full pt-1 lg:pt-6">
                
                <!-- Cards de Resumo -->
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
                    <div class="bg-[#111] p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-white/5 space-y-0.5 lg:space-y-1">
                        <p class="text-[7px] lg:text-[9px] font-black text-gray-500 uppercase tracking-widest">Saldo</p>
                        <h3 class="text-lg lg:text-xl font-black text-white">R$ <span class="text-gradient-versiani">0,00</span></h3>
                    </div>
                    <div class="bg-[#111] p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-white/5 space-y-0.5 lg:space-y-1">
                        <p class="text-[7px] lg:text-[9px] font-black text-gray-500 uppercase tracking-widest">A Receber</p>
                        <h3 class="text-lg lg:text-xl font-black text-white">R$ 0,00</h3>
                    </div>
                    <div class="bg-[#111] p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-white/5 space-y-0.5 lg:space-y-1">
                        <p class="text-[7px] lg:text-[9px] font-black text-gray-500 uppercase tracking-widest">Indicações</p>
                        <h3 class="text-lg lg:text-xl font-black text-white">0</h3>
                    </div>
                    <div class="bg-[#111] p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-white/5 space-y-0.5 lg:space-y-1">
                        <p class="text-[7px] lg:text-[9px] font-black text-gray-500 uppercase tracking-widest">Conversão</p>
                        <h3 class="text-lg lg:text-xl font-black text-white">0%</h3>
                    </div>
                </div>

                <!-- Botão de Saque -->
                <button id="btn-open-withdraw" class="w-full h-12 lg:h-14 bg-gradient-to-r from-[#f085aa] to-[#320075] rounded-xl lg:rounded-2xl flex items-center justify-center text-white font-black uppercase text-[10px] lg:text-xs tracking-[0.2em] shadow-lg active:scale-95 transition-all">
                    Solicitar Saque
                </button>

                <!-- Link de Afiliada -->
                <div class="bg-[#111] p-3 lg:p-5 rounded-[1.5rem] lg:rounded-[2rem] border border-white/5 space-y-3 lg:space-y-4">
                    <div class="flex items-center justify-between px-1">
                        <h4 class="text-[8px] lg:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Seu Link de Afiliada</h4>
                        <span class="text-[7px] lg:text-[9px] font-bold text-[#f085aa] uppercase tracking-widest bg-[#f085aa]/10 px-2 lg:px-3 py-0.5 rounded-full">Ativo</span>
                    </div>
                    
                    <div class="relative group">
                        <div class="relative bg-black/50 lg:bg-black rounded-lg lg:rounded-xl p-2 lg:p-4 flex items-center justify-between border border-white/5 lg:border-white/10">
                            <span class="text-[9px] lg:text-sm font-bold text-gray-400 truncate pr-4">Aguardando aprovação...</span>
                            <button class="w-7 h-7 lg:w-10 lg:h-10 rounded-md lg:rounded-lg bg-white/5 flex items-center justify-center text-white hover:bg-white/10 active:scale-90 transition-all">
                                <span class="material-symbols-outlined text-xs lg:text-lg">content_copy</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- MELHORES DICAS -->
                <div class="space-y-2 lg:space-y-3">
                    <div class="flex items-center gap-2 px-2">
                        <h3 class="text-[8px] lg:text-[10px] font-black text-white uppercase tracking-widest">Melhores Dicas</h3>
                        <span class="text-[10px] lg:text-sm">💰</span>
                    </div>
                    <div class="bg-white/5 rounded-2xl lg:rounded-[2rem] p-3 lg:p-6 flex items-center gap-4 lg:gap-6 border border-white/5">
                        <div class="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl bg-[#f085aa]/10 flex items-center justify-center flex-shrink-0">
                            <span class="material-symbols-outlined text-[#f085aa] text-lg lg:text-3xl">rocket_launch</span>
                        </div>
                        <p class="text-[9px] lg:text-sm font-bold text-gray-400 lg:text-gray-300 leading-tight">Compartilhe seu link nos stories para converter 3x mais.</p>
                    </div>
                </div>

                <!-- RODAPÉ E ESPAÇADOR -->
                <div class="pt-2 pb-24 lg:pb-12 text-center">
                    <button id="btn-edit-registration" class="text-[8px] lg:text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] hover:text-white transition-all">
                        Revisar ou editar cadastro
                    </button>
                </div>
            </div>
        </div>
        </div>

        <!-- TELA DE SAQUE & MOVIMENTAÇÕES (FULL PAGE) -->
        <div id="modal-withdraw" class="fixed inset-0 z-[5000] hidden bg-[#050505] flex-col overflow-hidden animate-fade">
            
            <!-- HEADER DA PÁGINA DE SAQUE -->
            <header class="w-full px-6 py-6 flex items-center justify-between border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-30">
                <button id="btn-close-withdraw" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 active:scale-90 transition-all">
                    <span class="material-symbols-outlined text-sm ml-1">arrow_back_ios</span>
                </button>
                <h2 class="text-lg font-black text-white uppercase tracking-tighter absolute left-1/2 -translate-x-1/2 w-full text-center pointer-events-none">Solicitar <span class="text-gradient-versiani">Saque</span></h2>
                <div class="w-10 h-10"></div>
            </header>

            <!-- CONTEÚDO DA PÁGINA -->
            <div class="flex-1 overflow-y-auto no-scrollbar">
                <div class="max-w-2xl mx-auto w-full p-4 lg:p-8 space-y-6">
                    
                    <!-- Seção de Dados e Saque -->
                    <div class="flex flex-col gap-6">
                        <!-- Lado Esquerdo: Dados do Usuário -->
                        <div class="w-full space-y-4">
                            <div class="pb-2 border-b border-white/5">
                                <h3 id="withdraw-user-name" class="text-lg font-black text-white uppercase tracking-tighter">Fulano da Silva José Souza</h3>
                                <p id="withdraw-user-id" class="text-[8px] font-bold text-[#f085aa] uppercase tracking-[0.2em] mt-1 opacity-80">Documento: 59.105.056/0001-53</p>
                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div class="space-y-1.5">
                                    <label class="text-[8px] font-black text-gray-500 uppercase tracking-widest ml-1">Chave Pix Selecionada</label>
                                    <div class="h-11 bg-white/5 border border-white/10 rounded-xl flex items-center px-4">
                                        <span class="text-white font-black text-xs truncate">133.450.974-00</span>
                                    </div>
                                </div>
                                <div class="space-y-1.5">
                                    <label class="text-[8px] font-black text-gray-500 uppercase tracking-widest ml-1">Banco Destino</label>
                                    <div class="h-11 bg-white/5 border border-white/10 rounded-xl flex items-center px-4">
                                        <span class="text-white font-black text-xs truncate">Banco de Pernambuco S.A</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Widget de Saque Compacto -->
                        <div class="w-full bg-gradient-to-br from-[#121212] to-[#0a0a0a] p-6 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                            <div class="absolute -top-20 -right-20 w-40 h-40 bg-[#f085aa]/5 blur-[80px] rounded-full"></div>
                            
                            <div class="relative z-10 space-y-6">
                                <div class="text-center">
                                    <p class="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Disponível para Saque</p>
                                    <h4 class="text-2xl font-black text-white tracking-tighter">R$ <span class="text-gradient-versiani">10.000,00</span></h4>
                                </div>
                                
                                <div class="space-y-3">
                                    <div class="relative">
                                        <label class="absolute -top-1.5 left-4 px-1.5 bg-[#121212] text-[7px] font-black text-[#f085aa] uppercase tracking-widest z-10">Valor do Saque</label>
                                        <input type="number" placeholder="0,00" class="w-full h-12 bg-transparent border-2 border-white/10 rounded-xl px-4 text-white font-black text-lg outline-none focus:border-[#f085aa] transition-all" min="10">
                                    </div>
                                    <button class="w-full h-12 bg-gradient-to-r from-[#f085aa] to-[#320075] text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl shadow-lg active:scale-95 transition-all">
                                        Confirmar Saque
                                    </button>
                                    <p class="text-[8px] text-center text-gray-500 font-bold uppercase tracking-widest opacity-60">Recebimento em até 24h úteis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Seção de Movimentações -->
                    <div class="space-y-6">
                        <div class="flex items-center justify-between px-2">
                            <h4 class="text-sm font-black text-white uppercase tracking-widest">Extrato de Movimentações</h4>
                            <div class="flex items-center gap-2">
                                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Atualizado agora</span>
                            </div>
                        </div>
                        
                        <div class="bg-white/5 rounded-[2rem] p-4 border border-white/5">
                            <div class="overflow-x-auto no-scrollbar">
                                <table class="w-full min-w-[500px]">
                                    <thead class="text-[8px] font-black text-gray-500 uppercase tracking-widest border-b border-white/5">
                                        <tr>
                                            <th class="pb-3 text-center">Operação</th>
                                            <th class="pb-3 text-left">Detalhamento</th>
                                            <th class="pb-3 text-right px-4">Valor</th>
                                            <th class="pb-3 text-right">Data/Hora</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-[10px] font-bold text-white uppercase tracking-tight">
                                        <tr class="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                                            <td class="py-3 text-center"><span class="px-2 py-0.5 bg-white/5 rounded-full text-[8px] text-gray-400 border border-white/10">Saída</span></td>
                                            <td class="py-3">Resgate PIX - Finalizado</td>
                                            <td class="py-3 text-right px-4 text-[#f085aa]">- R$ 90,00</td>
                                            <td class="py-3 text-right opacity-40 whitespace-nowrap">06/02/2025 • 14:30</td>
                                        </tr>
                                        <tr class="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                                            <td class="py-3 text-center"><span class="px-2 py-0.5 bg-white/5 rounded-full text-[8px] text-gray-400 border border-white/10">Saída</span></td>
                                            <td class="py-3">Resgate PIX - Finalizado</td>
                                            <td class="py-3 text-right px-4 text-[#f085aa]">- R$ 120,00</td>
                                            <td class="py-3 text-right opacity-40 whitespace-nowrap">05/02/2025 • 09:15</td>
                                        </tr>
                                        <tr class="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                                            <td class="py-3 text-center"><span class="px-2 py-0.5 bg-[#f085aa]/10 rounded-full text-[8px] text-[#f085aa] border border-[#f085aa]/20">Entrada</span></td>
                                            <td class="py-3">Comissão de Venda - Sorteio 1</td>
                                            <td class="py-3 text-right px-4 text-white">R$ 350,00</td>
                                            <td class="py-3 text-right opacity-40 whitespace-nowrap">04/02/2025 • 18:00</td>
                                        </tr>
                                        <tr class="border-b border-white/5 group hover:bg-white/[0.02] transition-all">
                                            <td class="py-3 text-center"><span class="px-2 py-0.5 bg-[#f085aa]/10 rounded-full text-[8px] text-[#f085aa] border border-[#f085aa]/20">Entrada</span></td>
                                            <td class="py-3">Comissão de Venda - Sorteio 2</td>
                                            <td class="py-3 text-right px-4 text-white">R$ 100,00</td>
                                            <td class="py-3 text-right opacity-40 whitespace-nowrap">03/02/2025 • 21:10</td>
                                        </tr>
                                        <tr class="group hover:bg-white/[0.02] transition-all">
                                            <td class="py-3 text-center"><span class="px-2 py-0.5 bg-white/5 rounded-full text-[8px] text-gray-400 border border-white/10">Saída</span></td>
                                            <td class="py-3">Resgate PIX - Finalizado</td>
                                            <td class="py-3 text-right px-4 text-[#f085aa]">- R$ 440,00</td>
                                            <td class="py-3 text-right opacity-40 whitespace-nowrap">01/02/2025 • 11:05</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Rodapé do Extrato -->
                            <div class="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                        <span class="material-symbols-outlined text-[#f085aa] text-sm">history</span>
                                    </div>
                                    <div>
                                        <p class="text-[8px] font-black text-gray-500 uppercase tracking-widest">Saldo Inicial</p>
                                        <p class="text-[10px] font-bold text-gray-400 uppercase">31/01/2025</p>
                                    </div>
                                </div>
                                <div class="text-right">
                                    <p class="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-0.5">Total Acumulado</p>
                                    <p class="text-xl font-black text-white tracking-tighter">R$ 10.200,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Espaçamento extra no final -->
                    <div class="h-20"></div>
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

    // Controle do Modal de Saque
    const modalWithdraw = document.getElementById('modal-withdraw');
    const btnOpenWithdraw = document.getElementById('btn-open-withdraw');
    const btnCloseWithdraw = document.getElementById('btn-close-withdraw');
    const backdropWithdraw = document.getElementById('close-withdraw-backdrop');

    btnOpenWithdraw?.addEventListener('click', () => {
        modalWithdraw?.classList.remove('hidden');
        modalWithdraw?.classList.add('flex');
        document.body.style.overflow = 'hidden';
    });

    const closeWithdraw = () => {
        modalWithdraw?.classList.add('hidden');
        modalWithdraw?.classList.remove('flex');
        document.body.style.overflow = '';
    };

    btnCloseWithdraw?.addEventListener('click', closeWithdraw);
    backdropWithdraw?.addEventListener('click', closeWithdraw);

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
                    <div class="text-center p-4">
                        <h2 class="text-xl font-black text-white uppercase tracking-tight mb-4 leading-tight">CADASTRO<br>ENVIADO!</h2>
                        <p class="text-gray-400 text-sm font-medium mb-10 leading-relaxed px-2">
                            Sua análise está em andamento. Em breve você receberá a confirmação no seu e-mail.
                        </p>
                        
                        <button id="swal-btn-ok" 
                           class="w-full py-5 text-white font-black rounded-full text-sm uppercase tracking-widest transition-all active:scale-95 shadow-lg"
                           style="background: linear-gradient(135deg, #e97eb1 0%, #4c1d95 100%);">
                           ENTENDIDO
                        </button>
                    </div>
                `,
                background: 'transparent',
                showConfirmButton: false,
                backdrop: `rgba(0,0,0,0.8)`,
                customClass: {
                    container: 'backdrop-blur-xl',
                    popup: 'glass-premium border border-white/10 rounded-[40px] p-6 w-full max-w-[380px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]'
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
