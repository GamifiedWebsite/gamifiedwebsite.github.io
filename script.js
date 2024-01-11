

const questions = [
    {
        question: "What does ICT stand for?",
        answers: [
            { text: "Information Communication Technology", correct: true},
            { text: "Internet and Communication Technology", correct: false},
            { text: "Integrated Circuit Technology", correct: false},
            { text: "International Cooperation and Trade", correct: false},
        ]
    },
    {
        question: "What is the purpose of a firewall in computer networks?",
        answers: [
            { text: "To block unauthorized access", correct: true},
            { text: "To increase internet speed", correct: false},
            { text: "To enhance computer graphics", correct: false},
            { text: "To regulate printer functions", correct: false},
        ]
    },
    {
        question: "Which programming language is widely used for web development?",
        answers: [
            { text: "Java", correct: false},
            { text: "C++", correct: false},
            { text: "Python", correct: false},
            { text: "JavaScript", correct: true},
        ]
    },
    {
        question: "What is the full form of URL?",
        answers: [
            { text: "Universal Resource Locator", correct: false},
            { text: "Uniform Resource Locator", correct: true},
            { text: "Universal Resource Link", correct: false},
            { text: "Uniform Resource Link", correct: false},
        ]
    },
    {
        question: "What does CPU stand for?",
        answers: [
            { text: "Central Processing Unit", correct: true},
            { text: "Central Process Unit", correct: false},
            { text: "Computer Personal Unit", correct: false},
            { text: "Central Processor Unit", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a storage device?",
        answers: [
            { text: "RAM", correct: false},
            { text: "CPU", correct: false},
            { text: "Hard Disk Drive", correct: true},
            { text: "Motherboard", correct: false},
        ]
    },
    {
        question: "What is the function of an operating system?",
        answers: [
            { text: "To manage hardware resources", correct: true},
            { text: "To provide internet connectivity", correct: false},
            { text: "To create documents", correct: false},
            { text: "To design graphics", correct: false},
        ]
    },
    {
        question: "Which protocol is used for secure communication over the internet?",
        answers: [
            { text: "HTTP", correct: false},
            { text: "FTP", correct: false},
            { text: "SMTP", correct: false},
            { text: "HTTPS", correct: true},
        ]
    },
    {
        question: "What is the primary function of DNS?",
        answers: [
            { text: "To convert IP addresses to domain names", correct: true},
            { text: "To encrypt data transmission", correct: false},
            { text: "To manage email communication", correct: false},
            { text: "o create web pages", correct: false},
        ]
    },
    {
        question: "Which of the following is a markup language used for creating web pages?",
        answers: [
            { text: "Java", correct: false},
            { text: "HTML", correct: true},
            { text: "Python", correct: false},
            { text: "CSS", correct: false},
        ]
    },
    {
        question: "What is the purpose of a router in a network?",
        answers: [
            { text: "To connect devices within the same network", correct: true},
            { text: "To connect different networks", correct: false},
            { text: "To store data temporarily", correct: false},
            { text: "To print documents", correct: false},
        ]
    },
    {
        question: "What is the file extension for a Python script?",
        answers: [
            { text: ".py", correct: true},
            { text: ".js", correct: false},
            { text: ".html", correct: false},
            { text: ".css", correct: false},
        ]
    },
    {
        question: "Which programming paradigm is JavaScript associated with?",
        answers: [
            { text: "Object-Oriented Programming (OOP)", correct: true},
            { text: "Procedural Programming", correct: false},
            { text: "Functional Programming", correct: false},
            { text: "Imperative Programming", correct: false},
        ]
    },
    {
        question: "What is the purpose of SQL in the context of databases?",
        answers: [
            { text: "To create web pages", correct: false},
            { text: "To style web pages", correct: false},
            { text: "To query and manage databases", correct: true},
            { text: "To perform mathematical calculations", correct: false},
        ]
    },
    {
        
        question: "Which company developed the first graphical web browser?",
        answers: [
            { text: "Mozilla", correct: false},
            { text: "Microsoft", correct: false},
            { text: "Google", correct: false},
            { text: "Netscape", correct: true},
        ]
    },
    ];
    
    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    
    let currentQuestionIndex = 0;
    let score = 0;
    
    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
        // Shuffle the answers array randomly
        currentQuestion.answers.sort(() => Math.random() - 0.5);
    
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAsnwer);
        });
    }
    
    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    
    
    function selectAsnwer(event) {
        const selectedBtn = event.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
    
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "play Again";
        nextButton.style.display = "block";
    }
    
    
    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
    
    
    
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    });
    
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
    
        questions.sort(() => Math.random() - 0.5);
    
        nextButton.innerHTML = "Next";
        showQuestion();
    }
    
    startQuiz();
    
    
    