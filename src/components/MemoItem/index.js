import React from 'react';
import './index.css';

const MemoItem = ({ children, onClickItem, onClickDelete, isSelected }) => {
  return (
    <div
      className={'MemoItem' + (isSelected ? ' selected' : '')}
      onClick={onClickItem}
    >
      {children}
      <button className="MemoItem__delete-button" onClick={onClickDelete}>
        X
      </button>
    </div>
  );
};

export default MemoItem;
