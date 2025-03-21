// Team 2
const Model = {
    app: {
        selectedPage: "dashboard",
        // pages: ["dashboard", "userProfile", "feed", "usersProfile", "accountLogin", "accountRegister"],
    },
    input: {
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
                moneySaved: 0,
            },
        ],
        comments: [
            {userIdReciever: 1, userIdSender: 0, comment: 'Hello' },
            {userIdReciever: 1, userIdSender: 2, comment: 'Hvem er du' },
            {userIdReciever: 1, userIdSender: 0, comment: 'Jeg er meg' },
        ],
        myDrinks: [{id: 1, userID: 1, drinkid: 2}],

        drinkHistory: [{
            userId: 1,
            drinkId: 1,
            dato: `dato`,
        }, {
            userId: 1,
            drinkId: 2,
            dato: `dato`,
        }, {
            userId: 1,
            drinkId: 1,
            dato: `dato`,
        }]
    }
}
