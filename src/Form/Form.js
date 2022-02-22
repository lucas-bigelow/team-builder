import { useState } from 'react';

const initialFormVals = {
  name: '',
  email: '',
  role: ''
}

function Form(props) {
  const { addNewMember } = props;

  // we'll store name, email, and role in state at this level, and only create and push a new Member to 'App' when the user
  // hits submit.
  const [formVals, setFormVals] = useState(initialFormVals);

  const onChange = (evt) => {
    setFormVals({...formVals, [evt.target.name]: evt.target.value});
    console.log(formVals);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    addNewMember(formVals);
  }
  
  return (
    <form  onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        value={formVals.name}
        onChange={onChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={formVals.email}
        onChange={onChange}
        placeholder="Email"
      />
      <select name="role" onChange={onChange} value={formVals.role}>
        <option value="Frontend Engineer">Frontend Engineer</option>
        <option value="Backend Engineer">Backend Engineer</option>
        <option value="UI/UX">UI/UX</option>
        <option value="QA">QA</option>
      </select>
      <button type="submit">Add New Team Member</button>
    </form>
  )
}

export default Form;