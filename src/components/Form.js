import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            Nome:
            <input id="nome" type="text" data-testid="name-input" />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input id="descricao" type="textarea" data-testid="description-input" />
          </label>
          <label htmlFor="atributo1">
            Atributo 1:
            <input id="atributo1" type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="atributo2">
            Atributo 2:
            <input id="atributo2" type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="atributo3">
            Atributo 3:
            <input id="atributo3" type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="imagem">
            Imagem:
            <input id="imagem" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="raridade">
            Raridade:
            <select id="raridade" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="superTrunfo">
            Super Trunfo?
            <input id="superTrunfo" type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
