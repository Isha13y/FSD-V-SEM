//const div = document.getElementById("root");
//const h1= document.createElement("h1");
//h1.innerText= "welcome to the FSD class!!";
//div.appendChild(h1);

const root = ReactDOM.createRoot(document.getElementById("root"));

const div = React.createElement(
    "div",
    {},
    React.createElement("span", {}, "Content-01"),
    React.createElement(
        "div",
        {},
        React.createElement("span", {}, "Content-02")
    )
);

root.render(div);
