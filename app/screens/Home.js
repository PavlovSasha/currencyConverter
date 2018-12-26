import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '78.74';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('press base currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('press quote currency');
  };

  handleChangeValue = (value) => {
    console.log('value was chaged: ', value);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          keyboardType="numeric"
          defaultValue={TEMP_BASE_PRICE}
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          onChange={this.handleChangeValue}
        />
        <InputWithButton
          defaultValue={TEMP_QUOTE_PRICE}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
        />
      </Container>
    );
  }
}

export default Home;
