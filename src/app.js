// importss dependencies and fles
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbortron";
import FriendCard from "./components/friendCard";
import Footer from "./components/footer";
import transformer from "./transformer.json";
import "./app.css";

//set state to 0 or empty
class App extends Component {
  state = {
    transformer,
    clickedTransf: [],
    score: 0
  };

  //when you click on a card...the bot is taken out of the array
  imageClick = event => {
    const curentTransf = event.target.alt;
    const TranfClicked =
      this.state.clickedTransf.indexOf(currentTranfs) > -1;

    // if your click on a bot that has already been selected, the game is reset and cards reordered
    if (clickedTransf) {
      this.setState({
        transformer: this.state.transformer.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedTransf: [],
        score: 0
      });
      alert("You Lose. Play Again?");

      //if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState({
          transformer: this.state.transformer.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedTransf: this.state.clickedTransf.concat(
            currenttransf
          ),
          score: this.state.score + 1
        }
        // if you get all 12 bots correct you get a congrats message and the game resets
        () => {
          if (this.state.score === 12) {
            alert("Yay! you Win!");
            this.setState({
              transformer: this.state.transformer.sort(function (a, b) {
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

  //the order of components to be renderss: navbar, jumborton, friendCard, footer
  render() {
    return (
       <div>
      <
      Navbar score = {
        this.state.score
      }
      /> 
      <Jumbotron / >
      <div className = "wrapper" > {
        this.state.transformer.map(transformer => ( <
          FriendCard imageClick = {
            this.imageClick
          }
          id = {
            transformer.id
          }
          key = {
            transformer.id
          }
          image = {
            transformer.image
          }
          />
        ))
      } </div> <Footer / >
      </div>
    );
  }
}

export default App;