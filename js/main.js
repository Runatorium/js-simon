let numeri = [];
let numeriinseriti = [];



numerirng();
console.log(numeri);


let numeriaschermo = document.getElementById('numeri');
numeriaschermo.innerHTML = numeri;

setTimeout(function() {
    numeriaschermo.innerHTML = " ";
}, 2000);


setTimeout(function() {
    for(i=0; i<5; i++){
        let numeroinserito = parseInt(prompt('inserisci il primo numero'));
         numeriinseriti[i] = numeroinserito;
         createnumberelemnt();
           
     }
     console.log(numeriinseriti);

    for(i=0; i<5; i++){

        if(!(numeri.includes(numeriinseriti[i]))){  
            console.log('non è presente il numero', numeriinseriti[i]);
            let numerocorrente = document.getElementById('numero'+i);
            numerocorrente.classList.add('wrongnumber');
        }else{
            numericorretti++
            let numerocorrente = document.getElementById('numero'+i);
            numerocorrente.classList.add('rightnumber');
            let score = document.getElementById('punteggio');
            score.append(numericorretti);
        }
    }
        
     
}, 2100);




    function numerirng(){
        for(i=0; i<5; i++){
            let numericasualo= Math.floor(Math.random()* 100 +1);
            numeri[i] = numericasualo;
        }
        
    }   


    function createnumberelemnt(){
        let numerocorrente = document.createElement("h2");
        numerocorrente.innerHTML = numeriinseriti[i];
        document.getElementById("numeriinseriti").appendChild(numerocorrente);
        numerocorrente.setAttribute("id", "numero"+i);
        return numerocorrente;
    }