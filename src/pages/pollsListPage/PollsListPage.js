import { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import React from "react";
import PollComp from "../../components/pollComp/PollComp";
import { getData } from "../../helpers/helpers";

import "./pollsListPage.css";

function PollsListPage() {
  const [pollsState, setPollsState] = useState({
    data: [],
    complete: false,
    page: 1,
  });

  const onVote = (updatedPoll) => {
    const pollsShallowCopy = [...pollsState.data];
    const updatedPollIndex = pollsShallowCopy.findIndex(
      (item) => item._id === updatedPoll._id
    );

    pollsShallowCopy[updatedPollIndex] = updatedPoll;
    console.log(pollsShallowCopy);
    setPollsState((prevState) => {
      return {
        ...prevState,
        data: pollsShallowCopy,
      };
    });
  };

  const getPageData = async (page) => {
    const data = await getData(page);
    setPollsState(data);
  };

  useEffect(() => {
    getPageData(1);
  }, []);

  return (
    <Container className='polls-list-container'>
      {pollsState.data.map((poll, index) => {
        return <PollComp key={index} poll={poll} onVote={onVote} />;
      })}
      <Button
        onClick={() => getPageData(pollsState.page - 1)}
        disabled={pollsState.page === 1}>
        prev
      </Button>
      <Button
        onClick={() => getPageData(pollsState.page + 1)}
        disabled={pollsState.complete}>
        next
      </Button>
    </Container>
  );
}

export default PollsListPage;
