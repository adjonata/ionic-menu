/* eslint-disable max-len */
export interface Product {
  id: string;
  name?: string;
  description?: string;
  price: number;
  images: string[];
}
export interface Categorie {
  id: string;
  name: string;
  products: Product[];
}

export const CATEGORIES: Categorie[] = [
  {
    id: '9939jfdskf23sad',
    name: 'Lanches',
    products: [
      {
        id: '60156',
        name: 'WHOPPER®',
        description:
          '<p><span style="color: rgb(245,235,220)">Pão com gergelim, maionese, alface, tomate, cebola, ketchup, picles, queijo derretido e um suculento hambúrguer de pura carne bovina. Todos esses ingredientes são cuidadosamente armazenados e preparados, para você se deliciar com um sanduíche fresquinho e de alta qualidade. Imagem meramente ilustrativa.</span></p>',
        price: 43,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_thumb_639x324-100k_2020-12-18-193933.png?mtime=20201218143933&focal=none',
        ],
      },
      {
        id: '27758',
        name: 'WHOPPER® Duplo',
        description:
          '<p>Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de queijo derretido, quatro fatias de picles, alface, tomate, cebola, maionese e ketchup. Todos esses ingredientes são cuidadosamente armazenados e preparados, para você se deliciar com um sanduíche fresquinho e de alta qualidade. Imagem meramente ilustrativa.</p>',
        price: 29,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_Duplo_thumb_639x324-100k.png?mtime=20201218150318&focal=none',
        ],
      },
      {
        id: '25457',
        name: 'WHOPPER® Rodeio',
        description:
          '<p>Quanto mais, melhor. O nosso WHOPPER®, que você já conhece, com adição de onion rings e barbecue! Impossível resistir. Imagem meramente ilustrativa.</p>',
        price: 47,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_Rodeio_thumb_639x324-100k.png?mtime=20201217144312&focal=none',
        ],
      },
      {
        id: '27604',
        name: 'WHOPPER® Furioso',
        description:
          '<p>Pão com gergelim, um suculento hambúrguer de pura carne bovina, queijo, bacon, alface, tomate, maionese, pimenta jalapeño, cebolas crocantes levemente apimentadas e um delicioso molho furioso. Imagem meramente ilustrativa.</p>',
        price: 30,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_Furioso_thumb_639x324-100k.png?mtime=20201218145405&focal=none',
        ],
      },
      {
        id: '25500',
        name: 'WHOPPER® Barbecue Bacon',
        description:
          '<p>Adicionamos no nosso WHOPPER® um delicioso molho barbecue e fatias super crocantes de bacon. Resultado: Perfeição! Imagem meramente ilustrativa.</p>',
        price: 49,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_BBQ_Bacon_thumb_639x324-100k.png?mtime=20201217150610&focal=none',
        ],
      },
      {
        id: '27889',
        name: 'WHOPPER® Jr.',
        description:
          '<p>Pão com gergelim, um saboroso hambúrguer de pura carne bovina, uma fatia de queijo derretido, duas fatias de picles, alface, tomate, cebola, maionese e ketchup. Todos esses ingredientes são cuidadosamente armazenados e preparados, para você se deliciar com um sanduíche fresquinho e de alta qualidade. Imagem meramente ilustrativa.</p>',
        price: 27,
        images: [
          'https://bk-cms-dev.s3.amazonaws.com/Whopper_jr_thumb_639x324-100k.png?mtime=20201218151412&focal=none',
        ],
      },
    ],
  },
  {
    id: '98312j1kj29sdaj12',
    name: 'Pratos de entrada e refeição',
    products: [
      {
        id: '6063951310d7ed45745b0a46',
        name: 'Anéis de Cebola',
        description: 'Porções do tamanho inteira ou meia',
        price: 15,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/be7f36da-3001-4da4-9f6c-f8814be8552c.jpg',
        ],
      },
      {
        id: '6063961610d7ed45745b0a4a',
        name: 'Calabresa Acebolada 400g',
        description: '',
        price: 24,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/dc3ce1fc-e524-4dc5-8c49-79ac5bd6cc3a.jpg',
        ],
      },
      {
        id: '6063962f10d7ed45745b0a4b',
        name: 'Porção de Frios',
        description: '',
        price: 44,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/1e842b7b-60c6-4f58-b020-0ab12b3f6542.jpeg',
        ],
      },
      {
        id: '606396d210d7ed45745b0a50',
        name: 'Mandioca',
        description: 'Porções do tamanho inteira ou meia',
        price: 9,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/186ae7d0-de80-4531-822a-82ac5c7b52b4.jpg',
        ],
      },
      {
        id: '6063970a10d7ed45745b0a54',
        name: 'Fritas',
        description: 'Porções do tamanho inteira ou meia',
        price: 14,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/e7ee352b-c007-408d-a8df-269eec139636.jpg',
        ],
      },
      {
        id: '6063978b10d7ed45745b0a58',
        name: 'Bolinho da Sogra',
        description: 'Carne, Queijo ou Misto',
        price: 17,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/fccb12bb-8072-400a-8df5-0af00925d668.jpg',
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/7671a33f-d95c-4bfb-98dc-c0a2fb29a404.jpg',
        ],
      },
    ],
  },
  {
    id: 'k29238j38fjs902js9d2kj',
    name: 'Doces',
    products: [
      {
        name: 'Caixadoce Amo Você',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: 'a41b30ef-9d6f-4e20-8ee2-9a8864255d06',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251624_yEew_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Caixadoce Feliz Aniversário',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: 'a84338f1-a37b-4a5d-aeb7-60329252ff6f',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251629_hVtl_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Caixadoce Padrão',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\nPara montar sua caixinha você deve selecionar:\nUma opção de brigadeiro e\nQuatro opções de coberturas',
        id: '8913255b-f000-44c8-87e4-1e4a25f7d4a0',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251629_xhlv_f.jpg',
        ],
        price: 31,
      },
      {
        name: 'Caixadoce Parabéns',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: 'cd153be6-8b66-4995-9194-4fb63b7ebe68',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251630_UeT2_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Caixadoce Por um Dia mais doce',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: 'bd0d476e-5957-4e6f-9f7c-19607b72cd99',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251632_SIPE_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Caixadoce Um docin pro meu Docin',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: 'a94847cf-71e2-47db-ba30-738dadb95f0f',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251635_DRjP_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Caixadoce Você Merece',
        description:
          '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
        id: '311913bf-f95c-4c79-bfd8-8e219b72807a',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251632_rxUg_f.jpg',
        ],
        price: 32,
      },
      {
        name: 'Potinho Caixadoce',
        description:
          'Potinho com 60g de brigadeiro + 1 opção de cobertura.\npara montar seu potinho você deve selecionar uma opção de brigadeiro e uma opção de cobertura',
        id: '6ad80ca3-f1df-46a1-a958-dcd457863d7f',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004021544_vEjr_0.jpg',
        ],
        price: 6,
      },
      {
        name: 'Minipotinho Caixadoce',
        description:
          'Minipotinho com 25g de brigadeiro + 1 opção de cobertura.\nPara montar seu minipotinho você deve selecionar uma opção de brigadeiro e uma opção de cobertura',
        id: '73b56d16-8b5f-490a-8332-69a33274e526',
        images: [
          'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004021547_M2YW_0.jpg',
        ],
        price: 4,
      },
    ],
  },
];

interface ProductPromotion extends Product {
  priceBase: number;
}

export interface Promotion {
  name: string;
  products: ProductPromotion[];
}

export const PROMOTION: Promotion = {
  name: 'Prato do dia',
  products: [
    {
      id: '6063970a10d7ed45745b0a54',
      name: 'Fritas',
      description: 'Porções do tamanho inteira ou meia',
      images: [
        'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/e7ee352b-c007-408d-a8df-269eec139636.jpg',
      ],
      price: 14,
      priceBase: 10,
    },
    {
      id: '25500',
      name: 'WHOPPER® Barbecue Bacon',
      description:
        '<p>Adicionamos no nosso WHOPPER® um delicioso molho barbecue e fatias super crocantes de bacon. Resultado: Perfeição! Imagem meramente ilustrativa.</p>',
      images: [
        'https://bk-cms-dev.s3.amazonaws.com/Whopper_BBQ_Bacon_thumb_639x324-100k.png?mtime=20201217150610&focal=none',
      ],
      price: 15,
      priceBase: 23,
    },
    {
      name: 'Caixadoce Amo Você',
      description:
        '130g de brigadeiro de brigadeiro + 4 opções de coberturas\npara montar sua caixinha você deve selecionar:\numa opção de brigadeiro e\nquatro opções de coberturas',
      id: 'a41b30ef-9d6f-4e20-8ee2-9a8864255d06',
      images: [
        'https://static-images.ifood.com.br/image/upload/t_low/pratos/05acaaa8-baaa-4df1-9c17-0098e1011af0/202004251624_yEew_f.jpg',
      ],
      price: 25,
      priceBase: 32,
    },
  ],
};
