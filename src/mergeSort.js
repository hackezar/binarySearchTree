export function merge(left, right) {
    let arr = []
    // Break out of loop if any one of the array becomes empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [ ...arr, ...left, ...right ]
}

export function mergeSort(array) {
   const half = array.length / 2;
   // Base case or terminating case
   if (array.length < 2)
    return array;

    const left = array.splice(0, half);
    return merge(mergeSort(left), mergeSort(array));
}

export function removeDuplicates(array, count=1) {
    let last = count - 1;
    if (array[count] == array[last])
        array.splice(count, 1);
    else if (count == array.length) 
        return array;
    removeDuplicates(array, count + 1);
}