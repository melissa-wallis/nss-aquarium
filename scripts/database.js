const database = {
    fish: [
        {
            image:'the-mollie-1380726-hero-b5727abe24d9464c80e690ec88034853.webp',
            name: 'Phillip',
            species: "Poecilia Sphenops",
            length: 2,
            location: 'Ocean',
            food: 'humans'
        },

        {
            image: 'Goldfish-Image.jpeg',
            name: 'Crystal',
            species: "Carassius Auratus",
            length: 4,
            location: 'fish bowl',
            food: 'toenails'
        },

        {
            image: 'siamese-fighting-fish-bettas-1378308-hero-f459084da1414308accde7e21001906c.jpeg',
            name: 'Persephone',
            species: "Betta Splendens",
            length: 3,
            location: 'Ocean',
            food: "pasta",

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({ ...fish }))
}