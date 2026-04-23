# Operação de Cupons do Clube em Loja Shopify

## Visão Geral

Na operação da loja Shopify, serão criadas **coleções ocultas** — sem exibição pública nas lojas — destinadas a cada tipo de cupom.

Exemplos de coleções:

- **Cupom 20**
- **Cupom 50**
- **Cupom 100**
- **Cupom 200**

Cada coleção reúne os produtos elegíveis para aquele respectivo benefício.  
Ou seja, todos os produtos dentro de uma coleção específica estarão aptos à aplicação do cupom correspondente.

---

## Estrutura Operacional

### 1. Criação das coleções ocultas

Serão criadas coleções exclusivas para cada faixa de cupom, com acesso direcionado apenas pelo fluxo do clube.

Exemplo de estrutura:

- `colecao_cupom_20`
- `colecao_cupom_50`
- `colecao_cupom_100`
- `colecao_cupom_200`

Essas coleções não devem aparecer na navegação pública da loja.

---

## Fluxo de Resgate

### 2. Escolha do cupom pelo assinante

O assinante do clube escolhe o benefício desejado conforme sua pontuação ou regra de resgate disponível.

### 3. Exibição e cópia do código

Após o resgate:

- o código do cupom é exibido ao assinante;
- o código é automaticamente copiado para a área de transferência.

### 4. Redirecionamento automático

Em seguida, o assinante é redirecionado para a coleção correspondente, já com o código associado no link de acesso.

---

## Exemplo de Fluxo

### Resgate de cupom de R$ 20

- **Código exibido:** `2MZBYQFRQPWB`
- o código é copiado para a área de transferência;
- o assinante é redirecionado para:

```text
https://6be6du-45.myshopify.com/discount/2MZBYQFRQPWB?redirect=/collections/colecao_cupom_20

senha: 123456
```

---

## Lógica da Operação

A lógica operacional será:

1. o clube define o tipo de cupom resgatado;
2. o sistema identifica a coleção correspondente;
3. o código é exibido ao usuário;
4. o código é copiado automaticamente;
5. o usuário é enviado para a coleção correta com o código embutido no link.

---

## Objetivo

Essa estrutura simplifica a operação ao:

- segmentar os produtos elegíveis por faixa de cupom;
- evitar regras complexas de exibição dentro da loja;
- conduzir o assinante diretamente para uma vitrine compatível com o benefício resgatado;
- reduzir atrito no uso do cupom.

---

## Exemplo de Mapeamento

| Tipo de cupom | Coleção de destino |
|---|---|
| R$ 20 | `colecao_cupom_20` |
| R$ 50 | `colecao_cupom_50` |
| R$ 100 | `colecao_cupom_100` |
| R$ 200 | `colecao_cupom_200` |

---

## Resumo

A operação será baseada em coleções ocultas por faixa de benefício.  
Quando o assinante resgatar um cupom, ele visualizará o código, terá esse código copiado automaticamente e será redirecionado para a coleção correspondente, com o benefício já vinculado ao link de acesso.


## Responsabilidades

### Responsabilidade do time da loja

Será responsabilidade do time da loja controlar os produtos que estarão disponíveis para aplicação dos cupons.

Isso inclui:

- definir quais produtos entram em cada coleção de cupom;
- manter essa curadoria atualizada;
- garantir que cada coleção reflita corretamente os produtos elegíveis para o respectivo benefício.

### Responsabilidade do sistema

Será responsabilidade do sistema garantir o controle de geração, resgate e aplicação do cupom.

Isso inclui:

- gerar os códigos de cupom;
- controlar disponibilidade e uso de cada código;
- associar corretamente cada cupom à coleção correspondente;
- exibir o código no momento do resgate;
- copiar o código para a área de transferência;
- redirecionar o assinante para a coleção correta com o cupom aplicado no fluxo definido.

