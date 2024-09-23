const argumentOneAnswers = [
    ["B", 
        [
            "<b>1. Explanation:</b> The passage discusses the benefits of meditation for both mind and body, emphasizing its role in reducing stress, improving concentration, and enhancing emotional health. Option B accurately summarizes these benefits, making it the best answer."
        ]
    ],
    ["C", 
        [
            "<b>2. Explanation:</b> The passage highlights the multifaceted benefits of bilingualism, including cognitive improvements, enhanced career opportunities, and increased cultural awareness. Option C succinctly captures the broader advantages of learning a second language beyond mere communication."
        ]
    ],
    ["A", 
        [
            "<b>3. Explanation:</b> The passage emphasizes the importance of access to clean water for good health, discussing the challenges of contaminated water and efforts to provide clean water to communities in need. Option A correctly identifies access to clean water as essential for health."
        ]
    ],
    ["C", 
        [
            "<b>4. Explanation:</b> The passage outlines the various benefits of participating in team sports, such as promoting physical fitness, teaching life skills, and fostering social interaction. Option C effectively summarizes these diverse advantages of team sports."
        ]
    ],
    ["A", 
        [
            "<b>5. Explanation:</b> The passage discusses the flexibility and accessibility offered by online education, along with its challenges such as the need for self-discipline and effective time management. Option A accurately reflects the primary advantage of online education."
        ]
    ],
];
const argumentTwoAnswers = [
    ["B",
        [
            "<b> 1. Explanation:</b> The passage discusses both the benefits and drawbacks of electric vehicles. Option B accurately captures the dual nature of the argument, noting the environmental benefits of EVs while acknowledging challenges such as production impacts and infrastructure issues."
        ]
    ],
    ["B",
        [
            "<b> 2. Explanation:</b> The passage highlights both the advantages and concerns associated with GMOs. Option B reflects this balance by acknowledging the benefits of GMOs in agriculture while also addressing potential health and environmental risks."
        ]
    ],
    ["B",
        [
            "<b> 3. Explanation:</b> The passage presents universal basic income as a potential solution for poverty and economic security but also discusses its challenges. Option B accurately identifies this balance by noting the benefits and the possible drawbacks of UBI."
        ]
    ],
    ["B",
        [
            "<b> 4. Explanation:</b> The passage argues that technology can enhance education but also presents concerns such as distractions and inequalities. Option B best identifies this nuanced argument by recognizing both the positive aspects and the challenges of integrating technology into education."
        ]
    ],
    ["B",
        [
            "<b> 5. Explanation:</b> The passage discusses the advantages of public transportation and the issues it faces. Option B effectively summarizes the argument by highlighting both the benefits of public transit and the concerns related to cost and service quality."
        ]
    ],
];
const argumentThreeAnswers = [
    ["B",
        [
            "<b> 1. Explanation:</b> The passage discusses the benefits and drawbacks of remote work. Option B accurately captures the argument by acknowledging both the benefits, such as flexibility and cost savings, and the challenges, such as isolation and productivity issues."
        ]
    ],
    ["B",
        [
            "<b> 2. Explanation:</b> The passage highlights the role of animal testing in medical research and the ethical concerns associated with it. Option B reflects this balance by recognizing the importance of animal testing while also addressing ethical considerations and the need for alternatives."
        ]
    ],
    ["B",
        [
            "<b> 3. Explanation:</b> The passage presents social media as a tool for global connectivity and activism, but also mentions risks like misinformation and mental health issues. Option B captures this by acknowledging both the positive impacts and the potential risks of social media use."
        ]
    ],
    ["B",
        [
            "<b> 4. Explanation:</b> The passage discusses the benefits of fast fashion, such as affordability and trendiness, along with its environmental and ethical issues. Option B effectively summarizes the argument by reflecting both the advantages and the negative impacts of fast fashion."
        ]
    ],
    ["B",
        [
            "<b> 5. Explanation:</b> The passage argues for increased funding in public education while also suggesting that this should be accompanied by other reforms. Option B captures this argument by noting the need for additional reforms and careful management alongside increased funding."
        ]
    ],
];
const argumentFourAnswers = [
    ["B",
        [
            "<b>1. Explanation:</b> The passage outlines both the benefits and challenges of renewable energy. Option B captures the main argument by acknowledging the positive environmental and economic aspects while also recognizing the concerns related to cost and infrastructure."
        ]
    ],
    ["B",
        [
            "<b>2. Explanation:</b> The passage highlights the advantages of online education, such as flexibility and cost-effectiveness, along with its limitations like lack of personal interaction and challenges related to access. Option B best reflects this balanced view."
        ]
    ],
    ["B",
        [
            "<b>3. Explanation:</b> The passage discusses the benefits of urban farming, including reduced food transportation costs and community engagement, while also mentioning challenges such as scalability and resource management. Option B appropriately identifies this dual perspective."
        ]
    ],
    ["B",
        [
            "<b>4. Explanation:</b> The passage argues for the importance of animal conservation in maintaining biodiversity and ecological balance but also considers the argument that resources might be better spent on human issues. Option B accurately summarizes this nuanced argument."
        ]
    ],
    ["B",
        [
            "<b>5. Explanation:</b> The passage describes the benefits of remote healthcare, including convenience and improved access, but also addresses concerns about the quality of care and access to technology. Option B effectively captures the main argument of the passage."
        ]
    ],
];
const argumentFiveAnswers = [
    ["B",
        [
            "<b>1. Explanation:</b> The passage discusses both the benefits and drawbacks of artificial intelligence. Option B accurately captures the dual nature of the argument, noting the benefits of AI in efficiency and innovation, while acknowledging concerns about job displacement and ethical issues."
        ]
    ],
    ["B",
        [
            "<b>2. Explanation:</b> The passage highlights both the advantages of stricter gun control laws for reducing violence and improving safety, and the concerns about personal freedoms and effectiveness. Option B reflects this balance by recognizing both the supportive and opposing views."
        ]
    ],
    ["B",
        [
            "<b>3. Explanation:</b> The passage argues for the benefits of expanding public parks, such as enhanced quality of life and sustainability, but also addresses cost concerns. Option B summarizes the argument by acknowledging both the positive impacts and financial challenges."
        ]
    ],
    ["B",
        [
            "<b>4. Explanation:</b> The passage presents the benefits of electric scooters, including convenience and environmental advantages, but also discusses safety and regulatory concerns. Option B captures the main argument by recognizing both the benefits and challenges of electric scooters."
        ]
    ],
    ["A",
        [
            "<b>5. Explanation:</b> The passage suggests that a four-day workweek can significantly improve work-life balance and productivity, though it also mentions challenges. Option A emphasizes the positive aspects more strongly, capturing the argument’s main focus on the benefits of a shorter workweek."
        ]
    ],
];

const mcqPage = document.querySelector('.mcq-pages');
const feedbackSection = document.querySelector('.feedback');
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnPreviousPage');
const btnCheck = document.getElementById('btnCheck');
const btnGoBack = document.getElementById('btnGoBack');
const btnNextPage = document.getElementById('btnNextPage');
var maxPageNum = 5;
var correctAnsArr = [];
let pageNumber = 1;
let grade = 0;

btnNext.addEventListener('click', (e)=>{

    document.getElementById('quest'+pageNumber).classList.add('hide');
    document.getElementById('ans'+pageNumber).classList.add('hide');
    pageNumber<maxPageNum?pageNumber++:null;
    document.getElementById('quest'+pageNumber).classList.remove('hide');
    document.getElementById('ans'+pageNumber).classList.remove('hide');
    
    if(pageNumber===maxPageNum){
        btnNext.classList.add('hide');
        btnCheck.classList.remove('hide');
    }

    if(pageNumber>1){
        btnBack.classList.remove('invisible');
    }
});

btnBack.addEventListener('click', (e)=>{
    document.getElementById('quest'+pageNumber).classList.add('hide');
    document.getElementById('ans'+pageNumber).classList.add('hide');
    pageNumber>1?pageNumber--:null;
    document.getElementById('quest'+pageNumber).classList.remove('hide');
    document.getElementById('ans'+pageNumber).classList.remove('hide');

    if(pageNumber!==maxPageNum){
        btnNext.classList.remove('hide');
        btnCheck.classList.add('hide');
    }
    if(pageNumber===1){
        btnBack.classList.add('invisible');
    }
});

function checkAnswer(){
    var userInput = [];
    for (var j = 0; j <= maxPageNum;j++){
        //took group of radios by their names
        const selectedAnswer = document.getElementsByName("ans"+(j+1)+"");

        //this check for ALL 4 inputs under the same name
        for(var i = 0;i<selectedAnswer.length; i++){
            if(selectedAnswer[i].checked){ 
                userInput.push(selectedAnswer[i].value);
                break;
            } else {
                i===3?userInput.push('Unanswered'):null;
                console.log('Unanswered');
            }
        }
    }

    //correct answer - add grade | incorrect answer - add explanation
    for(var i=0;i< correctAnsArr.length;i++){
        //add grade
        if(userInput[i]===correctAnsArr[i][0]){
            grade++;
        }
    }

    //hide passage and multiple-choice
    mcqPage.classList.add('hide');
    feedbackSection.classList.remove('hide');

    //display "Final Results"
    const resultDIV = document.createElement('h2');
    resultDIV.innerHTML = 'Final Results';
    resultDIV.setAttribute('class', 'final-result');
    //display "total grade"
    const gradeDIV = document.createElement('div');
    gradeDIV.setAttribute('class', 'grade');
    gradeDIV.innerHTML = `Your total grade is ${grade} out of ${correctAnsArr.length}`;
    //display "Review your answer"
    const reviewDIV = document.createElement('div');
    reviewDIV.setAttribute('class', 'review-ans');
    reviewDIV.innerHTML = 'Review your answer';

    feedbackSection.append(resultDIV);
    feedbackSection.append(gradeDIV);
    feedbackSection.append(reviewDIV);

    for(var i=0;i<correctAnsArr.length;i++){
        //add those from the loop above to HTML
        const explanationDIV = document.createElement('div');
        explanationDIV.setAttribute('class', 'exp');

        //create DIVs
        const yourAnsPara = document.createElement('p');
        const correctAnsPara = document.createElement('p');

        //assign text and values
        yourAnsPara.innerHTML = `Your answer is: ${userInput[i]}`;
        correctAnsPara.innerHTML = `Correct answer is: ${correctAnsArr[i][0]}`;
        explanationDIV.append(yourAnsPara);
        explanationDIV.append(correctAnsPara);

        //if inner array got one, works as one, if nested, works as nested.
        for(var exp of correctAnsArr[i][1]){
            const feedBackPara = document.createElement('p');
            feedBackPara.innerHTML = exp;
            explanationDIV.append(feedBackPara);
        }
        feedbackSection.append(explanationDIV);
    }

    btnCheck.classList.add('hide');
    btnBack.classList.add('hide');
    btnGoBack.classList.remove('hide');
    btnNextPage.classList.remove('hide');
}

function pageCheck(){

    if(window.location.href.includes('identify-argument-practice-1')){
        correctAnsArr = argumentOneAnswers;
    } else if (window.location.href.includes('identify-argument-practice-2')){
        correctAnsArr = argumentTwoAnswers;
    } else if (window.location.href.includes('identify-argument-practice-3')){
        correctAnsArr = argumentThreeAnswers;
    } else if (window.location.href.includes('identify-argument-practice-4')){
        correctAnsArr = argumentFourAnswers;
    } else if (window.location.href.includes('identify-argument-practice-5')){
        correctAnsArr = argumentFiveAnswers;    
    }
}

window.onload = pageCheck();