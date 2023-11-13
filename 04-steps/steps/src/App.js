import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  return <div>
    <Steps />
    <StepMessage step={1}>
      <p>Pass in content</p>
      </StepMessage>
      <p>😀</p>
      <StepMessage step={2}>
      <p>Read children prop</p>
      </StepMessage>
      <p>😀</p>
  </div>
}

function Steps() {
  // setStep is a setter function to update the state of step
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test] = useState({name: "Dennis"})

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
    // always use a callback function when you want to update state based on the current value of the state
      setStep((s) => s + 1);
    }
    // the following would mutate the variable (not good)
    // step = step + 1;

  }
  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
          <Button
            bgColor='#e7e7e7'
            textColor='#333'
            onClick={()=> alert(`Learn how to ${messages[step - 1]}`)}
          >
            Learn how
          </Button>
          </div>
          </StepMessage>
          <div className="buttons">
            <Button
              bgColor='#7950f2'
              textColor='#fff'
              onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button
              bgColor='#7950f2'
              textColor='#fff'
              onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }){
  return <div className="message">
  <h3>Step {step}:</h3> {messages[step - 1]}
  {children}
</div>
}

function Button({textColor, bgColor, onClick, children }){
  return (
          <button
            style={{ backgroundColor: bgColor, color: textColor }}
            onClick={onClick}
          >
            {children}
          </button>
  );
}


// prerefactored buttons

  {/* <
            button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              // just passing handlePrevious value. if you call it as a function (handlePrevious()), the code would run on refresh
              onClick={handlePrevious}
              // onClick={()=>alert("Previous")}
              // onMouseEnter={()=> alert("TEST")}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
              // onClick={()=>alert("Next")}
            >
              Next
            </button> */}
