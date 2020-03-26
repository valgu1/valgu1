$(function() {
    country = $.url(location.href).param('country');

    if (country == 'DE') {
        de_selected = 'selected="selected"';
    } else {
        de_selected = '';
    }
    if (country == 'AT') {
        at_selected = 'selected="selected"';
    } else {
        at_selected = '';
    }

    selects = $("select[name='country']");
    selects.append('<option value="DE" ' + de_selected + '>Germany</option>');
    selects.append('<option value="AT" ' + at_selected + '>Austria</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'DE';
            }

            if (sel == 'DE') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('select').val('DE').trigger('change');
                initializeMask({ mask: "(+4\\9\\)99999999999[9]", removeMaskOnSubmit: true })
            }
            if (sel == 'AT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('[name=country]').val('AT').trigger('change');
                initializeMask({ mask: "(+43)9999999[999999]", removeMaskOnSubmit: false })
            }


            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});