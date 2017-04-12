/**
**************************************************************************
    1st Requirement
**************************************************************************
**/
// Hide the input element
$("#other-title").hide();
//'Your job role' text filed shows when user selects 'other', hides when user selects other options.
$('#title').change(function() {
    let optionValue = $('#title').val();
    if (optionValue === 'other') {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});
/**
**************************************************************************
    2nd Requirement
**************************************************************************
**/
// create a new object array called optArray by translate all options from #color
let optArray = $('#color').children('option').map(function() {
    return {
        value: this.value,
        option: "<option value='" + this.value + "'>" + this.text + "</option>"
    }
});
// hide div#colors-js-puns in order to meet exceeds expectations
$('#colors-js-puns').hide();
// The #color list will be reset or cleared after the #design list is changed
$('#design').change(function() {
    let value = $('#design').val();
    // keep hiding the div#colors-js-puns if "Select Theme" selected
    if (value == 'default') {
        $('#colors-js-puns').hide();
    } else {
        // show div#colors-js-puns
        $('#colors-js-puns').show();
        // clear all the options from #color list
        $('#color').children('option').remove();
        // create a new array called addOptArray to store matched options based on previous option on design list
        let addOptArray = [];
        for (var i = 0; i < optArray.length; i++) {
            // find option's value starts with the current option's value from optArray
            if (optArray[i].value.indexOf($(this).val()) > -1) {
                // add to addOptArray
                addOptArray.push(optArray[i].option);
            }
        };
        // display in HTML
        $('#color').html(addOptArray.join(''));
    }
});
/**
**************************************************************************
    3rd Requirement
**************************************************************************
**/
