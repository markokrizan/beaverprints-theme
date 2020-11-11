setTimeout(init, 2000);

var BOLD_RADIO_CLASS = ".bold_option_radio";
var BOLD_SWATCH_CLASS = ".bold_option_swatch";

function init () {
    var boldOptionRadioInputs = $(BOLD_RADIO_CLASS);
    var boldOptionSwatchInputs = $(BOLD_SWATCH_CLASS);

    boldOptionRadioInputs.each(function() {
        $(this).on('click', function (e) {
            handleItemClick($(e.target))
        })
    });

    boldOptionSwatchInputs.each(function() {
        $(this).on('click', function (e) {
            handleItemClick($(e.target))
        })
    })
}

function handleItemClick (radio) {    
    var currentInputOptionsContainer = radio.parents('.bold_option_element');
    var selectedInputLabel = radio.parents("label");

    // Remove selected class from other inputs from the same input container
    currentInputOptionsContainer.find('.bold_option_value').each(function() {
        var label = $(this).find('label')
        
        if (label !== selectedInputLabel) {
            label.removeClass('cstm-radio-selected')
        }        
    })
    
    // Add selected class to currently selected input
    selectedInputLabel.addClass('cstm-radio-selected')
}
