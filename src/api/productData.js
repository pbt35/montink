const productData = {
    title: "Camiseta Estilosa",
    variants: {
      sizes: ["P", "M", "G", "GG"],
      colors: [
        { name: "Azul", image: "/images/azul.jpg", price: 97.90 },
        { name: "Preta", image: "/images/preta.webp", price: 92.99 },
        { name: "Verde", image: "/images/verde.webp", price: 95.70 },
        { name: "Amarela", image: "/images/amarela.webp", price: 89.99 },
      ]
    },
    features: [
      "Material leve e confortável",
      "Ideal para uso diário ou ocasiões especiais",
      "Costura reforçada para maior durabilidade",
      "Disponível em diversas cores e tamanhos",
      "Design moderno que combina com qualquer estilo"
    ],
    recommended: [
      {
        title: "Regata Básica",
        image: "/images/regata.png",
        price: 39.90
      },
      {
        title: "Moletom Bege",
        image: "/images/moletom.webp",
        price: 124.99
      },
      {
        title: "Casaco Azul",
        image: "/images/casaco.jpg",
        price: 239.99
      }
    ]
  };
  
  export default productData;
  