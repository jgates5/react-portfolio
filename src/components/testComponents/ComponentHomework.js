// 1) Define our new class (as a component)
// 2) Define a constructor (set initial state)
// 3) Create 4 journal entries
// 4) Create a function to show all journal entries
// 5) Create a function to hide all journal entries
// 6) Create a function that will switch from show to hide and from hide to show
// 7) Render appropriate journal entries

// 7a) Create a button that when we click on it will show all journal entries
// 7b) Create a button that will hide all journal entries
// 7c) Create a button that will toggle all journal entries


// import React, { Component } from "react";


// export default class ComponentHomework extends Component {
//     constructor() {
//       super();
//         const JournalEntry1 = {Title:"John's Story",Body:"This is the story of a guy",Author:"Jeff"};
//         const JournalEntry2 = {Title:"Malcom's Story",Body:"Maclolm hit Jeff",Author:"Gary",File:"My File"};
//         const JournalEntry3 = {Title:"Josh's Story",Body:"This little piggy went to the store",Author:"PinkFloyd"};
//         const JournalEntry4 = {Title:"Jeff's Story",Body:"This is my favorite color",Author:"JohnDenver"};
//         const JournalEntries = [JournalEntry1,JournalEntry2,JournalEntry3,JournalEntry4];


//         this.state = {
//             journalStuff:JournalEntries,
//             showStuff:false
//         };
//     };


//     StuffShowsUp = () => {
//         //this.state.showStuff=false;
//         //set showStuff to true
//         //call render() again with new showStuff
//         this.setState({showStuff:true});

//     }

//     somethingElseWillHappen = () => {
//         this.setState({showStuff:false});
//     }

//     somethingWillNotHappen = () => {
//         //make showstuff NOT what show stuff is right now
//         //if showstuff is true, make it false
//         //if showstuff is false, make it true
//     }


//     render() {
//         if(this.state.showStuff == true){
//         return(
//             <div>
//                 <div>Title</div>
//                 <div>{this.state.journalStuff[0].Title}</div>
//                 <div>{this.state.journalStuff[0].Body}</div>
//                 <div>{this.state.journalStuff[0].Author}</div>

//                 <div>{this.state.journalStuff[1].Title}</div>
//                 <div>{this.state.journalStuff[1].Body}</div>
//                 <div>{this.state.journalStuff[1].Author}</div>

//                 <div>{this.state.journalStuff[2].Title}</div>
//                 <div>{this.state.journalStuff[2].Body}</div>
//                 <div>{this.state.journalStuff[2].Author}</div>

//                 <div>{this.state.journalStuff[3].Title}</div>
//                 <div>{this.state.journalStuff[3].Body}</div>
//                 <div>{this.state.journalStuff[3].Author}</div>

//                 <button onClick={this.StuffShowsUp}>Show Up</button>
//                 <button onClick={this.somethingElseWillHappen}>Go Away</button>
//                 <button onClick={this.somethingWillNotHappen}>Hi Kirby</button>
//             </div>
//         );
//         } else {
//             return(
//                 <div>
//                     <button onClick={this.StuffShowsUp}>Hi there</button>
//                     <button onClick={this.somethingElseWillHappen}>Go Away</button>
//                     <button onClick={this.somethingWillNotHappen}>Hi Kirby</button>
//                 </div>
//             );
//         }
//     }
// }