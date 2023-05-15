const mealData = ()=>{
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
.then(data => showData(data.meals))
}
const  showData =meals =>{
const displayMeals= document.getElementById('meals-container');
meals.forEach(meal =>{
  console.log(meal)  
const mealContainer = document.createElement('div')
mealContainer.classList.add('nav-item')
mealContainer.innerHTML =`
<a class="nav-link active" aria-current="page" href="#">${meal.strMeal}</a>
`
displayMeals.appendChild(mealContainer);
})
}
mealData()