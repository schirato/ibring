import React from "react";
import icoAlert from "../../../images/ico-red-alert.svg";
import "./Input.scss";

interface Props {
  label?: string;
  type: "text" | "password" | "email" | "date" | "file" | "tel";
  placeholder?: string;
  className?: string;
  classInputField?: string;
  maxLength?: number;
  showError?: boolean;
  errorMensage?: string;
}

export const Input: React.FC<Props> = ({
  label,
  type,
  placeholder,
  className,
  maxLength,
  classInputField,
  showError,
  errorMensage
}) => (
  <section id="ibring-input" className={`${className} input`}>
    <div className="form-group">
      <label htmlFor={label} className="input__label">
        {label}
      </label>
      <input
        className={`form-control form-control-lg input__field ${classInputField}`}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      {showError && (
        <p className="input__errorMensage">
          <img
            src={icoAlert}
            alt="ico alerta"
            className="input__errorMensage__ico"
          />
          <span className="input__errorMensage__texto">{errorMensage}</span>
        </p>
      )}
    </div>
  </section>
);
