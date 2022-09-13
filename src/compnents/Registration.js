import React from 'react'
import UserService from '../Serivices/UserService';



const Registration = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            password: data.get('password')
        }
        e.target.reset();
        console.log(actualData);
        UserService.createUser(actualData).then(res=>(
                alert("Registered Sucessfully")
                

        ));

    }

    return (
        <div >
            <div className="container margintop w-50 ">
            <div className="text-center my-5">
                <h1>Registration Form</h1>
            </div>
                <form onSubmit={handleSubmit}>

                    <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="firstname" name="firstname" required className="form-control" />
                                <label className="form-label" >First name</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="text" id="lastname" name="lastname" required className="form-control" />
                                <label className="form-label" >Last name</label>
                            </div>
                        </div>
                    </div>


                    <div className="form-outline mb-4">
                        <input type="email" id="email" name="email" required className="form-control" />
                        <label className="form-label" >Email address</label>
                    </div>


                    <div className="form-outline mb-4">
                        <input type="password" id="password" name="password" required className="form-control" />
                        <label className="form-label" >Password</label>
                    </div>

                    <div className='form-check  justify-content-center text-center mb-2'>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                        <label className="form-check-label d-inline">
                            Subscribe to our newsletter
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-5 w-100">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Registration