import { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('')
  const nameinput = useRef();

  // const inputChangeHandler = (e) =>{
  //   setEnteredName(e.target.value);
  // }

  const inputChangeHandler = () => {
    var name = nameinput.current.value;
    console.log(name);
  }

  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameinput} type='text' id='name' onChange={inputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
