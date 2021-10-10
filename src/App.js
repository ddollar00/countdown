
import './App.css';
import logo from './Ghostscript_Tiger.svg';
import tsu from './tsulogo.png';

var x = 0;

var tuy="muey caliente";

function reset() {
  x = 0;
  document.getElementById("disp").innerHTML = x;
}
var red;

function getVal() {

  x = document.getElementById('re').value;
  var y = document.getElementById("disp");
  y.innerHTML = x;

  red = setInterval(function countdown() {

    x--;
    if (x <= 0) {
      clearInterval(red);
      alert("Times up!!!!!");
    }
    document.getElementById("disp").innerHTML = x;


  }, 1000);

}
function dec() {
  clearInterval(red);

}
function App() {

  return (
    <>
      <div className="App">

        <header className="App-header">Countdown Timer</header>



        <input id="re" placeholder="Enter a num for count down" ></input>
        <button type="button" onClick={getVal} >Start</button>
        <button onClick={dec}>Pause</button>
        <button onClick={reset}>Clear</button>
        <p id="disp" className="bod">{x}</p>
        <body>Instructions</body>
        <body>to use this timer first enter a number to count down from and press the set count down time button. press the stop timer button to (hola my frieds)stop the timer.</body>
        <img src={logo} className="App-logo" alt="logo" />
        <body>
          <img src={tsu} className="App-logo2" alt="logo" />
        </body>
      </div>
      <div className="contact">
        <p>github: ddollar00 </p>   <p>linkedin: damiondollar</p>  <p>email: dollardamion@gmail.com</p>
      </div>
    </>
  );
}

export default App;
