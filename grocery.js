const groceries = [{
   item: 'Milk',
   price: 15,
   left: 2
},{
    item: 'Bread',
    price: 10,
    left: 5
},{
    item: 'Sauce',
    price: 20,
    left: 6
},{
    item: 'Egg',
    price: 6,
    left: 0
}]



const filters = {
    searchText:'',
    leftItem: 0
}

const renderGrocery = function(groceries, filters){
    const filterGrocery = groceries.filter(function(grocery){
        return grocery.item.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#search-return').innerHTML = ''

    filterGrocery.forEach(function(grocery){
        const items = document.createElement('p')
        items.textContent = grocery.item
        document.querySelector('#search-return').appendChild(items)
    })
}

const summary = document.querySelector('#display').addEventListener('click',function(e){
    
    groceries.forEach(function(grocery){
        const itemDisplay = document.createElement('td')
        itemDisplay.textContent = grocery.item
        document.querySelector('.item').appendChild(itemDisplay)
        
        const priceDisplay = document.createElement('td')
        priceDisplay.textContent = grocery.price
        document.querySelector('.price').appendChild(priceDisplay)

        const leftDisplay = document.createElement('td')
        leftDisplay.textContent = grocery.left
        document.querySelector('.left').appendChild(leftDisplay)
    })
    
})

document.querySelector('#search').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderGrocery(groceries,filters)
})

document.querySelector('#addItem').addEventListener('submit',function(e){
    e.preventDefault()
    groceries.push({
        item: e.target.elements.additem.value,
        price: e.target.elements.addprice.value,
        left: e.target.elements.addquantity.value
    })
    //renderGrocery(groceries,filters)
    alert("Item Added")
    e.target.elements.additem.value = ''
    e.target.elements.addprice.value = ''
    e.target.elements.addquantity.value = ''
})






