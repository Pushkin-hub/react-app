import react from "react";
import logo from './logo.svg';
import './App.css';
import TestComponent from './containers/newTestComponent';
import AnotherOneComponent from './containers/anotherOneComponent';
import ClassComponent from './containers/classComponent';
import CurrentDate from './containers/currentDate';
import CurrentTime from './containers/currentTime';
import Writers from './containers/Writers';
import Form from "./containers/Form";

export default function App() {
  const someFunc = (value) => {
    alert (value)
  }

  const someFunc1 = (value) => {
    console.log (value)
  }

  return (
    <>
      
      <div className="App">
        {/* <TestComponent title={"Button 1"} color={'red'} onclick={someFunc}/>
        <TestComponent title={"Button 2"} color={'green'} onclick={someFunc1}/>
        <TestComponent title={"Button 3"} color={'blue'}/>
        <TestComponent title={"Button 4"} color={'black'}/>

        <ClassComponent startValue = {3} incValue = {5}/> */}
        <Form />
      </div>
      <div>
        <CurrentDate title = {"Hello World!!!"} />
      </div>
      
      <CurrentTime/>
    </>
  );
}


