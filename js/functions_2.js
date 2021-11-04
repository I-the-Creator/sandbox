"use strict";
        let array = [2, 5, 7, 9, 11, 13, 15, 19, 22, 30];   
        let item = +prompt('Enter the number');
        function findArrayElementIndex(arr) { // checks if entered number is in array and finds it's position (index + 1)
            let lowestIndex = 0;  // lowest possible position
            let highestIndex = arr.length - 1; // highest possible position
            while (lowestIndex <= highestIndex) {
                let mid = Math.round((lowestIndex + highestIndex) / 2); // middle position 
                let guess = arr[mid];
                if (guess == item) return alert(`Element with value ${item} is in position ${mid + 1}`);
                else if (guess > item) highestIndex = mid - 1;
                else lowestIndex = mid + 1;
            }
            return alert('There is no number ' + item + ' in array');
        }
        findArrayElementIndex(array);

        let array1 = [, 4, 5, , 7, 9, 3, 6, 8, 1, 3, 12, 2, 11];
        function quickSort(a) {  // quick sort
            if (a.length < 2) return a;  // arrays with 0 or 1 element 'sorted'
            let pivot = a[0];   // base case
            console.log(pivot === undefined);
            (pivot === undefined) ? pivot = 0 : pivot; // check if element is undefined
            let less = [];
            let bigger = [];
            for (let i = 1; i < a.length; i++) {
                if (a[i] <= pivot) less.push(a[i]);
                else bigger.push(a[i]);
            }
            return quickSort(less).concat(pivot).concat(quickSort(bigger));
        }
        console.log(quickSort(array1));


        const swapPositions = (array, a ,b) => {     //  changes index of array's elements 
            [array[a], array[b]] = [array[b], array[a]]
        }
        let array2 = [1, 2, 3, 4, 5];
        swapPositions(array2,0,1);
        console.log(array2);