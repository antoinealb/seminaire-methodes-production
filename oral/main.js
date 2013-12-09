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
    { src: 'reveal/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    { src: 'reveal/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } },
    { src: 'reveal/plugin/math/math.js', async: true }

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

