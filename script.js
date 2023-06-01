function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#input")
    var res =  document.querySelector("#res")




    if (fano.value.length == 0 || fano.value > ano){
        alert("verique seus dados e tente novamente")
    } else{
        var fsex = document.getElementsByName("radsex") 
        var idade = ano - Number(fano.value)
        var g = ""
        var img =document.createElement("img")
        img.setAttribute("id", "foto")



         if (fsex[0].checked){
            g = "homem"
            if(idade >= 0 && idade <10 ){
                //criança
                img.setAttribute("src", "imagens/bebe.jpg")
             } else if(idade < 21) {
                img.setAttribute("src", "imagens/jovem.jpg")
    
             } else if(idade < 50){
                img.setAttribute("src", "imagens/homemado.jpg")
                //adulto
             } else{
                //idoso
                img.setAttribute("src", "imagens/idoso.jpg")
             }

         } else if (fsex[1].checked){
            g = "mulher"
            if(idade >= 0 && idade <10 ){
                img.setAttribute("src", "imagens/bebe.jpg")
                //criança
             } else if(idade < 21) {
                img.setAttribute("src", "imagens/mulherjovem.jpg")
    
             } else if(idade < 50){
                img.setAttribute("src", "imagens/mulherado.jpg")
                //adulto
             } else{
                //idoso
                img.setAttribute("src", "imagens/mulheridosa.jpg")
             }
         }
         res.style.Align = "center"
         res.innerHTML = `detectamos ${g} com ${idade} anos`
         res.appendChild(img)
         }
            
         
         
         
    
        }
    