const rankList = document.querySelector('#rankList')
const highscores = JSON.parse(localStorage.getItem("highscores")) || []

rankList.innerHTML =
highscores.map(score =>{
    return `<li class="high-score"> ${score.name} - ${score.score}</li>`
}).join("")