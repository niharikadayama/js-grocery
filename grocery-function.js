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

//remove function
const removeItem = function(id){
    const groceryIndex = groceries.findIndex(function(grocery){
        return grocery.id === id
    })
    
    if (groceryIndex > -1) {
        groceries.splice(groceryIndex, 1)
    }
    
}

//checking items in stock
const check = function(grocery){
   if(grocery.left>0){
       return false
   }else{
       return true
   }
}

const generateDOM = function(grocery){

    //document.querySelector('#remove-div').innerHTML = ''

    const checkbox = document.createElement('input')
    const groItem = document.createElement('span')
    const removeButton = document.createElement('button')

    //setup checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = check(grocery)
    document.querySelector('#remove-div').appendChild(checkbox)

    //setup item
    groItem.textContent = grocery.item
    document.querySelector('#remove-div').appendChild(groItem)

    //setup button
    removeButton.textContent = 'x'
    document.querySelector('#remove-div').appendChild(removeButton)
    removeButton.addEventListener('click',function(){
        removeItem(grocery.id)
        SaveItems(groceries)
        renderGrocery(groceries,filters)
    })
}


