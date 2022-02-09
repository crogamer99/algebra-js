const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
fetch(url)
.then(response => response.json())
.then(async (data) =>{
        for(let i=0;i<32;++i){
                g = document.createElement("p"),
                g.setAttribute("id", "civName" + i),
                document.getElementById("civBonus").appendChild(g),
                h = document.createElement("p"),
                h.setAttribute("id", "civBonus" + i),
                document.getElementById("civBonus").appendChild(h),
                document.getElementById(`civName` + i).innerHTML = `${data.civilizations[i].name}`,
                document.getElementById(`civBonus` + i).innerHTML = `${data.civilizations[i].civilization_bonus} <br><hr>`;
        }
});