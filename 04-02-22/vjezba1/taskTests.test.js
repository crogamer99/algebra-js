const findMax = require("./taskTests");

const testArray = [1, -72, 10, -4, 0, 0.0001, 999, 132914];

test("is the solution undefined", () =>{
    expect(findMax(testArray)).toBe(undefined); //is if findMax()
});

test("is the solution -Infinity", () =>{
    expect(findMax(testArray)).toBe(-Infinity); //is if findMax("not a number")
});

test("the solution contains only numbers and doesn't return -Infinity", () =>{
    expect(findMax(testArray)).not.toBe(-Infinity);
    expect(findMax(testArray)).not.toBe(undefined);
});