const prompt = require('prompt-sync')()

//velocidade de um carro, na rodovia só pode ir até
//80km. Passando disso leva multa, se andar entre 70km a 80km ta bom e se andar abaixo disso bate o caro
let velocidade = Number(prompt("Velocidade do seu carro:"))

if(velocidade >= 70 && velocidade <= 80 ){
    console.log("Velocidade normal. Sem multa e nem risco de acidente!")
}else if(velocidade <=69){
console.log("Cuidado, está muito devagar na pista! Você pode ocasionar um acidente")
}else{
    console.log("Você está andando muito rápido, será multado!")
}
