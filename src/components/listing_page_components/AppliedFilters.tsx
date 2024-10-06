import Button from "../elements/Button";

const AppliedFilters = () => {
  return (
    <div className="space-y-3">
      <h3>Applied Filters</h3>
      <div className="space-x-2">
        <Button  label='Perfume' variant='secondary' destination='/'/>
        <Button  label='Size: M' variant='secondary' destination='/'/>
      </div>
    </div>
  );
};

export default AppliedFilters;
