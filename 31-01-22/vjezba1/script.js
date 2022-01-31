var names = prompt("Enter your name: ");
const url = `https://api.agify.io/?name=${names}`;
        fetch(url)
        .then(response => response.json())
        .then(data => alert(`${names}, you are ${data.age} year(s) old!`))
        .catch((error) => {
            console.erroe("error:", error);
        });