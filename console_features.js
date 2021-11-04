let msg = 'Hello';
console.log(msg);
let techBrands = [
    {
        name:'Facebook',
        sharePrice: 340
    },
    {
        name:'Google',
        sharePrice: 2500
    },
    {
        name:'Amazon',
        sharePrice: 3000
    },
    {
        name:'Apple',
        sharePrice: 150
    },
    {
        name:'Microsoft',
        sharePrice: 270
    },
    {
        name:'Netflix',
        sharePrice: 520
    },
]
console.table(techBrands);

console.log('%c Hello world',
    'color:red',
);


console.group('New group');
    console.log('item 1');
    console.log('item 2');
    console.log('item 3');
    console.log('item 4');
console.groupEnd();

