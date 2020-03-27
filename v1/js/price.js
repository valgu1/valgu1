$(function () {


    var xhr = new XMLHttpRequest();
    xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
    xhr.send();

    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        setGeoData(response.city, response.country, response.code);
    }


    function setGeoData(city, country, countryCode) {
        $('.user-city').text(city);
        $('.js-city').text(city);



        setCountryPrice(countryCode);
    }

    function setCountryPrice(geoCountry) {



        if (typeof (country) == 'undefined') {
            country = geoCountry;
        }

        if (country == 'KZ') {
            kz_selected = 'selected="selected"';
        } else {
            kz_selected = '';
        }
        if (country == 'UA') {
            ua_selected = 'selected="selected"';
        } else {
            ua_selected = '';
        }

        if (country == 'MD') {
            md_selected = 'selected="selected"';
        } else {
            md_selected = '';
        }
        if (country == 'GE') {
            ge_selected = 'selected="selected"';
        } else {
            ge_selected = '';
        }
        if (country == 'BY') {
            by_selected = 'selected="selected"';
        } else {
            by_selected = '';
        }
        if (country == 'AM') {
            am_selected = 'selected="selected"';
        } else {
            am_selected = '';
        }
        if (country == 'AZ') {
            az_selected = 'selected="selected"';
        } else {
            az_selected = '';
        }
        if (country == 'UZ') {
            uz_selected = 'selected="selected"';
        } else {
            uz_selected = '';
        }

        selects = $("select[name='country']");
        selects.append('<option value="RU">Россия</option>');
        // selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');
        selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');

        // selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');

        // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
        // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
        // selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
        // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
        // selects.append('<option value="UZ" ' + uz_selected + '>Узбекистан</option>');

        var change = 0,
            updatePrices = function (item) {
                change = 1;

                $(item.children).each(function () {
                    if (this.selected) sel = $(this).val();
                });

                if (typeof sel === 'undefined') {
                    sel = 'RU';
                }


                if (sel == 'RU') {
                    $('.old_price_val').html('1990');
                    $('.old_price_cur').html('руб');
                    $('.old_price_sig').html('&#8381;');
                    $('.new_price_val').html(' 149');
                    $('.new_price_cur').html(' руб');
                    $('.new_price_cur_l').html('рублей');
                    $('.new_price_sig').html('&#8381;');
                    $('.country_name').text('Российские');
                    $('.country_name1').text('российскому');
                    $('.country_name2').text('России');
                    $('.country_name3').text('Россия');
                    $('.country_name4').text('российских');
                    $('.country_name5').text('российской');
                    $('.country_name6').text('российским');
                    $('.country_name7').text('российском');
                    $('.country_name8').text('российскую');
                    $('.country_name9').text('российские');
                    $('.country_name10').text('российский');
                    $('.country_name11').text('России');
                    $('.country_name12').text('России');
                    $('.country_name13').text('Российская');
                    $('select').val('RU').trigger('change');
                    inESializeMask('+(7)9{10}')
                }

                if (sel == 'KZ') {
                    $('.old_price_val').html('11000');
                    $('.old_price_cur').html('тнг');
                    $('.old_price_sig').html('тнг*');
                    $('.new_price_val').html(' 830');
                    $('.new_price_cur').html(' тнг');
                    $('.new_price_sig').html('');
                    $('.country_name').text('Казахстанские');
                    $('.country_name1').text('казахстанскому');
                    $('.country_name2').text('Казахстана');
                    $('.country_name3').text('Казахстан');
                    $('.country_name4').text('казахстанских');
                    $('.country_name5').text('казахской');
                    $('.country_name6').text('казахстанским');
                    $('.country_name7').text('казахском');
                    $('.country_name8').text('казахстанскую');
                    $('.country_name9').text('казахстанские');
                    $('.country_name10').text('казахстанский');
                    $('.country_name11').text('Казахстану');
                    $('.country_name12').text('Казахстанe');
                    $('.country_name13').text('Казахская');
                    $('select').val('KZ').trigger('change');
                    inESializeMask('+(7)9{9}')
                }

                if (sel == 'UA') {
                    $('.old_price_val').html('640');
                    $('.old_price_cur').html('грн');
                    $('.old_price_sig').html('грн*');
                    $('.new_price_val').html(' 69');
                    $('.new_price_cur').html(' грн');
                    $('.new_price_sig').html('грн*');
                    $('.country_name').text('Украинские');
                    $('.country_name1').text('украинскому');
                    $('.country_name2').text('Украины');
                    $('.country_name3').text('Украина');
                    $('.country_name4').text('украинских');
                    $('.country_name5').text('украинской');
                    $('.country_name6').text('украинским');
                    $('.country_name7').text('украинском');
                    $('.country_name8').text('украинскую');
                    $('.country_name9').text('украинские');
                    $('.country_name10').text('украинский');
                    $('.country_name11').text('Украине');
                    $('.country_name12').text('Украины');
                    $('.country_name13').text('Украинская');
                    $('select').val('UA').trigger('change');
                }

                if (sel == 'UZ') {
                    $('.old_price_val').html('3380');
                    $('.old_price_cur').html('сум');
                    $('.old_price_sig').html('сум*');
                    $('.new_price_val').html('99000');
                    $('.new_price_cur').html('сум');
                    $('.new_price_sig').html('сум*');
                    $('.country_name2').text('Узбекистана');
                    $('.country_name3').text('Узбекистан');

                    $('select').val(sel).trigger('change');
                }

                if (sel == 'GE') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('gel');
                    $('.old_price_sig').html('gel*');
                    $('.new_price_val').html(' 15');
                    $('.new_price_cur').html(' gel');
                    $('.new_price_sig').html('gel*');
                    $('.country_name').text('Грузинские');
                    $('.country_name1').text('грузинскому');
                    $('.country_name2').text('Гризии');
                    $('.country_name3').text('Грузия');
                    $('.country_name4').text('грузинских');
                    $('.country_name5').text('грузинской');
                    $('.country_name6').text('грузинским');
                    $('.country_name7').text('грузинском');
                    $('.country_name8').text('грузинскую');
                    $('.country_name9').text('грузинские');
                    $('.country_name10').text('грузинский');
                    $('.country_name11').text('Грузии');
                    $('.country_name12').text('Грузии');
                    $('.country_name13').text('Грузинская');
                    $('select').val(sel).trigger('change');
                }
                if (sel == 'AM') {
                    $('.old_price_val').html('25980');
                    $('.old_price_cur').html('др');
                    $('.old_price_sig').html('др*');
                    $('.new_price_val').html(' 12890');
                    $('.new_price_cur').html(' др');
                    $('.new_price_sig').html('др*');
                    $('.country_name').text('Армянские');
                    $('.country_name1').text('армянскому');
                    $('.country_name2').text('Армении');
                    $('.country_name3').text('Армения');
                    $('.country_name4').text('армянских');
                    $('.country_name5').text('армянской');
                    $('.country_name6').text('армянским');
                    $('.country_name7').text('армянском');
                    $('.country_name8').text('армянскую');
                    $('.country_name9').text('армянские');
                    $('.country_name10').text('армянский');
                    $('.country_name11').text('Армении');
                    $('.country_name12').text('Армении');
                    $('.country_name13').text('Армянская');
                    $('select').val(sel).trigger('change');
                }

                if (sel == 'BY') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('р');
                    $('.old_price_sig').html('р*');
                    $('.new_price_val').html(' 5');
                    $('.new_price_cur').html(' Бр');
                    $('.new_price_sig').html('р*');
                    $('.country_name').text('Белорусские');
                    $('.country_name1').text('белорусскому');
                    $('.country_name2').text('Белорусии');
                    $('.country_name3').text('Белорусию');
                    $('.country_name4').text('белорусских');
                    $('.country_name5').text('белорусской');
                    $('.country_name6').text('белорусским');
                    $('.country_name7').text('белорусском');
                    $('.country_name8').text('белорусскую');
                    $('.country_name9').text('белорусские');
                    $('.country_name10').text('белорусский');
                    $('.country_name11').text('Белорусии');
                    $('.country_name12').text('Белорусии');
                    $('.country_name13').text('Белорусская');
                    $('select').val(sel).trigger('change');
                }



                if (sel == 'AZ') {
                    $('.old_price_val').html('69');
                    $('.old_price_cur').html('манат');
                    $('.old_price_sig').html('манат*');
                    $('.new_price_val').html('29');
                    $('.new_price_cur').html('манат*');
                    $('.new_price_sig').html('манат*');
                    $('select').val(sel).trigger('change');
                    initializeMask('remove')
                }


                change = 0;
            };
        function inESializeMask (mask) {
            $('[name=phone]').inputmask(mask);
        }
        $("select").change(function () {
            if (change == 0) updatePrices(this);
        }).change();
    }
});
