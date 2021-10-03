import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class CreateUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            roll: '',
        }
    }

    onChangeName = (e) => {
        this.setState({ name: e.target.value });
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    onChangeRoll = (e) => {
        this.setState({ roll: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userObj =  {
            name:this.state.name,
            email:this.state.email,
            roll:this.state.roll
        }

        axios.post('http://localhost:4000/users/create-user', userObj).then(res => 
        console.log(res.data));

        // console.log('user scc created')
        // console.log(`Name : ${this.state.name}`)
        // console.log(`Name : ${this.state.email}`)
        // console.log(`Name : ${this.state.roll}`)

        this.setState({
            name:'',
            email:'',
            roll:'',
        })
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Create User</h1> 
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controld="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeName} />
                    </Form.Group>

                    <Form.Group controld="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />

                    </Form.Group>

                    <Form.Group controld="Roll">
                        <Form.Label>Roll No.</Form.Label>
                        <Form.Control type="text" value={this.state.roll} onChange={this.onChangeRoll} />
                    </Form.Group>

                    <Button className="mt-4" variant="success" size="md" block="block" type="submit" onClick={this.onSubmit}>Create User</Button>
                </Form>
            </div>
        )
    }
}
