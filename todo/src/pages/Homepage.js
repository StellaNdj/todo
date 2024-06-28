import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

const Homepage = () => {

  return(
    <div className="homepage">
      <h1>Things to do:</h1>
      <AddTask/>
      <div className="task-list">
        <TaskList/>
      </div>
    </div>
  )
}

export default Homepage;
