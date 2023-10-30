import React, { useState } from "react";
import { Nav } from "../components/Nav";

export const Appointment = () => {
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState("");
  const [fees, setFees] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch(
        "https://tiny-blue-angler-kit.cyclic.app/doctor/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            imageURL,
            specialization,
            experience,
            location,
            date,
            slots,
            fees,
          }),
        }
      );
      let data = await res.json();
      console.log(data);
      alert("Doctor Added");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
   
<Nav/>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
       
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
       
        <input
          type="text"
          name=""
          id=""
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Enter Image URL"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
        <select
          name=""
          id=""
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        >
          <option value="">Enter Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          <option value="Psychiatrist">Psychiatrist</option>
        </select>
        
        <input
          type="number"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          name=""
          id=""
          placeholder="Enter Experience"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
       
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          name=""
          id=""
          placeholder="Location"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
       
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
        
        <input
          type="number"
          name=""
          value={slots}
          onChange={(e) => setSlots(e.target.value)}
          id=""
          placeholder="Enter Slots"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />
        
        <input
          type="number"
          name=""
          id=""
          value={fees}
          onChange={(e) => setFees(e.target.value)}
          placeholder="Enter Fees"
          style={{border:"5px double black", padding:"5px", borderRadius:"5px"}}
        />

        <input style={{border:"5px double black", padding:"5px", borderRadius:"5px"}} type="submit" name="" id="" />
      </form>
    </>
  );
};