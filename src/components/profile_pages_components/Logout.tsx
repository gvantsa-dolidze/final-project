import Button from "../elements/Button";

const Logout = () => {
  return (
    <div className="pl-10 pt-20">
      <div>
        <h3>Are you sure you want to log out?</h3>
        <div className="mt-10 space-x-5">
          <Button label="Yes, log out"  />
          <Button label="No, stay logged in"  />
        </div>
      </div>
    </div>
  );
};

export default Logout;
