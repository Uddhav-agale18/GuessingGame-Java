const targetNumber = Math.floor(Math.random() * 100) + 1;

        let attempts = 0;

        function checkGuess() {
            attempts++;

            const userGuess = document.getElementById('userGuess').value;

            if (userGuess === '' || isNaN(userGuess)) {
                document.getElementById('feedback').innerText = 'Please enter a valid number.';
                return;
            }

            const guess = parseInt(userGuess);

            if (guess === targetNumber) {
                const feedbackElement = document.getElementById('feedback');
                feedbackElement.innerText = `Congratulations! You guessed the correct number: ${targetNumber}`;
                feedbackElement.style.color = 'red'; 

                const attemptsElement = document.getElementById('attempts');
                attemptsElement.innerText = `Number of attempts: ${attempts}`;
                attemptsElement.style.color = 'red'; 


                // document.getElementById('feedback').innerText = `Congratulations! You guessed the correct number: ${targetNumber}`;
                // document.getElementById('attempts').innerText = `Number of attempts: ${attempts}`;
            } else if (guess < targetNumber) {
                document.getElementById('feedback').innerText = 'Too low! Try again.';
            } else {
                document.getElementById('feedback').innerText = 'Too high! Try again.';
            }
        }