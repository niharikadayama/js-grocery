const itemElement =document.querySelector('#grocery-item')
const priceElement =document.querySelector('#grocery-price')
const leftElement =document.querySelector('#grocery-left')
const groceryId = location.hash.substring(1)
let groceries = showSavedItem()
let grocery = groceries.find(function(grocery){
    return grocery.id = groceryId
})

if(grocery === undefined){
    localStorage.assign('/index.html')
}

itemElement.value = grocery.item
priceElement.value = grocery.price
leftElement.value = grocery.left


itemElement.addEventListener('input',function(e){
    grocery.item = e.target.value
    grocery.Item_Updated = moment().valueOf()
    SaveItems(groceries)
})

priceElement.addEventListener('input',function(e){
    grocery.price = e.target.value
    grocery.Item_Updated = moment().valueOf()
    SaveItems(groceries)
})

leftElement.addEventListener('input',function(e){
    grocery.left = e.target.value
    grocery.Item_Updated = moment().valueOf()
    SaveItems(groceries)
})

window.addEventListener('storage',function(e){
    if(e.key === groceries){
        groceries = JSON.parse(e.newValue)

        let grocery = groceries.find(function(grocery){
            return grocery.id = groceryId
        })
        
        if(grocery === undefined){
            localStorage.assign('/index.html')
        }
        
        itemElement.value = grocery.item
        priceElement.value = grocery.price
        leftElement.value = grocery.left
        
    }
})