import React from "react";
import icoAlert from "../../../images/ico-red-alert.svg";
import "./Textarea.scss";

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  classTextareaField?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
}

export const Textarea: React.FC<Props> = ({
  label,
  placeholder,
  className,
  maxLength,
  rows,
  cols,
  classTextareaField
}) => (
  <section id="ibring-textarea" className={`${className} textarea`}>
    <div className="form-group">
      <label htmlFor={label} className="textarea__label">
        {label}
      </label>
      <textarea
        className={`form-control form-control-lg textarea__field ${classTextareaField}`}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  </section>
);
