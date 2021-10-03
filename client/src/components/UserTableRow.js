import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
export default class UserTableRow extends Component {

    deleteUser = () => {
        axios.delete('http://localhost:4000/users/user-delete/'+ this.props.obj._id)
        .then((res) =>{
            console.log('deleted scc')
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.roll}</td>
                <td>
                    <Link className="edit-link btn btn-primary " to={"/user-edit/"+this.props.obj._id}>Edit</Link>
                    <Button variant="danger" onClick={this.deleteUser}>Delete</Button>
                </td>
            </tr>
        )
    }
}
