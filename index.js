import React from 'react';
import ReactDom from 'react-dom';
import Greeting from './Greeting/greeting'


let h1=React.createElement('h1',null,'hello')
// ReactDom.render(h1,document.getElementById('root'))

// function Greeting(){
//   // let h1=React.createElement('h1',null,"Hello this is a Component");
//   // let p=React.createElement('p',null,"Hello this is a Component");
//   // let h3=React.createElement('h3',null,"Hello this is a Component");
//   return(
//     <div>
//       <h1>Hello JSX!</h1>
//       <p>This is javaScript Exemel</p>
//     </div>

//   );

// }
ReactDom.render(<Greeting/>,document.getElementById('root'))


