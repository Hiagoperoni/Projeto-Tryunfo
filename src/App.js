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
    this.setState({
      [name]: value,
    }, () => {
      this.handleButtonDisable();
    });
  };

  handleButtonDisable = () => {
    const { cardName, cardDescription,
      cardImage, cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valorMaximoSoma = 210;
    const valorMaximo = 90;
    const valorMinimo = 0;
    const validarStrings = cardName.length > 0 && cardDescription.length > 0
      && cardImage.length > 0;
    const somaDosAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const validarSoma = somaDosAttr <= valorMaximoSoma;
    const validarMaxMinAttr1 = Number(cardAttr1) >= valorMinimo
      && Number(cardAttr1) <= valorMaximo;
    const validarMaxMinAttr2 = Number(cardAttr2) >= valorMinimo
      && Number(cardAttr2) <= valorMaximo;
    const validarMaxMinAttr3 = Number(cardAttr3) >= valorMinimo
      && Number(cardAttr3) <= valorMaximo;
    const verificacaoTotal = validarStrings && validarSoma && validarMaxMinAttr1
      && validarMaxMinAttr2 && validarMaxMinAttr3;
    this.setState({
      isSaveButtonDisabled: !verificacaoTotal,
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
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, hasTrunfo,
      baralho } = this.state;
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
        <div className="todasAsCartas">
          <h1>Todas as Cartas:</h1>
          {
            baralho.map((carta) => (
              <div key={ carta.cardName } className="cartasSalvas">
                <Card
                  key={ carta.cardName }
                  cardName={ carta.cardName }
                  cardDescription={ carta.cardDescription }
                  cardAttr1={ carta.cardAttr1 }
                  cardAttr2={ carta.cardAttr2 }
                  cardAttr3={ carta.cardAttr3 }
                  cardImage={ carta.cardImage }
                  cardRare={ carta.cardRare }
                  cardTrunfo={ carta.cardTrunfo }
                />
                <button type="button">Excluir</button>
              </div>))
          }
        </div>
      </div>
    );
  }
}

export default App;
