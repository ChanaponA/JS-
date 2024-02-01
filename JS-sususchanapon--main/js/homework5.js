// 5. // Types, Values, and Variables/ Arrays
// Instruction:
// - Write code to display only the object elements in the mixedArray.
// Initiate code: 
// let mixedArray = [42, "hello", {name: “Joe”, surname: “Doe”}, true,56,false, {name: 
// “John”, surname: “Smith”}, {name: “Joy”, surname: “Stein”}];
// // Insert your code here
// Output:
// {name: "Joe ", surname: “Doe}
// {name: "John ", surname: “Smith”}
// {name: "Joy ", surname: “Stein”}
let mixedArray = [42, "hello", {name: 'Joe', surname: 'Doe'}, true,56,false, {name: 
    'John', surname: 'Smith'}, {name: 'Joy', surname: 'Stein'}];

    mixedArray.forEach((mix)=>{
        if(typeof mix === 'object' && mix != null){
            console.log(mix)
        }
    })

    