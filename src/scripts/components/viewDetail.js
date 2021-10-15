const contentDetail = document.querySelector('.modal-detail')
const modalTemp = document.querySelector('.modal-template')	
const btnClose = document.querySelector('.btn-close')

const ingredients = (obj) => {
	let listIngredients = ``
	for (let i = 1; i <= 20; i++) {
		let strIngredient = obj['strIngredient'+i]
		if(strIngredient !== '' && strIngredient !== null){
			listIngredients += `<li>${strIngredient}</li>`
		}
	}
	return listIngredients;
}

const seeDetail = (obj) => {
	modalTemp.removeAttribute('hidden')
	contentDetail.scrollTop = 0
	contentDetail.innerHTML =
			`<div class="h-72 bg-center bg-cover bg-no-repeat" style="background-image: url(${obj.strMealThumb});"></div>
				<div class="flex gap-3 flex-col text-black py-4 px-6">
					<div>
						<p class="text-4xl font-semibold">${obj.strMeal}</p>
						<p class="-mt-2 text-gray-600">${obj.strCategory}</p>
					</div>
					
					<div>
						<p class="text-2xl font-semibold">Ingredients</p>
						<ul class="list-disc px-6">
							${ingredients(obj)}
						</ul>
					</div>

					<div>
						<p class="text-2xl font-semibold">Step by Step</p>
						<p>${obj.strInstructions}</p>
					</div>

					<iframe class="video-youtube mt-3" width="100%" height="315" src="${obj.strYoutube.replace('watch?v=','embed\/')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

				</div>`
}

btnClose.addEventListener('click', () => {
	const videoYoutube = document.querySelector('.video-youtube')
	videoYoutube.setAttribute('src', videoYoutube.getAttribute('src') + '?enablejsapi=1')
	modalTemp.setAttribute('hidden', true)
})

// export {seeDetail, closeDetail}
export default seeDetail