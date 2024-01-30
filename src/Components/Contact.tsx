import styled from "@emotion/styled";
import React from "react";

const Label = styled.label`
  margin: 20px 0px;
`;

const Button = styled.button`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-family: "Inter", sans-serif;
`;

const TextArea = Input.withComponent("textarea");

const Contact = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <section id="contact" style={{ display: "grid" }} ref={(e) => (e ? (refSections.current[3] = e) : e)}>
      <h3 style={{ textAlign: "center" }}>Contact me!</h3>

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" required placeholder="tom@gamil.com" />

      <Label htmlFor="message">Message</Label>
      <TextArea
        id="message"
        required
        placeholder="Hi, how are you today ?"
        rows={4}
      />
      <Button>Send</Button>
    </section>
  );
};

export default Contact;
