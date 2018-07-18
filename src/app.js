//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import FriendCard from "./components/friendCard";
import Footer from "./components/footer";
import transf from "./transformer.json";
import "./app.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    transf,
    clickedTransf: [],
    score: 0
  };

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentTransf = event.target.alt;
    const TransfAlreadyClicked =
      this.state.clickedTransf.indexOf(currentTransf) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (TransfAlreadyClicked) {
      this.setState({
        transf: this.state.transf.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedTransf: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          Transf: this.state.transf.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedTransf: this.state.clickedTransf.concat(
            currentTransf
          ),
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              fish: this.state.transf.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedTransf: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.transf.map(transf => (
            <FriendCard
              imageClick={this.imageClick}
              id={transf.id}
              key={transf.id}
              image={transf.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

