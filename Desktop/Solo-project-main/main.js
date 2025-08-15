var anime = document.querySelectorAll('.image')
// taged the picture element

function searchAnimeBYName() {
    // create a function to filter the searches
    var searchAnime = document.getElementById("searchbox").value;
    //
    for (var i = 0; i < anime.length; i++) {
        // loop througt the pictuers
        if (anime[i].getAttribute('alt').toLowerCase().includes(searchAnime.toLowerCase())) {
            //we create an if condition to chek if our search is matching to what is wriiten in alt with the build in includes
            //then we use the tolowercase to to make even upper or lower case 
            //we use the getAttribute to bring the value of the alt
            anime[i].classList.remove("is-hidden");
            // remove the is hiden class to show the images
        } else {
            anime[i].classList.add("is-hidden");
        }
    }
}


var time;
var inter = 300;
var input = document.getElementById('searchbox');

input.addEventListener('keyup', () => {
    // we use the keyup event to detecct wich key was pressed
    clearTimeout(time);
    time = setTimeout(searchAnimeBYName, inter);
});
 


