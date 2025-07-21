 //Sync 

function greet() {
    console.log("1. Naruto");
    console.log("2. Sasuke");
    console.log("3. Sakura");
}
greet();


//async

function greet() {
    console.log("1. Naruto");
    setTimeout(() => {
        console.log("2. Sasuke");
    }
    , 2000);
    console.log("3. Sakura");
}
greet();