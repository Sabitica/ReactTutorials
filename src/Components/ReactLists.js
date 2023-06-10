import React, { Component } from 'react'
import User from './User'
import UniqueId from 'react-html-id';

class ReactLists extends Component {

    constructor() {
        super();
        UniqueId.enableUniqueIds(this)
        this.state = {
            users: [
                {id: this.nextUniqueId(), name: 'Harry', job: 'Auror', age: 30},
                {id: this.nextUniqueId(), name: 'Neville', job: 'Herbology Teacher', age: 30},
                {id: this.nextUniqueId(), name: 'Hermione', job: 'Minister For Magic', age: 30}
            ]
        }
    }



    deleteUser = (index, event) => {
        const users = Object.assign([], this.state.users);
        users.splice(index, 1);
        this.setState({users: users});
    }
    
    changeUserName = (id, event) => {
        // I'm following a tutorial here but this seems horribly inefficient code 
        const index = this.state.users.findIndex((user) => {
            return user.id === id;
        })
        const user = Object.assign({}, this.state.users[index]);
        user.name = event.target.value;
        const users = Object.assign([], this.state.users);
        users[index] = user;
        this.setState({
            users:users
        })
    }


  render() {
    return (
      <div className="App">
        <ul>
            {
                this.state.users.map((user, index) => {
                    return (<User 
                        key={user.id} 
                        job={user.job} 
                        changeEvent={this.changeUserName.bind(this, user.id)}
                        delEvent={this.deleteUser.bind(this, index)}>{user.name}</User>)
                })
            }
        </ul>
      </div>
    )
  }
}

export default ReactLists;
