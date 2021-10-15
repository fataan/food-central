// import "tailwindcss/tailwind.css"

import Search from './data/search.js';
import {appendContents} from './components/cards.js';

const main = () => {


	// selector
	const inputSearch = document.querySelector('.input-search')
	const btnSearch = document.querySelector('.btn-search')


	const searchKeyword = async() => {
		try {
			const keywordFood = inputSearch.value
			const result = await Search.SearchKeyword(keywordFood)
			appendContents(result)
		}
		catch(err) {
			console.log(err)
		}
	}


	btnSearch.addEventListener('click', searchKeyword)


	inputSearch.addEventListener('keyup', (e) => {
		if(e.keyCode === 13){
			searchKeyword()
		}
	})


	
}

main()



