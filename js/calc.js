window.onload = () => {
    const text              =   document.querySelector(".text");
    const buttons           =   document.querySelectorAll(".btn-numpad");
    const calculateButton   =   document.querySelector(".btn-calc");
    const cleanButton       =   document.querySelector(".btn-clean");
    const backButton        =   document.querySelector(".btn-back");

    buttons.forEach(button => button.addEventListener("click", insert));
    calculateButton.addEventListener("click", calculate);
    cleanButton.addEventListener("click", clean)
    backButton.addEventListener("click", back);

    text.value = "";

    function insert(event) {
        text.value += event.target.value;
    }
    
    function clean(event) {
        text.value = "";
    }
    
    function back() {
        text.value = text.value.slice(0, -1);
    }
    
    function calculate() {
        if (text.value) {
            try {
                text.value = eval(text.value);
            }
            catch(exception) {
                text.value = NaN;
            }
        }
    }

};
