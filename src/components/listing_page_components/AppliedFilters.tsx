import Button from "../elements/Button";

const AppliedFilters = () => {
  return (
    <div className="space-y-3  hidden md:block">
      <h3>Applied Filters</h3>
      <div className="space-x-2 flex">
        <Button  label='Perfume' variant='secondary' img='/img/icons/x.png' reverse />
        <Button  label='Size: M' variant='secondary' img='/img/icons/x.png' reverse />
      </div>
    </div>
  );
};

export default AppliedFilters;
