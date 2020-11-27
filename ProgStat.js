let numbers = [];
let total = 0;
let saisie= null;
let saisieInt= null
let max =null;
let min =null;
let somme =null;
let moyenne= null;

    saisie = prompt('Entrez un nombre');
    saisieInt = parseInt (saisie)
if (saisie !=0 ) {
    do {

        numbers.push(saisieInt)
        somme = somme+ saisieInt 
        saisie = prompt('Entrez un nombre');
        saisieInt = parseInt (saisie)
    }while (saisieInt !=0) {
        
    }

    
    max = numbers[0]
    min= numbers[0]
   for (let i = 1; i<= numbers.length ; i++) 
   {
       if (max < numbers[i]){
           max=numbers[i]
       }
         
        if (min > numbers[i]) {
            min= numbers[i];
        }
    }
    
        total = numbers.length;
        moyenne = somme/total;

    console.log (total+'nombres saisis');
    console.log ('Dont le plus petit est:'+ min+"et le plus grand est:"+max);
    console.log ("Pour une somme de:"+somme);
    console.log ('Et une moyenne de:'+moyenne);

} else {
    console.log ("Vous n'avez entré aucun nombre ! ");
}