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

var pizza = document.getElementsByClassName('size');
var toppings = document.getElementsByClassName('toppings');
var crust = document.getElementsByClassName('crust');
var totalOrders = document.getElementById('submit');
//a constructor that saves the flavour of pizza, the size and the price
function PizzaDetails(pizzaFlavour, pizzaSize, pizzaPrice) {
    this.pizzaFlavour = pizzaFlavour;
    this.pizzaSize  = pizzaSize;
    this.pizzaPrice = pizzaPrice;
}