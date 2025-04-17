import { useState } from "react"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import "./style.css"


// creating constants for each page
const Page = {
    Step1: 1,
    Step2: 2,
    Step3: 3,
}

const FINAL_STEP = Page.Step3; 

function MultiStepForm({ onSubmit = () => {} , onCancel = () => {} }) {

  const [currentStep, setCurrentStep] = useState(Page.Step1);

  // state to store the input values of each step
  // const [step1Inputs, setStep1Inputs] = useState({firstName: "", email: ""})
  // const [step2Inputs, setStep2Inputs] = useState({Phone: "", City: ""})
  // const [step3Inputs, setStep3Inputs] = useState({salary: "", bank: ""})

  // using a single state object to store all the input values dynamically
  const [inputs, setInputs] = useState({
    step1:{
      firstName: "preet",
      email: ""
    },
    step2:{
      Phone: "",
      City: ""
    },
    step3:{
      salary: "",
      bank: ""
    }  
  })

  // conditional rendering of steps
  const Steps = {
    [Page.Step1]: Step1,
    [Page.Step2]: Step2,
    [Page.Step3]: Step3,
  }

  const Component = Steps[currentStep];

  // to change the text of the submit button based on the current step
  const submitButtonText = FINAL_STEP === currentStep ? "Save" : "Next";

  function handleNext() {
    if (currentStep === Page.Step1) {
      // do some logic
      setCurrentStep(Page.Step2);
    } else if (currentStep === Page.Step2) {
      // do some logic
      setCurrentStep(Page.Step3);
    } else {
      // do some logic
      console.log("Form submitted", inputs);
      onSubmit(inputs)
    }
  }

  function handleBack(){
    if(currentStep > Page.Step1){
      setCurrentStep(currentStep- 1)
    }
  }

  function handleInputChange({stepKey, value, inputKey}){
    const oldInputs = structuredClone(inputs);
    
    oldInputs[stepKey][inputKey] = value;

    setInputs(oldInputs)
  }

  

  const inputToSend = inputs[`step${currentStep}`]

  return (
    <div className="multi-step-form">

      {/* // show back button only if current step page is greater than 1  */}
      {currentStep > Page.Step1 && <button onClick={handleBack}>Back</button> }
        <form>
           <Component stepKey={`step${currentStep}`} onChange={handleInputChange}  inputs={inputToSend}   />

           <div>
              <button type="button" onClick={onCancel} className="">Cancel</button> 
              <button type="button" onClick={handleNext} className="success">{submitButtonText}</button> 
           </div> 

        </form>
    </div>
  )
}

export default MultiStepForm 