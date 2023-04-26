function RadioInput({ label, name, value, onChange }) {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange({ target: { name, value } });
  };

  return (
    <fieldset>
      <legend>{label}</legend>
      <label>
        <input
          type="radio"
          name={name}
          value="yes"
          checked={value === "yes"}
          onChange={handleChange}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name={name}
          value="no"
          checked={value === "no"}
          onChange={handleChange}
        />
        No
      </label>
    </fieldset>
  );
}

export default RadioInput;
