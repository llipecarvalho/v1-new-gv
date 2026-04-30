/**
 * API Service - Central de Dados do Clube Versiani
 * Aqui você gerencia todos os conteúdos que aparecem no dashboard.
 */

const DATA = {
    // MIMOS E CUPONS (Aparecem na Home e na Loja)
    rewards: [
        // SKIN COUPONS
        {
            id: 'skin-20',
            type: 'coupon',
            name: 'Cupom R$ 20 OFF',
            cost: 20,
            category: 'skin',
            code: '2MZBYQFRQPWB',
            minPurchase: 200,
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-[#f085aa] to-[#320075]'
        },
        {
            id: 'skin-50',
            type: 'coupon',
            name: 'Cupom R$ 50 OFF',
            cost: 50,
            category: 'skin',
            code: 'SKIN50OFF',
            minPurchase: 500,
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-[#f085aa] to-[#320075]'
        },
        {
            id: 'skin-100',
            type: 'coupon',
            name: 'Cupom R$ 100 OFF',
            cost: 100,
            category: 'skin',
            code: 'SKIN100OFF',
            minPurchase: 1000,
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-[#f085aa] to-[#320075]'
        },
        {
            id: 'skin-200',
            type: 'coupon',
            name: 'Cupom R$ 200 OFF',
            cost: 200,
            category: 'skin',
            code: 'SKIN200OFF',
            minPurchase: 2000,
            image_url: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-[#f085aa] to-[#320075]'
        },
        // SWIM COUPONS
        {
            id: 'swim-20',
            type: 'coupon',
            name: 'Cupom R$ 20 OFF',
            cost: 20,
            category: 'swim',
            code: '2MZBYQFRQPWB',
            minPurchase: 100,
            image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-blue-400 to-blue-600'
        },
        {
            id: 'swim-50',
            type: 'coupon',
            name: 'Cupom R$ 50 OFF',
            cost: 50,
            category: 'swim',
            code: 'SWIM50OFF',
            minPurchase: 250,
            image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-blue-400 to-blue-600'
        },
        {
            id: 'swim-100',
            type: 'coupon',
            name: 'Cupom R$ 100 OFF',
            cost: 100,
            category: 'swim',
            code: 'SWIM100OFF',
            minPurchase: 500,
            image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-blue-400 to-blue-600'
        },
        {
            id: 'swim-200',
            type: 'coupon',
            name: 'Cupom R$ 200 OFF',
            cost: 200,
            category: 'swim',
            code: 'SWIM200OFF',
            minPurchase: 1000,
            image_url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
            gradient: 'from-blue-400 to-blue-600'
        },
        // HIGHLIGHT
        {
            id: 'bolsa-salvatore',
            type: 'raffle_highlight',
            name: 'Bolsa Salvatore',
            status: 'ATUAL',
            category: 'clube',
            image_url: '/src/assets/bolsa.png',
            link: '#hub'
        }
    ],

    // SORTEIOS (Aparecem na aba Hub)
    raffles: [
        {
            id: 'future-ferragamo',
            title: 'Salvatore Ferragamo',
            status: 'active',
            date: '10/06',
            image: '/src/assets/bolsa.png',
            imageDesktop: '/src/assets/bolsadesktop.png',
            numbers: 150
        },
        {
            id: 'active-noronha',
            title: 'Fernando de Noronha',
            status: 'finished',
            date: '25/05',
            image: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=400',
            numbers: 12
        },
        {
            id: 'active-maldivas',
            title: 'Viagem Maldivas',
            status: 'finished',
            date: '15/05',
            image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=400&auto=format',
            numbers: 8
        },
        {
            id: 'active-iphone',
            title: 'iPhone 16 Pro Max',
            status: 'finished',
            date: '30/04',
            image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=400&auto=format',
            numbers: 24
        },
        {
            id: 'active-macbook',
            title: 'MacBook Pro M3 Max',
            status: 'finished',
            date: '15/04',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format',
            numbers: 15
        },
        {
            id: 'active-rolex',
            title: 'Rolex Submariner',
            status: 'finished',
            date: '30/03',
            image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400&auto=format',
            numbers: 10
        },
        {
            id: 'active-porsche',
            title: 'Porsche Macan',
            status: 'finished',
            date: '15/03',
            image: 'https://images.unsplash.com/photo-1503376713203-d6c29c8e8334?q=80&w=400&auto=format',
            numbers: 5
        }
    ],

    // GANHADORAS (Aparecem na aba Hub > Ganhadoras)
    winners: [
        {
            name: 'Karoline',
            secondary: 'K********************',
            prize: 'Fernando de Noronha',
            luckyNumber: '54636',
            location: 'Manaus, AM',
            date: '25/05',
            cpf: '***.***.842-60',
            category: 'Sorteio Realizado'
        },
        {
            name: 'Gabriela',
            secondary: 'G********************',
            prize: 'Viagem Maldivas',
            luckyNumber: '88291',
            location: 'São Paulo, SP',
            date: '15/05',
            cpf: '***.***.341-12',
            category: 'Sorteio Realizado'
        },
        {
            name: 'Luiza',
            secondary: 'L********************',
            prize: 'iPhone 16 Pro Max',
            luckyNumber: '12733',
            location: 'Rio de Janeiro, RJ',
            date: '30/04',
            cpf: '***.***.789-00',
            category: 'Sorteio Realizado'
        }
    ]
};

export const api = {
    getRewards: () => Promise.resolve(DATA.rewards),
    getRaffles: () => Promise.resolve(DATA.raffles),
    getWinners: () => Promise.resolve(DATA.winners),
    
    // Simula resgate de cupom
    redeemReward: (id) => {
        const reward = DATA.rewards.find(r => r.id === id);
        return Promise.resolve(reward);
    }
};
