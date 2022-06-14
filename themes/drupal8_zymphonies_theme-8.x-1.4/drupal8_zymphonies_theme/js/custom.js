jQuery(document).ready(function($){

	//Main menu
	$('#main-menu').smartmenus();

    		 


                	$( ".node__content div.paragraph.paragraph--type--atributos-imagen-galeria.paragraph--view-mode--default" ).addClass(function(index, currentClass){
				/*alert("XXX: " + index + " con la clase: " + currentClass);*/
				if (index == 0) {currentClass= "col-sm-4";}
					else{currentClass= "col-sm-4";}
				return currentClass;
			    });

                	$( ".field-content div.paragraph.paragraph--type--atributos-imagen-galeria.paragraph--view-mode--default" ).addClass(function(index, currentClass){
			  /*	alert("YYY: " + index + " con la clase: " + currentClass); */
				if (index == 0) {currentClass= "col-sm-12";}
					else{currentClass= "col-sm-12";}
				return currentClass;
			    });


        /*
    $("div.node__content div.quickedit-field div.paragraph").addClass("col-sm-4" ,"paragraph");
    $("div.node__content div.quickedit-field").addClass("col-sm-4" ,"quickedit-field");
    $("div.node__content div.quickedit-field").addClass("col-sm-4");
    $('div.node__content div.quickedit-field').addClass('col-sm-4');*/
    /*alert("se lo comio")  */
	
	//Mobile menu toggle
	$('.navbar-toggle').click(function(){
		$('.region-primary-menu').slideToggle();
	});

	//Mobile dropdown menu
	if ( $(window).width() < 767) {
		$(".region-primary-menu li a:not(.has-submenu)").click(function () {
			$('.region-primary-menu').hide();
	    });
	}

	//flexslider
	jQuery('.flexslider').flexslider({
    	animation: "slide"	
    });
    
});