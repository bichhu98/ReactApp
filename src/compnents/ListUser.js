import React, { Component } from 'react'
import UserService from '../Serivices/UserService'



class ListUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }



    }



    componentDidMount() {
        UserService.getAll().then((res) => (
            this.setState({ users: res.data })
        ));

    }


    render() {
        return (
            <div className='container'>
                <div className=' margintop'>
                    <h2 className='text-center'>Users List</h2>
                    <table className='table table-striped table-hover'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>{user.email}</td>
                                            
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>    

            </div >
        )
    }
}

export default ListUser;
