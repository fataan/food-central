import seeDetail from './viewDetail.js'
import getDetail from '../data/detail.js'

const listCards = document.querySelector('.cards')

const makeCard = (obj) => {
return `<div class="card w-96 flex flex-col gap-2 bg-gray-200 rounded-md overflow-hidden">
				<div class="h-96 w-full bg-center bg-no-repeat" style="background-image: url(${obj.strMealThumb}); background-size:400px;"></div>
				<div class="px-2 py-2">
					<p class="text-xl font-semibold ">${obj.strMeal}</p>
					<p class="-mt-1 text-gray-500">${obj.strCategory}</p>
					<p class="see-detail text-green-800 font-medium hover:text-green-400 trasition-color duration-200 inline text-lg cursor-pointer" data-meal-id="${obj.idMeal}">More</p>
				</div>
		</div>`
}

const appendContents = (data) => {
	fakeCards(data)
	setTimeout(() => {
		listCards.innerHTML = ""
		data.forEach(async(e) => {
			const card = await makeCard(e)
			listCards.innerHTML += card
		}) 
	},1500)
}

const fakeCards = (cards) => {
	listCards.innerHTML = ""
	for(let i = 1; i <= cards.length; i++){
		listCards.innerHTML +=`
			<div class="w-96 bg-gray-200 rounded-md overflow-hidden">
					<div class="card flex flex-col gap-2 animate-pulse">
						<div class="h-96 w-full bg-gray-600"></div>
						<div class="px-2 py-2 flex flex-col gap-1">
							<div class="h-4 bg-gray-600 rounded-md"></div>
							<div class="h-4 bg-gray-600 rounded-md"></div>
						</div>
					</div>
			</div>
		`
	}
}

listCards.addEventListener('click',async(e) => {
	if(e.target.className.search('see-detail') !== -1) {
		try {
			const detail = await getDetail(e.target.dataset.mealId)
			seeDetail(detail)
		}
		catch(err) {
			console.log(err)
		}
	}
})


export {appendContents, fakeCards, makeCard}