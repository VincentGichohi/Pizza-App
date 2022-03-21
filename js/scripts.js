// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

//a constructor for the pizza size and the price
function Pizza() {
    this.smallPrice = 800;
    this.mediumPrice = 1000;
    this.largePrice = 1200;
    this.toppings = 400;
    this.crust = 300;
    this.smallTotal = function() {
        return parseInt(smallPrice + toppings + crust);
    }
};