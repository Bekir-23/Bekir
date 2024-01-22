// app.js

$(document).ready(function () {
    // Initialize SimpleLightbox for the images
    const lightbox = new SimpleLightbox('img', { /* Add options if needed */ });

    // Smooth scroll to the top when an image is clicked
    $('img').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Enlarge images on hover
    $('img').hover(function () {
        $(this).css('transform', 'scale(2.2)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });

    // Enlarge text on hover
    $('h1, h2, h3, p, span, a, button').hover(function () {
        $(this).css('transform', 'scale(1.2)');
    }, function () {
        $(this).css('transform', 'scale(1)');
    });
});

$('h1, h2, h3, p, span, a, button').hover(function () {
    $(this).css('color', 'red');
}, function () {
    $(this).css('color', ''); // Reset to default color
});

$('h1, h2, h3, p, span, a, button').hover(function () {
    $(this).css('transition', 'background-color 0.5s');
    $(this).css('background-color', 'lightblue');
}, function () {
    $(this).css('background-color', '');
});

$('img').click(function () {
    $(this).css('transition', 'transform 0.5s');
    $(this).css('transform', 'rotate(360deg)');
});



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$('h1, h2, h3, p, span, a, button').hover(function () {
    const randomColor = getRandomColor();
    $(this).css('color', randomColor);
}, function () {
    $(this).css('color', ''); // Reset to default color
});


$('a').hover(function () {
    $(this).css('background-color', 'yellow');
}, function () {
    $(this).css('background-color', '');
});

$('button').hover(function () {
    $(this).animate({ backgroundColor: 'blue' }, 'slow');
}, function () {
    $(this).animate({ backgroundColor: 'transparent' }, 'slow');
});


$('h1, h2, h3, p, span, a, button').hover(function () {
    $(this).css('text-shadow', '2px 2px 4px #888');
}, function () {
    $(this).css('text-shadow', 'none');
});




