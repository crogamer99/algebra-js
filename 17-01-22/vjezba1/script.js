var text = " Lorem ipsum dolor sit amet";
var textLength, textSit, textPlus;

textLength = text.length; // 1)

textSit = text.substring(19, 22); // 2)

text = text.replace("amet", "elit"); //3)

textPlus = (text + ", consectetur adipiscing elit"); //4)

console.log(text.toUpperCase()); //5)

console.log(text.trim()); //6)

console.log(text.charAt(12)); //7)