window.onload = function() {
    document.form.textview.value = ``;
};

function insert(num) {
    document.form.textview.value += num;
}

function clean() {
    document.form.textview.value = ``;
}

function back() {
    document.form.textview.value = document.form.textview.value.slice(0, -1);
}

function calculate() {
    if (document.form.textview.value) {
        try {
            document.form.textview.value = eval(document.form.textview.value);
        }
        catch(exception) {
            document.form.textview.value = NaN;
        }
    }
}