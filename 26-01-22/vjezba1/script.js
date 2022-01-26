// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto("Jane Doe"); // output: [function: f]
var z = vratiNesto()();     //output: undefined

// 2.
var inputos = "John Doe";
(function(name){
    var x = name;
    function f() { return x; }
    return f;
})(inputos);