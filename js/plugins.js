/**
 * @name        jQuery Countdown Plugin
 * @author      Martin Angelov
 * @version     1.0
 * @url         http://tutorialzine.com/2011/12/countdown-jquery/
 * @license     MIT License
 */

(function($){
    
    
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
    
	
<!-- added var ytime = (yhour + '' + yminute);
	var ytime = (yhour + '' + yminute);
    
    // Number of seconds in every time division
    var days    = 24*60*60,
        hours   = 60*60,
        minutes = 60;
    
    // Creating the plugin
    $.fn.countdown = function(prop){
        
        var options = $.extend({
            callback    : function(){},
            timestamp   : 0
        },prop);
        
        var left, d, h, m, s, positions;

        // Initialize the plugin
        init(this, options);
        
        positions = this.find('.position');
        
        (function tick(){
            
            // Time left
            left = Math.floor((options.timestamp - (new Date())) / 1000);
            
            if(left < 0){
                left = 0;
            }
            
            // Number of days left
            d = Math.floor(left / days);
            updateDuo(0, 1, d);
            left -= d*days;
            
            // Number of hours left
            h = Math.floor(left / hours);
            updateDuo(2, 3, h);
            left -= h*hours;
            
            // Number of minutes left
            m = Math.floor(left / minutes + 1);
            updateDuo(4, 5, m);
            left -= m*minutes;
            
            // Number of seconds left
            s = left;
            updateDuo(6, 7, s);
            
            // Calling an optional user supplied callback
            options.callback(d, h, m, s);
            
<!-- start updated block (ends at line 198) -->
			/* powerball */
			if ( $(".holder-header-page-jackpot").hasClass("powerball") ) {
				if (ytime <= 2159) {
					if (yday == 0) {
						$('.count-days').html('<span class="position">3</span>');
					}
					else if (yday == 1) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 2) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 3) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 4) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 5) {
						$('.count-days').html('<span class="position">1</span>');
					} 
					else if (yday == 6) {
						$('.count-days').html('<span class="position">0</span>');
					}
				} else {
					if (yday == 0) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 1) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 2) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 3) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 4) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 5) {
						$('.count-days').html('<span class="position">0</span>');
					} 
					else if (yday == 6) {
						$('.count-days').html('<span class="position">3</span>');
					}
				}	
			}
    
			/* megamillions */
			if ( $(".holder-header-page-jackpot").hasClass("megamillions") ) {
				if (yday == 0) {
					$('.count-days').html('<span class="position">2</span>');
				}
				else if (yday == 1) {
					$('.count-days').html('<span class="position">1</span>');
				}
				else if (yday == 2) {
					if (ytime < 2200) {
						$('.count-days').html('<span class="position">0</span>');
					} else {
						$('.count-days').html('<span class="position">2</span>');
					}
				}
				else if (yday == 3) {
					$('.count-days').html('<span class="position">2</span>');
				}
				else if (yday == 4) {
					$('.count-days').html('<span class="position">1</span>');
				}
				else if (yday == 5) {
					if (ytime < 2200) {
						$('.count-days').html('<span class="position">0</span>');
					} else {
						$('.count-days').html('<span class="position">3</span>');
					}
				} 
				else if (yday == 6) {
					$('.count-days').html('<span class="position">3</span>');
				}
			}
    
			/* lotto */
			if ( $(".holder-header-page-jackpot").hasClass("lotto") ) {
				if (ytime <= 2122) {
					if (yday == 0) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 1) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 2) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 3) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 4) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 5) {
						$('.count-days').html('<span class="position">1</span>');
					} 
					else if (yday == 6) {
						$('.count-days').html('<span class="position">0</span>');
					}
				} else {
					if (yday == 0) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 1) {
						$('.count-days').html('<span class="position">2</span>');
					}
					else if (yday == 2) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 3) {
						$('.count-days').html('<span class="position">0</span>');
					}
					else if (yday == 4) {
						$('.count-days').html('<span class="position">1</span>');
					}
					else if (yday == 5) {
						$('.count-days').html('<span class="position">0</span>');
					} 
					else if (yday == 6) {
						$('.count-days').html('<span class="position">1</span>');
					}
				}
			}
			
			/* ldl */
			if ( $(".holder-header-page-jackpot").hasClass("ldl") ) {
				$('.count-days').html('<span class="position">0</span>');
			}	
				
			
<!--- end updated code block -->    
    
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
        })();
        
		
		
        // This function updates two digit positions at once
        function updateDuo(minor,major,value){
            switchDigit(positions.eq(minor),Math.floor(value/10)%10);
            switchDigit(positions.eq(major),value%10);
        }
        
        return this;
    };


    function init(elem, options){
        elem.addClass('holder-countdown');

        // Creating the markup inside the container
		$.each(['days','hours','minutes'],function(i){
			$('<span class="count-'+this+'">' +
				'<span class="position">' +
				'<span class="digit static">0</span>' +
				'</span>' +
				'<span class="position">' +
				'<span class="digit static">0</span>' +
				'</span>' +
				'</span>').appendTo(elem);
            
				if(this!="Minutes"){
	                elem.append('<span class="count-div count-div'+i+'"></span>');
				}
			});

		}
    
    // Creates an animated transition between the two numbers
    function switchDigit(position,number){
        
        var digit = position.find('.digit')
        
        if(digit.is(':animated')){
            return false;
        }
        
        if(position.data('digit') == number){
            // We are already showing this number
            return false;
        }
        
        position.data('digit', number);
        
        var replacement = $('<span>',{
            'class':'digit',
            css:{
                top:'-2.1em'
                
            },
            html:number
        });
        
        // The .static class is added when the animation
        // completes. This makes it run smoother.
        
        digit
            .before(replacement)
            .removeClass('static')
            .animate({top:'2.5em'},0,function(){
                digit.remove();
            })

        replacement
            .delay(0)
            .css({top:0}, function(){
                replacement.addClass('static');
            });
            
    }
	
	
    
})(jQuery);

