class Search {
	static SearchKeyword(meal) {
		return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
		.then(response => response.json())
		.then(response => response.meals)
		.catch(`${meal} is not found`)
	}
}

export default Search