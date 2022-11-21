const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

current_index = 0;

function carousel(i){
    current_index += i;
    if (current_index > 4) { current_index = 1; }
    if (current_index < 1) { current_index = 4; }
    document.getElementById('img_slide').src = "./assets/images/slideshow/"+slides[current_index - 1].image;
    document.getElementById('tagline').innerHTML = slides[current_index - 1].tagLine;

    for (var j = 0; j < 4; j++) {
        document.getElementById('dots').children[j].className = "dot";
        if (current_index - 1 == j) {
            document.getElementById('dots').children[j].className = "dot dot_selected";
        }
    }

}

carousel(1);