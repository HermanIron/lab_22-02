function division() {
 
  let num1 = document.getElementById("num1").value; 
  let num2 = document.getElementById("num2").value;
  
  let division = (num2  / (num1**2));

  document.getElementById("resultado").innerHTML = "Resultado: <br>" + division; 

}

function multiplicacion() {
 
  let num1 = document.getElementById("num1").value; 
  let imcm = 24.90;
  // let imcmin = 18.5;
  
  let multiplicacion = (imcm *(num1**2));
  // let multiplicacion1 = (imcmin *(num1**2));

  document.getElementById("resultado2").innerHTML = "tu peso máximo ideal sería: <br>" + multiplicacion; 
 

}

function multiplicacion1() {
 
  let num1 = document.getElementById("num1").value; 
  // let imcm = 24.90;
  let imcmin = 18.5;
  
  // let multiplicacion = (imcm *(num1**2));
  let multiplicacion1 = (imcmin *(num1**2));

  document.getElementById("resultado3").innerHTML = "tu peso máximo ideal sería: <br>" + multiplicacion1; 
 

}
