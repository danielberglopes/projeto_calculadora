function calcula01(){
    let num1 =parseFloat (document.querySelector('#n1').value)
    let num2 =parseFloat (document.querySelector('#n2').value)
    
        let cal =  num1 + num2
    
       
       document.getElementById('resultado').innerHTML = cal.toFixed(2)  

}
function calcula02(){
    let num1 =parseFloat (document.querySelector('#n1').value)
    let num2 =parseFloat (document.querySelector('#n2').value)
    
        let cal =  num1 - num2
    
       
       document.getElementById('resultado').innerHTML = cal.toFixed(2) 

}
function calcula03(){
    let num1 =parseFloat (document.querySelector('#n1').value)
    let num2 =parseFloat (document.querySelector('#n2').value)
    
        let cal =   num1 * num2
    
       
       document.getElementById('resultado').innerHTML = cal.toFixed(2)  

}
function calcula04(){
    let num1 =parseFloat (document.querySelector('#n1').value)
    let num2 =parseFloat (document.querySelector('#n2').value)
  
        let cal=  num1 / num2
    
       
       document.getElementById('resultado').innerHTML = cal.toFixed(2) 

}





