/**
 * Maestro do Dashboard V3
 * Gerencia o estado global e a navegação entre módulos (tabs)
 */

import { api } from '../services/api.js';

// Estado Global
export const state = {
    user: {
        name: "Gabriela Versiani",
        points: 1240,
        wallet: 1540.50,
        level: "Bronze",
        id: "#001"
    },
    currentTab: 'home',
    collections: {
        rewards: [],
        raffles: [],
        winners: []
    }
};

// Mapeamento de Módulos
const tabModules = {
    home: () => import('./tabs/home.js'),
    store: () => import('./tabs/store.js'),
    hub: () => import('./tabs/hub.js'),
    plans: () => import('./tabs/plans.js'),
    network: () => import('./tabs/network.js'),
    rewards: () => import('./tabs/rewards.js'), 
    wallet: () => import('./tabs/wallet.js'),
    'raffle-purchase': () => import('./tabs/raffle-purchase.js'),
};

/**
 * Inicialização do Dashboard
 */
async function init() {
    console.log("Dashboard V3 Inicializado 🚀");
    
    // Carrega dados iniciais da API
    try {
        state.collections.rewards = await api.getRewards();
        state.collections.raffles = await api.getRaffles();
        state.collections.winners = await api.getWinners();
    } catch (err) {
        console.error("Falha ao carregar dados da API:", err);
    }

    setupEventListeners();
    updatePointsUI();
    
    // Verifica se já existe uma aba na URL (Ex: #store)
    const initialTab = window.location.hash.replace('#', '') || 'home';
    switchTab(initialTab);

    // Escuta mudanças na URL (botão voltar/avançar do navegador)
    window.addEventListener('popstate', () => {
        const tabId = window.location.hash.replace('#', '') || 'home';
        switchTab(tabId);
    });
}

/**
 * Gerencia a troca de abas
 */
export async function switchTab(tabId) {
    if (!tabModules[tabId]) {
        console.warn(`Aba "${tabId}" ainda não foi modularizada.`);
        return;
    }

    const appContent = document.getElementById('app-content');
    const bottomNav = document.querySelector('nav.fixed.bottom-0');
    
    // Gerencia visibilidade da bottom bar
    if (tabId === 'raffle-purchase') {
        bottomNav?.classList.add('hidden');
    } else {
        bottomNav?.classList.remove('hidden');
    }
    
    // Feedback visual de carregamento
    appContent.innerHTML = `
        <div class="flex items-center justify-center h-[60vh]">
            <div class="animate-spin material-symbols-outlined text-[#f085aa] text-4xl">sync</div>
        </div>
    `;

    try {
        // Carrega o módulo dinamicamente
        const module = await tabModules[tabId]();
        const tabData = module.default || module;
        
        // Renderiza o HTML da aba
        appContent.innerHTML = tabData.render(state);
        
        // Atualiza a URL (Hash)
        window.location.hash = tabId;

        // Executa lógicas de inicialização da aba (event listeners, etc)
        if (tabData.init) tabData.init(state);

        // Atualiza UI do menu inferior
        updateNavigationUI(tabId);
        state.currentTab = tabId;
        window.scrollTo(0, 0);

    } catch (error) {
        console.error("Erro ao carregar aba:", error);
        appContent.innerHTML = `<div class="p-10 text-center text-red-500 font-bold">Erro ao carregar conteúdo.</div>`;
    }
}

/**
 * Utilitários de UI
 */
function updateNavigationUI(activeTabId) {
    document.querySelectorAll('.nav-item, .center-btn').forEach(btn => {
        const tab = btn.getAttribute('data-tab');
        if (tab === activeTabId) {
            btn.classList.add('active', 'text-[#f085aa]');
            btn.classList.remove('text-gray-500');
        } else {
            btn.classList.remove('active', 'text-[#f085aa]');
            btn.classList.add('text-gray-500');
        }
    });
}

export function updatePointsUI() {
    const points = state.user.points.toLocaleString('pt-BR');
    document.querySelectorAll('.points-display').forEach(el => {
        el.textContent = `${points} pts`;
    });
}

/**
 * Gerencia a Sidebar (Menu Lateral)
 */
export function toggleMenu() {
    const menu = document.getElementById('side-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const content = document.getElementById('menu-content');
    const isVisible = !menu.classList.contains('invisible');

    if (isVisible) {
        backdrop.classList.add('opacity-0');
        content.classList.add('-translate-x-full');
        setTimeout(() => { menu.classList.add('invisible'); }, 300);
        document.body.style.overflow = '';
    } else {
        menu.classList.remove('invisible');
        setTimeout(() => { 
            backdrop.classList.remove('opacity-0'); 
            content.classList.remove('-translate-x-full'); 
        }, 10);
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Gerencia o Modal de Logout
 */
window.openLogoutModal = openLogoutModal;
window.closeLogoutModal = closeLogoutModal;

export function openLogoutModal() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

export function closeLogoutModal() {
    const modal = document.getElementById('logout-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }
}

/**
 * Listeners Globais
 */
function setupEventListeners() {
    // Menu Hamburguer
    document.getElementById('menu-toggle-btn')?.addEventListener('click', toggleMenu);
    document.getElementById('menu-backdrop')?.addEventListener('click', toggleMenu);

    // Itens da Sidebar
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
            toggleMenu(); // Fecha o menu após clicar
        });
    });

    // Menu Inferior
    document.querySelectorAll('[data-tab]:not(.sidebar-item)').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Logout (Acionado via onclick no HTML)
}

// Iniciar app
document.addEventListener('DOMContentLoaded', init);
