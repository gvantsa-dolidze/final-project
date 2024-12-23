import Grid from "../elements/Grid";
import Pagination from "../elements/Pagination";


interface Props {
  pageOfProducts: any[],
  totalPages: number
}

const GridContainer = ({pageOfProducts, totalPages}: Props) => {
  return (
    <div>
      <Grid data={pageOfProducts}/>
      <Pagination total={totalPages} current={1} />
    </div>
  );
};

export default GridContainer;
