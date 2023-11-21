import styles from "./InputField.module.css";

const InputField = ({ value, onChange, placeholder, str, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      id={str}
      name={str}
      autoComplete={str}
      className={styles.inputField}
      required
    ></input>
  );
};

export default InputField;
