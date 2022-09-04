const username = document.querySelector('#username')
const savebtn = document.querySelector('#savebtn')
const finalscore = document.querySelector('#finalscore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highscores= JSON.parse(localStorage.getItem('highscores')) || []

const Max_HIGH_SCORES = 50

finalscore.innerText = mostRecentScore

username.addEventListener('keyup',() =>{
    savebtn.disabled = !username.value
})

savescr = e =>{
    e.preventDefault()

    const score ={
        score: mostRecentScore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score
    })

    highscores.splice(5)

    localStorage.setItem('highscores', JSON.stringify(highscores))
    window.location.assign('index.html')
}