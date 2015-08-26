$(document).ready(function() {
 
    /* tabs */
    $('.tabs-new a').click(function(){
        switch_tabs($(this));
        return false
    });
    switch_tabs($('.default-tab'));
	
	 /* tabs */
    $('.tabber').click(function(){
      	$('.tabs-new a').removeClass('selected');
		$('#tabs-play').hide();
		$('#tabs-win').show();
		$('#t-win').addClass('selected');
		location.href = "#chart";
        return false
    });

    
});

/* tabs */
function switch_tabs(obj)
{
    $('.tab-content').hide();
    $('.tabs-new a').removeClass("selected");
    var id = obj.attr("rel");
    $('#'+id).show();
    obj.addClass("selected");
}



/* countdown */
$(function(){
    
    /* get todays date */
    var d = new Date();
    
    var yyear = d.getFullYear();
    var ymonth = d.getMonth();
    var ydate = d.getDate();
    var yday = d.getDay();
    var yhour = d.getHours();
    var yminute = d.getMinutes();
    if (yminute <= 9) {
      yminute = 0 + '' + yminute;
    }
    
    if (yhour == 0) {
      yhour = '00';
    }

    
    var newtime = yhour + '' + yminute;
    
    newYear = false;
    
    /* powerball */
	if ( $(".holder-header-page-jackpot").hasClass("powerball") ) {
		if (newtime <= 2159) {
			ts = new Date(yyear,ymonth,ydate,21,59,0);
		} /* count to tomorrow's time */
		else if (newtime > 2159 ) {
			var tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000);
			var ymonth = tomorrow.getMonth();
			var ydate = tomorrow.getDate();
			ts = new Date(yyear,ymonth,ydate,21,59,0);                                     
		}
    }
    
    /* megamillions */
    if ( $(".holder-header-page-jackpot").hasClass("megamillions") ) {
        if (newtime <= 2200) {
			ts = new Date(yyear,ymonth,ydate,22,00,0);
		} /* count to tomorrow's time */
		else if (newtime > 2200 ) {
			var tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000);
			var ymonth = tomorrow.getMonth();
			var ydate = tomorrow.getDate();
			ts = new Date(yyear,ymonth,ydate,22,00,0);                                  
		}
    }
    
	/* lotto */
    if ( $(".holder-header-page-jackpot").hasClass("lotto") ) {
        if (newtime <= 2122) {
            ts = new Date(yyear,ymonth,ydate,21,22,0);
        } /* count to tomorrow's time */
        else if (newtime > 2122 ) {
            var tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000);
            var ymonth = tomorrow.getMonth();
            var ydate = tomorrow.getDate();
            ts = new Date(yyear,ymonth,ydate,21,22,0);                                  
        }
    }
    
    
    /* lucky day lotto */
	if ( $(".holder-header-page-jackpot").hasClass("ldl") ) {
							
		/* count to today's 12:40 draw */
		if (newtime <= 1240) {
			ts = new Date(yyear,ymonth,ydate,12,40,0);
		}
						
		/* count to today's 9:22 draw */
		else if (newtime > 1240 && newtime < 2122 ) {
			ts = new Date(yyear,ymonth,ydate,21,22,0);
		}
										
		/* count to tomorrow's 12:40 draw */
		else if (newtime >= 2122 ) {
			var tomorrow = new Date(d.getTime() + 24 * 60 * 60 * 1000);
			var ymonth = tomorrow.getMonth();
			var ydate = tomorrow.getDate();
			ts = new Date(yyear,ymonth,ydate,12,40,0);                                      
		}
	}

        
    $('.holder-countdown').countdown({
        timestamp   : ts,
        callback    : function(days, hours, minutes, seconds){
            
            var message = "";
            
            if(newYear){
                message += "left until the new year!";
            }
            else {
                message += "left to 10 days from now!";
            }   
        }
        
    });
	
<!-- moved here 
//	$('.count-minutes').append('<span class="cntr-lbl">Minutes</span>');
//	$('.count-hours').append('<span class="cntr-lbl">Hours</span>');	

});



/* show tool-tip */
$('#tabs-play .ico-help').bind( "click", function() {
	$('.col-card .tip').hide();
	$('.col-card .box').hide();
	$('.col-card .ico-help').fadeIn('fast');
	$(this).hide().parent().find('.tip').fadeIn('fast');
	$(this).parent().find('.box').fadeIn('fast');
});
/* hide tool-top */
$('.tip a.tip-close').bind( "click", function() {
	$(this).parent().fadeOut('fast');
	$('.col-card .box').hide();
	$(this).parent().parent().find('.ico-help').fadeIn('fast');
	return false
});