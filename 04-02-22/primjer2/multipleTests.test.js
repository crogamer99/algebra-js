const shopingList = [
    "pelene",
    "jaja",
    "brašno",
    "mlijeko",
    "papirnate ručnike",
    "banane"
];

test("Da li moja šoping lista ima jaja?", () =>{
    expect(shopingList).toContain("jaja");
});

test("Da li moja šoping lista ima banane?", () =>{
    expect(shopingList).toContain("banane");
});

test("Da li je moja konstanta NULL", () =>{
    const ns = null;
    expect(ns).toBeNull();
    expect(ns).toBeDefined();
    expect(ns).not.toBeUndefined();
});

test("Dodavanje pozitivnih brojeva nije 0", () => {
    for(let i = 1; i<10; i++){
        for(let j=1;j<10;j++){
            expect(i+j).not.toBe(0);
        }
    }
});