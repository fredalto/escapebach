function checkAnswer(answer) {
    if (answer === "Leipzig") {
        alert("Correct ! Bach a passé les 27 dernières années de sa vie à Leipzig.");
        window.location.href = 'enigme2.html';
    } else {
        alert("Incorrect. Essayez encore !");
    }
}
