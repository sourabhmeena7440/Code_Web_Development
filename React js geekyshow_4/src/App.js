// 29.1 unmounting
// import React, { Component } from 'react'

// export default class App extends Component {
//     componentDidMount(){
//         console.log("App Mounted");
//     }
//     componentWillUnmount(){
//         console.log("App Unmounted ")
//     }
//   render() {
//     console.log("App Rendered");
//     return (
//         <h1>Hello App Component</h1>
//     )
//   }
// }




// 32.1 useSate Hooks  - Declaring State
// import React, { useState } from 'react';
// function App(){
//     const nameStateVariable = useState("Rahul");
//     // multiple use karne ke liye
//     const name = nameStateVariable[0];
//     const setName = nameStateVariable[1];
    
//     const handleClick = () =>{
//         // nameStateVariable[1]("Geekyshow");
//         setName("Geekyshow");
//     };
//     return (
//     <React.Fragment>
//     {/* <h1>{nameStateVariable[0]}</h1> */}

//     {/* multiple use ke liye */}
//     <h1>{name}</h1>

//     <button type='button' onClick={handleClick}>Change</button>
//     </React.Fragment>
//     );
// }

// export default App;


// // 32.2 useSate Hooks  - Declaring State - DeStructure

// import React, { useState } from 'react';
// function App(){
//     const [name, setName] = useState("Rahul");
//     const handleClick = () =>{
//         setName("Geekyshow");
//     };
//     return (
//     <React.Fragment>
//     <h1>{name}</h1>
//     <button type='button' onClick={handleClick}>Change</button>
//     </React.Fragment>
//     );
// }

// export default App;



// 32.3 useSate Hooks  - Declaring State - DeStructure - multiple use ke liye

// import React, { useState } from 'react';
// function App(){
//     const [name, setName] = useState("Rahul");
//     const [roll,setRoll] = useState(101);
//     const handleClick = () =>{
//         setName("Geekyshow");
//         setRoll(105);
//     };
//     return (
//     <React.Fragment>
//     <h1>Name: {name}</h1>
//     <h2>Roll: {roll}</h2>
//     <button type='button' onClick={handleClick}>Change</button>
//     </React.Fragment>
//     );
// }

// export default App;


// 33.1 UseEffect hooks
// import React, {useEffect, useSate} from 'react';
// function App(){
//     const [count,setCount] = useSate(0);
//     const [count1,setCount1] = useSate(50);

//     const handleIncrement = () =>{
//         setCount(count + 1);
//     };

//     const handleDecrement = () =>{
//         setCount(count - 1);
//     };

//     useEffect(() => {
//         console.log("Use Effect Called");   // every render coll hota hai yha nhi
//     }, [count]);
//     return(
//         <React.Fragment>
//             <h1>Count Up: {count}</h1>
//             <button type='button' onClick={handleIncrement}>Increment</button>

//             <h1>Count Down: {count1}</h1>
//             <button type='button' onClick={handleDecrement}>Increment</button>
//         </React.Fragment>
//     )
// }
// export default App;








// 34. 1 custom Hook
// import React from 'react';
// import useCustomCounter from './Custom';
// function App() {
//     const data = useCustomCounter();
//     const data1 = useCustomCounter();

//     return(
//         <React.Fragment>
//             <h1>Count up: {data.count}</h1>
//             <button type='button' onClick={data.handleIncrement}></button>

//             <h1>Count up: {data1.count}</h1>
//             <button type='button' onClick={data1.handleIncrement}></button>
//         </React.Fragment>
//     )
// }
// export default App;
