import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class UserEdit extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            roll: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/users/user-edit/'+ this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    roll: res.data.roll,
                })
            })
            .catch(error => {
                console.error(error)
            })
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

        axios.put('http://localhost:4000/users/user-update/'+ this.props.match.params.id, 
        userObj).then(res => {
            console.log(res.data);
            console.log('Update scc');
        }).catch((error) => {
            console.log(error)
        });

        // redirect to user list
        this.props.history.push('/user-list')
    }

    render() {
        return (
            <div className="form-wrapper mt-5">
                <h1>Update User</h1> 
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

                    <Button className="mt-4" variant="success" size="md" block="block" type="submit" onClick={this.onSubmit}>Update User</Button>
                </Form>
            </div>
        )
    }
}
