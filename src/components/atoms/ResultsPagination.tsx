import { Pagination, PaginationItem } from '@mui/material';
import React from 'react';

const ResultsPagination = (props: {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  charactersTotalPage: number;
}): React.ReactElement => {
  const { currentPage, setCurrentPage, charactersTotalPage } = props;

  return (
    <Pagination
      page={currentPage || 1}
      count={charactersTotalPage}
      shape="rounded"
      renderItem={(item) => {
        return <PaginationItem {...item} />;
      }}
      onChange={(_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
      }}
    />
  );
};

export default ResultsPagination;
