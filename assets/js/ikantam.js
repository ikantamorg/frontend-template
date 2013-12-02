/*! 
 *  Written for: ?
 *  Author: @IkantamCorp - @ElmahdiMahmoud
 *  Further changes: @author
 *  Last modified date: 02.12.13
 */

 (function($) { 
 $(document).ready(function() { 
	
	$.fn.stepTo = function () {
		return this.each(function () {
		var $this = $(this);
		$this.on('click', function(){
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 85
		}, 1000);
		return false;
		});
		});
	}
	$('.step-to').stepTo();
	
	/*!
	 * Basic plugin pattern
	 */
	/*
	// self-invoking
	;(function ($, window, document, undefined) {
	    $.fn.plugiName = function () {
	        return this.each(function () {
	            var $this = $(this);
	            //plugin logic
	        });
	    }
	})(jQuery, window, document);
	//fire the plugin
	$('selector').plugiName();
	*/

	
 }); //end doc ready
})(jQuery); 
