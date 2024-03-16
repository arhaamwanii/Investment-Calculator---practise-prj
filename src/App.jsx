import React, {  useState } from 'react';
import Input from './components/Input.jsx';
import { calculateInvestmentResults } from './util/investment.js';

function App() {
  const [formData, setFormData] = useState({
    // initialInvestment: '',
    // expectedReturn: '',
    // annualInvestment: '',
    // duration: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData)

  return (
    <>
      <div id='user-input'>
        <div className='input-group'> 
          <Input recievedLabel={"initialInvestment"} sentInput={handleInputChange} />
          <Input recievedLabel={"annualInvestment"} sentInput={handleInputChange} />
        </div>
        <div className='input-group'>
          <Input recievedLabel={"expectedReturn"} sentInput={handleInputChange} />
          <Input recievedLabel={"duration"} sentInput={handleInputChange} />
        </div>
        </div>
        <calculateInvestmentResults/>
    </>
  )// we need to state the data it is time to use this input to make - to 
}

export default App
