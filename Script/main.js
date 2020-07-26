/*
$(document).ready(function(){
    $('.carousel').carousel({
        interval:5000
    });
});
*/
$('.carousel').carousel({
    interval: 10000
})
var gear =document.getElementById('gear'),
    chooseColor = document.getElementById('color');
    gear.onclick = function(){
        'use strict';
        chooseColor.classList.toggle('hide');
    }

var colorLi = $(".color-option ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "gold").end()
        .eq(2).css("backgroundColor", "#28A745").end()
        .eq(3).css("backgroundColor", "rgb(228, 172, 19)").end()
        .eq(4).css("backgroundColor", "rgb(0, 123, 255)");

    colorLi.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });

    var myLoader = document.querySelector('.load-wrapper');
    window.addEventListener('load',function(){
        'use strict';
        myLoader.classList.add('loader-wrapper-finish');
    });