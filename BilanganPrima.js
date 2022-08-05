const Bilangan = (angka) =>{
let div = 0;
for (let i = 1; i<=angka;i++){
    if(angka%i==0) {
        div++
    }
    }
    if(div==2){
        console.log("Prima")
    }else{
        console.log("Bukan Prima")
    }
}
//Test Case
    Bilangan(2);
    Bilangan(3);
    Bilangan(4);
    Bilangan(5);