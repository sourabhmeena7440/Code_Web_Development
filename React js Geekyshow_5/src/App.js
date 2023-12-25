// 35.1 condition Rendering
// import React, { Component } from 'react'
// import User from './User';
// import Guest from './Guest';
// export default class App extends Component {
//   render() {
//     const isRegistered = this.props.consumer;
//     if(isRegistered){
//         return <User/>;
//     }
//     return <Guest/>;
//   }
// }



// 35.2 logical Operater
// import React, { Component } from 'react' 
// import User from './User';
// export default class App extends Component {
//   render() {
//     const PrimeMember = this.props.PrimeMember
//     return(
//         <React.Fragment>
//             <h1>Welcome User</h1>
//             {PrimeMember && <User/>}
//         </React.Fragment>
//     );
//   }
// }


// 35.3 if else Statement - user family code
// import React, { Component } from 'react'
// import User from './User';
// import Guest from './Guest';

// export default class App extends Component {
//     state = {
//         isLoggedIn: true
//     };

//     clickLogin = ()=>{
//         this.setState({isLoggedIn: true})
//     }
    
    
//     clickLogout = ()=>{
//         this.setState({isLoggedIn: false})
//     }
    
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     if(isLoggedIn){
//         return <User clickData={this.clickLogout}/>;
//     }else{
//         return <Guest clickData={this.clickLogin}/>;
//     }
//   }
// }


// 35.4 inline if-else with condition operaters
// import React, { Component } from 'react'
// import User from './User';
// import Guest from './Guest';

// export default class App extends Component {
//     state = {
//         isLoggedIn: true
//     };

//     clickLogin = ()=>{
//         this.setState({isLoggedIn: true})
//     }
    
    
//     clickLogout = ()=>{
//         this.setState({isLoggedIn: false})
//     }
    
//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     return(
//         // <div>
//         //     {isLoggedIn ? (
//         //         <User clickData={this.clickLogout}/>
//         //     ) : (
//         //         <Guest clickData={this.clickLogin}/>
//         //     )}
//         // </div>


//         // IIFF
//         <div>
//             {(() => {
//                 if (isLoggedIn){
//                     return <User ClickData={this.clickLogout} />;
//                 }else {
//                     return <Guest ClickData={this.clickLogin}/>
//                 }
//             })()
//             }
//         </div>
//     );
//   }
// }



// 36.1 list
// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const arr = [10,20,30,40];
//     // multiple ke liye
//     const newArr = arr.map((num) => {
//       console.log("num = ", num);
//         return <li>{num*2}</li>
//     });
//     console.log("oldArray = ", arr);
//     console.log("newArray = ", newArr);
//     return (
//       <ul>
//         {/* single element ke liye shi hai multiple keliye ye aproch sahi nhi hai */}
//         {/* <li>{arr[0]*2}</li> */}
//         // multiple ke liye
//         {newArr};
//       </ul>
//     )
//   }
// }


// 36.2 list - map mathads ko ap return ke under bhi likh skte hai 
// imbady map in jsx
// import React, { Component } from 'react';

// export default class App extends Component {
//   render() {
//     // const arr = [10,20,30,40];
//     const arr = this.props.numbers;
//     return (
//       <ul>
//         {arr.map(num => {
//           return <li>{num}</li>;
//         })}
//       </ul>
//     );
//   }
// }



// // 36.3 list - state ka use karke karna hai
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     users : [
//       {id: 101, name:"Rahul",password: "3423ssdf"},
//       {id: 102, name:"sonam",password: "654ssdf"},
//       {id: 103, name:"sumit",password: "657ssdf"},
//     ],
//     isLoggedIn: false 
//   }
//   render() {
//     return (
//       <div>
//         <h1>ID: {this.state.users[0].id} Name: {this.state.users[0].id}{" "} password: {this.state.users[0].password}</h1>
//         <h1>ID: {this.state.users[1].id} Name: {this.state.users[1].id}{" "} password: {this.state.users[1].password}</h1>
//         <h1>ID: {this.state.users[2].id} Name: {this.state.users[2].id}{" "} password: {this.state.users[2].password}</h1>
//       </div>
//     )
//   }
// }


// 36.4 list - state ka use karke karna hai
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     users : [
//       {id: 101, name:"Rahul",password: "3423ssdf"},
//       {id: 102, name:"sonam",password: "654ssdf"},
//       {id: 103, name:"sumit",password: "657ssdf"},
//     ],
//     isLoggedIn: false 
//   }
//   render() {
//     const newUsers = this.state.users.map(user => {
//       console.log(user);
//     return (
//       <h1>
//         ID: {user.id} Name: {user.name} Password: {user.password}
//       </h1>
//     );
//   });
//   return <div>{newUsers}</div>;
// }
// }












// 37.1 keys 
// import React, { Component } from 'react'

// export default class App extends Component {
//   state = {
//     users : [
//       {id: 101, name:"Rahul",password: "3423ssdf"},
//       {id: 102, name:"sonam",password: "654ssdf"},
//       {id: 103, name:"sumit",password: "657ssdf"},
//     ],
//     isLoggedIn: false 
//   }
//   render() {
//     const newUsers = this.state.users.map(user => {
//       console.log(user);
//     return (
//       <h1 key={user.id}>
//         ID: {user.id} Name: {user.name} Password: {user.password}
//       </h1>
//     );
//   });
//   return <div>{newUsers}</div>;
// }
// }


// 37.2 keys - key atributes props ke duvra pass hoga yha nhi
// import React, { Component } from 'react'
// import User from './User';
// export default class App extends Component {
//   render() {
//     const arr = this.props.numbers;
//     const newArr = arr.map(num => {
//         return <User key={num} value={num}/>;
//     });
//     return (
//       <div>
//         <ul>{newArr}</ul>
//       </div>
//     );
//   }
// }


