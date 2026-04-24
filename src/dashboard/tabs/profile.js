/**
 * Módulo de Perfil do Usuário
 */

export default {
    render: (state) => `
        <div id="tab-profile" class="tab-pane animate-fade px-6 pt-4 pb-48">
            <div class="text-center mb-10">
                <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#f085aa] to-[#320075] mx-auto p-1 shadow-2xl mb-4">
                    <div class="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border-4 border-black">
                        <span class="material-symbols-outlined text-white text-5xl">person</span>
                    </div>
                </div>
                <h2 class="text-2xl font-black text-white uppercase tracking-tight">${state.user.name}</h2>
                <p class="text-[10px] font-black text-[#f085aa] uppercase tracking-[0.3em] mt-1">Membro ${state.user.level}</p>
            </div>

            <div class="space-y-4">
                <div class="glass-card p-6 flex justify-between items-center rounded-3xl border border-white/5">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-gray-500">mail</span>
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</span>
                    </div>
                    <span class="text-xs font-black text-white uppercase">gabriela@versiani.co</span>
                </div>

                <div class="glass-card p-6 flex justify-between items-center rounded-3xl border border-white/5">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-gray-500">id_card</span>
                        <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">Membro ID</span>
                    </div>
                    <span class="text-xs font-black text-white uppercase">${state.user.id}</span>
                </div>

                <div class="pt-6">
                    <button class="w-full py-5 bg-white/5 text-white text-[10px] font-black uppercase rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-sm">edit</span> Editar Perfil
                    </button>
                </div>
            </div>
        </div>
    `,
    init: (state) => {
        console.log("Perfil inicializado");
    }
};
