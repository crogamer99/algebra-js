const url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
fetch(url)
.then(response => response.json())
.then(async (data) =>{
    for (var i = 0; i < 32; i++) {
        document.getElementById(`civName${i+1}`).innerHTML = `${data.civilizations[i].name}`,
        document.getElementById(`civExpansion${i+1}`).innerHTML = `${data.civilizations[i].expansion}`,
        document.getElementById(`civArmyType${i+1}`).innerHTML = `${data.civilizations[i].army_type}`,
        document.getElementById(`civTeamBonus${i+1}`).innerHTML = `${data.civilizations[i].team_bonus}`;
    }
});