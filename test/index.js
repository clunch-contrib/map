import Clunch from 'clunch';
import map from '../index';
import image from './test.clunch';

window.clunch = new (Clunch.series('ui-map', map))({
    el: document.getElementById('root'),
    data: function () {
        return {

        };
    },
    render: image,
    methods: {
        doit(target) {
            console.log(target);
        }
    }
});
