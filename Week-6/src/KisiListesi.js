import React, { Component } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

class KisiListesi extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <div>
        {this.state.persons.map((person) => (
          <ListGroup>
            <ListGroupItem color="danger" key={person.id}>
              {person.username} : {person.name}
            </ListGroupItem>
          </ListGroup>
        ))}
      </div>
    );
  }
}
export default KisiListesi;
