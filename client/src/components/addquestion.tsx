import type React from "react";
import Form from "./form";
import Input from "./form/input";
import Button from "./form/submitButton";
import ChooseLabel from "./form/chooselabel";
import { useSearch } from "@tanstack/react-router";
import Modal from "./modal";

export default function AddQuestion() {
  const { addQuestion } = useSearch({ strict: false });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  if (addQuestion)
    return (
      <Modal>
        <Form submit={submit}>
          <h1 className="font-semibold text-lg">Add Question</h1>
          <Input name="text" placeholder="question..." />
          <Input name="answer" placeholder="answer..." />
          <ChooseLabel />
          <Button>Add</Button>
        </Form>
      </Modal>
    );
}
