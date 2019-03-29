window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.background = "rgba(241, 243, 254, 0.95)";
        document.getElementById("hh-logo-img").style.width = "60px";
        document.getElementById("navbar").style.paddingTop = "15px";
    } else {
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("hh-logo-img").style.width = "150px";
        document.getElementById("navbar").style.paddingTop = "25px";
    }
}

function type_change(clicked_id)
{
    var clicked_id = clicked_id.id;
    var element1 = document.getElementById(10);
    var element2 = document.getElementById(11);
    var element3 = document.getElementById("MobileViewI");
    var element4 = document.getElementById("WebViewI");
    var element5 = document.getElementById(12);
    var element6 = document.getElementById(13);
    var element7 = document.getElementById("MobileViewII");
    var element8 = document.getElementById("WebViewII");

    // for payment image switch
    if(clicked_id == 10){
        name = "active";
        arrI = element1.className.split(" ");
        arrII = element3.className.split(" ");
        
        if (arrI.indexOf(name) == -1) {
            element1.className += " " + name;
        }
        if (arrII.indexOf(name) == -1) {
            element3.className += " " + name;
        }
        element4.className = element4.className.replace(/\bactive\b/g, "");
        element2.className = element2.className.replace(/\bactive\b/g, "");
    }else if (clicked_id == 11){
        name = "active";
        arrI = element2.className.split(" ");
        arrII = element4.className.split(" ");
        if (arrI.indexOf(name) == -1) {
            element2.className += " " + name;
        }
        if (arrII.indexOf(name) == -1) {
            element4.className += " " + name;
        }
        element3.className = element3.className.replace(/\bactive\b/g, "");
        element1.className = element1.className.replace(/\bactive\b/g, "");
    }
    
    // for wallet Image switch
    if(clicked_id == 12){
        name = "active";
        arrI = element5.className.split(" ");
        arrII = element7.className.split(" ");
        
        if (arrI.indexOf(name) == -1) {
            element5.className += " " + name;
        }
        if (arrII.indexOf(name) == -1) {
            element7.className += " " + name;
        }
        element8.className = element8.className.replace(/\bactive\b/g, "");
        element6.className = element6.className.replace(/\bactive\b/g, "");
    }else if (clicked_id == 13){
        name = "active";
        arrI = element6.className.split(" ");
        arrII = element8.className.split(" ");
        if (arrI.indexOf(name) == -1) {
            element6.className += " " + name;
        }
        if (arrII.indexOf(name) == -1) {
            element8.className += " " + name;
        }
        element7.className = element7.className.replace(/\bactive\b/g, "");
        element5.className = element5.className.replace(/\bactive\b/g, "");
    }
}

$.event.add(window, 'load', onLoad);

function onLoad(){
    $('.active').slideDown();
}
/*
$( ".tab" ).click(function() {
    $("div").removeClass("hidden");
  });
*/
$('body')
.on('click', '.tab', (el) => {
    // console.log(el);
    let me = el.target.id;
    console.log("ID of tab - " + me);

    let targ = me.slice(4);
     console.log(targ);

    //Show the hidden and hide others
    $('.hidden').slideUp();
    $('#'+targ).slideDown();

});

$('#box li button').on('click', function(){
    $('li button.current').removeClass('current');
    $(this).addClass('current');
});