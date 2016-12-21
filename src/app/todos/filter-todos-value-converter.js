/**
 * Created by istrauss on 12/21/2016.
 */

export class FilterTodosValueConverter {
    toView(todos, filters) {
        return todos.filter(todo => {
            const satisfiesSearchBy = !filters.searchBy || todo.name.toLowerCase().indexOf(filters.searchBy.toLowerCase()) > -1;
            const satisfiesIncludeCompleted = filters.includeCompleted || !todo.isCompleted;
            return satisfiesSearchBy && satisfiesIncludeCompleted;
        });
    }
}
