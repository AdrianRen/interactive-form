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
// Name must not be numbers and should be at least 1 character
const nameValidation = () => {
    let nameValue = $('#name').val();
    // console.log(nameValue);
    return (nameValue.length > 0 && !$.isNumeric(nameValue));
}
// console.log(nameValidation());

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
    6th Requirement: Form Validation Messages
**************************************************************************
**/
  // let nameError = false;
  // let emailError = false;
  // let activityError = true;
  // let paymentError = false;
  // let creditCardError = false;
  // let zipError = false;
  // let cvvError = false;
  //
  // let errors = [];
  // $("#registrationForm").submit(function () {
  //
  //     var $errorSummary = $("#error-summary");
  //
  //     // clear all errors
  //     errors = [];
  //     $errorSummary.remove();
  //
  //     // start validation checks
  //     if (!(nameValidation())) {
  //       errors.push("Enter a name.");
  //       nameError = true;
  //       event.preventDefault();
  //     }
  //     if (!(emailValidation())) {
  //       errors.push("Enter a valid email.");
  //       emailError = true;
  //     }
  //     if (!(activityValidation())) {
  //       errors.push("Select at least one activity.");
  //       activityError = true;
  //     }
  //     if ($('#payment').val() === "select_method") {
  //       errors.push("Select a payment method.");
  //       paymentError = true;
  //     }
  //     if ($('#payment').val() === "credit card") {
  //
  //       if (!(creditCardValidation())) {
  //         errors.push("Enter a credit card number.");
  //         creditCardError = true;
  //       }
  //       if (!(zipcodeValidation())) {
  //         errors.push("Enter a 5 digit zip code.");
  //         zipError = true;
  //       }
  //       if (!(cvvValidation())) {
  //         errors.push("Enter a 3 digit cvv.");
  //         cvvError = true;
  //       }
  //     }
  //
  //     if (errors.length > 0) {
  //       var $errorDiv = "<div id='error-summary'><h5>Please correct the following error(s)</h5></div>";
  //       var $form = $("#registration-form");
  //       $form.prepend($errorDiv);
  //       $("h5").append($("<ul id='error-list'></ul>"));
  //
  //       for (var i=0; i < errors.length; i++) {
  //         $("#error-list").append($("<li>" + errors[i] + "</li>"));
  //       }
  //
  //       // scroll to the top of the page to display the errors
  //       scroll(0,0);
  //       return false;
  //     }
  //     else {
  //       // clean up errors
  //       errors = [];
  //       $errorSummary.remove();
  //
  //       console.log("submit success");
  //       alert("Successfully registered!");
  //       return true;
  //     }
  //   });


$(document).on('submit','form',function(e){
  $('.warning').remove();
  e.preventDefault();
  if (!(nameValidation())) {
        $('#nameLabel').append('<span class="warning"> You can\'t leave this empty.</span>');
      }
  if (!(emailValidation())) {
        $('#mailLabel').append('<span class="warning"> You can\'t leave this empty.</span>');
      }
  if (!(activityValidation())) {
        $('.activities legend').append('<span class="warning"> You need to choose at least one activity.</span>')
      }
  if($('#payment').val() === 'credit card'){
    // if (!(creditCardValidation())) {
    // }
  }
  $('#ccLabel').append('<span class="warning"> You can\'t leave this empty.</span>');
})
