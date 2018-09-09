import React from "react";

const TableView = function(props) {

  const rows = props.wordArray.map((word, index) => {
  return (<tr key={index}>
    <td>
      {Object.keys(word)}
    </td>
    <td>
      {Object.values(word)}</td>
  </tr>)
});


return(
  <div>
    <h4 className="title">Word Frequency Within Reviews</h4>

    <table>
      <tbody>
        <tr>
          <th>Word</th>
          <th>Frequency</th>
        </tr>
        {rows}
      </tbody>
    </table>
  </div>

);

}
export default TableView;
