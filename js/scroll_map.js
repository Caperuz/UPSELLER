// JavaScript Document

$(document).ready(function () {
    $("#unidadAButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadA").offset().top-150
        }, 1000);
    });
    $("#unidadBButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadB").offset().top-150
        }, 1000);
    });
    $("#unidadCButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadC").offset().top-150
        }, 1000);
    });
    $("#unidadDButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadD").offset().top-150
        }, 1000);
    });
    $("#unidadEButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadE").offset().top-150
        }, 1000);
    });
    $("#unidadFButton").click(function () {
        $('html, body').animate({
            scrollTop: $("#unidadF").offset().top-150
        }, 1000);
    });
    
});

jQuery ( document ).ready ( function($) {

var hash= window.location.hash

if ( hash == '' || hash == '#' || hash == undefined ) return false;

	    
      var target = $(hash);
    
      headerHeight = 82;
      
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        $('html,body').stop().animate({
          scrollTop: target.offset().top - 87 //offsets for fixed header
        }, 'linear');
        
      }

} );