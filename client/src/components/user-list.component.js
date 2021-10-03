import React, { Component } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import UserTableRow from './UserTableRow'
export default class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/users')
            .then(res => {
                this.setState({
                    users: res.data
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    DataTable = () => {
        return this.state.users.map((res, i) => {
            return <UserTableRow obj={res} key={i} />
        })
    }

    render() {
        return (
            <div className="table-wrapper">
                <h1 className="mt-3 mb-3">User List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll No.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}
