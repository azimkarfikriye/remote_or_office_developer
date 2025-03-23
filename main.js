const correctAnswers = ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E' ];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
const scoreDisplay = document.getElementById('score');
const clearButton = document.querySelector('.btn-clear');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [
        document.querySelector('input[name="q1"]:checked').value,
        document.querySelector('input[name="q2"]:checked').value,
        document.querySelector('input[name="q3"]:checked').value,
        document.querySelector('input[name="q4"]:checked').value,
        document.querySelector('input[name="q5"]:checked').value,
        document.querySelector('input[name="q6"]:checked').value,
        document.querySelector('input[name="q7"]:checked').value,
        document.querySelector('input[name="q8"]:checked').value,
        document.querySelector('input[name="q9"]:checked').value,
        document.querySelector('input[name="q10"]:checked').value
    ];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    });

    
    result.classList.remove('d-none');

    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clear Butonu 
// clearButton.addEventListener('click', () => {
//     form.reset();
//     result.classList.add('d-none'); 
//     scoreDisplay.textContent = "0%";

// });


    let puan=0;
    const bastir= setInterval(() => {
        scoreDisplay.textContent = `${puan}%`;
        if(puan == score) 
            {
                clearInterval(bastir);
            } 
            else{
                puan++;
            }
    }, 10);
     
});

clearButton.addEventListener('click', () => {
    form.reset();
    result.classList.add('d-none');
    scoreDisplay.textContent = "0%";

    // Radio buton seçimlerini temizledik..
    for (let i = 1; i <= 10; i++) {
        const radioButtons = document.querySelectorAll(input[name="q${i}"]);
        radioButtons.forEach(radio => {
            radio.checked = false;
        });
    }
});


