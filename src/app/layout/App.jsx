import React from "react";
import { Button } from "semantic-ui-react";



// function App() {

//   // const title = React.createElement('h1', {}, 'Revents no JSX');
//   // const div = React.createElement('div', {className: 'App'}, title);
//   // return div;

//   return (
//     <div className="App" style={{marginTop: '20px'}}>
//       <h1>Re-vents</h1>
//     </div>
//   );
// }

// export default App;


export default function App() {
  return (
    <div className="App">
      <h1>Re-vents</h1>
      <button className="ui icon red button">
        <i className="user icon" />CSS Button
      </button>
      <Button icon='user' content='React Button' color="green" loading='true' />
    </div>
  );
} 