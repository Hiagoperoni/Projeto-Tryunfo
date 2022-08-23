import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
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
      && Number(cardAttr2) >= valorMinimo && Number(cardAttr2) <= valorMaximo
      && cardAttr2 !== ''
      && Number(cardAttr3) >= valorMinimo && Number(cardAttr2) <= valorMaximo
      && cardAttr3 !== '') {
        console.log('Entrou');
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.mudarEstado }
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
