import React from "react";
import "./Input.scss";

interface Props {
  label: string;
  type: "text" | "password" | "email" | "date" | "file" | "tel";
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type,
  placeholder,
  className
}) => (
  <section id="ibring-input" className={`${className} input`}>
    <div className="form-group">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input
        className="form-control form-control-lg input__field"
        type={type}
        placeholder={placeholder}
      />
    </div>
  </section>
);
