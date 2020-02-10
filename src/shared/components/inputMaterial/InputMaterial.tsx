import React from "react";
import "./InputMaterial.scss";

interface Props {
  label: string;
  type: "text" | "password";
}

export const InputMaterial: React.FC<Props> = ({ label, type }) => (
  <section id="ibring-input-material" className="inputMaterial">
    <div className="inputMaterial__group">
      <input
        type={type}
        className="inputMaterial__group__inputField"
        required
      />
      <span className="inputMaterial__group__highlight" />
      <span className="inputMaterial__group__bar" />
      <label className="inputMaterial__group__label">{label}</label>
    </div>
  </section>
);
