// // 49.1 uncontrolled components Ref 
// import React, { Component } from 'react'

// export default class  extends Component {
// constructor(props){
//     super(props);
//     // creating ref
//     this.textInput = React.createRef();
// }
// componentDidMount = () => {
//     // console.log(this.textInput.current);
//     this.textInput.current.focus();
// };
//   render() {
//     return (
//       <form>
//         Name: <input type='text' />
//         <br/>
//         <br/>
//         Password: <input type='text' ref={this.textInput}/>
//         <br/>
//         <br/>
//         Address: <input type='text'/>
//       </form>
//     )
//   }
// }



// 49.2 uncontrolled components Ref 
// import React, { Component } from 'react'

// export default class  extends Component {
// constructor(props){
//     super(props);
//     this.state = {
//         value: ""
//     }
//     // creating ref
//     this.textInput = React.createRef();
// }
// handleSubmit  = e => {
//     e.preventDefault();
//     // console.log(this.textInput.current.value);
//     this.setState({value: this.textInput.current.value})
// };
//   render() {
//     return (
//       <React.Fragment>
//         <h2> you typed: {this.state.value}</h2>
//         <form onSubmit={this.handleSubmit}>
//             Input: <input type='text' ref={this.textInput}/>
//             <input type='submit' value="Submit"/>
//         </form>
//       </React.Fragment>
//     );
//   }
// }








// 50.1 collback ref in React js
// import { element } from 'prop-types';
// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super();
//         // callback properties me pass hoga
//         this.backRef = null; 
//         // mathads
//         this.setBackRef = element => {
//             this.backRef = element;
//         };
//     }
//     componentDidMount = () => {
//         if(this.backRef){
//             this.backRef.focus();
//         }
//     }
//   render() {
//     return (
//       <form>
//         Name: <input type='text'/>
//         <br/>
//         <br/>
//         {/* input element and dom element kah skte hai and hame refrence diya hai  */}
//         Password: <input type='text' ref={this.setBackRef}/>  
//         <br/>
//         <br/>
//         Address: <input type='text'/>
//       </form>
//     )
//   }
// }








//51.1 lefting state in React
// import React, { Component } from 'react'
// import User from './User';
// import Guest from "./Guest";
// export default class App extends Component {
//   state = {
//     value: 10
//   }
//   render() {
//     return 
//     <div>
//       <User name={this.state.value}/>;
//       <Guest name={this.state.value}/>;
//     </div>
//   }
// }






// 52.1 context API - providers and consumer
// import React, { Component } from 'react'
// import User from "./User";
// export default class App extends Component {
//   state = {
//     name: "Rahul"
//   };
//   render() {
//     return <User nm={this.state.name}/>;
//   }
// }

// 52.2 context API - providers and consumer
// import React, { Component } from 'react'
// import User from "./User";
// export const MyContext = React.createContext(); // object return karta hai provider ko

// export default class App extends Component {
//   state = {
//     name: "Rahul",
//     value: 10
//   };
  
//   render() {
//     return (
//       <MyContext.Provider value={this.state}>               // value={this.state.name}
//         <User/>
//       </MyContext.Provider>
//     )
//   }
// }


// 52.3 context API - providers and consumer
// import React, { Component } from 'react'
// import User from "./User";
// export const MyContext = React.createContext(); // object return karta hai provider ko

// export default class App extends Component {
//   state = {
//     name: "Rahul",
//     value: 10
//   };
  
//   handleClickContect = () => {
//     this.setState({value: this.state.value + 1})
//   };

//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     };

//     return (
//       <MyContext.Provider value={contextValue}>               
//         <User/>
//       </MyContext.Provider>
//     )
//   }
// }


// // 52.4 context API - sepreate file se providers 
// import React, { Component } from 'react'
// import User from "./User";
// import { Provider } from './ConText';

// export default class App extends Component {
//   state = {
//     name: "Rahul",
//     value: 10
//   };
  
//   handleClickContect = () => {
//     this.setState({value: this.state.value + 1})
//   };

//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     };

//     return (
//       <Provider value={contextValue}>               
//         <User/>
//       </Provider>
//     )
//   }
// }


// 52.5 context API - default value
// import React, { Component } from 'react'
// import User from "./User";
// import { Provider } from './ConText';

// export default class App extends Component {
//   render() {
//     return (
//       <Provider value={"Rahul"}>               
//         <User/>
//       </Provider>
//     )
//   }
// }






// 53.1   Context Type
// import React, { Component } from 'react'
// import { Consumer } from './ConText';
// export default class  extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <Consumer>
//             {({Data, handleClick }) => (
//                 <div>
//                     <h4>
//                         Name: {Data.name} value:{Data.value}
//                     </h4>
//                     <button onClick={handleClick}>Change value</button>
//                 </div>
//             )}
//         </Consumer>
//       </div>
//     )
//   }
// }



// 54.1  and 54.2 and 54.3 higher order component(HOC)
// import React, { Component } from 'react'
// import Rahul from './Rahul'
// import Sonam from './Sonam'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Rahul camp="120"/>
//         <Sonam camp="140"/>
//       </div>
//     )
//   }
// }
















