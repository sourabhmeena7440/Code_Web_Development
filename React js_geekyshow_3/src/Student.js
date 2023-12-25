// 22.1 Event handling
// import React, { Component } from 'react';
// class Student extends Component{
//     // 1. simple functio
//     // handleClick(){
//     //     console.log("Button Clicked","this");
//     // }

//     // 2. use of Arrow function
//     // handleClick = () => {
//     //     console.log("Button Clicked",this);
//     // };

//     // 3. without Arrow function ke this ka use karna
//     // constructor(props){
//     //     super(props)
//     //     this.handleClick = this.handleClick.bind(this);
//     // }
//     // handleClick(){
//     //     console.log("Button Clicked",this);
//     // }

//     // state ka use karke props
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:"Rahul",
//             roll: this.props.roll
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
//     // without arrow function
//     // handleClick(){
//     //         console.log("Button Clicked",this);
//     //     }

//     // with arrow function
//     handleClick = () => {
//         console.log("Button Clicked",this);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Event</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         );
//     }
// }
// export default Student;


// // 22.2 Event handling   - function components
// import React, { Component } from 'react'
// function Student(props){
//     function handleClick(){
//         console.log("Button Clicked");
//     }
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }

// export default Student;


// 22.3 Event handling   - function components - pravant default
// default baviour ko prevant kar skte hai is tarah and prevant ka use karke
// import React from 'react';
// function Student(props){
//     function handleClick(e){
//         e.preventDefault();
//         console.log("Button Clicked");
//     }
//     return (
//         <div>
//             <h1>Hello {props.name}</h1>
//             <a href="https://www.geekyshows.com" onClick={handleClick}>Click Me</a>
//         </div>
//     )
// }

// export default Student;








// 23.1 update State using setState Method 
// object se
// import React, { Component } from 'react';
// class Student extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:"Rahul",
//             roll: this.props.roll
//         };
//     }
//     // with arrow function
//     handleClick = () => {
//         this.setState({ name: "jai",roll: "105"});
       
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Hello Event</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         );
//     }
// }
// export default Student;



// 23.2 update State using setState Method 
//  function ka use hoga
// import React, { Component } from 'react';
// class Student extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name:"Rahul",
//             roll: this.props.roll
//         };
//     }
//     // with arrow function
//     handleClick = () => {
//         this.setState(function(state,props){
//             // console.log(state.name);
//             console.log(props.roll);
//         });
       
//     };
//     render(){
//         return(
//             <div>
//                 <h1>Hello Event</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         );
//     }
// }
// export default Student;








// // 24.1 passing arguments to Evant handlers   ---- Arrow function
// import React, { Component } from 'react';
// class Student extends Component{
//     // State without Constructer or State Property
//     state = {
//         id: 1,
//         name: "Rahul"
//     };

//     // Event Handler Arrow Function
//     handleClick = (id,j,e) => {
//         console.log(id);
//         console.log(j);
//         console.log(e);
//     };

//     // event components pass ho skta hai
//     handleClickArg = (e)=>{
//         this.handleClick(this.state.id, "101". e);
//     };

//     render(){
//         return(
//             <div>
//                 <h1>Hello, {this.state.name}</h1>
//             <button onClick={this.handleClickArg}>Delete</button>
//             </div>
//         );
//     }
// }



// 24.2 passing arguments to Evant handlers   ---- bind mathads
// import React, { Component } from 'react';
// class Student extends Component{
//     // State without Constructer or State Property
//     state = {
//         id: 1,
//         name: "Rahul"
//     };

//     // Event Handler Arrow Function
//     handleClick = (id,e) => {
//         console.log(id);
//         console.log(e);
//     };

//     // event components pass ho skta hai
//     handleClickArg = (e)=>{
//         this.handleClick(this.state.id, e);
//     };

//     render(){
//         return(
//             <div>
//                 <h1>Hello, {this.state.name}</h1>
//             <button onClick={this.handleClick.bind(this,this.state.id)}>Delete</button>
//             </div>
//         );
//     }
// }




// 27.2 stateDrivedFRomProps
// import React, { Component } from 'react';

// export default class Student extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>
//         );
//     }
// }


// // 27.3 render
// import React, { Component } from 'react';
// import Marks from './Marks';
// export default class Student extends Component{
//     render(){
//         console.log("Student - Rendered [Child Of App]")
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//                 <Marks/>
//             </div>
//         );
//     }
// }
