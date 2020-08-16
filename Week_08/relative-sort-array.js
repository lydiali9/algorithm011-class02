/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let arr = [];
    let arr11 = arr1.filter(item => arr2.indexOf(item) == -1).sort((a, b) => a -b);

    for(var i = 0; i < arr2.length; i++) {
        let item = arr2[i];
        while(arr1.indexOf(item) > -1) {
            arr.push(item);
            arr1.splice(arr1.indexOf(item), 1);
        }
    }

    return arr.concat(arr11);
};