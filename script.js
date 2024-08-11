const answers = {
    q1: 'b',
    q2: 'a',
    q3: 'c',
    q4: 'b',
    q5: 'b',
    q6: 'c',
    q7: 'b',
    q8: 'b',
    q9: 'b',
    q10: 'b'
};

function submitQuiz() {
    let score = 0;
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    
    for (const [question, answer] of Object.entries(answers)) {
        const selectedAnswer = formData.get(question);
        if (selectedAnswer === answer) {
            score++;
        }
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        Your score is ${score} out of ${Object.keys(answers).length}.<br>
        I love you Trisha, flowers for you 💐
    `;
}
