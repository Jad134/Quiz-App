let questions = [{
    "question": "Wer hat HTML erfunden?",
    "answer_1": "Robbie Williams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3,
},
{

    "question": "Welche Programmiersprache wird oft für die Entwicklung von Android-Apps verwendet?",
    "answer_1": "Java",
    "answer_2": "Python",
    "answer_3": "C#",
    "answer_4": "Ruby",
    "right_answer": 1
},
{
    "question": "Was ist eine IP-Adresse?",
    "answer_1": "Ein soziales Netzwerk",
    "answer_2": "Ein Domainname",
    "answer_3": "Eine eindeutige Kennung für Geräte im Netzwerk",
    "answer_4": "Eine Art von E-Mail-Adresse",
    "right_answer": 3
},
{
    "question": "Welches Versionierungssystem wird häufig für die Verwaltung von Quellcode in Softwareprojekten verwendet?",
    "answer_1": "Git",
    "answer_2": "SVN",
    "answer_3": "Mercurial",
    "answer_4": "Perforce",
    "right_answer": 1
},
{
    "question": "Welche Methode wird verwendet, um in vielen Programmiersprachen eine Schleife mit vorher festgelegter Anzahl von Durchläufen auszuführen?",
    "answer_1": "If-Anweisung",
    "answer_2": "For-Schleife",
    "answer_3": "While-Schleife",
    "answer_4": "Switch-Anweisung",
    "right_answer": 2
},
{
    "question": "Welche Bedeutung hat 'HTML' in der Webentwicklung?",
    "answer_1": "Hypertext Markup Language",
    "answer_2": "High-Level Programming Language",
    "answer_3": "Hyperlink and Text Markup Language",
    "answer_4": "Hyper Transfer Markup Language",
    "right_answer": 1
},
{
    "question": "Welcher Begriff beschreibt das Testen einer Softwarekomponente oder eines Moduls in Isolation?",
    "answer_1": "Integrationstest",
    "answer_2": "Systemtest",
    "answer_3": "Unit-Test",
    "answer_4": "Regressionstest",
    "right_answer": 3
},

]

let rightQuestions = 0; // Um die richtigen Antworten anzuzeigen

let currentQuestion = 0;  // als start für die Arrays an der Stelle null


function init() {
    document.getElementById('question-amount').innerHTML = questions.length; // Zeigt die Anzahl der Fragen an. 
    document.getElementById('question-amountEnd').innerHTML = questions.length;
    showQuestion()
}

function showQuestion() {

    let percent = currentQuestion / questions.length; // Rechnet die aktuelle frage durch die anzahl der fragen.
    percent = Math.round(percent * 100); // rechnet dann das ergebnis von percent mal 100 um richtige zahlen mit der kommastelle zu bekommen. Math.round runded auf

    
    
    if (currentQuestion >= questions.length) {
        //show end screen
        document.getElementById('endScreen').style = ``; // entfernt jedes style also auch das display none.
        document.getElementById('question-body').style = 'display: none'; // fügt der id display none hinzu.
        document.getElementById('question-footer').style = 'display: none'; // Lässt den button verschwinden
        document.getElementById('right-amound').innerHTML = rightQuestions;
        document.getElementById('header-img').src = './img/trophy.png'; // ändert das Bild am ende zu diesem Bild
        document.getElementById('progress-bar').innerHTML = `${percent} %`; // ändert die zahl im progress balken im Endscreen
        document.getElementById('progress-bar').style.width = `${percent}%`; //lässt den progress balken wachsen im Endscreen
        document.getElementById('amount-none').style = 'display: none;';
       
    }
    else { // show Question


        document.getElementById('progress-bar').innerHTML = `${percent} %`; // ändert die zahl im progress balken
        document.getElementById('progress-bar').style.width = `${percent}%`; // lässt den progress balken wachsen

        let question = questions[currentQuestion]; // JSON Array an der Stelle von Currentquestion( erst Null und dann 1 ab nextQuestion() usw)

        document.getElementById('actual-amount').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); // Nutze den letzten Buchstaben aus der funktion answer() aus HTML. Also answer_1 wird die 1 definiert.
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) { // Also wenn right_answer den Wert 3 hat, so wie der letzte Buchstabe aus der answer() hast du die richtige antowrt gedrückt
        console.log('richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success'); //.parentNode spricht man das eltern Element an
        rightQuestions++; // Erhöhe right questions um 1 um das Ergebnis am Ende anzuzeigen
    }
    else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById("next-btn").disabled = false; // Lasse den Button anklickbar machen
}

function nextQuestion() {
    currentQuestion++; // Variable wird um 1 erhöht. 
    document.getElementById("next-btn").disabled = true;
    resetAnswerButtons()
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_1').parentNode.classList.remove('bg-success')
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success')
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success')
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success')
}

function restart() {
    document.getElementById('header-img').src = './img/question-mark.jpg';
    rightQuestions = 0;
    currentQuestion = 0;
    document.getElementById('question-body').style = ''; // entfernt d-none.
    document.getElementById('question-footer').style = ''; // lässt den button wieder anzeigen
    document.getElementById('amount-none').style = ''; //entfernt d-none und lässt x von x fragen anzeigen
    document.getElementById('endScreen').style = `display: none;`; // lässt das ergebnis wieder verschwinden
    init();
    
}

