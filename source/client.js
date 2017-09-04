import React from "react"
import ReactDOM from "react-dom"

function hi(from="Yo"){
    console.log(`hello from ${from}`);
}

hi();

ReactDOM.render(<div>Hello</div>, document.getElementById("pageTop"));
    