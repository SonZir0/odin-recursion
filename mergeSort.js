const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));

function mergeSort(array) {
    if (array.length === 1) return array;
    else {
        // sort first half
        let firstHalf = array.slice(0, Math.ceil(array.length / 2));
        firstHalf = mergeSort(firstHalf);

        // sort second half
        let secondHalf = array.slice(Math.floor(array.length / 2));
        secondHalf = mergeSort(secondHalf);

        // merge
        let i = 0;
        let j = 0;
        let sorted = [];
        for (; i < firstHalf.length && j < secondHalf.length; ) {
            if (firstHalf[i] < secondHalf[j]) sorted.push(firstHalf[i++]);
            else sorted.push(secondHalf[j++]);
        }
        // if one list's empty and the other still has some elements left - append to sorted
        if (i < firstHalf.length) sorted = sorted.concat(firstHalf.slice(i));
        if (j < secondHalf.length) sorted = sorted.concat(secondHalf.slice(j));
        return sorted;
    }
}
