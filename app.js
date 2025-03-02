
// {<div id="parent">
//     <div id="child1">
        
//         <div id="child2">

//             <h1>helloo doing</h1>
//             <h2>how are you </h2>

//     </div>

// </div>

// </div> }




const heading=React.createElement("div",{id: "parent"},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"hello"),
        React.createElement("h2",{},"hi")]),
        React.createElement("div",{id: "child2"},[
            React.createElement("h1",{},"hello"),
            React.createElement("h2",{},"hi"),]),
    ]);

    console.log(heading);

    const root=ReactDOM.createRoot(document.getElementById("root"));

    root.render(heading);