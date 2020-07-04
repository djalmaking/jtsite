$(function() {
    $('.rating').barrating({
        theme: 'fontawesome-stars',
        onSelect: function(value, text, event) {

            // Get element id by data-id attribute
            var el = this;
            var el_id = el.$elem.data('id');
        }
    });
});