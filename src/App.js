import { useState } from 'react';
import './App.css';
import MemoContainer from './components/MemoContainer';
import { SideBar } from './components/SideBar';

function App() {
  const [memos, setMemos] = useState([
    {
      title: 'Memo1',
      content: 'This is memo 1',
      createdAt: 1737504816519,
      updatedAt: 1737504816519,
    },
    {
      title: 'Memo2',
      content: 'This is memo 2',
      createdAt: 1737504816519,
      updatedAt: 1737504816519,
    },
  ]);

  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const setMemo = (newMemo) => {
    const newMemos = [...memos];

    newMemos[selectedMemoIndex] = newMemo;

    setMemos(newMemos);
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <MemoContainer memo={memos[selectedMemoIndex]} setMemo={setMemo} />
    </div>
  );
}

export default App;
