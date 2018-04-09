jQuery(document).ready(function($) {

 $('.workflow__main-logo').click(function(e){
     console.log('yo');
     $('.workflow__illu').toggleClass('is-closed');
 });
    Pace.on("done", function(){
        setTimeout(function () {
            $(".cover").fadeOut(1000);
        }, 0);

    });

    new Waypoint({
        element: document.getElementById("navwaypoint2"),
        handler: function(e) {
            $('.nav').toggleClass('is-fixed');
            $('.nav').toggleClass('is-hidden');
        },
        offset: "30%"
    });


    new Waypoint({
        element: document.getElementById("navwaypoint"),
        handler: function(e) {
            $('.nav').toggleClass('is-hidden');
        },
        offset: "50%"
    });

    new Waypoint({
        element: document.getElementById("workflow"),
        handler: function(e) {
            $('.workflow__illu').removeClass('is-closed');
        },
        offset: "70%"
    });

    // scrollto

    $('.scrollTo').click(function(){
        $('.nav__links').removeClass('is-open');

        if($('body').hasClass('scrollless')){

            $('body').removeClass('scrollless');
        }else{
            return true;
        }

        $('#nav-icon').removeClass('open');
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top - 60
        }, 'slow');
        return false;


    });


    // sr

    window.sr = ScrollReveal();

    // Features reveal
    sr.reveal('.sr1', {
        duration: 500,
        scale: 1,
        delay: 200,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6,
        useDelay: 'once'
    }, 100);


    sr.reveal('.srteam', {
        duration: 500,
        scale: 1,
        delay: 1000,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6,
        useDelay: 'once'
    }, 100);
    sr.reveal('.sr12', {
        duration: 500,
        scale: 1,
        delay: 350,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6,
        useDelay: 'once'

    }, 100);

    sr.reveal('.sr13', {
        duration: 500,
        scale: 1,
        delay: 450,
        distance: '25px',
        opacity: 0,
        viewFactor: -0.5,
        useDelay: 'once'
    }, 100);

    //mobile
    sr.reveal('.sr2', {
        duration: 750,
        scale: 1,
        delay: 550,
        distance: '100px',
        opacity: 0,
        viewFactor: -0.3,
        useDelay: 'once'
    }, 100);

    // vague
    sr.reveal('.srv1', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.1
    }, 100);

    // advantages
    sr.reveal('.sr3', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0

    }, 100);
    sr.reveal('.sr4', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0

    }, 100);
    sr.reveal('.sr5', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0

    }, 100);
    sr.reveal('.sr6', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0

    }, 100);

    sr.reveal('.sr7', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    sr.reveal('.sr8', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr9', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr10', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr14', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr15', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr16', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.sr24', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);





    sr.reveal('.srt1', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.9

    }, 100);
    sr.reveal('.srt2', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.9

    }, 100);

    sr.reveal('.srt3', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.9

    }, 100);

    sr.reveal('.srt4', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.9

    }, 100);

    sr.reveal('.srt5', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.9

    }, 100);

    sr.reveal('.sr17', {
        duration: 500,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.7

    }, 100);






    //
    //
    //

    // Slider features on mobile
    var $featurecontainer = $('.features__container');
    var $bulletcontainer = $('.feature__bullets');
    var currentfeature= 1;
    var maxfeature = 4;



    function featureRight(){
        if(currentfeature < maxfeature){
            $featurecontainer.removeClass('currentfeature' + currentfeature + '');
            $bulletcontainer.removeClass('currentfeature' + currentfeature + '');
            currentfeature++;
            $featurecontainer.addClass('currentfeature' + currentfeature + '');
            $bulletcontainer.addClass('currentfeature' + currentfeature + '');

        }
    }
    function featureLeft(){
        if(currentfeature > 1){
            $featurecontainer.removeClass('currentfeature' + currentfeature + '');
            $bulletcontainer.removeClass('currentfeature' + currentfeature + '');
            currentfeature--;
            $featurecontainer.addClass('currentfeature' + currentfeature + '');
            $bulletcontainer.addClass('currentfeature' + currentfeature + '');
        }
    }

    $featurecontainer.swipe( {
        //Generic swipe handler for all directions
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            if(direction === 'right' && $(window).width() < 980){
                featureLeft();
            }else if(direction === 'left' && $(window).width() < 980){
                featureRight();
            }else{
                return true;
            }
        }, allowPageScroll:"vertical"
    });


    $('.feature__bullet').click(function(e){
        if($(this).attr('data-feature') == currentfeature){
            return true;
        } else {
            e.preventDefault();
            $featurecontainer.removeClass('currentfeature' + currentfeature + '');
            $bulletcontainer.removeClass('currentfeature' + currentfeature + '');
            currentfeature = $(this).attr('data-feature');
            $featurecontainer.addClass('currentfeature' + currentfeature + '');
            $bulletcontainer.addClass('currentfeature' + currentfeature + '');
        }
    });



    $('#nav-icon').click(function(){
        $('body').toggleClass('scrollless');
        $(this).toggleClass('open');
        $('.nav__links').toggleClass('is-open');
    });

});



