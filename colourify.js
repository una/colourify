(function(window, $) {
    var Colourify = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data( 'plugin-options' );
    };

    Colourify.prototype = {
        defaults: {
            colors: ["#17A39E","#F26D83","#67AF45","#F7941E"],
            property: "color"
        },
        init: function() {
            // this.config is how you can access the defaults 
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            //set global variables here
            this.chosenColor = this.chooseColor();

            //refer to your methods here
            this.colorIt();
            return this;
        },

        chooseColor: function() {
            randno = Math.floor(Math.random() * this.config.colors.length); 
            chosenColor = this.config.colors[randno];
        },

        colorIt: function() { 
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