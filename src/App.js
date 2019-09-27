import React,{Component} from 'react';
import News from './components/News';
import Navbar from './components/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
class App extends Component{
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <News />
    </div>
    </BrowserRouter>
  );
}
}

export default App;
