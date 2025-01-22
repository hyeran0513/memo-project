import React from 'react';
import MemoItem from './MemoItem';

const MemoList = ({ memos, setSelectedMemoIndex, selectedMemoIndex }) => {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          onClick={() => {
            setSelectedMemoIndex(index);
          }}
          isSelected={index === selectedMemoIndex}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
};

export default MemoList;
