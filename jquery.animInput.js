;(function($){
	$.fn.animInput = function(control, options) {
		var element = $(this);
		$control = $(control);
		options = $.extend({
			duration: 400,
			startPosition: '3px',
			topPosition: '-23px'
		}, options);
		element.delegate(control, 'focus', function() {
			if ( $(this).data('counter') > 0 ) return;
			$control.siblings("label").animate({
				top: options.startPosition
			}, options.duration, function() {
				$(this).css('cursor', 'text');
				$control.data('counter', 0);
			});
			$(this).siblings("label").stop(true)
				.animate({
					top: options.topPosition
				}, options.duration, function() {
					$(this).css('cursor', 'default');
					$(this).siblings(control).data('counter', 1);
				});
		}); 
		element.delegate(control, 'blur', function() {
			$control.siblings("label").animate({
				top: options.startPosition
			}, options.duration, function() {
					$(this).css('cursor', 'text');
					$(this).siblings(control).data('counter', 0);
				});
		});
		return this;
	};
})(jQuery);