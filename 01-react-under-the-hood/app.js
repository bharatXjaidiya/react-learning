function App(){
    let h1  = React.createElement("h1",null,"This is the first heading of the page");
    let h2 = React.createElement("p",null,"this is the paragraph");

    return React.createElement("div",{className:"app"},[h1,h2]);
}

export default App;