
//51.1 lefting state in React
// import React, { Component } from 'react'

// export default class  extends Component {
//   render() {
//     return (
//       <h1>{this.props.value * 10}</h1>
//     )
//   }
// }


// 52.1 context API - providers and consumer
// import React, { Component } from 'react'

// export default class Guest extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <h4>{this.props.nm}</h4>
//       </div>
//     )
//   }
// }


// 52.2 and 52.3 context API - providers and consumer
// import React, { Component } from 'react'
// import { MyContext } from './App'
// export default class  extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <MyContext.Consumer>
//             {({Data, handleClick }) => (
//                 <div>
//                     <h4>
//                         Name: {Data.name} value:{Data.value}
//                     </h4>
//                     <button onClick={handleClick}>Change value</button>
//                 </div>
//             )}
//         </MyContext.Consumer>
//       </div>
//     )
//   }
// }

// 52.4 context API - sepreate file se Consumer
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




// 52.5 context API - default value
// import React, { Component } from 'react'
// import { Consumer } from './ConText';
// export default class  extends Component {
//   render() {
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <Consumer>
//             {value  => (
//                 <div>
//                     <h4>
//                         {value}
//                     </h4>
//                 </div>
//             )}
//         </Consumer>
//       </div>
//     )
//   }
// }




// 53.1  Context Type
// import React, { Component } from 'react'
// import {MyContext} from "./ConText";
// export default class  extends Component {
//     static contextType = MyContext;
//     // kisi bhi life cycle meathads ke under bhi data ka use kar skte hai jo pehel nhi kar pate the
//     componentDidMount = () =>{
//         //console.log(this.context);
//     };
//   render() {
//     console.log(this.context);
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <h4>
//             Name: {this.context.data.name} value: {this.context.data.value}
//         </h4>
//         <button onClick={this.context.handleClik}>Change value</button>
//       </div>
//     )
//   }
// }

// 53.2  Context Type - destructer kar skte hai iska matlab code thoda chohta kar skte hai
// import React, { Component } from 'react'
// import {MyContext} from "./ConText";
// export default class  extends Component {
//     static contextType = MyContext;
//     // kisi bhi life cycle meathads ke under bhi data ka use kar skte hai jo pehel nhi kar pate the
//     componentDidMount = () =>{
//         console.log(this.context);
//     };
//   render() {
//     const {name,value} =  this.context.data
//     return (
//       <div>
//         <h3>Guest Component</h3>
//         <h4>
//             Name: {name} value: {value}
//         </h4>
//         <button onClick={this.context.handleClik}>Change value</button>
//       </div>
//     )
//   }
// }
