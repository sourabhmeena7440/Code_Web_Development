// 28.1 Updating  - static - getDrivedStatefromprops
// import React, { Component } from 'react'
// export default class Marks extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             mroll: this.props.roll
//         };
//     }
//     static getDerivedStateFromProps(props,state){
//         console.log("Get Derived State From Props");
//         console.log(props,state);
//         if(props.roll !== state.mroll){
//             return{mroll: props.roll};
//         }
//         return null;
//     }
//     // 28.2 Updating  - shouldComponentUpdate
//     shouldComponentUpdate(nextProps, nextState){
//         if(this.state.mroll<107){
//             console.log("Mark - ShouldComponentUpdate");
//             console.log(nextProps,nextState);
//             return true;
//         }
//         console.log(nextProps,nextState);
//         return false;
//     }
    
//     // 28.3 updating - getsnapshotBeforeUpdate()   - ye run hota hai update ke pahele
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log("Marks - getSnapshotBeforeUpdate - it runs before update");
//         console.log(prevProps,prevState);
//         return 45;
//     }
//     // 28.4 updating - componentDidUpdate()   - ye run hota hai update ke bad
//     componentDidUpdate(prevProps,prevState,snapshot){
//         console.log("Marks - componentDidUpdate - it runs after update");
//         console.log(prevProps,prevState,snapshot);
//     }
//   render() {
//     console.log("Marks Rendered");
//     return (
//       <div>
//         <h1>{this.state.mroll}</h1>
//       </div>
//     )
//   }
// }
