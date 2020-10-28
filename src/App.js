import React from 'react';
import axios from 'axios';
import './App.css';
import QuoteCard from './components/QuoteCard';


const quoteapi = [
  {
  "quote": "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
  "character": "Marge Simpson",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  "characterDirection": "Right"
  }
 ]



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quoteapi
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data => {
      this.setState({
        quote: data,
      });
    });
  }

  render() { 
  return (
    <div className="App">
      <QuoteCard  quote={this.state.quote}/>
      <button onClick={this.getQuote}>Change the quote</button>
    </div>
  );
}
}

export default App;
