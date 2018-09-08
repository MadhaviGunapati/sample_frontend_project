var tour = new Tour({
    storage: false
});
tour.addSteps(
[
    {
        element: "#col-1",
        placement: 'bottom',
        title:"Live classes",
        content:"Classes are interractive and happen in real-time"

    },
    {
        element: "#col-2",
        placement: "bottom",
        title:"Flexible Schedule",
        content:"Classes are interractive and happen in real-time"
    },
    {
        element: "#col-3",
        placement: 'bottom',
        title:"Live classes",
        content:"Classes are interractive and happen in real-time"
    },
    {
        orphan : true,
        title: 'Thank you',
        back : true,
        content:"Thank you for visiting the site"
    }
]
);
$(document).ready(function (){
    $("#start-tour-btn").on("click", function (){
        tour.init();
        tour.start();
        $event.preventDefault();
    });
})

