var car = {
    brand: {
        manufacturer: "Tesla",
        model: "Model S Plaid"
    },
    topSpeed : "322km/h",
    range: "637km",
    acceleration : "2.1s",
    color: ["Blue", "Silver", "Red", "White", "Cyan"],
    price : "$27,999",
    qty: 2673,
    peakPower : "1,020hp",
    efficiency: "mid",
    checkStock: function(){
        if(this.qty>0){
            return "in stock";
        }else{
            return "out of stock";
        }
    },
    fuelPriceSavings: function(gasEff, elecEff){
        var gas, elec;
        switch(gasEff){
            case "min": gas=150;
            break;
            case "mid": gas=115;
            break;
            case "high": gas=80;
            break;
        }
        switch(elecEff){
            case "min": elec=75;
            break;
            case "mid": elec=65;
            break;
            case "high": elec=55;
            break;
        }
        return (1000*gas-1000*elec);
    },
};

list = function(lists){
    for(i=0;i<lists.length;i++){
        console.log(lists[i]);
    }
};

console.log(car.checkStock());
console.log("you would have saved $" + car.fuelPriceSavings("mid",car.efficiency) + " per 1000miles");

console.log("you can get the " + car.brand.model + " in any one of the following colors: ");
list(car.color);

carObj = JSON.stringify(car);
console.log(carObj);