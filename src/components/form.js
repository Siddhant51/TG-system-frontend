import { useState } from "react";
import React from "react";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import RadioInput from "./RadioInput";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   await axios.post(`${BASE_URI}/picture`, {
  //       userId,
  //       profilePic,
  //     });
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      {/* Student Info */}
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Branch Name"
        name="branch_name"
        value={formData.branch_name}
        onChange={handleChange}
      />
      <InputField
        label="Roll No"
        name="rollno"
        value={formData.rollno}
        onChange={handleChange}
      />
      <InputField
        label="SPPU Seat No"
        name="seatno"
        value={formData.seatno}
        onChange={handleChange}
      />
      <InputField
        label="SPPU PRN No"
        name="prnno"
        value={formData.prnno}
        onChange={handleChange}
      />
      <InputField
        label="Blood Group"
        name="blood_grp"
        value={formData.blood_grp}
        onChange={handleChange}
      />
      <InputField
        type="date"
        label="Date of Birth"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <InputField
        type="tel"
        label="Contact No"
        name="s_phone"
        value={formData.s_phone}
        onChange={handleChange}
      />
      <InputField
        type="email"
        label="Email ID"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextAreaField
        label="Address"
        name="s_address"
        value={formData.s_address}
        onChange={handleChange}
      />
      <InputField
        type="number"
        label="Pincode"
        name="pincode"
        value={formData.pincode}
        onChange={handleChange}
      />
      <InputField
        label="Hobbies"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
      />

      {/* Parents Info */}
      <InputField
        label="Father's Name"
        name="f_name"
        value={formData.f_name}
        onChange={handleChange}
      />
      <InputField
        type="tel"
        label="Father's Phone"
        name="f_phone"
        value={formData.f_phone}
        onChange={handleChange}
      />
      <InputField
        label="Mother's Name"
        name="m_name"
        value={formData.m_name}
        onChange={handleChange}
      />
      <InputField
        type="tel"
        label="Mother's Phone"
        name="m_phone"
        value={formData.m_phone}
        onChange={handleChange}
      />
      <TextAreaField
        label="Parent Address"
        name="parent_address"
        value={formData.parent_address}
        onChange={handleChange}
      />
      <RadioInput
        label="Service?"
        name="hasInput"
        value={formData.hasInput}
        onChange={handleChange}
      />
      {formData.hasInput === "yes" && (
        <InputField
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      )}
      {formData.hasInput === "yes" && (
        <InputField
          label="Designation"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      )}
      {formData.hasInput === "yes" && (
        <InputField
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
