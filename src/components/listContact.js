import React from 'react'
import { Link } from 'react-router-dom';


 class ListContact extends React.Component {


     render() {
         const items = this.props.items
         const contactDelete = this.props.contactDelete
         const contactEdit = this.props.contactEdit

         return (
        <div className="list-ui">
        <div className="add-ui">
        <h5 className="add-h5">Add </h5> 
        <Link to="/create"
        className="add-contact">
        </Link>
        </div>

        {items.map((item) => (
        <ul key={item.key} className="contact-ui">
        <div className="btn-ui">
        <button onClick={() => {contactDelete(item.key)}} className="contact-remove"/>
        <Link to="/create">
        <button onClick={() => {contactEdit(item)}} className="contact-edit" />
        </Link>
        
        </div>
        <div className="list-p">
        <p><span className="name">Name:</span>{item.name}</p>
        <p><span className="name">Age:</span>{item.age}</p>
        </div>
        </ul> )
        )}
        <span>.</span>
        </div>
        )
    }
}


export default ListContact