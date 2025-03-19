const Model = {
    app: {
        selectedPage: "dashboard",
        pages: ["dashboard", "userProfile", "feed", "usersProfile", "accountLogin", "accountRegister"],      
    },
    input: {
        dashboard: {
            commentField: "",
            
        }
    },
    data: {
        drinks: [
            {
                id: 1,
                drinkName: 'monster',
                pricePerCan: 29.90,
                caffeinePerHundred: 30,
                canSize: 500,
                totalCaffeine: ((size / 100) * caffeinePerHundred),
            },
            {
                id: 2,
                drinkName: 'redbull',
                pricePerCan: 22.90,
                caffeinePerHundred: 30,
                litres: 0.25,
                totalCaffeine: (litres * caffeinePerHundred * 10),
            },
            {
                id: 3,
                drinkName: 'kaffe',
                pricePerCan: 40,
                caffeinePerHundred: 40,
                canSize: 500,
                totalCaffeine: ((size / 100) * caffeinePerHundred),
            },
            {
                id: 4,
                drinkName: 'battery',
                pricePerCan: 15,
                caffeinePerHundred: 32,
                canSize: 500,
                totalCaffeine: ((size / 100) * caffeinePerHundred),
            },

        ],
        drunkToday: [
            {id: 1, count: 3},
            {id: 2, count: 6},
            {id: 3, count: 4},
            {id: 4, count: 1},
            
            
        ]
    }
}

// Husk Fjern alt under etter ferdig med model
function addToDrunkToday(object) {
    // if drunktoday does not contain object.id, 
    drunkToday.push(object.id, count)
    // if drunktoday contains object.id
    let index = drunkToday.indexOf(object)
    drunkToday[index].count++;
}

function displayDrink(drink) {
    drink = drinks[drink.id];
    let html = /*HTML*/ `
    <div>Name: ${drink.name}</div>
    <div>pricePerCan: ${drink.pricePerCan}</div>
    <div>coffeineAmount: ${drink.caffeinePerHundred}</div>
    `;

}

function EmptyDrunktoday(){
    memory.push(drunktoday, dato)
    drunkToday = {}
    
}