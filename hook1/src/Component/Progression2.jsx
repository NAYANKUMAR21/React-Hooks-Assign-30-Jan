import { useState } from 'react';

function State2() {
  const [age, setAge] = useState(19);
  const [siblings, setSiblings] = useState(1); //2

  const handleClickAge = () => {
    setAge(age + 1);
  };
  const handleClickSibling = () => {
    setSiblings(siblings + 1);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My age is {age}</h1>

      <h1>My siblings: {siblings}</h1>

      <button onClick={handleClickAge}>Get older</button>

      <button onClick={handleClickSibling}>Get More Sibling</button>
    </div>
  );
}
export default State1;
