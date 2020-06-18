// import React, { Component } from "react";

// export default class Component1 extends Component {
//     constructor(props) {
//         super();
    
//         this.state = {
//             sides:2
//         };
//       }
    
//     render(){
//         return(
//             <div>
//                 <div onClick={this.hiJeffFunction}>My state has {this.state.sides} sides</div>
//                 <button
//                     onClick={this.hiJeffFunction}
//                 >
//                     Click me
//                 </button>
//                 <button onClick={this.myNewFunction}>
//                     Reset
//                 </button>
//                 <button
//                     onClick={this.myDifferentFunction}
//                 >
//                     Shrink
//                 </button>
//             </div>
//         );
//     }
    
//     hiJeffFunction = () => {
//         let newSides = this.state.sides + 1;
//         this.state = {
//            sides:newSides
//         };
//         this.setState({
//             sides:newSides
//         });
//     }

//     myNewFunction = () => {
//         //this.state.sides = 2; //THIS WILL NOT WORK
//         this.setState({
//             sides:2
//         });
//     }

//     myDifferentFunction = () => {
//         let shrinkSides = this.state.sides - 1;
//         this.setState({
//             sides:shrinkSides
//         });
//     }

//     /*
//     Click =>
//         Calculate new sides
//         Put new sides number in the state
//         tell employee to draw again with new number
//     */
    
// }