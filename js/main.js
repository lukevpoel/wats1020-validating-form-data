// Create a document ready handler.
$(document).on('ready', function(){
  $('#order-form').validate({
    submitHandler:function(form){
      form.submit();
    },
    rules: {
      "your-name": {
        required: true,
        maxlength: 128,
        minlength: 1
      },

      "your-zip": {
        required: true,
        digits: true,
        maxlength: 5,
        minlength: 5
      },

      "your-state": {
        required: true,
        maxlength: 2,
        minlength: 2
      },

      "card-holder-name": {
        required: true,
        maxlength: 128,
        minlength: 1
      },

      "card-number": {
        required: true,
        creditcard: true,
        minlength: 16,
        maxlength: 16
      },

      "cvv": {
        required: true,
        maxlength: 3,
        minlength: 3,
        digits: true
      },
      "comments": {
        required: false,
        maxlength: 500
      }
    }
  });
$('label span-glyphicon').tooltip();
});
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
