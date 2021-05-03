var autocomplete_1 = new Autocomplete({
    target: document.querySelector('input[name="test1"]'),
    source: ["red", "green", "yellow"]
});

document.querySelector('input[name="test1"]').addEventListener('change', function (e) {
    let target = e.target;
    let fieldset = target.closest('fieldset');
    let div = fieldset.querySelector('div');
    div.innerText = 'value changed to ' + target.value;
});

document.querySelector('input[name="test1"]').addEventListener('selected', function (e) {
    let audio = new Audio('sounds/success.mp3');
    audio.play();
});

var autocomplete_2 = new Autocomplete({
    target: document.querySelector('input[name="test2"]'),
    source: [{ label: "one", value: "1" }, { label: "two", value: "2" }, { label: "three", value: "3" }]
});

document.querySelector('input[name="test2"]').addEventListener('change', function (e) {
    let target = e.target;
    let fieldset = target.closest('fieldset');
    let div = fieldset.querySelector('div');
    div.innerText = 'value changed to ' + target.value;
});

document.querySelector('input[name="test2"]').addEventListener('selected', function (e) {
    let audio = new Audio('sounds/success.mp3');
    audio.play();
});

var autocomplete_3 = new Autocomplete({
    target: document.querySelector('input[name="test3"]'),
    prepopulate: true,
    source: function (value) {
        let matches = [];
        let list = ["Baseball","Basketball","Football"];
        for (let i = 0; i < list.length; i++) {
            let x = list[i];
            if (x.toLowerCase().startsWith(value.toLowerCase())) matches.push(x);
        }
        autocomplete_3.populate(matches);
    }
});

document.querySelector('input[name="test3"]').addEventListener('change', function (e) {
    let target = e.target;
    let fieldset = target.closest('fieldset');
    let div = fieldset.querySelector('div');
    div.innerText = 'value changed to ' + target.value;
});

document.querySelector('input[name="test3"]').addEventListener('selected', function (e) {
    let audio = new Audio('sounds/success.mp3');
    audio.play();
});

var autocomplete_4 = new Autocomplete({
    target: document.querySelector('input[name="test4"]'),
    delay: 500,
    minLength: 1,
    source: async function (value) {
        try {
            let response = await fetch('cities.html');
            let list = await response.json();
            let matches = [];
            for (let i = 0; i < list.length; i++) {
                let x = list[i];
                if (x.toLowerCase().startsWith(value.toLowerCase())) matches.push(x);
            }
            autocomplete_4.populate(matches);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }
});

document.querySelector('input[name="test4"]').addEventListener('change', function (e) {
    let target = e.target;
    let fieldset = target.closest('fieldset');
    let div = fieldset.querySelector('div');
    div.innerText = 'value changed to ' + target.value;
});

document.querySelector('input[name="test4"]').addEventListener('selected', function (e) {
    let audio = new Audio('sounds/success.mp3');
    audio.play();
});