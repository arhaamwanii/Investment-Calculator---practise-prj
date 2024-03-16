import React, {  useState } from 'react';
import Input from './components/Input.jsx';

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
          <Input recievedLabel={"Initial Investment"} sentInput={handleInputChange} />
          <Input recievedLabel={"Expected Reuturn"} sentInput={handleInputChange} />
        </div>
        <div className='input-group'>
          <Input recievedLabel={"Annual Invesmtment"} sentInput={handleInputChange} />
          <Input recievedLabel={"Duration"} sentInput={handleInputChange} />
        </div>
        </div>
    </>
  )
}

export default App
