import React from 'react';
import AcceptanceLetterText from './AcceptanceLetterText';
import RejectionLetterText from './RejectionLetterText';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Hint: Use this to keep track of whether the user has checked/unchecked the box
      checked: false


    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  };

  handleCheckboxChange(event) {
    // Write code to update the letter state here!
    // Hint: Where and how are you going to use this function?
    if (this.state.checked === false) {
      console.log(`Check`);
      this.setState({checked: true})
    } else {
      console.log(`Uncheck`)
      this.setState({checked: false})
    }

  }

  render() {
    let letter = null;

    if (this.state.checked === false) {
      letter = <AcceptanceLetterText />
    } else {
      letter = <RejectionLetterText />
    }

    return (
      <div>
        <div className="letter-body">
          <div className="small-12 small-centered text-center columns">
            <form onChange={this.handleCheckboxChange} >
              <input type="checkbox" />
              <label>
                <h5>Rejected?</h5>
              </label>
            </form>
        </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg/2000px-Hogwarts_coat_of_arms_colored_with_shading.svg.png" id="hogwarts-logo"/>
          <h1>HOGWARTS SCHOOL OF WITCHCRAFT AND WIZARDRY</h1>
          <br />
          <h3 id="headmaster-name">Headmaster: Albus Dumbledore</h3>
          <p id="merlin-order">
            (Order of Merlin, First Class, Grand Sorc., Chf. Warlock, Supreme Mugwump, International Confed. of Wizards)
          </p>
          <br />
          <p>Dear Addressee,</p>
          <div>
            {letter}
            // You'll need to change this to show either the AcceptanceLetterText or RejectionLetterText when the user toggles the checkbox!
          </div>
          <br />
          <p>Yours sincerely,</p>
          <h3>Minerva McGonagall</h3>
          <h3>Deputy Headmistress</h3>
        </div>
      </div>
    );
  };
};

export default App;
