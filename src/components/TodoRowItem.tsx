import React from "react"
//Refactor to "arrow" function
export const TodoRowItem: React.FC<{
                 rowNumber:number,
                 rowDescription:string, 
                 rowAssigned:string, 
                 deleteTodo:Function
}> = (props) => {
        return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

// function TodoRowItem(props: {
//                 rowNumber:number,
//                 rowDescription:string, 
//                 rowAssigned:string, 
//                 deleteTodo:Function
//             }){

//     return (
//         <tr onClick={() => props.deleteTodo(props.rowNumber)}>
//             <th scope='row'>{props.rowNumber}</th>
//             <td>{props.rowDescription}</td>
//             <td>{props.rowAssigned}</td>
//         </tr>
//     )
// }
