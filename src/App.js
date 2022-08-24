import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    baralho: [],
    hasTrunfo: false,
  };

  mudarEstado = ({ target }) => {
    const { name, value } = target;
    const { cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valorMaximoSoma = 210;
    const valorMaximo = 90;
    const valorMinimo = 0;
    this.setState({
      [name]: value,
    }, () => {
      if (cardName !== ''
      && cardDescription !== '' && cardImage !== '' && cardRare !== ''
      && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= valorMaximoSoma)
      && Number(cardAttr1) >= valorMinimo && Number(cardAttr1) <= valorMaximo
      && cardAttr1 !== ''
      && (Number(cardAttr2) >= valorMinimo) && (Number(cardAttr2) <= valorMaximo)
      && cardAttr2 !== ''
      && Number(cardAttr3) >= valorMinimo && Number(cardAttr2) <= valorMaximo
      && cardAttr3 !== '') {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  salvarCartas = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, baralho } = this.state;
    const temp = [...baralho];
    temp.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.setState({ baralho: temp });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
    });
    if (cardTrunfo !== false) {
      this.setState({ hasTrunfo: true });
    }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.mudarEstado }
          onSaveButtonClick={ this.salvarCartas }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
