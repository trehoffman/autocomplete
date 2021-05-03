# autocomplete

## Introduction

A simple Javascript library for creating autocomplete inputs.

## Quick Start (https://trehoffman.github.io/autocomplete/)

Import the autocomplete library:

`<script src="js/autocomplete.js"></script>`

Initialize an input with autocomplete (array):

`var autocomplete_1 = new Autocomplete({
    target: document.querySelector('input[name="test1"]'),
    source: ["red", "green", "yellow"]
});`


Initialize an input with autocomplete (array of objects):

`var autocomplete_2 = new Autocomplete({
    target: document.querySelector('input[name="test2"]'),
    source: [{ label: "one", value: "1" }, { label: "two", value: "2" }, { label: "three", value: "3" }]
});`

Initialize an input with autocomplete (function):

`var autocomplete_3 = new Autocomplete({
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
});`

Initialize an input with autocomplete (function with fetch):

`var autocomplete_4 = new Autocomplete({
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
});`

See code for further details.
