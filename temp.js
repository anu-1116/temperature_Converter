let celciusI=document.querySelector('#celcius > input')
let fahrenheitI=document.querySelector('#fahrenheit > input')


let btn = document.querySelector('.button button')



function roundNumber(number){
    return Math.round(number*100)/100;
}



celciusI.addEventListener('input',function(){
    let ctemp=parseFloat(celciusI.value)
    let ftemp=(ctemp*(9/5))+32


   return fahrenheitI.value=roundNumber(ftemp);

})


fahrenheitI.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenheitI.value)
    let ctemp=(ftemp-32)*(5/9)

    return celciusI.value=roundNumber(ctemp);
})
