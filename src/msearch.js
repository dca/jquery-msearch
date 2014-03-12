(function($){
    $.fn.msearch = function(selector, field){
        if (!selector) {
            throw new Error('need a selector');
        }

        field = field || 'data-search';

        return this.each(function(){
            var styleWarp;

            styleWarp = $('<style class="styleWarp"></style>');
            styleWarp.appendTo('body');

            $(this).on('change paste keyup', function onSearch(){
                var search = $(this).val();
                var style = '';

                if (search){
                    style = selector + ':not([' + field + '*="' + search.toLowerCase() + '"]) {display: none;}';
                }
                styleWarp.text(style);
            });

            return this;
        });
    };
})(jQuery);

