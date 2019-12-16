import React, { useState } from "react";

import { useFormik } from "formik";
import styled from "styled-components";

import axios from "axios";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "First Name Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.province) {
    errors.province = "Province is Required";
  } else if (values.province.length > 20) {
    errors.province = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = () => {
  const formUrl = process.env.GOOGLE_SHEET;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      province: "",
      interested: "",
      consideration: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      const post = async () => {
        const res = await axios({
          method: "get",
          url: `${formUrl}?name=${encodeURIComponent(
            values.name
          )}&email=${encodeURIComponent(
            values.email
          )}&province=${encodeURIComponent(
            values.province
          )}&interested=${encodeURIComponent(
            values.interested
          )}&consideration=${encodeURIComponent(values.consideration)}`
        });
        console.log(res);
        result(res.status);
      };
      post();
    }
  });
  let resultText;
  const result = num => {
    if (num === 200) {
      resultText = <p>yay</p>;
    } else {
      resultText = <p>Something is wrong</p>;
    }
  };

  return (
    <Container>
      <FormS onSubmit={formik.handleSubmit}>
        <label htmlFor="name">
          First Name
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </label>

        <label htmlFor="email">
          Email Address
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </label>

        <label htmlFor="province">
          Province / State
          <input
            id="province"
            name="province"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.province}
          />
        </label>

        <div className="label">What product are you interested in?</div>
        <label>
          <input
            type="checkbox"
            name="interested"
            value="prism"
            checked={formik.values.interested.includes("prism")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Prism
        </label>
        <label>
          <input
            type="checkbox"
            name="interested"
            value="enersense"
            checked={formik.values.interested.includes("enersense")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Enersense
        </label>
        <label>
          <input
            type="checkbox"
            name="interested"
            value="patio doors"
            checked={formik.values.interested.includes("patio doors")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Patio doors
        </label>
        <label>
          <input
            type="checkbox"
            name="interested"
            value="entry doors"
            checked={formik.values.interested.includes("entry doors")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Entry doors
        </label>

        <div className="label">
          What is a major consideration when purchasing windows and doors?
        </div>
        <label>
          <input
            type="checkbox"
            name="consideration"
            value="energy cost savings"
            checked={formik.values.consideration.includes(
              "energy cost savings"
            )}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Energy cost savings
        </label>
        <label>
          <input
            type="checkbox"
            name="consideration"
            value="the look"
            checked={formik.values.consideration.includes("the look")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          The look
        </label>
        <label>
          <input
            type="checkbox"
            name="consideration"
            value="price"
            checked={formik.values.consideration.includes("price")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Price
        </label>
        <label>
          <input
            type="checkbox"
            name="consideration"
            value="brand notoriety"
            checked={formik.values.consideration.includes("brand notoriety")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Brand Notoriety
        </label>

        <button type="submit">Submit</button>
      </FormS>
      {resultText}
    </Container>
  );
};

export default Form;

const Container = styled.div`
  display: grid;
  padding: 32px;
`;

const FormS = styled.form`
  display: grid;
  grid-gap: 24px;
`;
