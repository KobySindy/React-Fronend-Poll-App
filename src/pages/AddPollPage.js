import { Container, Grid, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { newPoll } from "../helpers/helpers";

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
      <form style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <label> What is your poll?</label>
        <input
          type='text'
          name='title'
          placeholder='Title'
          onChange={handleTitleChange}
        />
        <input
          type='text'
          name='0'
          placeholder='Option #1'
          onChange={handleOptionChange}
        />
        <input
          type='text'
          name='1'
          placeholder='Option #2'
          onChange={handleOptionChange}
        />
        <input
          type='text'
          name='2'
          placeholder='Option #3'
          onChange={handleOptionChange}
        />

        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Container>
  );
}

export default AddPollPage;
