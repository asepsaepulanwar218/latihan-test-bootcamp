var data = [
    ['T','S','Q','P','R'],
    ['W','U','V']
];

var datalain = [
    ['M','L','O','N'],
    ['T','S','Q','P','R'],
    ['W','U','V']
];

function sort_array(x) {
    firstSort = [];
    var i = 0;
    while (i<x.length) {
        firstSort.push(x[i].sort());
        i++;
    }

    secondSort = firstSort.sort((a,b) => { return a.length-b.length;
    });
    return secondSort;
}

console.log(sort_array(data));
console.log(sort_array(datalain));