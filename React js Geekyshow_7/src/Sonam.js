// 54.1 higher order component(HOC)
// import React, { Component } from 'react'
// import Army from './withArm';
// class Sonam extends Component {
//     // state = {
//     //     gunshots: 0
//     // };
//     // handleGunshots = () => {
//     //     this.setState({gunshots: this.state.gunshots + 1})
//     // }
//   render() {
//     return (
//       <div>
//         <h3 onMouseOver={this.handleGunshots}>Sonam{this.props.hocgunname} Gunshots: {this.state.gunshots}</h3>
//       </div>
//     );
//   }
// }
// export default Army(Sonam);



// 54.2 higher order component(HOC)
// import React, { Component } from 'react'
// import Army from './withArm';
// class Sonam extends Component {
//   render() {
//     return (
//       <div>
//         <h3 onMouseOver={this.props.handleGunshots}>Sonam{this.props.hocgunname} Gunshots: {this.props.gunshots}</h3>
//       </div>
//     );
//   }
// }
// export default Army(Sonam);

// 54.3 higher order component(HOC)
// import React, { Component } from 'react'
// import Army from './withArm';
// class Sonam extends Component {
//   render() {
//     return (
//       <div>
//       <h2>camp: {this.props.camp}</h2>
//         <h3 onMouseOver={this.props.handleGunshots}>Sonam{this.props.hocgunname} Gunshots: {this.props.gunshots}</h3>
//       </div>
//     );
//   }
// }
// export default Army(Sonam,20);