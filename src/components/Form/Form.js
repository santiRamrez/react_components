import React, { useState } from "react";

import "./Form.css";

const Form = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(form);
  };
  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={form.country}
          onChange={handleChange}
        />
        <h3>Compare</h3>
        <label htmlFor="population">Population</label>
        <input
          type="radio"
          id="population"
          name="compare"
          value="population"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="area">Area</label>
        <input
          type="radio"
          id="area"
          name="compare"
          value="area"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="currency">Currency</label>
        <input
          type="radio"
          id="currency"
          name="compare"
          value="currency"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
