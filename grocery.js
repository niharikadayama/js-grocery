let groceries = showSavedItem()

const filters = {
    searchText:'',
    leftItem: 0
}

//display-button
const summary = document.querySelector('#display').addEventListener('click',function(e){
    document.querySelector('.item').innerHTML = ''
    document.querySelector('.price').innerHTML = ''
    document.querySelector('.left').innerHTML = ''
    document.querySelector('.date').innerHTML = '';
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

        const DateDisplay = document.createElement('td')
        DateDisplay.textContent = grocery.date
        document.querySelector('.date').appendChild(DateDisplay)

    })
})

//search-bar
document.querySelector('#search').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderGrocery(groceries,filters)
})

//
document.querySelector('#addItem').addEventListener('submit',function(e){
    e.preventDefault()
    groceries.push({
        id: uuidv4(),
        item: e.target.elements.additem.value,
        price: e.target.elements.addprice.value,
        left: e.target.elements.addquantity.value,
        date: e.target.elements.adddate.value
    })
    SaveItems(groceries)
    renderGrocery(groceries,filters)
    
    
    alert("Item Added")
    e.target.elements.additem.value = ''
    e.target.elements.addprice.value = ''
    e.target.elements.addquantity.value = ''
    e.target.elements.adddate.value = ''
    
})

document.querySelector('#remove').addEventListener('click',function(){
    groceries.forEach(function(grocery){
        generateDOM(grocery)
    })
})





