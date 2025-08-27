import type { ReactElement, ReactNode } from 'react';
import { CustomIcon } from './CustomIcon';
import { CustomButton } from './CustomButton';
import { Loader } from './Loader';

interface IPaginationProps {
  currentPage: number;
  loading: boolean;
  next: () => void;
  pageCount: number;
  previous: () => void;
}

export const Pagination = ({
  currentPage,
  loading,
  next,
  pageCount,
  previous,
}: IPaginationProps): ReactElement => {
  const renderPagination = (): ReactNode => {
    if (loading) return <Loader small />;

    return (
      <p>
        {currentPage} / {pageCount}
      </p>
    );
  };

  return (
    <section className="pagination">
      <CustomButton disabled={currentPage === 1 ? true : undefined} onClick={previous}>
        <CustomIcon icon="arrow_circle_left" large />
      </CustomButton>
      {renderPagination()}
      <CustomButton disabled={currentPage === pageCount ? true : undefined} onClick={next}>
        <CustomIcon icon="arrow_circle_right" large />
      </CustomButton>
    </section>
  );
};
