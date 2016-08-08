// Create a document ready handler.
$(document).on('ready', function(){
  //starting the function to validate the form
  $('#order-form').validate({
    //submits the form if the rules are followed
    submitHandler:function(form){
      form.submit();
    },
    //list of rules tied to id for what is acceptable in the form.
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
  //pulls in the tips for if something isn't validated right.
$('label span-glyphicon').tooltip();
});

// Refer to the `index.html` file for the validation rules that must be enforced.
