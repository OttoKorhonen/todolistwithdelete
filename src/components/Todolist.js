import React from 'react';

function Todotable (props) {

    return(
    <div>
        <table>
        <tbody>
        <tr><th>Date:</th><th>Description:</th></tr>
          {
          props.todo.map((todo, index) =>
          <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.description}</td>
          <td> <button id={index} onClick={props.deleteItem}>Delete</button></td>
          </tr>
          )}
        </tbody>
        </table>
    </div>
    );
}
export default Todotable;