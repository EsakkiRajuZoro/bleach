import './App.css'
import shikai from './assets/1.jpeg'
import bankai from './assets/2.jpg'
import hollow from './assets/3.png'
import vastrolord from './assets/4.png'
import fullbring from './assets/6.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <div className="row">
          <div className="col-4">
            <img src={shikai} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-5">
            <img src={bankai} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 offset-md-10">
            <img src={hollow} />
          </div>
          <div className="col-md-4 offset-md-5">
            <img src={vastrolord} />
          </div>
        </div>
        <div className="row">
        <div className="col-4">
          <img src={fullbring} />
          </div>
        </div>
      </div>
  )
}

export default App
