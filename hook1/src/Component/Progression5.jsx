import { useContext, useEffect, useState } from 'react';
import { AppContext } from './ContextProvider';

let count = 0;
const Hookeffect1 = (props) => {
  const value = useContext(AppContext);
  console.log('Printing', value.Age, value.Sib);

  const [age, setAge] = useState(19);
  const [sibling, setSibling] = useState(3);

  //   if (age > 1) {
  //     alert('Somethign is changed ' + age);
  //   }

  useEffect(
    function () {
      if (age > 19) {
        alert('Something Change ' + age);
      }
    },
    [age]
  );

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>My Age is {age}</h1>
      <h3>My sibllings</h3>
      <button
        onClick={() => {
          setAge((age) => age + 1);
        }}
      >
        INC age
      </button>
      <button onClick={() => setSibling((sibling) => sibling + 1)}>
        Sib INC
      </button>
    </div>
  );
};

export default Hookeffect1;
