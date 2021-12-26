import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PollsListPage from "../../pages/pollsListPage/PollsListPage";
import AddPollPage from "../../pages/addPollsPage/AddPollPage";

function SinglePageApp() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Polls</Link>
        </li>
        <li>
          <Link to='/add-poll'>Add New Poll</Link>
        </li>
      </ul>

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

// function Nav() {
//   return (
//     <Router>
//       <Link to='/add-poll'>Add Poll</Link>;
//     </Router>
//   );
// }

export default SinglePageApp;
