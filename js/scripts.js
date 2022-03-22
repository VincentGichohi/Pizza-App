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

//   var username = document.getElementById("username");
//   var pass = document.getElementById("pass");
//   pass.onfocus = function(){
//   if(pass.value=="ENTER PASSWORD"){
//   pass.value="";
//   }
//   };
//   username.onfocus = function(){
//   if(this.value=="ENTER USERNAME"){
//   this.value="";
//   }
//   };
//   pass.onblur = function(){
//   if(this.value==""){
//   pass.value="ENTER PASSWORD";
//   }
//   };
//   username.onblur = function(){
//   if(this.value==""){
//   this.value="ENTER USERNAME";
//   }
//   };

var pizza = ['small', 'medium', 'large']

//a constructor that saves the flavour of pizza, the size and the price
function PizzaDetails(pizzaFlavour, pizzaSize, pizzaPrice) {
    this.pizzaFlavour = pizzaFlavour;
    this.pizzaSize  = pizzaSize;
    this.pizzaPrice = pizzaPrice;
}
