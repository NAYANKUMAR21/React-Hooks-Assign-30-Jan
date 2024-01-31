import { useState } from 'react';

function State3(props) {
  const [data, setData] = useState({
    age: 20,
    siblings: 1,
  });

  const handleClick = (keyName) => {
    setData({ ...data, [keyName]: data[keyName] + 1 });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My age is : {data.age} </h1>
      <h1>My siblings:{data.siblings} </h1>

      <button onClick={() => handleClick('age')}>Get age</button>

      <button onClick={() => handleClick('siblings')}>Get Siblings</button>
    </div>
  );
}
export default State3;

// let arr = [1, 2, 3];
// let xyz = [...arr, 4];

// let obj = {
//   num1: 20,
// };

// let newOj = {
//   ...obj,
//   num2: 30,
// };

// let age = 20;
// age = 21;
