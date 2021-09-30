import Vue from 'vue';
import App from './App.vue';
new Vue({
    el: '#app',
    render: h => h(App),
});
// Ahora en el archivo con nombre.babelrc.js, debe ir el siguiente bloque de código:
module.exports = {
    presets: ['@babel/present-env'],
}