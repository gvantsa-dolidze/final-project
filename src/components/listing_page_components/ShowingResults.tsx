interface ShowingResultsProps {
  className?: string;
}

const ShowingResults: React.FC<ShowingResultsProps> = ({ className = '' }) => {
  return (
    <div className={` ${className}`}>

      Showing 1-9 of 36 results.

    </div>
  )
}

export default ShowingResults