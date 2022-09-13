import React from 'react'

const Login = () => {
    return (
        <div className="container margintop w-25">
            <div className="text-center my-5">
                <h1>Login</h1>
            </div>
            <form>
                <div class="form-outline mb-4">
                    <input type="email" id="email" required className="form-control" />
                    <label className="form-label" >Email address</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="password" required className="form-control" />
                    <label className="form-label">Password</label>
                </div>
                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form2Example34" />
                            <label className="form-check-label" > Remember me </label>
                        </div>
                    </div>
                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Sign in</button>
                <div className="text-center">
                    <p>Not a member? <a href="/registration">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login