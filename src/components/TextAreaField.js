function TextAreaField({ label, name, value, onChange }) {
  return (
    <label>
      {label}:
      <textarea name={name} value={value} onChange={onChange} />
    </label>
  );
}

export default TextAreaField;
