import React from 'react';
import MemoItem from '../MemoItem';
import './index.css';

const MemoList = ({
  memos,
  setSelectedMemoIndex,
  selectedMemoIndex,
  deleteMemo,
}) => {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          index={index}
          onClickItem={() => {
            setSelectedMemoIndex(index);
          }}
          onClickDelete={(e) => {
            deleteMemo(index);
            e.preventDefault();
            e.stopPropagation();
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
