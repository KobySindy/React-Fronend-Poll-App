import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PollsListPage from "../../pages/pollsListPage/PollsListPage";
import AddPollPage from "../../pages/addPollsPage/AddPollPage";

function SinglePageApp() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <PollsListPage />
        </Route>
        <Route exact path='/add-poll'>
          <AddPollPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default SinglePageApp;
