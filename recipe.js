const title=document.querySelector('.Title')
const calories=document.querySelector('.Calories')
const ingredients=document.querySelector('.Ingredients')
const filter=document.querySelector('.Filter')
const main=document.querySelector('.main')




const arr=JSON.parse(localStorage.getItem('recipes'))
function getData(){

    main.innerHTML=``
    arr.map(item=>{
        main.innerHTML+=`
<div class="box">
   <img src="${item.image}" alt="">
      <h4>${item.FoodTitle}</h4>
      <p>${item.Description}</p>
      <h3>Ingredients:</h3>
      <ul>
      <li>${item.ingredients1}</li>
      <li>${item.ingredients2}</li>
      <li>${item.ingredients3}</li>
</ul>
      <h4>${item.calories}</h4>
</div>
  
    
    `
    })

}
getData()
filter.onclick=()=>{
    filters()

}
function filters(){
    console.log(title.value,calories.value,ingredients.value)
    let filtered=arr.filter(item=>title.value===''?item.title:item.title===title.value)

    let caloriesFilter=filtered.filter(item=>calories.value===''?item.calories:item.calories===calories.value)

    let ingredients1Filter=caloriesFilter.filter(item=>ingredients.value===''?item.ingredients1:item.ingredients1===ingredients.value)
    let ingredients2Filter=ingredients1Filter.filter(item=>ingredients.value===''?item.ingredients2:item.ingredients2===ingredients.value)
    let ingredients3Filter=ingredients2Filter.filter(item=>ingredients.value===''?item.ingredients3:item.ingredients3===ingredients.value)
    console.log(ingredients3Filter)
    getData(ingredients3Filter)

}

console.log(arr)