import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import Celcius from './Celcius';
import Fahrenheit from './Fahrenheit';
import Kelvin from './Kelvin';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
        defaultCelcius: 0,
        fahrenheitC: 32,
        kelvinC: 273.15,
    }
}
  render() {
    let DataConverter = () => {
      this.setState({
          defaultCelcius: this.state.defaultCelcius + 1,
          fahrenheitC: this.state.defaultCelcius * 1.8 + 32,
          kelvinC: this.state.defaultCelcius + 273.15,
      })
  }
    return (
      <div className="App">
        <div>
          <Card color="warning">
            <CardBody>
              <CardTitle tag="h1">Hava Nasıl?</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h2">
                Şu anki sıcaklık: {this.state.defaultCelcius} derece
              </CardSubtitle>
              <CardText>
                Aşağıda farklı sıcaklık birimlerini görebilirsiniz.
              </CardText>
              <Button onClick={() => DataConverter()}>Sıcaklığı Artır</Button>
            </CardBody>
          </Card>

          <ListGroup>
            <ListGroupItem color="info"><Celcius CelciusValue={this.state.defaultCelcius} /></ListGroupItem>
            <ListGroupItem color="warning"><Fahrenheit FahrenheitValue={this.state.fahrenheitC} /></ListGroupItem>
            <ListGroupItem color="danger"><Kelvin KelvinValue={this.state.kelvinC} /></ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default App;
