# Interactive-Form

## Project Requirements:

-   [x] Set focus on the first text field:  
    -   When the page load, give focus to the first field
-   [x] "Job Role" section of the form:  
    -   A text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.  
    -   Give the field an id of “other-title,” and add the placeholder text of "Your Job Role" to the field.  
-   [x] "T-Shirt Info" section of the form:
    -   For the T-Shirt color menu, only display the color options that match the design selected in the "Design" menu.
    -   If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
    -   If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
-   [x] "Register for Activities" section of the form:
    -   Some events are at the same time as others. If the user selects a workshop, don't allow selection of a workshop at the same date and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
    -   When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
    -   As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
-   [x] Payment Info section of the form:
    -   Display payment sections based on the payment option chosen in the select menu
    -   The "Credit Card" payment option should be selected by default, display the #credit-card div, and hide the "Paypal" and "Bitcoin information.
    -   When a user selects the "PayPal" payment option, the Paypal information should display, and the credit card and “Bitcoin” information should be hidden.
    -   When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
-   [x] Form validation:  
    -   If any of the following validation errors exist, prevent the user from submitting the form:
    -   Name field can't be blank
    -   Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
    -   Must select at least one checkbox under the "Register for Activities" section of the form.
    -   If the selected payment option is "Credit Card," make sure the user has supplied a credit card number, a zip code, and a 3 number CVV value before the form can be submitted.
        -   Credit card field should only accept a number between 13 and 16 digits  
        -   The zipcode field should accept a 5-digit number  
        -   The CVV should only accept a number that is exactly 3 digits long
-   [x] Form validation messages:
    -   Provide some kind of indication when there’s a validation error. The field’s borders could turn red, for example, or a message could appear near the field or at the top of the form
    -   There should be an error indication for the name field, email field, “Register for Activities” checkboxes, credit card number, zip code, and CVV  

When JavaScript is switched off or unavailable, all the form fields that need to be filled out should be visible. For example, the “Your Job Role” text field should be visible on the page when JavaScript is switched off.

## Extra Credit:

-   [x] Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
-   [x] Program at least one of your error messages so that more information is provided depending on the error. For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is at least 16 digits long.”
-   [x] Program your form so that it provides a real-time validation error message for at least one text input field. Rather than providing an error message on submit, your form should check for errors and display messages as the user begins typing inside a text field. For example, if the user enters an invalid email address, the error appears as the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address. Please accomplish this will your own JavaScript code. Do not rely on HTML5's built-in email validation.

[Live Demo](http://www.adrianren.com/interactive-form/)
