(function(window, $) {
	var Colourify = function(elem, options) {
		this.elem = elem;
		this.$elem = $(elem);
		this.options = options;
		this.metadata = this.$elem.data( 'plugin-options' );
	};

	Colourify.prototype = {
		// the defaults are unakravets.com colors, editing the 'color' property
		defaults: {
			colors: ["#17a39e","#f26d83","#67af45","#f7941e"],
			property: "color"
		},
		init: function() {
			this.config = $.extend({}, this.defaults, this.options, this.metadata);

			this.chosenColor = this.chooseColor();

			this.colorIt();
			return this;
		},

		chooseColor: function() {
			// chooses a random color from the list you provide (or default)
			randno = Math.floor(Math.random() * this.config.colors.length); 
			chosenColor = this.config.colors[randno];
		},

		colorIt: function() { 
			//changes the property you provide (or color property) to the randomly chosen color
			this.$elem.css(this.config.property, chosenColor);
		}
	};

	$.fn.colourify = function(options) {
		return this.each(function(){
			new Colourify(this, options).init();
		});
	};

	window.Colourify = Colourify;
})(window, jQuery); 