import React from 'react';
import GameService from '../services/GameService';
import './GameComponent.scss';

class GameSmallComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games:[]
        }
    }

    componentDidMount() {
        GameService.getSmallLoad().then((response) => {
            this.setState({ games: response.data })
        });
    }

    render() {
        return (
          <div className="main-load container">
          <h1 className = "text-center"> Small List</h1>
          <table className = "table table-striped">
              <thead>
                  <tr>
                      <td> Game Title</td>
                      <td> Game Description</td>
                      <td> Game Year</td>
                      <td> Game Category</td>
                      <td> Game Country</td>
                      <td> Game Studio</td>
                      <td> Game Poster</td>
                  </tr>

              </thead>
              <tbody>
                  {
                      this.state.games.map(
                          game => 
                          <tr key = {game.title}>
                               <td> {game.title}</td>
                               <td> {game.description}</td>   
                               <td> {game.year}</td>   
                               <td> {game.category}</td>
                               <td> {game.country}</td>
                               <td> {game.studio}</td>
                               <td> <img src={game.poster} alt="game poster"></img></td>
                          </tr>
                      )
                  }

              </tbody>
          </table>

      </div>
        )
    }

}

export default GameSmallComponent