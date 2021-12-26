import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { newPoll } from "../../helpers/helpers";
import CreatePollComp from "../../components/createPollComp/CreatePollComp";

function AddPollPage() {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState([]);

  const handleTitleChange = (e) => {
    setPollTitle(e.target.value.trim());
  };

  const handleOptionChange = (e) => {
    const optionIndex = parseInt(e.target.name);
    const optionsShallowCopy = [...pollOptions];

    optionsShallowCopy[optionIndex] = e.target.value.trim();
    setPollOptions(optionsShallowCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = {
      title: pollTitle,
      options: pollOptions,
    };
    newPoll(poll);
  };

  return (
    <Container>
      <CreatePollComp
        handleTitleChange={handleTitleChange}
        handleSubmit={handleSubmit}
        handleOptionChange={handleOptionChange}
      />
    </Container>
  );
}

export default AddPollPage;
