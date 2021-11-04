
/* Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).

Создадим вспомогательную функцию curry(f), которая выполняет каррирование функции f с двумя аргументами. Другими словами, curry(f) для функции f(a, b) трансформирует её в f(a)(b). */
function curry(f) {
    return function(a) {
        return function(b) {
            return function (c){
                return f(a, b, c)
            }
        }
    }
}

function sum(a, b, c) {
    return a + b +c
}

let curriedSum = curry(sum);

console.log(curriedSum(2)(3)(4));  // 9