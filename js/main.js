/**
**************************************************************************
    1st Requirement: Focus on the first field
**************************************************************************
**/
$('#name').focus();
/**
**************************************************************************
    2nd Requirement: Job Role Section
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
    3rd Requirement: T-Shirt Section
    AND
    1st Extra Credit: Hide the "color" label
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
            // find option's value contains the current option's value from optArray
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
    3rd Requirement: Activity Registration
**************************************************************************
**/
let totalCost = 0;
// append totol cost to .activities
$('.activities').append('<div>Total: $<span class="totalCost">0</span></div>')
$('.activities input[type="checkbox"]').each(function() {
    $(this).change(function() {
        let activity = $(this).attr("name");
        let timeSlot = $(this).attr("data-timeslot");
        let activityCost = parseInt($(this).attr("data-cost"));
        let activityTimeslot = $('input[data-timeslot="' + timeSlot + '"]');
        let conflictActivityTimeslot = activityTimeslot.not(':checked');

        if ($(this).is(":checked")) {
            conflictActivityTimeslot.prop('disabled', true);
            conflictActivityTimeslot.parent().css('text-decoration', 'line-through');
            totalCost += activityCost;
        } else {
            conflictActivityTimeslot.prop("disabled", false);
            conflictActivityTimeslot.parent().css('text-decoration', 'none');
            totalCost -= activityCost
        }
        $('.totalCost').text(totalCost);
    });
});
/**
**************************************************************************
    4th Requirement: Displaying payment sections
**************************************************************************
**/
$('#paypal, #bitcoin').hide();
$('#payment').val('credit card');
$('#payment').change(function() {
    let paymentMethod = $(this).val();
    if (paymentMethod == "credit card") {
        $('#paypal, #bitcoin').hide();
        $('#credit-card').show();
    } else if (paymentMethod == "select_method") {
        $('#paypal, #bitcoin').hide();
        $('#credit-card').show();
    } else if (paymentMethod == "paypal") {
        $('#credit-card, #bitcoin').hide();
        $('#paypal').show();
    } else {
        $('#credit-card, #paypal').hide();
        $('#bitcoin').show();
    }
});
/**
**************************************************************************
    5th Requirement: Form Validation
**************************************************************************
**/
const nameValidation = () => {
    let nameValue = $('#name').val();
    let regexpName=/^([a-zA-Z]{3,16})$/;
    return (regexpName.test(nameValue));
}

const emailValidation = () => {
    let regexpEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let emailValue = $('#mail').val();
    return (regexpEmail.test(emailValue))
}

const creditCardValidation = () => {
    let regexpCC = /^\d{13,16}$/;
    let ccValue = $('#cc-num').val();
    return regexpCC.test(ccValue);
}

const zipcodeValidation = () => {
    let regexpZC = /^\d{5}$/;
    let zipcode = $('#zip').val();
    return regexpZC.test(zipcode);
}

const cvvValidation = () => {
    let regexCVV = /^\d{3}$/;
    let cvv = $('#cvv').val();
    return regexCVV.test(cvv);
}

const activityValidation = () => {
    let checkboxes = $('.activities input:checked');
    if (checkboxes.length !== 0) {
        return true;
    } else {
        return false;
    }
}

/**
**************************************************************************
    3rd Exceed Requirement: real-time validation error message
**************************************************************************
**/
let $regexpName = /^([a-zA-Z]{3,16})$/;
$('#name').append('<span class="emsg hidden">Please Enter a Valid Name</span>')
$('#name').on('keypress keydown keyup', function() {
    if (!$(this).val().match($regexpName)) {
        // there is a mismatch, hence show the error message
        $('.emsg').removeClass('hidden');
        $('.emsg').show();
    } else {
        // else, do not display message
        $('.emsg').addClass('hidden');
    }
});

/**
**************************************************************************
    6th Requirement: Form Validation Messages
**************************************************************************
**/
let erros = 0;
$(document).on('submit', 'form', function(e) {
    erros = 0;
    $('.warning').remove();
    if (!(nameValidation())) {
        $('#nameLabel').append('<span class="warning"> Enter a name.</span>');
        erros++;
    }
    if (!(emailValidation())) {
        $('#mailLabel').append('<span class="warning"> Enter a valid email address.</span>');
        erros++;
    }
    if (!(activityValidation())) {
        $('.activities legend').append('<span class="warning"> You need to choose at least one activity.</span>');
        erros++;
    }
    if ($('#payment').val() === 'credit card') {
        if (!(creditCardValidation())) {
          if ($('#cc-num').val().length<=0) {
            $('#ccLabel').append('<span class="warning"> Can\'t be empty.</span>');
            erros++;
          } else {
            $('#ccLabel').append('<span class="warning"> Enter a Valid Credit Card.</span>');
            erros++;
          }
        }
        if (!(zipcodeValidation())) {
            $('#zipLabel').append('<span class="warning"> Required!</span>');
            erros++;
        }
        if (!(cvvValidation())) {
            $('#cvvLabel').append('<span class="warning"> Required!</span>');
            erros++;
        }
    }
    console.log(erros);
    if(erros==0){
      alert('Successfully registered!')
    } else {
      e.preventDefault();
    }
})
