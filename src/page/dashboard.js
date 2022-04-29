import { Link } from "react-router-dom";

export default function Dashboard({}){
  return(
    <div>
      <nav>
        <ul>
          <Link to="/test1">Test 1</Link>
          <Link to="/test2">Test 2</Link>
          <Link to="/test3">Test 3</Link>
        </ul>
      </nav>
      <h1>Le dashboard</h1>
    </div>
  )
}
