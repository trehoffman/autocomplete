function Autocomplete(options) {
    var me = this;
    me.options = options || {};
    me.value = "";

    me.init = function () {
        me.value = me.options.target.value;
        let id = "datalist_" + Math.floor(Math.random() * 10000).toString() + "_" + Date.now();
        me.datalist = document.createElement('DATALIST');
        me.datalist.id = id;
        document.querySelector('body').appendChild(me.datalist);
        me.options.target.setAttribute('list', id);
        me.options.target.setAttribute('autocomplete', 'off');

        if (Array.isArray(me.options.source)) {
            me.populate(me.options.source);
        } else if (me.options.prepopulate) {
            setTimeout(function (value) {
                if (typeof me.options.source === 'function') me.options.source(value);
            }, 100, me.value)
        }
        

        me.options.target.addEventListener('keyup', function (e) {
            let value = e.target.value;
            if (value === me.value) return;
            me.value = value;

            let minLength = me.options.minLength || 0;
            if (value.length < minLength) return;

            let delay = me.options.delay || 0;
            clearTimeout(me.delayTimeout);
            me.delayTimeout = setTimeout(function (value) {
                if (typeof me.options.source === 'function') me.options.source(value);
            }, delay, value);
        });

        me.options.target.addEventListener('input', function (e) {
            if (!e.inputType) {
                let value = e.target.value;
                me.value = value;
                let event = new CustomEvent('selected', {
                    detail: {
                        value: value
                    }
                });
                me.options.target.dispatchEvent(event);
            }
        });
    };

    me.populate = function (matches) {
        let innerHTML = '';
        for (let i = 0; i < matches.length; i++) {
            let match = matches[i];
            if (typeof match === 'object') {
                innerHTML += '<option value="' + match.value + '">' + match.label + '</option>';
            } else {
                innerHTML += '<option>' + match + '</option>';
            }
        }
        me.datalist.innerHTML = innerHTML;
    };

    me.init();
}