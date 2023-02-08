const title=document.querySelector('.Title')
const calories=document.querySelector('.Calories')
const ingredients=document.querySelector('.Ingredients')
const filter=document.querySelector('.Filter')
const main=document.querySelector('.main')




let arr=JSON.parse(localStorage.getItem('recipes'))
function getData(data){

    main.innerHTML=``
    data.map(item=>{
        main.innerHTML+=`
<div class="box">
   <img src="${item.image}" alt="">
      <h4>Food Title: ${item.FoodTitle}</h4>
      <p>Description: ${item.Description}</p>
      
      <div>Ingredients:${item.ingredients.join(",")}</div>
      
      <h4>Calories: ${item.calories}</h4>
</div>
  
    
    `
    })

}
getData(arr)
filter.onclick=()=>{
    filters()

}
function filters(){
    console.log(arr)
    let filtered=arr.filter(item=>title.value==='' ?item.FoodTitle:item.FoodTitle===title.value)

let calFilter=filtered.filter(item=>calories.value===''?item.calories:item.calories===calories.value)
let ingFilter=calFilter.filter(item=>ingredients.value===''?item.ingredients:item.ingredients.includes(ingredients.value))

    getData(ingFilter)

}

