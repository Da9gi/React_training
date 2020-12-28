import React from "react";
import { Form, Field } from "react-final-form";
import Style, {
  Title,
  ButtonReset,
  ButtonSubmit,
  Rotate,
  ShowValues,
} from "../styled-components/styled";
import moment, { utc } from "moment";
import Moment from "react-moment";

export default function ReactFinalForm() {
  const delay = (duration) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const onSubmit = async (values) => {
    await delay(1000);
    alert(JSON.stringify(values, 0, 2));
  };

  const required = (value) => (value ? undefined : "*");
  const now = moment().format("Do MMMM, YYYY N dddd hh:mm:ss A ZZ");

  return (
    <Style>
      <Title>React Final Form</Title>
      Date:
      <Rotate>
        &lt; <Moment format="Do MMMM YYYY" /> &gt;
      </Rotate>
      <Form
        onSubmit={onSubmit}
        //validate={(values) => {                      // Record-level Validation
        //     const errors = {};
        //     if (!values.firstName) {
        //         errors.firstName = "*";
        //     }
        //     if (!values.lastName) {
        //         errors.lastName = "*";
        //     }
        //     return errors;
        // }}
        initialValues={{ gender: "other", giftItem: false }}
        render={({ handleSubmit, form, pristine, submitting, values }) => (
          <div className="form">
            <Field
              name="firstName"
              validate={required} //Field- level Validation
            >
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <input placeholder="First Name" type="text" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last Name</label>
                  <input placeholder="Last Name" type="text" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div>
              <label>State</label>
              <Field name="state" component="select">
                <option>{"  "}</option>
                <option value="Haryana">Haryana</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Rajasthan">Rajasthan</option>
              </Field>
            </div>
            <div>
              <label>Gender</label>
              <div className="radio">
                <label for="male">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="male"
                  />
                  Male
                </label>
                <label for="female">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="female"
                  />
                  Female
                </label>
                <label for="other">
                  <Field
                    name="gender"
                    component="input"
                    type="radio"
                    value="other"
                  />
                  Other
                </label>
              </div>
            </div>
            <div>
              <label>Gift Item</label>
              <Field name="giftItem" component="input" type="checkbox" />
            </div>
            <div className="buttons">
              <ButtonSubmit
                type="submit"
                onClick={handleSubmit}
                disabled={submitting || pristine}
              >
                Submit
              </ButtonSubmit>
              <ButtonReset
                type="reset"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </ButtonReset>
            </div>
            <ShowValues>
              {now}
              <br />
              {JSON.stringify(values, 0, 2)}
            </ShowValues>
          </div>
        )}
      />
    </Style>
  );
}
