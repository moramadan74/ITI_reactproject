import { Link } from "react-router-dom";
import './Login.css';
function Login() {
    return (<>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <div className="login-container">
      <h1 className="login-title">Login</h1>
        <form>
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
                    type="password"
                    id="exampleInputPassword"
                    name="Password"
                    className="form-control"
                />
            </div>
            <button
            type="submit"
            className="btn btn-primary"
            >
            Login
            </button>
        </form>

        <div>
        <br></br>
                <p>Don't have an account yet?{" "}
                    <Link className="btn btn-success btn-sm" to={"/join/signup"}>SignUp Here!</Link>
                </p>
        </div>
        </div>
    </>);
}

export default Login;