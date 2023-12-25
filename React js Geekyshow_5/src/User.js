// // 35.1 condition Rendering
// import React, { Component } from 'react'

// export default class  extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Welcome Rahul</h1>
//         <button>Logout</button>
//       </div>
//     );
//   }
// }


// 35.2 logical Operater
// import React, { Component } from 'react'

// export default class User extends Component {
//   render() {
//     return <h3>Prime Member</h3>;
//   }
// }


// 35.3 if else Statement - user family code
// import React, { Component } from 'react';

// export default class User extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <h1>Welcome {this.props.name}</h1>
//             <button onClick={this.props.clickData}>Logout</button>
//         </React.Fragment>
//     )
//   }
// }



// 35.4 inline if-else with condition operaters
// import React, { Component } from 'react';

// export default class User extends Component {
//   render() {
//     return (
//         <React.Fragment>
//             <h1>Welcome {this.props.name}</h1>
//             <button onClick={this.props.clickData}>Logout</button>
//         </React.Fragment>
//     )
//   }
// }










// 37.2 keys - key atributes props ke duvra pass hoga yha nhi
import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <li>{this.props.value}</li>
  }
}


