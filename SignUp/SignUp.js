import { Link } from 'react-router-dom';
import './SignUp.css';
function SignUp() {
    return (<>
    <br></br>
       <br></br>
       <br></br>

    <div className="signup-container">
    <h1 className="signup-title">Sign-Up</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            name="userName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            name="userName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email 
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userEmail"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword"
            name="userPassword"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign-up
        </button>
      </form>

      <div>
        <br></br>
        <p>
          Already have an account? {" "}
          <Link className="btn btn-success btn-sm" to="/join/login">Login here!</Link>
        </p>
      </div>
      </div>
    </>);
}

export default SignUp;