import { useState } from "react";
import "./App.css"

function App() {

const [weight,setWeight]= useState("");
const [height,setHeight]= useState("");
const [message,setMessage]= useState(0);
const [bmi,setbmi]= useState(0);



//logic

const calcbmi=(e)=>{
  e.preventDefault();

  if(weight==0 || height==0){
    alert("please enter a valid height and weight")
  }

  else{
    const bmi=(weight/(height*height)*703)
    setbmi(bmi.toFixed(1))
    


    if(bmi<25){
      setMessage("you are underweight")
    }
    else if(bmi<30 && bmi>=25){
      setMessage("You are a healthy weight")
    }
    else{
      setMessage("You are overweight")
    }
 
  }
}

const reload=()=>{
  window.location.reload()
}

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={calcbmi}>
          <div>
            <label htmlFor="">Weight(lbs)</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="enter weight value"
              value={weight}
              onChange={(e) =>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height(in)</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="enter weight value"
              value={height}
              onChange={(e) =>setHeight(e.target.value) }
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="submit">
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
