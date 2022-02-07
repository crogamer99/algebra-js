const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
fetch(url)
.then(response => response.json())
.then(async (data) =>{
        document.getElementById(`civName1`).innerHTML = `${data.civilizations[0].name}`,
        document.getElementById(`civBonus1`).innerHTML = `${data.civilizations[0].civilization_bonus}`})