import { useState } from "react";
import Button from "../elements/Button";
import InputElement from "../elements/InputElement";

const ShippingAddress = () => {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(""); // Changed to string
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!street.trim() || !city.trim() || !state.trim() || !zip.trim() || !country.trim() || !email.trim() || !fullName.trim()) {
      setMessage("Please fill in all the fields.");
      return;
    }

    setMessage("Your shipping address has been successfully updated.");
  };

  return (
    <div className="">
      <form className="space-y-5 mt-5" onSubmit={handleSubmit}>
        {/* {message && <p className="text-blue-800">{message}</p>} */}
        <InputElement 
          text="Street Address" 
          type="text" 
          value={street}
          onChange={(e) => setStreet(e.target.value)} 
          placeholder="Enter your address" 
          required 
        />
        <div className="grid gap-x-6 gap-y-10 md:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
          <InputElement 
            text="City" 
            type="text" 
            value={city}
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter City" 
            required 
          />
          <InputElement 
            text="State" 
            type="text" 
            value={state}
            onChange={(e) => setState(e.target.value)} 
            placeholder="Enter State" 
            required 
          />
          <InputElement 
            text="Zip Code" 
            type="text"  // Changed type to text to handle string input
            value={zip}
            onChange={(e) => setZip(e.target.value)} 
            placeholder="Enter zip code" 
            required 
          />
          <InputElement 
            text="Country" 
            type="text" 
            value={country}
            onChange={(e) => setCountry(e.target.value)} 
            placeholder="Enter Country" 
            required 
          />
          <InputElement 
            text="Email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter Email" 
            required 
          />
          <InputElement 
            text="Full Name" 
            type="text" 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} 
            placeholder="Enter your full Name" 
            required 
          />
        </div>
        <div className="flex">
          <Button label="Save Changes" type="submit" />
        </div>
        {message && <p className="text-blue-800">{message}</p>}

      </form>
    </div>
  );
};

export default ShippingAddress;
