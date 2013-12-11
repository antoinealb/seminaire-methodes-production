function gotoSlide() {
    currentSlide = Reveal.getIndices(Reveal.getCurrentSlide());

    if(currentSlide.v == 0)
        current = String(currentSlide.h);
    else
        current = currentSlide.h + "-" + currentSlide.v;

    slide = prompt("Goto slide ?", current);

    slide_indices = slide.split("-");
    if(slide_indices.length == 2)
        Reveal.slide(parseInt(slide_indices[0]), parseInt(slide_indices[1]), 0);
    else
        Reveal.slide(parseInt(slide), 0, 0);
}

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: false,
    progress: false,
    history: true,
    center: true,

    keyboard:{
        71:gotoSlide, // g -> goto slide
        13:'next',
    },

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'linear',
    transitionSpeed: 'fast',

    // Optional libraries used to extend on reveal.js
    dependencies: [
    { src: 'reveal/lib/js/classList.js', condition: function() { return !document.body.classList; } },

    ]
});


/* Adds page number to each slide. */
function currentPageFormatter(event) {
        var formattedStr;
        
        if (event.indexh === 0) {
                return "";
        }
 
        formattedStr = event.indexh;
 
        if (event.indexv) {
            formattedStr += "-" + event.indexv;
        }
 
        return formattedStr;
    }
 
    Reveal.addEventListener( 'ready', function( event ) {
        $('<aside class="controls slide-number" style="display: block; right: 10px; left: initial;bottom: -30px; text-align: center;"></aside>')
            .text(currentPageFormatter(event))
            .appendTo('.reveal.center');
    } );
 
    // Fires each time a new slide is activated
    Reveal.addEventListener( 'slidechanged', function( event ) {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        $(".slide-number").text(currentPageFormatter(event));
    } );


var data = [
	{
		value: 0.38,
		color:"#3498db"
	},
	{
		value : 0.55,
		color : "#e74c3c"
	},
	{
		value : 0.90,
		color : "#f1c40f"
	}			
]


var data2 = [
	{value: 0.72, color:"#3498db"},
	{value: 0.275, color:"#e67e22"},
	{value: 0.04, color:"#f1c40f"},
	{value: 0.54, color:"#e74c3c"},
	{value: 0.24, color:"#1abc9c"},
]

Reveal.addEventListener( 'slidechanged', function( event ) {
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("cost_repartition").getContext("2d");
    var myNewChart = new Chart(ctx).Pie(data);

    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("cost_source").getContext("2d");
    var myNewChart = new Chart(ctx).Pie(data2);
} );
