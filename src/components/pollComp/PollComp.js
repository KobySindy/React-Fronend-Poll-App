import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { vote } from "../../helpers/helpers";

import "./pollComp.css";

function PollComp({ poll, onVote }) {
  const [selectedOption, setSelectedOption] = useState();
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    const selectedIndex = poll.options.findIndex(
      (item) => item.option === selectedValue
    );

    setSelectedOption(selectedIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      return;
    }
    const postVote = async () => {
      const updatedPoll = JSON.parse(JSON.stringify(poll));

      updatedPoll.options[selectedOption].votes++;

      const success = await vote(updatedPoll._id, selectedOption);
      if (success) {
        onVote(updatedPoll);
      }
    };

    postVote();
  };

  return (
    <form className='pollComp'>
      <FormLabel component='legend'> {poll.title}</FormLabel>
      <RowRadioButtonsGroup
        _id={poll.id}
        options={poll.options}
        handleChange={handleChange}
      />
      <Button type='submit' onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}

function RowRadioButtonsGroup({ options, _id, handleChange }) {
  return (
    <FormControl component='fieldset' onChange={handleChange}>
      <RadioGroup row aria-label='gender' name='row-radio-buttons-group'>
        {options.map((option, index) => {
          return (
            <FormControlLabel
              key={index}
              value={option.option}
              control={<Radio />}
              label={option.option + `:${option.votes}`}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default PollComp;
