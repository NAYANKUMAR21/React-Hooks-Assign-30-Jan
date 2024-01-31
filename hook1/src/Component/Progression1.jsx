import { useState } from 'react';

function State1(props) {
  const [age, setAge] = useState(19);

  const handleClickAge = () => {
    setAge(age + 1);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My age is {age}</h1>

      <button onClick={handleClickAge}>Get older</button>
    </div>
  );
}
export default State1;
