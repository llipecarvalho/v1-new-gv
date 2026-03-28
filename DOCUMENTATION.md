# 📖 Documentação Técnica: Ecossistema Versiani V2

Este documento detalha as decisões arquiteturais, o design system e as otimizações aplicadas no projeto **Versiani — Clube de Benefícios da Elite**.

---

## 🏗️ 1. Arquitetura do Projeto (Vite MPA)

O projeto foi construído utilizando **Vite** como ferramenta de build, configurado no modo **Multi-Page Application (MPA)** para servir `index.html`, `dashboard.html` e `auth.html` de forma modular.

### Fluxo de Build (Vite Config):
*   As páginas são entradas (`inputs`) independentes.
*   Os ativos estáticos (SVG, Imagens) são servidos a partir da raiz `/`.
*   O bundle final (`dist/`) é otimizado para navegadores modernos, eliminando redundâncias de CSS e JS.

---

## 🎨 2. Design System: Glassmorphism de Luxo

A estética do Clube Versiani baseia-se na transparência e profundidade, utilizando camadas de **Glassmorphism**.

### Tokens de Identidade:
*   **Cor Primária:** `#f085aa` (Versiani Pink) - Usada em CTAs críticos e pontos de celebração.
*   **Background (Canvas):** `#050505` (Deep Black) - Garante o contraste de luxo.
*   **Glass Card (`.glass-premium`):** 
    *   `backdrop-filter: blur(25px) saturate(180%)`.
    *   `border: 1px solid rgba(255, 255, 255, 0.1)`.
*   **Typografia:** `Outfit` (Headings) e `Inter` (Body) para legibilidade e modernidade.

---

## ⚡ 3. Otimização de Performance (PageSpeed 90+)

A estrutura foi "blindada" contra os principais vilões do Lighthouse:

1.  **Eliminação de CLS (Cumulative Layout Shift):**
    *   Todas as imagens possuem atributos `width` e `height` explícitos.
    *   Containers de carrossel possuem altura mínima garantida.
2.  **SEO & Landmarks Semânticos:**
    *   Uso obrigatório da tag `<main>` para envolver o conteúdo estratégico.
    *   Metas-tags dinâmicas para indexação correta.
3.  **Acessibilidade (A11Y):**
    *   `aria-labels` em todos os botões de ação e modais.
    *   Contraste de cores validado para legibilidade VIP.

---

## 🎲 4. Gamificação e Retenção (LTV)

O Dashboard foi projetado para elevar a dopamina da usuária e incentivar a recorrência.

*   **Sistema de Celebração:** Utilização da biblioteca `canvas-confetti` disparada em gatilhos de resgate de saldo na Loja e Carteira.
*   **Toast System:** Notificações flutuantes assíncronas no canto superior direito para feedback imediato de ações (ex: "Link Copiado", "Cota Adquirida").
*   **Custom Luxury Select:** Remoção do select nativo do navegador para um seletor customizado de objetivos (iPhone, Viagem, etc), mantendo a integridade visual da marca.

---

## 🛠️ 5. Manutenção e Próximos Passos

### Integração Backend (Roadmap):
*   Conectar formulários de Perfil (Dashboard) à API do Supabase/PostgreSQL.
*   Substituir valores estáticos (Saldo, Comissões) por estados reativos dos dados do usuário.
*   Implementar Webhooks de pagamento (Stripe/Pix) para liberar cotas automaticamente.

### Comandos Úteis:
*   **Adicionar nova página:** Criar arquivo `.html` e registrar no `vite.config.js`.
*   **Mudar Cor de Marca:** Alterar a variável `--v-rose` no `:root` do CSS.

---
© 2026 Versiani. Todos os Direitos Reservados. **Experiência Blindada por Design.**
