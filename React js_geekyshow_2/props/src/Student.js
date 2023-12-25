// 18.  function components - Props
// import React from "react";
// const Student = props => {
//     return (
//         <div>
//             <h1>HEllo, {props.name}</h1>     
//             <h2>Your Roll: {props.roll}</h2>
//         </div>
//     );
// }
// export default Student;




// 18.1 class componets -  Props   
// class best component use kar rhe hai
// import React, { Component } from "react";
// import Student from "./student";
// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello,{this.props.name}</h1>
//                 <h1>Your Roll: {this.props.roll}</h1>
//             </div>
//         )
//     }
// }
// export default Student;


// 19.1 typechecking proptypes   -  class componets
// import React, { Component } from "react";
// import pt from "prop-types";
// import Student from "./student";
// class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello,{this.props.name}</h1>
//                 <h1>Your Roll: {this.props.roll}</h1>
//             </div>
//         )
//     }
// }
// // is REquired
// Student.prototypes = {
//     // multiple ka use kar skte hai
//     name: pt.string.isRequired,
//     roll: pt.number
// };

// // Default prop value
// Student.defaultProps = {
//     name : "GeekyShows"
// }
// export default Student;







// 20. children in jsx  - function component
// import React from "react";
// const Student = props => {
//     return <h1>Hello {props.children}</h1>;
// };

// export default Student;


// 20.1  children in jsx  - class component
// import React, { Component } from "react";
// class Student extends Component{
//     render(){
//         return <h1>Hello Rahul {this.props.children}</h1>
//     }
// }
// export default Student;





// // 21.1 State in React js  and without constructer
// import React, { Component } from 'react'
// class Student extends Component{
//     state = {
//         name: "Rahul",
//         roll: "101"
//     };
//     render(){
//         return (
//              <h1>Hello, {this.state.name} Your Roll number is
//         {this.state.roll}</h1>
//         );
//     }
// }
// export default Student;



// // 21.2 props to  convert State in React js  and without constructer
// import React, { Component } from 'react'
// class Student extends Component{
//     state = {
//         name: "Rahul",
//         roll: this.props.roll
//     };
//     render(){
//         return (
//              <h1>Hello, {this.state.name} Your Roll number is
//         {this.state.roll}</h1>
//         );
//     }
// }
// export default Student;


// 21.3 props to  convert State in React js  and without constructer
// import React, { Component } from 'react'
// class Student extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             name: "Rahul",
//             roll: this.props.roll
//         };
//     }
//     render(){
//         return (
//              <h1>Hello, {this.state.name} Your Roll number is
//         {this.state.roll}</h1>
//         );
//     }
// }
// export default Student;

