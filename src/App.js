import React, { Component } from 'react';

class App extends Component {
// constructor(props) {
//   super {props}

//   this.state = {
//     game: {

//     }
//   }
// }

  render() {
    return (
      <div>
        <h1>MineSweeper</h1>
        <table>
          <tbody>
            <tr>
              <td colSpan="8">
<select>
  <option value="0">Easy</option>
  <option value="1">Mid</option>
  <option value="2">Hard</option>
</select>
<button>Start / Restart</button>
</td>
</tr>
<td colSpan="8">Message to Player</td>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td></td>
</tr>
<td colSpan="8"> Mines Left: </td>
</tbody>
</table>
      </div>
    );
  }
}

export default App