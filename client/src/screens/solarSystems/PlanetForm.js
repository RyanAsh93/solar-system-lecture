import React from "react";
import Form from "../../components/form/Form";
import TextInput from "../../components/form/TextInput";
import SubmitButton from "../../components/form/SubmitButton";
import { useFormInput } from "../../customHooks/useFormInput";

const PlanetForm = ({
  createPlanet,
  id,
  name,
  size,
  inhabited,
  updatePlanet,
}) => {
  const nameInput = useFormInput(name ? name : "name");
  const sizeInput = useFormInput(size ? size : "", "size");
  const inhabitedInput = useFormInput(
    inhabited ? inhabited.toString() : "",
    "inhabited"
  );

  function handleSubmit() {
    if (id) {
      updatePlanet(
        {
          name: nameInput.value,
          size: parseInt(sizeInput.value),
          inhabited: inhabitedInput.value === "yes" ? true : false,
        },
        id
      );
    } else {
      createPlanet({
        name: nameInput.value,
        size: parseInt(sizeInput.value),
        inhabited: inhabitedInput.value === "yes" ? true : false,
      });
    }
  }
  return (
    <Form onSubmit={handleSubmit} header={id ? "Edit Planet" : "New Planet"}>
      <TextInput label="planet name" useFormInput={nameInput} />
      <TextInput label="planet size" useFormInput={sizeInput} />
      <TextInput label="inhabited" useFormInput={inhabitedInput} />
      <SubmitButton />
    </Form>
  );
};

export default PlanetForm;