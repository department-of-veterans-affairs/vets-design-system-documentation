/**
 * Swap the DOM elements at each index
 *
 * @param {NodeList} rows - A live NodeList with elements to be swapped
 * @param {number} firstIndex - The index of the first item to be swapped
 * @param {number} secondIndex - The index of the second item to be swapped
 */
function swapChildren(rows, firstIndex, secondIndex) {
    const parent = rows[0].parentNode;
    const itemOne = rows[firstIndex];
    const itemTwo = rows[secondIndex];
    const temp = itemTwo.nextSibling;
    parent.insertBefore(itemTwo, itemOne);
    parent.insertBefore(itemOne, temp);
}
/**
 * A helper for quicksort. This function:
 *  1. Chooses a pivot in the middle of the list
 *  2. Moves the lower index higher until an item is greater than the pivot
 *  3. Moves the higher index lower until an item is less than the pivot
 *  4. Swaps those two items
 *  5. Continues until the lower and the higher indices have met/crossed
 * At the end of the funciton, all items from indices `low` to the pivot index
 * will be smaller than the pivot item, and all items from the pivot index to
 * `high` will be greater than the pivot position
 *
 * @param {NodeList} rows - A live NodeList of elements to sort
 * @param {number} low - The lower bound index to use for the partition
 * @param {number} high - The upper bound index to use for the partition
 * @param {Function} selector - An optional selector to use for selecting values for comparison
 * @param {Function} comparator - An optional comparator to use for comparing elements
 */
function partition(rows, low, high, selector, comparator) {
    const pivot = selector(rows[Math.floor((low + high) / 2)]);
    while (low <= high) {
        // By default, selector(rows[low]) < pivot
        while (comparator(selector(rows[low]), pivot)) {
            low++;
        }
        // By default, selector(rows[high]) > pivot
        while (comparator(pivot, selector(rows[high]))) {
            high--;
        }
        if (low <= high) {
            swapChildren(rows, low, high);
            low++;
            high--;
        }
    }
    return low;
}
/**
 * Sorts a NodeList in place.
 * @param {NodeList} rows - A live NodeList of elements to sort
 * @param {number} low - The lower bound index to use for the partition
 * @param {number} high - The upper bound index to use for the partition
 * @param {Function} selector - An optional selector to use for selecting values for comparison
 * @param {Function} comparator - An optional comparator to use for comparing elements
 */
export function quicksort(rows, low, high, selector = row => row.textContent, comparator = (a, b) => a < b) {
    if (low >= high || low < 0)
        return;
    const pivot = partition(rows, low, high, selector, comparator);
    quicksort(rows, low, pivot - 1, selector, comparator); // Left side
    quicksort(rows, pivot, high, selector, comparator); // Right side
}
/**
 * Run quicksort with the `comparator` argument using a greater than operator
 * instead of the default less than
 */
export function reverseQuicksort(rows, low, high, selector = row => row.textContent) {
    quicksort(rows, low, high, selector, (a, b) => a > b);
}
