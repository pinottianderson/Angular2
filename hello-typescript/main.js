var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES6
var number = 2;
var PI = 3.16;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var matematica = /** @class */ (function () {
    function matematica() {
    }
    matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return matematica;
}());
var n1 = 'rsrsrs';
