# CLAUDE.md — Página de Patrocinadores

> Sempre responda em **português brasileiro**.

---

## Visão geral do projeto

Página web para exibir patrocinadores ("Parceiros") de fisiculturistas. Cada patrocinador é uma empresa ou prestador de serviço que apoia atletas. A página exibe os patrocinadores em um grid. Não há painel admin — a gestão dos dados é feita diretamente pelo Claude Code (editando `data/sponsors.json` e `public/logos/`) a pedido do usuário.

---

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilização:** Tailwind CSS
- **Deploy:** Vercel
- **Linguagem:** TypeScript

---

## Estrutura de pastas

```
/
├── app/
│   ├── page.tsx               # Página pública com o grid de patrocinadores
│   └── layout.tsx
├── components/
│   ├── SponsorCard.tsx        # Card individual de patrocinador
│   └── SponsorGrid.tsx        # Grid de patrocinadores
├── data/
│   └── sponsors.json          # Dados dos patrocinadores (fonte de verdade)
├── public/
│   └── logos/                 # Logos dos patrocinadores (500x500px, PNG ou JPG)
└── types/
    └── sponsor.ts             # Tipo TypeScript do patrocinador
```

---

## Modelo de dados

```ts
// types/sponsor.ts
export type Sponsor = {
  id: string;           // slug único, ex: "suplementos-xyz"
  name: string;         // Nome da empresa ou prestador
  logo: string;         // Caminho da imagem, ex: "/logos/suplementos-xyz.png"
  whatsapp: string;     // Número com DDI, ex: "5581999999999"
  instagram: string;    // Usuário sem @, ex: "suplementosxyz"
  discount?: string;    // Texto completo do desconto, ex: "20% de desconto" ou "15% de desconto no pacote escova"
  active: boolean;      // Se aparece na página pública
};
```

### Formato dos campos `whatsapp` e `instagram`

- **`whatsapp`:** somente dígitos, sempre com DDI `55` + DDD + número, sem espaços, parênteses, traços ou o sinal `+`. Ex: o número informado como `(81) 98262-9899` vira `"5581982629899"`. Esse formato é obrigatório porque o link é montado como `https://wa.me/{whatsapp}`.
- **`instagram`:** apenas o nome de usuário, sem `@` e sem URL. Ex: `"dr.kleberleite"`, não `"@dr.kleberleite"`. Esse formato é obrigatório porque o link é montado como `https://instagram.com/{instagram}`.

---

## Layout do card (página pública)

Cada card exibe:
- **Lado esquerdo:** nome do patrocinador, ícone do WhatsApp com link `https://wa.me/{whatsapp}`, ícone do Instagram com link `https://instagram.com/{instagram}`
- **Lado direito:** logo exibida em 200×200px (arquivo fonte em 500×500px)
- **Rodapé (se houver `discount`):** faixa destacada com "🎁 {discount}" (o campo já contém o texto completo, ex: "20% de desconto") — só aparece quando o patrocinador tem desconto cadastrado

Os cards são organizados em um **grid responsivo** (1 coluna no mobile, 2 no tablet, 3 no desktop).

---

## Gestão de patrocinadores

Não existe painel admin. Quando o usuário quiser adicionar, editar, ativar/desativar ou remover um patrocinador, o Claude Code edita diretamente `data/sponsors.json` e, se houver logo nova, salva o arquivo em `public/logos/` (500×500px). Depois, commitar e fazer push para `main` para publicar (ver [Deploy](#deploy)).

---

## Convenções de código

- Componentes em **PascalCase**, funções utilitárias em **camelCase**
- Preferir **Server Components** quando não houver interatividade
- Usar `'use client'` apenas quando necessário (formulários, estado)
- Tailwind puro — sem CSS modules ou styled-components
- Sem bibliotecas de UI (sem shadcn, sem MUI) — componentes próprios
- Imagens via `next/image` com `width={200}` e `height={200}` (o Next.js otimiza a partir do arquivo 500×500px)

---

## Comandos úteis

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run build     # Build de produção
npm run lint      # Verifica erros de lint
```

---

## Deploy

- Plataforma: **Vercel**
- Branch de produção: `main`
- Variáveis de ambiente: nenhuma necessária na versão inicial
- ⚠️ **Fluxo de atualização de patrocinadores:** como a Vercel não permite gravação persistente em disco em runtime, qualquer alteração em `data/sponsors.json` ou `public/logos/` é feita localmente (pelo Claude Code, a pedido do usuário) e depois commitada + enviada com push para `main` para refletir em produção.

---

## O que NÃO fazer

- Não usar banco de dados na v1 — os dados ficam em `sponsors.json`
- Não recriar um painel admin — a gestão dos patrocinadores é feita pelo Claude Code direto nos arquivos
- Não usar bibliotecas de componentes externas
- Não criar rotas de API desnecessárias
