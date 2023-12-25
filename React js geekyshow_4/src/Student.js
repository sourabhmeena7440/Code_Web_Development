// 28.1 Updating  - static - getDrivedStatefromprops
// import React, { Component } from 'react'
// import Marks from './Marks';
// export default class Student extends Component {
//     constructor(){
//         super();
//         this.state = {
//             roll: 101
//         };
//     }
//     clickHandle = () =>{
//         console.log("Button Clicked");
//         // this.setState({roll:102});
//         this.setState({roll:this.state.roll+2});
//     };
//   render() {
//     console.log("Student Rendered");
//     return (
//       <div>
//         <Marks roll={this.state.roll}/>
//         <button onClick={this.clickHandle}>Change</button>
//       </div>
//     )
//   }
// }









// 29.1 unmounting
// import React, { Component } from 'react'

// export default class Student extends Component {
//     componentDidMount(){
//         console.log("Student Mounted");
//     }
//   render() {
//     console.log("Student Rendered");
//     return (
//       <h1>Hello Student Component</h1>
//     );
//   }
// }
