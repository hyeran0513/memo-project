import React from 'react';
import MemoList from './MemoList';
import SideBarHeader from './SideBarHeader';
import SideBarFooter from './SideBarFooter';

export const SideBar = ({ memos, setSelectedMemoIndex, selectedMemoIndex }) => {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
      />
      <SideBarFooter />
    </div>
  );
};
