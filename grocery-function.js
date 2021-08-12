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
    groceries=sortgrocery(groceries,filters.sortby)
    
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
//sortarray
const sorting = function(groceries,filters){
    groceries = sortgrocery(groceries,filters.sortby)
    document.querySelector('.item').innerHTML = ''
    document.querySelector('.price').innerHTML = ''
    document.querySelector('.left').innerHTML = ''
    document.querySelector('.date').innerHTML = '';
    document.querySelector('.update').innerHTML = '';
    
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
        DateDisplay.textContent = moment(grocery.Item_Created).format('D MMM YYYY')
        document.querySelector('.date').appendChild(DateDisplay)
        
        const upDateDisplay = document.createElement('td')
        upDateDisplay.textContent = moment(grocery.Item_Updated).fromNow()
        document.querySelector('.update').appendChild(upDateDisplay)

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
    const groItem = document.createElement('a')
    const removeButton = document.createElement('button')

    //setup checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = check(grocery)
    document.querySelector('#remove-div').appendChild(checkbox)

    //setup item
    groItem.textContent = grocery.item
    groItem.setAttribute('href', `/groceryEdit.html#${grocery.id}`)
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

//sort
const sortgrocery = function(groceries, sortby){
    if(sortby === 'byEdited'){
        return groceries.sort(function(a,b){
            if(a.Item_Updated > b.Item_Updated){
                return -1
            }else if(a.Item_Updated < b.Item_Updated){
             return 1
         }else{
             return 0
         }
        })
    }else if(sortby === 'byCreated'){
        return groceries.sort(function(a,b){
            if(a.Item_Created > b.Item_Created){
                return -1
            }else if(a.Item_Created < b.Item_Created){
             return 1
         }else{
             return 0
         } 
        })}else if(sortby === 'alphabetical'){
            return groceries.sort(function(a,b){
                if(a.item.toLowerCase() < b.item.toLowerCase()){
                    return -1
                }else if(a.item.toLowerCase() > b.item.toLowerCase()){
                 return 1
             }else{
                 return 0
             } 
            })}else{
        return groceries
    }
 }
