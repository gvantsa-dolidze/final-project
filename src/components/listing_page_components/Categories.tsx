import CheckBtn from "../elements/CheckBtn";

const Categories = () => {
  return (
    <div className="flex flex-col text-start">
      <h3>Categories</h3>
      <div className="mt-5">
        <CheckBtn label="Perfume" id="perfume" />
        <CheckBtn label="Trousers" id="trousers" />
        <CheckBtn label="Shoe" id="shoe" />
        <CheckBtn label="Handbag" id="handbag" />
        <CheckBtn label="Hat" id="hat" />
        <CheckBtn label="Thermos" id="thermos" />
      </div>
    </div>
  );
};

export default Categories;
