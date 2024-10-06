import SortByBtn from "../elements/SortByBtn"


const ShowingResults = () => {
  return (
    <div className="flex justify-between">
        <div>
        Showing 1-9 of 36 results.
        </div>
        <SortByBtn />
    </div>
  )
}

export default ShowingResults