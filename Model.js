// Team 2
const Model = {
    app: {
        selectedPage: "dashboard",
        pages: ["dashboard", "userProfile", "feed", "usersProfile", "accountLogin", "accountRegister"],
    },
    input:   {
        register: {
            userName: null,
            password: null,
            email: null,   
        },
        login: {
            password: null,
            email: null,   
        },
        dashboard: {
            commentField: null,
        },

        profile: {
            information: {
                name: null,
                email: null,
            },
            newDrink: {
                drinkname: null,
                price: 0,
                size: 0,
                caffeine: 0
            },
            caffeineGoal: {
                caffeineDayGoal: 0,
                priceDayGoal: 0,
                caffeineBefore: 0,
                priceBefore: 0,
            }
        },
        feed: {
            searchField: null,
            
        },
        User: {
            UserId: 0,
            commentField: null,
        }
        
    },
    data: {
        drinks: [
            {
                id: 1,
                drinkName: 'monster',
                pricePerDrink: 29.90,
                totalCaffeine: 150,
                drinkSize: 500,
            },
            {
                id: 2,
                drinkName: 'redbull',
                pricePerDrink: 22.90,
                totalCaffeine: 75,
                drinkSize: 250,
            },
            {
                id: 3,
                drinkName: 'kaffe',
                pricePerDrink: 40,
                totalCaffeine: 200,
                drinkSize: 500,
            },
            {
                id: 4,
                drinkName: 'battery',
                pricePerDrink: 15,
                totalCaffeine: 160,
                drinkSize: 500,
            },

        ],
        users: [
            {
                id: 1,
                name: 'Martin',
                mail: 'Mrtn@fakemail.com',
                password: '123',
                myDrinks: [],
                drunkToday: [
                    { id: 1, count: 3 },
                    { id: 2, count: 6 },
                    { id: 3, count: 4 },
                    { id: 4, count: 1 },
                ],
                caffeineHistory: [
                    {
                        totalCaffeineAmount: 2000,
                        dato: { year: 2025, month: 3, day: 20 }
                    },
                    {
                        totalCaffeineAmount: 700,
                        dato: { year: 2025, month: 3, day: 21 }
                    },
                ],
                moneySaved: 0,
            }
        ]
    }
}
