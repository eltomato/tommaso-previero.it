
jQuery(function($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function() {
        $('#pre-status').fadeOut(1200, function() {
            $('#tt-preloader').fadeOut('slow');
        });
    });

    // -------------------------------------------------------------
    // Scrollspy
    // -------------------------------------------------------------

    (function() {
        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());

    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').slideDown();
            } else {
                $('.scroll-up').slideUp();
            }
        });
    }());

    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function() {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        }
        else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });

    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function() {
        new WOW({
            mobile: false
        }).init();
    }());

    // -------------------------------------------------------------
    // Contact Form
    // -------------------------------------------------------------

    // $('#contactForm').on('submit', function(e) {

    //     e.preventDefault();

    //     var $action = $(this).prop('action');
    //     var $data = $(this).serialize();
    //     var $this = $(this);

    //     $this.prevAll('.alert').remove();

    //     $.post($action, $data, function(data) {

    //         if (data.response == 'error') {

    //             $this.before('<div class="alert alert-danger">' + data.message + '</div>');
    //         }

    //         if (data.response == 'success') {

    //             $this.before('<div class="alert alert-success">' + data.message + '</div>');
    //             $this.find('input, textarea').val('');
    //         }

    //     }, "json");

    // });

    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    // (function() {
        // var myLatlng = new google.maps.LatLng(41.372641, -74.687387);

        // var styles = [{
        //     featureType: "landscape",
        //     stylers: [{
        //         color: '#f7f7f7'
        //     }]
        // }, {
        //     featureType: "natural",
        //     stylers: [{
        //         hue: '#00ffe6'
        //     }]
        // }, {
        //     featureType: "road",
        //     stylers: [{
        //         hue: '#fff'
        //     }, {
        //         saturation: -70
        //     }]
        // }, {
        //     featureType: "building",
        //     elementType: "labels",
        //     stylers: [{
        //         hue: ''
        //     }]
        // }, {
        //     featureType: "poi", //points of interest
        //     stylers: [{
        //         hue: ''
        //     }]
        // }];

        // var mapOptions = {
        //     zoom: 15,
        //     scrollwheel: false,
        //     center: myLatlng,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        //     disableDefaultUI: true,
        //     styles: styles
        // }
        // var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

        // var marker = new google.maps.Marker({
        //     position: myLatlng,
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     title: 'Hello World!'
        // });

        // var contentString = '' +
        //     '' +
        //     '';

        // var infowindow = new google.maps.InfoWindow({
        //     content: contentString
        // });

        // google.maps.event.addListener(marker, 'click', function() {
        //     infowindow.open(map, marker);
        // });

    // }());


});
