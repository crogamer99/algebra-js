var i;

for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log("Broj " + i + " je paran");
        continue;
    }
    console.log("Broj " + i + " je neparan");
}