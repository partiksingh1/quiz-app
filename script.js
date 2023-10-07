const question = [{
   'que': 'Which animal is known as the Ship of the Desert?',
   'a': 'lion',
   'b': 'giraffe',
   'c': 'dog',
   'd': 'camel',
   'correct': 'd'
},{
    'que': 'How many days are there in a week?',
   'a': '6',
   'b': '7',
   'c': '4',
   'd': '11',
   'correct': 'b'
},{
    'que': 'How many hours are there in a day?',
   'a': '24',
   'b': '75',
   'c': '44',
   'd': '11',
   'correct': 'a'
},{
    'que': 'Baby frog is known as.......',
   'a': 'Tadpole',
   'b': 'frog',
   'c': 'croc',
   'd': 'mendekdo',
   'correct': 'a'

}];

const queBox = document.getElementById("queBox");
const optionsIndex = document.querySelectorAll('.options');

let index = 0;
let total = question.length;
let right = 0,wrong=0;

const loadQuestion =()=>{
    if(index===total){
        return endQuiz();
    }
    reset();
    const data = question[index];
    console.log(data);
    queBox.innerText= `${index+1}) ${data.que}`;
    optionsIndex[0].nextElementSibling.innerText = data.a;
    optionsIndex[1].nextElementSibling.innerText = data.b;
    optionsIndex[2].nextElementSibling.innerText = data.c;
    optionsIndex[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = question[index];
    const ans = getAnswer();

    if(ans===data.correct){
        right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
    return;
}

const getAnswer = (input)=>{
    let answer;
    optionsIndex.forEach(
    (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
    }

const reset = () =>{
    optionsIndex.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h2> Thank you for playing </h2>
    <h3> ${right} / ${total} are correct </h3>
    `
}
loadQuestion();