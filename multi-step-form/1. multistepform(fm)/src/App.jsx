import { useState } from "react";
import "./App.css";
import MultiStepForm from "./multi-step-form";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cancel, setCancel] = useState(false);

  function onSubmit(data) {
    setFormSubmitted(true);
  }

  function onCancel(data) {
    setCancel(true);
  }

  return (
    <>
      {formSubmitted && <h1>Form Submitted</h1>}
      {!formSubmitted && (
        <MultiStepForm onCancel={onCancel} onSubmit={onSubmit} />
      )}
       {cancel && <h1> User cancelel the form submission</h1>}
    </>
  );
}

export default App;
