const bots = [
    {
        id: 0,
        name: 'Gengar', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }, 
    {
        id: 1,
        name: 'Charizard', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        health: 75, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 40
            }
        ]
    }, 
    {
        id: 2,
        name: 'Blastiose', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png',
        health: 120, 
        attacks: [
            {
                id: 0, 
                damage: 30
            }, 
            {
                id: 1, 
                damage: 15
            }
        ]
    }, 
    {
        id: 3,
        name: 'Venusaur', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        health: 95, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 35
            }
        ]
    }, 
    {
        id: 4,
        name: 'Pikachu', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        health: 80, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 25
            }
        ]
    }, 
    {
        id: 5,
        name: 'Dragonite', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png',
        health: 100, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 30
            }
        ]
    }, 
    {
        id: 6,
        name: 'Gyarados', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png',
        health: 75, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 40
            }
        ]
    }, 
    {
        id: 7,
        name: 'Machamp', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png',
        health: 120, 
        attacks: [
            {
                id: 0, 
                damage: 30
            }, 
            {
                id: 1, 
                damage: 15
            }
        ]
    }, 
    {
        id: 8,
        name: 'Hitmonlee', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png',
        health: 95, 
        attacks: [
            {
                id: 0, 
                damage: 15
            }, 
            {
                id: 1, 
                damage: 35
            }
        ]
    }, 
    {
        id: 9,
        name: 'Hitmonchan', 
        imgAddress: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png',
        health: 80, 
        attacks: [
            {
                id: 0, 
                damage: 25
            }, 
            {
                id: 1, 
                damage: 25
            }
        ]
    }
]

const playerRecord = {
    wins: 0, 
    losses: 0
}

module.exports = {bots, playerRecord}