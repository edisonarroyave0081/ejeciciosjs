function obtenerNumero(numero){
    let menor=Infinity
    for (let i= 0 ; i <numero.length ; i++) {
        if (numero[i]<=menor) {

           menor=numero[i];
        }
        
    }
    return (menor)
}
console.log(obtenerNumero([2,4,6,7,9,10]))


function sumar(numsuma){
 let result=""
 for (let i = 0; i < numsuma.length; i++) {
     result=parseInt(result+numsuma[i])
    
 }
 return result
}
console.log(sumar([5,77,6,99,6,2,33]))

const contieneindice=(numero,arrays)=>{
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i]===numero) {
            return true
        }
        
    }
    return false
}

console.log(contieneindice(4,[1,3,4,7,8,9]))

function ganotraga(asterisco,arrays){
       let estrella= 1
       asterisco= 2
       let red= 3

    for (let i = 0; i < arrays.length; i++) {
       
      if(arrays[i]!=2){
        return true 
      }

       
    }
  return false
}

console.log(ganotraga(2,[2,2,2,2,3]))

 
const invertir=(string)=>{
 const arrayletra=string.split();
 let letras=""

 for (let i = 0; i < arrayletras.length; i++) {
   if (arrayletra[i]===arrayletra[i].toUpperCase()) {
    letras=letras+arrayletra[i].toLOwerCase();
   }
    else{
        letras=letras+arrayletra[i].toUpperCase();
    }
 }
 return letras
}

console.log(invertir("AnA DicE"))

const estarjuntos=(perosnajes)=>{

    const frodo=perosnajes.indexOf('frodo');
    const san=perosnajes.indexOf('san');
    return san-frodo===1 || san -frodo===-1
}
console.log(estarjuntos([san,frodo,orco]))

const tragamoneda=(traga)=>{
    let jugada=traga.slice(0,5);
    for (let i = 0; i < array.length; i++) {
        return traga[0]===traga[1]&& traga[1]===traga[2] && traga[2]===traga[3]&&traga[3]===traga[4]&& traga[4]===traga[5];
        
    }

}