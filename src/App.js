import React from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa';
import { atom, useRecoilState, useResetRecoilState, selector, useRecoilValue} from 'recoil';

const countAtom = atom({
  key: 'count-app',
  default: 10,
});

const fontSelector = selector({
  key: 'font-size-selector',
  get: ({ get }) => {
    const count = get(countAtom);
    const fontSize = count * 4;
    return fontSize;
  },
});

function App() {
  const [count, setCount] = useRecoilState(countAtom);
  const resetCount = useResetRecoilState(countAtom);
  const fontSize = useRecoilValue(fontSelector);

  function IncreaseCount() {
    setCount((count) => count + 1);
  }

  function DecreaseCount() {
    setCount((count) => count - 1);
  }

  return (
    <div>
      <div className="header">
        <h1>Recoil with React</h1>
      </div>

      <div className="container">
        <h2>The count is: {count}</h2>
        <h3>The font size is: {fontSize}</h3>
       <p style={{ fontSize: fontSize}}>1️⃣</p>

        <div className="button-container">
          <button onClick={IncreaseCount}>Increase Count</button>
          <button onClick={DecreaseCount}>Decrease Count</button>
          <button onClick={resetCount}>Reset Count</button>
        </div>
      </div>
      <div className="footer">
        <p>Made with ❤️ by Ankit Singh</p>
        <a href="https://github.com/RIOLOG/React_Recoil.git" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} style={{ color: 'white', marginLeft: '5px' }} />
        </a>
      </div>
    </div>
  );
}

export default App;
