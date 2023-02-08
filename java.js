const container1=document.querySelector('.container1')
const container2=document.querySelector('.container2')
const span=document.querySelectorAll('.box span')
const title=document.querySelector('.title')
const ingredient=document.querySelector('.ingredients')
const AddButton=document.querySelector('.Add')
const Description=document.querySelector('.Description')
const Calories=document.querySelector('.Calories')
const GetPhotoButton=document.querySelector('.GetPhoto')
const AddRecipeButton=document.querySelector('.AddRecipe')
const img=document.querySelector('img')
const addData=document.querySelector('.AddData')

const box=document.querySelector('.box')


function getData() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {



            GetPhotoButton.onclick = () => {
                if (img.src === '') {

                } else {
                    img.src = data.meals[0].strMealThumb

                }
            }

        })


}
getData()
let pIngredients=[]
let recipe={
    FoodTitle:span[0].innerHTML,
    Description:span[1].innerHTML,
    ingredients:pIngredients,
    calories:span[3].innerHTML,
    image:img.src
}
function saveData(){

    let recipes=JSON.parse(localStorage.getItem('recipes'))
if (recipes===null){
    recipes=[]
}
    recipes.push(recipe)
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

AddButton.onclick=()=>{
    pIngredients.push(ingredient.value)
        span[2].innerHTML=pIngredients

    console.log(pIngredients)
    ingredient.value=''

}

addData.onclick=()=>{
    if (  title.value&&Description.value&&Calories.value===''){
return
    }else {
        span[0].innerHTML+=title.value
        span[1].innerHTML+=Description.value
       span[3].innerHTML+=Calories.value
    }
    title.value=''
    Description.value=''
    Calories.value=''
}
AddRecipeButton.onclick=()=>{
if(recipe.ingredients.length<3){
    return
}
if (img.src===''){
    return
}
        saveData()
        span[0].innerHTML=''
        span[1].innerHTML=''
       span[2].innerHTML=''
       span[3].innerHTML=''
        pIngredients=[]
        img.src=''



}
