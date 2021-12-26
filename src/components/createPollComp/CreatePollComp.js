import React from "react";
import { Container, Grid, TextField } from "@mui/material";
import "./createPollComp.css";

function CreatePollComp({
  handleTitleChange,
  handleSubmit,
  handleOptionChange,
}) {
  return (
    <Container style={{ display: "flex" }} className='create-poll-container'>
      <form className='createPollForm'>
        <h1>Create New Poll</h1>
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

        <button type='submit' className='create-btn' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </Container>
  );
}

export default CreatePollComp;
