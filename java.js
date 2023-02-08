const container1=document.querySelector('.container1')
const container2=document.querySelector('.container2')
const h2=document.querySelectorAll('.box h2')
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


function getData(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(data=>{
data.meals.map(item=>{
    id=item.idMeal
    console.log(id)
    GetPhotoButton.onclick=()=>{
    if (img.src===''){
        img.style.height='0px'
        img.style.width='0px'
    }else{
            img.src=item.strMealThumb

        }
    }

})


        })
}
getData()
let ingredients=[]
let recipes=[]
function saveData(){
    let Data={
        FoodTitle:h2[0].innerHTML,
        Description:h2[1].innerHTML,
            ingredients1:ingredients[0]+",",
            ingredients2:ingredients[1]+",",
            ingredients3:ingredients[2],
        calories:h2[5].innerHTML,
        image:img.src
    }

    recipes.push(Data)
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

AddButton.onclick=()=>{
    if (ingredient.value==='')return
    if (h2[2].innerHTML==='Ingredient 1:'){
        h2[2].innerHTML='Ingredient 1: '+ingredient.value

        ingredients.push(ingredient.value)
    }else if ( h2[3].innerHTML==='Ingredient 2:'){
        h2[3].innerHTML='Ingredient 2: '+ingredient.value
        ingredients.push(ingredient.value)
    }else if ( h2[4].innerHTML==='Ingredient 3:') {
        h2[4].innerHTML='Ingredient 3: '+ingredient.value
        ingredients.push(ingredient.value)
    }
    console.log(ingredients)
}

addData.onclick=()=>{
    if (  title.value&&Description.value&&Calories.value===''){
        return
    }else {

        h2[0].innerHTML+=title.value
        h2[1].innerHTML+=Description.value
        h2[5].innerHTML+=Calories.value

    }
}
AddRecipeButton.onclick=()=>{

    if (  h2[0].innerHTML==='Food Title: '&&h2[1].innerHTML==='Description: '&& h2[2].innerHTML==='Ingredient 1: '&& h2[3].innerHTML==='Ingredient 2: '&& h2[4].innerHTML==='Ingredient 3: '&&h2[5].innerHTML==='Calories: '){
        return
    }else{
        saveData()
        h2[0].innerHTML='Food Title: '
        h2[1].innerHTML='Description: '
        h2[2].innerHTML='Ingredient 1: '
        h2[3].innerHTML='Ingredient 2: '
        h2[4].innerHTML='Ingredient 3: '
        h2[5].innerHTML='Calories: '
        ingredients=[]
        img.src=''
    }


}
