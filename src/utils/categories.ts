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
    id: '9939jfdskf231231312sad',
    name: 'Lanches',
    products: [
      {
        id: '6091b3a7083f50002f1053f1',
        name: 'Mr. Salada',
        description: 'Hambúrguer artesanal, molho caseiro, tomate, alface.',
        price: 12,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/246b493d-fa97-4ebb-922b-95161c262755.jpg',
        ],
      },
      {
        id: '6091c1b7083f50002f1053f6',
        name: 'Mr. Alcatra',
        description:
          'Hambúrguer artesanal, alcatra, molho caseiro, tomate, alface, cheddar e queijo e gergelim.',
        price: 18,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/8e936c30-3982-40e3-8164-460bfb54fd8e.jpg',
        ],
      },
      {
        id: '6091c27f083f50002f1053f9',
        name: 'Mr. Bacon',
        description:
          'Hambúrguer artesanal, molho caseiro, bacon, cheddar, molho de alho, gergelim.',
        price: 17,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/b4bb6171-1008-47ed-b95b-fcff03fe456d.jpg',
        ],
      },
      {
        id: '6091c2ee083f50002f1053fc',
        name: 'Mr. Duplo',
        description:
          '2x Hambúrguer artesanais, cebola caramelizada, cheddar, queijo prato, maionese.',
        price: 22,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/598d3516-4480-4d28-bf9e-92e1a128642e.jpg',
        ],
      },
      {
        id: '89328823jdfs0dsj812jdsa82',
        name: 'Mr. Mix',
        description:
          'Hamburgúer artesanal, cebola roxa, cheddar, queijo prato, alface, bacon, maionese, gergelim.',
        price: 24,
        images: [
          'https://images.unsplash.com/photo-1614602638662-c7c1f55c33f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        ],
      },
    ],
  },
  {
    id: '98312j1kj29sdasdgb129d12aj12',
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
    id: 'k29238j38fjs902js9dasdji12kj',
    name: 'Sobremesas',
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
  {
    id: '1asdh9u129udasun9137813asdj',
    name: 'Bebidas',
    products: [
      {
        id: '6091d42f083f50002f105427',
        name: 'Suco de laranja.',
        description: 'Natural ou cremoso',
        price: 12,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/90ec5592-5e54-4188-a197-a01dc377d8fd.jpg',
        ],
      },
      {
        id: '6091d4f6083f50002f105444',
        name: 'Suco de morango',
        description: 'Natural ou cremoso.',
        price: 12,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/585c2ab2-cf34-49e3-9dcf-0d4c1e02fc43.jpg',
        ],
      },
      {
        id: '6091d5ef083f50002f105452',
        name: 'Limonada',
        description: null,
        price: 12,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/f8ade435-22d8-4f0a-b80a-82aeefcad312.jpg',
        ],
      },
      {
        id: '6091d660083f50002f105455',
        name: 'Suco de frutas cítricas',
        description: 'Natural ou cremoso.',
        price: 12,
        images: [
          'https://yupsy-products-staging.s3.us-east-2.amazonaws.com/ffc27640-487f-4e4e-b3e8-ab23c249c7e5.jpg',
        ],
      },
      {
        id: '12kdsa012kdas912jds9a1kj',
        name: 'Suco de maracujá',
        description: 'Natural ou cremoso.',
        price: 13,
        images: [
          'https://octoshop.sfo2.digitaloceanspaces.com/lojas/2marias/uploads_produto/suco-de-maracuja-5cdd87ba01239.jpg',
        ],
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
