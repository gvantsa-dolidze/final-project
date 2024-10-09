import Button from "../elements/Button";
import { Outlet } from "react-router";
// import Latest from "./Latest";
// import Featured from "./Featured";

const FeaturedLatest = () => {
  return (
    <div className="max-w-1116 m-auto py-16">
    <div className="text-center space-x-4">
      <Button label='Featured'  variant = "link" destination='featured'/>
      <Button label='Latest' variant = "link" destination='latest'/>
    </div>
   <Outlet />
    
  </div>
  )
}

export default FeaturedLatest