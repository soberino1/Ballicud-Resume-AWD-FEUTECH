let colors = ['black', 'white', '#00A5E3' ];

let button = document.getElementById('button-4');

button.addEventListener('click', function () {
    var randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];
    var randomTextColor;

    do {
        randomTextColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomTextColor === randomBackgroundColor);

    let container = document.getElementById('container');

    container.style.background = randomBackgroundColor;
    container.style.color = randomTextColor;
});