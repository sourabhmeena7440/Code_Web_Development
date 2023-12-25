// 27.1 Mounting 
// import React, { Component } from 'react';
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - Constructor Called");
//         console.log(props);
//     }
//     render(){
//         return <h1>Hello Rahul</h1>;
//     }
// }



// // 27.2 stateDrivedFRomProps
// import React, { Component } from 'react';
// import Student from './Student';
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - Constructor Called");
//         console.log(props);
//         this.state = {
//             roll: "101"
//         };
//     }

//     static getDerivedStateFromProps(props,state){
//         console.log("App - Get Derived State From Props");
//         console.log(props, state);
//     }
//     render(){
//         return 
//         <div>
//             <Student name="Rahul"/>
//         </div>
//     }
// }



// // 27.3 render 
// import React, { Component } from 'react';
// import Student from './Student';
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - Constructor Called");
//         console.log(props);
//         this.state = {
//             roll: "101"
//         };
//     }

//     static getDerivedStateFromProps(props,state){
//         console.log("App - Get Derived State From Props");
//         console.log(props, state);
//     }
//     render(){
//         console.log(App-Rendered);
//         return 
//         <div>
//             <Student name="Rahul"/>
//         </div>
//     }
// }


// 27.4 ComponentDidMount
// import React, { Component } from 'react';
// import Student from './Student';
// export default class App extends Component{
//     constructor(props){
//         super(props);
//         console.log("App - Constructor Called");
//         console.log(props);
//         this.state = {
//             roll: "101"
//         };
//     }

//     static getDerivedStateFromProps(props,state){
//         console.log("App - Get Derived State From Props");
//         console.log(props, state);
//     }

//     componentDidMount(){
//         // get data from server and set the data to state
//         console.log("App - ComponentDidMount - Mounted");
//     }
//     render(){
//         console.log(App-Rendered);
//         return 
//         <div>
//             <Student name="Rahul"/>
//         </div>
//     }
// }