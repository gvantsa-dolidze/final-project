interface ShowingResultsProps {
  className?: string;
  totalItems: number;
  currentPage: number;
  pageSize: number;
}

const ShowingResults: React.FC<ShowingResultsProps> = ({ className = '', totalItems, currentPage, pageSize }) => {
  return (
    <div className={` ${className}`}>

      Showing {(currentPage-1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems} results.

    </div>
  )
}

export default ShowingResults