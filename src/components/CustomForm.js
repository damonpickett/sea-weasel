import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  console.log(isValid);

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
      <div className="mc__field-container">
        <InputField
          label=""
          onChangeHandler={setEmail}
          type="email"
          value={email}
          placeholder="Your email address"
          isRequired
          name="email"
        />
      </div>
      <InputField label="Notify me" type="submit" formValues={[email]} />

      {isValid === false && (
        <div className="notification-status">
          <p>Please enter your email address</p>
        </div>
      )}
      {status === "sending" && (
        <div className="notification-status">
          <p>Sending...</p>
        </div>
      )}
      {status === "error" && (
        <div className="notification-status">
          <p>Something went wrong, try again</p>
        </div>
      )}
      {status === "success" && (
        <div className="notification-status">
          <p>Nice, we'll be in touch</p>
        </div>
      )}
    </form>
  );
};

export default CustomForm;
