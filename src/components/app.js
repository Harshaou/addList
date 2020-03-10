import React from 'react'
import { Route } from 'react-router-dom';
import CreateContact from './createContact'
import ListContact from './listContact'


class App extends React.Component{

    state ={
        items: [{name: "Colt steel", age: "18", key: '1'},{name: "Fathima", age: "29", key: '2'}],
        edit: []
     }
 
     addItem = (item) => {
         this.setState((state) => ({
         items: [...state.items, item]
         }))
         }

         deleteContact = (key) => {
             const filteredItem = this.state.items.filter((item) => 
             item.key !== key)
             this.setState({items: filteredItem})
         }


        contactEdit = (item) => {
           this.setState({edit: item})
           this.handleEdit(item)
        }

        handleEdit = (item) => {
            
        }


    render() {
        
        
        return (
        <div className="app">
        <Route exact path="/" render={() => (
        <ListContact items={this.state.items}
        contactDelete={this.deleteContact}
        contactEdit={this.contactEdit}
        />
        )} />
        
        <Route path="/create" render={({history}) => (
        <CreateContact edit={this.state.edit}
            addItem={(item) => {
            this.addItem(item)
            history.push('/')}}
         />
        ) } />


        </div>
        )
    }
}

export default App



        
        
        
      