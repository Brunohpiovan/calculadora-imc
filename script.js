function imc(){
    var a= document.getElementById('txta')   
    var p = document.getElementById('txtp')
    var res = document.getElementById('res') 
    if(a.value.length==0 ||p.value.length==0 || a.value==0||a.value==0){
        alert('[ERRO]Faltam dados')
    }else{
        var alt = Number(txta.value)
        var peso = Number(txtp.value)

        var imc = peso/(alt*alt)

        res.innerHTML = 'Imc = '+imc.toFixed(2)+'<br>'

        if(imc<18.5){
            //abaixo do peso
            res.innerHTML +='Voce esta abaixo do peso!<br>'
            res.innerHTML += 'Busque um médico para uma melhor avaliação.'
        }else if(imc<24.9){
            //peso ideal
            res.innerHTML +='Voce esta no peso ideal!'
        }else if (imc<29){
            //sobrepeso
            res.innerHTML +='Voce esta com sobrepeso!<br>'
            res.innerHTML += 'Busque um médico para uma melhor avaliação.'
        }else if(imc<34.9){
            //obeso 1
            res.innerHTML +='Voce esta com obesidade grau I!<br>'
            res.innerHTML += 'Busque um médico para uma melhor avaliação.'
        }else if(imc<39.9){
            //obeso 2
            res.innerHTML +='Voce esta com obesidade grau II<br>'
            res.innerHTML += 'Busque um médico para uma melhor avaliação.'
        }else{
            //obreso grau 3
            res.innerHTML +='Voce esta com obesidade grau III<br>'
            res.innerHTML += 'Busque um médico para uma melhor avaliação.'
        }
    }
}