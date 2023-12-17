document.addEventListener('DOMContentLoaded', function () {
    const questionsContainer = document.getElementById('questions-container');
    const answerContainer = document.getElementById('answer-container');

    const questions = [
        { id: 1, question: 'Binary to Decimal Converter', answerFile: 'answers/one.html' },
        { id: 2, question: 'Power of Two', answerFile: 'answers/two.html' },
        { id: 3, question: '1768. Merge Strings Alternately', answerFile: 'answers/three.html' },
        { id: 4, question: 'Sum of Digits', answerFile: 'answers/four.html' },
        { id: 5, question: '345. Reverse Vowels of a String', answerFile: 'answers/five.html' },
        { id: 5, question: '151. Reverse Words in a String', answerFile: 'answers/six.html' },
        // Add more questions as needed
    ];

    function showQuestions() {
        questionsContainer.innerHTML = '<h2>Questions:</h2><ul>' +
            questions.map(question => `<li data-id="${question.id}">${question.id}. ${question.question}</li>`).join('') +
            '</ul>';

        // Add event listeners to each question item
        const questionItems = document.querySelectorAll('li');
        questionItems.forEach(item => {
            item.addEventListener('click', (event) => {
                const id = event.target.getAttribute('data-id');
                showAnswer(id);
            });
        });
    }

    async function showAnswer(id) {
        const selectedQuestion = questions.find(question => question.id == id);
        const answerElement = document.getElementById('answer-container');
        
        try {
            const response = await fetch(selectedQuestion.answerFile);
            const answerHtml = await response.text();
            
            answerElement.innerHTML = answerHtml;
            
            const isAnswerVisible = answerElement.style.display === 'block';

            // Toggle visibility
            answerElement.style.display = isAnswerVisible ? 'none' : 'block';
        } catch (error) {
            console.error('Error loading answer:', error);
        }
    }

    showQuestions();
});
