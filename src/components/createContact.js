import React from 'react'
import { Link } from 'react-router-dom';


class CreateContact extends React.Component {
    state = {
        name: '',
        age: '',
        key: ''
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            key:  Date.now()
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        }

    
    render() {
        console.log(this.props.edit)
        console.log("state: ",this.state.edit)
        
        return (
        <div>
        
        <Link className="close-create-contact" to="/" >Close</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">

        <div className="create-contact-details">
        
        <input className="input" type="text" value={this.state.name}
        onChange={this.handleChange} name="name"
        placeholder="Name" />
        
        
        
        <input className="input" type="text" value={this.state.age}
        onChange={this.handleChange} name="age"
        placeholder="Age"
        />
        <br></br>
        <button type="submit" value="Submit" >Submit</button>
        </div>
        
        </form>
        </div>
        )

    }
}

export default CreateContact