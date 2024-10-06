import Button from "../elements/Button";

const AppliedFilters = () => {
  return (
    <div className="space-y-3">
      <h3>Applied Filters</h3>
      <div className="space-x-2">
        <Button  label='Perfume' variant='secondary'/>
        <Button  label='Size: M' variant='secondary'/>
      </div>
    </div>
  );
};

export default AppliedFilters;
