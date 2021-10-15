const getDetail = (idMeal) => {
	return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
		.then(response => response.json())
		.then(response => response.meals[0])
		.catch(`Ups detail meal not found`)
}


export default getDetail