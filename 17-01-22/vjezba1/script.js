var text = " Lorem ipsum dolor sit amet";
var textLength, textSit, textPlus;

textLength = text.length; // 1)

text = text.replace("amet", "elit"); //3)

textPlus = (text + ", consectetur adipiscing elit"); //4)

console.log(text.toUpperCase()); //5)

console.log(text.trimStart()); //6)

console.log(text.charAt(11)); //7)