/**
 * Created by istrauss on 12/21/2016.
 */


export class VisibleTodosCountValueConverter {
    toView(todos = []) {
        return todos.reduce((_count, todo) => {
            return _count + (todo.isVisible ? 1 : 0);
        }, 0);
    }
}
