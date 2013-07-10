(function(window, $) {
    var Colourify = function(elem, options) {
        this.elem = elem; //element we're clicking on js object
        this.$elem = $(elem); //the element's jquery object
        this.options = options;
        this.metadata = this.$elem.data( 'plugin-options' );
    };

    Colourify.prototype = {
        defaults: {
            colors: ["#17A39E","#F26D83","#67AF45","#F7941E"],
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

        // color the div you're using on the property defined
        colorIt: function() { 
            this.$elem.css({"color": chosenColor});
        }
    };

    //this is basicallt what makes it function like a plugin
    $.fn.colourify = function(options) {
        return this.each(function(){
            new Colourify(this, options).init();
        });
    };

    window.Colourify = Colourify;
})(window, jQuery); 