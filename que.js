const question = document.querySelector('#question');
const choices = Array.from( document.querySelectorAll('.ch-txt'));
const progresstext = document.querySelector('#progresstext');
const scoretxt = document.querySelector('#score');
const progressbarfull = document.querySelector('#progressbarfull');

let currentQuestion={}
let acceptingAnswers =true
let score=0
let questionCounter = 0
let availableQuestions =[]


let questions=[
  {
   question: 'What gets wetter and wetter the more it dries',
   choice1: 'Potassium',
   choice2: 'Mercury',
   choice3: 'Umbrella',
   choice4: 'Towel',
   answer: 4,
  },

  {
   question: 'Some months have 30 days, and some have 31. How many have 28?',
   choice1: '3',
   choice2: '2',
   choice3: '12',
   choice4: '1',
   answer: 3,
  },

  {
   question: 'Before Mount Everest was discovered, what was the highest mountain on Earth?',
   choice1: 'K2 Karakoram',
   choice2: 'Kangchenjunga.',
   choice3: 'Mt. Everest',
   choice4: 'Makalu.',
   answer: 3,
  },

  {
   question: 'What country has the most islands in the world?',
   choice1: 'Sweden',
   choice2: 'Australia',
   choice3: 'India',
   choice4: 'Finland',
   answer: 1,
  },

  {
   question: 'How many times you can subtract the number 5 from 25?',
   choice1: '0',
   choice2: '4',
   choice3: '1',
   choice4: '5',
   answer: 3,
  },

  {
   question: 'How many times does the alphabet *a* appear in the spelling of numbers from 0-100.',
   choice1: '12',
   choice2: '32',
   choice3: '0',
   choice4: '4',
   answer: 3,
  },

  {
   question: 'What is the name of the hilarious squirrel-rat in the movie-Ice Age?',
   choice1: 'David',
   choice2: 'Scrat',
   choice3: 'Ted',
   choice4: 'Eddy',
   answer: 2,
  },

  {
    question: 'What is the slang name for New York City, used by locals? ',
    choice1: 'Gotham',
    choice2: 'San Vanelona',
    choice3: 'Goron',
    choice4: 'Zion',
    answer: 1,
   },

   {
    question: 'Which famous American pop band was originally called ‘Kara’s Flowers’?',
    choice1: 'The Beatles',
    choice2: 'Jonas Brothers',
    choice3: 'Maroon 5',
    choice4: 'BTS',
    answer: 3,
   },

   {
    question: 'What is the all-time most-streamed song on Spotify to date? ',
    choice1: 'Billie Eilish, Therefore I Am',
    choice2: 'Shawn Mendes, Senorita',
    choice3: 'Ed Sheeran, The Shape of You',
    choice4: 'Dua Lipa, Levitating',
    answer: 3,
   },

   {
    question: 'Name Pixar’s first feature-length movie?',
    choice1: 'Toy Story',
    choice2: 'Brave',
    choice3: 'Cars ',
    choice4: 'Ratatouille ',
    answer: 1,
   },

   {
    question: 'When was Netflix founded: ',
    choice1: '1997',
    choice2: '2001',
    choice3: '2015',
    choice4: '2009',
    answer: 1,
   },

   {
    question: 'Who invented the World Wide Web, and when?',
    choice1: 'Charles Babbage, 1820',
    choice2: 'Tim Berners-Lee, 1990',
    choice3: 'John Von Neumann, 1932',
    choice4: 'Philip Don Estridge, 1967 ',
    answer: 2,
   },

   {
    question: 'What was the clothing company Nike originally called?',
    choice1: 'HOUSE OF VERSACE.',
    choice2: 'PRADA',
    choice3: 'Blue Ribbon Sports',
    choice4: 'BURBERRY',
    answer: 3,
   },

   {
    question: 'Name the best-selling book series of the 21st century? ',
    choice1: 'Harry Potter, J. K. Rowling',
    choice2: 'Twilight series, Stephenie Meyer',
    choice3: 'The Hunger Games, Suzanne Collins',
    choice4: 'The Purpose Driven Life, Christian pastor',
    answer: 1,
   }
 
]

const SCORE_POINTS=10
const MAX_QUESTIONS =15

startGame = () =>{
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getnewQuestion()
}

getnewQuestion = () =>{
      if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
                localStorage.setItem('mostRecentScore', score)

                return window.location.assign('conclude.html')      


      }
   
      questionCounter++
      progresstext.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
      progressbarfull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

   const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
   currentQuestion = availableQuestions[questionsIndex]
   question.innerText= currentQuestion.question
   
   choices.forEach(choice => {
     const number= choice.dataset['number']
     choice.innerText= currentQuestion['choice' + number]

})

 availableQuestions.splice(questionsIndex, 1)
 acceptingAnswers= true 
} 

choices.forEach( choice =>{
       choice.addEventListener('click', e=>{
     if(!acceptingAnswers) return
    
     acceptingAnswers = false
     const selectedChoice = e.target
     const selectedAnswer = selectedChoice.dataset['number']

     let classtoApply = selectedAnswer == currentQuestion.answer ? 'correct':
     'incorrect'
   
     if(classtoApply === 'correct'){
     incrementScore(SCORE_POINTS)
}

   selectedChoice.parentElement.classList.add(classtoApply)
   
   setTimeout(() =>{
      selectedChoice.parentElement.classList.remove(classtoApply)
      getnewQuestion()

 },1000)    

 })

})   

incrementScore = num =>{
  score += num
  scoretxt.innerText =score
}

startGame()