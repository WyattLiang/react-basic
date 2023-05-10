import {TodoRowItem} from "./TodoRowItem";
import React from "react";
import { TodoModel } from "../models/TodoModel";
export const TodoTable: React.FC<{
    todos: TodoModel[],
    deleteTodo: Function
}> = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
                {/* loop each elements in the list */}
                {props.todos.map(todo=>(
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    );
}
