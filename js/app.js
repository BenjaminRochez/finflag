jQuery(document).ready(function($) {

// scrollto

    $('.scrollTo').click(function(){

        /*if($('body').hasClass('scrollless')){

            $('body').removeClass('scrollless');
        }else{
            return true;
        }*/

        //$('#nav-icon').removeClass('open');
        var the_id = $(this).data("target");
        $(this).addClass('is-active');
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });


    // nav hidden

    $('#how').waypoint(function(direction){
        if(direction === 'down'){
            $('.ff-stucked').removeClass('is-hidden');
        }else if(direction === 'up'){
            $('.ff-stucked').addClass('is-hidden');
        }
    }, {
        offset: '0%'
    });



    var how = $('.ff-stucked--how');
    var what = $('.ff-stucked--what');
    var references = $('.ff-stucked--references');
    var contact = $('.ff-stucked--contact');



    // how
    $('#how').waypoint(function(direction){
        if(direction === 'down' && !how.hasClass('is-active')){
            how.addClass('is-active');
        }else if(direction === 'up' && how.hasClass('is-active')){
            how.removeClass('is-active');
        }
    },{
        offset:'0'
    });

    //what
    $('#what').waypoint(function(direction){
        if(direction === 'down' && !what.hasClass('is-active')){
            what.addClass('is-active');
        }else if(direction === 'up' && what.hasClass('is-active')){
            what.removeClass('is-active');
        }
    },{
        offset:'25%'
    });

    //references
    $('#references').waypoint(function(direction){
        if(direction === 'down' && !references.hasClass('is-active')){
            references.addClass('is-active');
        }else if(direction === 'up' && references.hasClass('is-active')){
            references.removeClass('is-active');
        }
    },{
        offset:'25%'
    });

    //contact
    $('#contact').waypoint(function(direction){
        if(direction === 'down' && !contact.hasClass('is-active')){
            contact.addClass('is-active');
        }else if(direction === 'up' && contact.hasClass('is-active')){
            contact.removeClass('is-active');
        }
    },{
        offset:'25%'
    });






    // inputs


    $('.ff-contact__input').focus(function(){
        $(this).parent().addClass('is-focused has-label');
    });

    $('.ff-contact__input').each(function(){
        if($(this).val() != ''){
            $(this).parent().addClass('has-label');
        }
    });

    $('.ff-contact__input').blur(function(){
        $parent = $(this).parent();
        if($(this).val() == ''){
            $parent.removeClass('has-label');
        }
        $parent.removeClass('is-focused');
    });



    // scrollreveal


    window.sr = ScrollReveal();

    // video
    sr.reveal('.ff-video', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    // title how
    sr.reveal('.ff-subtitle--card', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    // how content
    sr.reveal('.ff-sr__how-content', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    // features

    sr.reveal('.ff-sr__f1', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__f2', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    sr.reveal('.ff-sr__f3', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__f4', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__f5', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__f6', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    //crunching
    sr.reveal('.ff-crunching__title', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__c1', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__c2', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    // what
    sr.reveal('.ff-sr__w1', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__w2', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__w3', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);

    sr.reveal('.ff-sr__w4', {
        duration: 700,
        scale: 1,
        distance: '25px',
        opacity: 0,
        viewFactor: 0.6

    }, 100);


    //references
    sr.reveal('.ff-reference', {
            duration: 500,
            scale: 1,
            distance: '25px',
            opacity: 0,
            viewFactor: 0.6 },

        15);


    //contact

    sr.reveal('.ff-contact__form--sr', {
        duration: 700,
        scale: 1,
        distance: '105px',
        opacity: 0,
        viewFactor: 1

    }, 100);
});


// This is the important part!

