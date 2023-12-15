// script.js
document.addEventListener('DOMContentLoaded', function () {
    const questionsContainer = document.getElementById('questions-container');
    const answerContainer = document.getElementById('answer-container');

    const questions = [
        { id: 1, question: 'What is HTML?', answer: 'HTML stands for HyperText Markup Language, and it is the standard markup language for creating web pages.' },
        { id: 2, question: 'What is CSS?', answer: 'CSS stands for Cascading Style Sheets, and it is used for describing the look and formatting of a document written in HTML.' },
        // Add more questions as needed
    ];

    function showQuestions() {
        questionsContainer.innerHTML = '<h2>Questions:</h2><ul>' +
            questions.map(question => `<li>${question.id}. ${question.question}</li>`).join('') +
            '</ul>';

        // Add event listeners to each question item
        questions.forEach(question => {
            const listItem = document.querySelector(`li:nth-child(${question.id})`);
            listItem.addEventListener('click', () => showAnswer(question.id));
        });
    }

    function showAnswer(id) {
        const selectedQuestion = questions.find(question => question.id === id);
        answerContainer.innerHTML = `<h2>${selectedQuestion.id}. ${selectedQuestion.question}</h2><p>${selectedQuestion.answer}</p>`;
        answerContainer.style.display = 'block';
    }

    showQuestions();
});
