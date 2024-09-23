const choices = document.querySelectorAll('.choices')
const resultText = document.getElementById('result')
const userTally = document.querySelector('.user-score')
const randomTally = document.querySelector('.random-score')
const scores = document.querySelector('.scores')
const stats = document.querySelector('.stats')
const ties = document.querySelector('.tie-games')
const totalGames = document.querySelector('.games-played')
let arr = []
let userScore = 0
let randomScore = 0
let tieGames = 0
let gamesPlayed = 1
function getChoices(e) {
	const choiceList = choices.forEach((choice) => {
		arr.push(choice.innerText)
		arr = arr.join(' ').toLowerCase().split(' ')
	})

	const randomIndex = Math.floor(Math.random() * arr.length)
	const randomChoice = arr[randomIndex]

	const userChoice = e.target.id

	arr = []
	getEntries(userChoice, randomChoice)
	gamesPlayed++
}

function getEntries(user, random) {
	scores.style.opacity = '1'
	stats.style.opacity = '1'
	totalGames.innerText = gamesPlayed
	if (user === random) {
		resultText.innerText = `It's a tie, you both chose ${random}!`
		tieGames++

		ties.innerText = `${tieGames}`
	} else if (
		(user === 'rock' && random === 'scissors') ||
		(user === 'scissors' && random === 'paper') ||
		(user === 'paper' && random === 'rock')
	) {
		resultText.innerText = `You win, ${user} beats ${random}!`
		userScore++
		userTally.innerText = userScore
	} else {
		resultText.innerText = `Sorry, ${random} beats ${user} :(`
		randomScore++

		randomTally.innerText = randomScore
	}
}

choices.forEach((choice) => {
	choice.addEventListener('click', getChoices)
})
