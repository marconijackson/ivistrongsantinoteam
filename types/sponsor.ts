export type Sponsor = {
  id: string; // slug único, ex: "suplementos-xyz"
  name: string; // Nome da empresa ou prestador
  logo: string; // Caminho da imagem, ex: "/logos/suplementos-xyz.png"
  whatsapp: string; // Número com DDI, ex: "5581999999999"
  instagram: string; // Usuário sem @, ex: "suplementosxyz"
  discount?: string; // Texto completo do desconto, ex: "20% de desconto" ou "15% de desconto no pacote escova"
  active: boolean; // Se aparece na página pública
};
