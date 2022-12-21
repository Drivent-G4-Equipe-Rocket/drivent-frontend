import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Input from '../Form/Input';
import { PaymentInputWrapper } from './PaymentInputWrapper';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
          <PaymentInputWrapper>
            <input
              type="tel"
              name="number"
              placeholder="Número do cartão"
              pattern="[\d| ]{16,22}"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </PaymentInputWrapper>

          <PaymentInputWrapper>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </PaymentInputWrapper>

          <PaymentInputWrapper>
            <input
              className="expiryDate"
              type="tel"
              name="expiry"
              placeholder="Válido até"
              pattern="\d\d/\d\d"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <input
              className="CVC"
              type="tel"
              name="cvc"
              placeholder="CVC"
              pattern="\d{3,4}"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </PaymentInputWrapper>
        </form>
      </div>
    );
  }
}
