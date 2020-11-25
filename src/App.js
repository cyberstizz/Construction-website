const css = require('./App.css');
const React = require('react');

class App extends React.Component{
  constructor(){
    super()
  };
  render(){


  return (
    <div className="app">
      <div id="header">
        <div id="namespace">Abusafe Construction</div>
        <div id="navbar">
          <ul id="navitems">
            <li>Home</li>
            <li>Services &#9660;</li>
            <li>About</li>
            <li>Get A Quote</li>
            <li>Call Us: 917-968-6755</li>
          </ul>
        </div>
      </div>
      <div id='images'> </div>
      <div id='bodytop'></div>
      <div id='bodymiddle'></div>
      <div id='bodybottom'></div>
      <div id='footertop'></div>
      <div id='footermiddle'></div>
      <div id='footerbottom'></div>


    </div>
   
  )};
}

export default App;
