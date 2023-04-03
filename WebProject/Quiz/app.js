const questions = [
    {
        'que' : 'What is a computer?',
        'a' : 'Human',
        'b' : 'machine',
        'c' : 'matter',
        'd' : 'brain',
        'correct' : 'b',
},
{
    'que' : 'What does CSS stands for?',
    'a' : 'hyertest Markup Language',
    'b' : 'Computer style sheet',
    'c' : 'Cascading Style Sheet',
    'd' : 'Computer science style',
    'correct' : 'c',
},
    {
        'que' : 'Which year was JavaScript launched?',
        'a' : '1992',
        'b' : '1993',
        'c' : '1994',
        'd' : '1995',
        'correct' : 'd',
},
    {
        'que' : 'Which of the following is a markup languages?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JS',
        'd' : 'Python',
        'correct' : 'a',
},
    {
        'que' : 'What does CSS stands for?',
        'a' : 'hyertest Markup Language',
        'b' : 'Computer style sheet',
        'c' : 'Cascading Style Sheet',
        'd' : 'Computer science style',
        'correct' : 'c',
}
];
let index = 0; 
let total = questions.length;
let right = 0,
    wrong = 0;
const questionbox = document.getElementById('questionbox');
const optionInputs = document.querySelectorAll('.option');
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    questionbox.innerHTML =`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach( (input) => {
            if (input.checked){
                answer = input.value;
                console.log(input.value);
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style="text-align:center">
    <h3> The result of your quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    </div>
    `
}

// inital call //
loadQuestion();