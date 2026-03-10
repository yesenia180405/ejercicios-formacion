export interface Product {
    id: number,
    image: string,
    title: string,
    description: string,
    price: Number
}

export const mockProducts: Product[] = [
    {
        id: 1,
        image: 'https://static.fnac-static.com/multimedia/Images/FR/NR/84/a8/bf/12560516/1540-1/tsp20220504162152/Proof-Standard-Edition-Coffret.jpg',
        title: 'Proof',
        description: 'Is a 3-disc anthology album by BTS, summarizing their career with hits like "Dynamite" and "Butter," plus new tracks including "Yet To Come (The Most Beautiful Moment)',
        price: 79.99
    },
    {
        id: 2,
        image: 'https://images.genius.com/e8c0688c96fd1453836c280b54ac36e8.500x500x1.png',
        title: 'Arirang',
        description: 'The album centers on the traditional Korean folk song "Arirang," symbolizing the members roots and reflection on their careers',
        price: 28.99
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPe3GMRTBExbYG-vKgUzVuPKeTk37bXH1_QA&s',
        title: 'Love Yourselft:Tear',
        description: 'explores the dark, painful, and agonizing aspects of separation and toxic love',
        price: 39.99
    },
]

