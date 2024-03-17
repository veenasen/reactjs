import {useState} from 'react';

const App1 = () => {
  const initialState = [
    {id: 1, country: 'Austria'},
    {id: 2, country: 'Belgium'},
    {id: 3, country: 'Canada'},
  ];

  const [data, setData] = useState(initialState);

  const updateState = () => {
    const newState = data.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === 2) {
        return {...obj, country: 'Denmark'};
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setData(newState);
  };

  return (
    <div>
      <button onClick={updateState}>Update state</button>

      {data.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>country: {obj.country}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default App1;