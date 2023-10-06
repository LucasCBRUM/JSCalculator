let equal_pressed = 0;

var root = document.documentElement;

let button_input = document.querySelectorAll(".input-button");

let display = document.getElementById("display");
let del = document.getElementById("del");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

let color1 = document.getElementById("input-color1");

let color2 = document.getElementById("input-color2");

window.onload = () => {
    display.value = "";
}

color1.addEventListener("change", () => {
    root.style.setProperty('--calculator-color', color1.value);
    console.log(color1.value);
})

color2.addEventListener("change", () => {
    root.style.setProperty('--primary-color', color2.value);
    console.log(color2.value);
})


button_input.forEach((button_class) => {
        button_class.addEventListener("click", () => {if(equal_pressed == 1){
                    display.value = "";
                    equal_pressed = 0;
                }
                display.value += button_class.value;
            }
        )
    } 
)

equal.addEventListener("click", () => {
    equal_pressed = 1;
    let inp_val = display.value;
    try{
        let solution = eval(inp_val);
        console.log(`${inp_val} = ${solution}`);
        if( Number.isInteger(solution)){
            display.value = solution;
        } else {
            display.value = solution.toFixed(2)
        }
    }
    catch (err) {
        console.log(err);
        alert("Invalid Input");
    }
})

clear.addEventListener("click", () => {
    display.value = "";
    console.log('clear');
})

del.addEventListener("click", () => {
    let textValue = '';
    textValue = display.value;
    display.value = textValue.substring(0, textValue.length-1);
    console.log('delete');
})