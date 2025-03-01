// cal function 
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == 'clear'){
            display.innerText = "";
        } else if (item.id == "remove") {
            let str = display.innerText.toString();
            display.innerText = str.substr(0, str.length - 1);
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Empty!";
            setTimeout(() => (display.innerText = ""), 2000);
        }
else {
            display.innerText += item.id;
        }
    }
});

//toogle funcation 
const themeToggleBtn = document.querySelector(".theme-toggler");
const cal = document.querySelector(".calculator");
// const togglerIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
    cal.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;
}/*  this attcheds an event listener to 'themeToggleBtn' when the button is clicked, 
the following actions are performed
a) Toggle Dark Mode :- cal.classList.toggle("dark"); - this toogles the dark class on the cal element if the 
dark class is present it removes it, if not, it adds it. This is typically used to switch the theme between light and dark modes.
b) Toggle Active State :- 'themeToggleBtn.classList.toggle("active"); : this toggles the active class on the themeTogglBtn element.
this could be used to visually indicate that the button is in an "active" State, prhaps changing its appearance.
c) Update 'isDark' :-
isDark = !isDark; - this flips the value of isDark if it was true it becomes false and vice versa. */
