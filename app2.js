const fontFamilies = ['Arial', 'Times New Roman', 'Courier New', 'Verdana'];

setInterval(function () {
    const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
    $('h1, h2, h3, p, span, a, button').css('font-family', randomFontFamily);
}, 4500); // Change font every 4.5 seconds
