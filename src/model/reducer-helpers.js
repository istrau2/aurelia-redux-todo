/**
 * Created by Ishai on 12/21/2016.
 */

export default class ReducerHelpers {

    /**
     * Utility method to update an array with no in-place mutation.
     * @param {Array} arr - the array to be updated
     * @param {Object[]} updates
     * @param {number} updates.index
     * @param {Object} updates.values
     */
    static updateArray(arr, updates = []) {
        return updates.reduce((_arr, update) => {
            const arrElemToUpdate = arr[update.index];
            const newArrElem = {
                ...arrElemToUpdate,
                ...update.values
            };
            return _arr.slice(0, update.index).concat(newArrElem).concat(_arr.slice(update.index + 1));
        });
    }
}