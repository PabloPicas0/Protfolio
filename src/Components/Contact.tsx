import styled from "@emotion/styled";
import React from "react";

const Label = styled.label`
  margin: 20px 0px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid;
  border-radius: 5px;
  color: rgba(226, 232, 240, 0.7);
  cursor: pointer;
  justify-self: end;
  font-family: inherit;

  &:hover {
    color: aquamarine;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #d3d3d3;
  font-size: 1rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-family: "Inter", sans-serif;
`;

const TextArea = Input.withComponent("textarea");

const Contact = (props: { refSections: React.MutableRefObject<HTMLElement[]> }) => {
  const { refSections } = props;

  return (
    <section id="contact" style={{ display: "grid" }} ref={(e) => (e ? (refSections.current[3] = e) : e)}>
      <h2 style={{ textAlign: "center", letterSpacing: "0.05rem" }}>Contact me!</h2>

      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" required placeholder="tom@gamil.com" />

      <Label htmlFor="message">Message</Label>
      <TextArea id="message" required placeholder="Hi, how are you today ?" rows={4} />
      <Button>Send</Button>
    </section>
  );
};

export default Contact;
