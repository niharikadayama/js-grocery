//Function to Fetch stored data
const showSavedItem = function(){
    const groceryJson = localStorage.getItem('groceries')
    if(groceryJson !==null){
        return JSON.parse(groceryJson)
    }else{
        return []
    }
}

//Function to save data to local storage
const SaveItems = function(groceries){
    localStorage.setItem('groceries',JSON.stringify(groceries))
}

//Render App
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
