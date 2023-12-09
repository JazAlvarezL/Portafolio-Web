let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('Dando a conocer un pais maravilloso que deberas visitar cuanto antes.')
    .pauseFor(200)
    .deleteChars(10)
    .start();