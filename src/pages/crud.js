import React from 'react';
import './crud.scss';
import GameService from '../services/GameService';
import Perf from 'react-addons-perf';

class Crud extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        gameToAdd: {
          title: "",
          category: "",
          studio: "",
          country: "",
          year: "",
          description: "",
          poster: ""
        },
        titleToRemove:"",
        gameToSpam: {
          category: "strategy",
          country: "poland",
          description: "created by spam button",
          poster: "https://www.gry-online.pl/i/h/17/375272624.jpg",
          studio: "cdProjectRed",
          year: "2021",
          title: ""
        },
        requestTime: 0,
        jsHeapSizeLimit: 0,
        totalJSHeapSize: 0,
        usedJSHeapSize: 0
    }
  }

  componentWillMount() {
    window.performance.mark('Crud');
  }

  componentDidMount() {
    this.setState({requestTime: window.performance.now('Crud')});
    this.setState({jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit});
    this.setState({totalJSHeapSize: window.performance.memory.totalJSHeapSize});
    this.setState({usedJSHeapSize: window.performance.memory.usedJSHeapSize});
}

    addGame = event => {
      Perf.start()
      GameService.addGame(this.state.gameToAdd);
      Perf.stop();
      this.setState({requestTime: Perf.getInclusive()[0].inclusiveRenderDuration})
    }
    
    removeGame = event => {
      GameService.removeGame(this.state.titleToRemove);
    }
    
    add100games = event => {
      var randomWords = require('random-words');
      let title = randomWords();
      let oldTitle = title;
      for(let i=0; i<100; i++) {
        title = title + i;
        GameService.addManyGames(title);
        title = oldTitle;
      }
    }
    
    add1000games = event => {
      var randomWords = require('random-words');
      let title = randomWords();
      let oldTitle = title;
      for(let i=0; i<1000; i++) {
        title = title + i;
        GameService.addManyGames(title);
        title = oldTitle;
      }
    } 

    render() {
      return(
        <main className="crud-main container text-center">
          <div className="container performance-measure text-center my-4 row">
            <h3 className="text-center">Performance measure:</h3>
            <p className="text-center">
                Component load time: {this.state.requestTime} ms
            </p>
            <p className="text-center">
                The maximum size of the heap: {this.state.jsHeapSizeLimit} bytes
            </p>
            <p className="text-center">
                The total allocated heap size: {this.state.totalJSHeapSize} bytes
            </p>
            <p className="text-center">
                The currently active segment of JS heap: {this.state.usedJSHeapSize} bytes
            </p>
        </div>
        <div className="grid">
          <form className="container" name="createForm" onSubmit={this.addGame}>
            <h2 className="form-label">Create Game</h2>
            <div className="row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="title">Title:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: e.target.value,
                    category: this.state.gameToAdd.category,
                    studio: this.state.gameToAdd.studio,
                    country: this.state.gameToAdd.country,
                    year: this.state.gameToAdd.year,
                    description: this.state.gameToAdd.description,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.title} 
                className="form__field form-control" 
                id="title" 
                type="text" 
                name="title" 
                required />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="category">Category:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: e.target.value,
                    studio: this.state.gameToAdd.studio,
                    country: this.state.gameToAdd.country,
                    year: this.state.gameToAdd.year,
                    description: this.state.gameToAdd.description,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.category} 
                className="form__field" id="category" type="text" name="category" />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="year">Year:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: this.state.gameToAdd.category,
                    studio: this.state.gameToAdd.studio,
                    country: this.state.gameToAdd.country,
                    year: e.target.value,
                    description: this.state.gameToAdd.description,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.year} 
                className="form__field" id="year" type="text" name="year" />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="country">Country:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: this.state.gameToAdd.category,
                    studio: this.state.gameToAdd.studio,
                    country: e.target.value,
                    year: this.state.gameToAdd.year,
                    description: this.state.gameToAdd.description,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.country} 
                className="form__field" id="country" type="text" name="country" />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="studio">Studio:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: this.state.gameToAdd.category,
                    studio: e.target.value,
                    country: this.state.gameToAdd.country,
                    year: this.state.gameToAdd.year,
                    description: this.state.gameToAdd.description,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.studio} 
                className="form__field" id="studio" type="text" name="studio" />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="description">Description:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: this.state.gameToAdd.category,
                    studio: this.state.gameToAdd.studio,
                    country: this.state.gameToAdd.country,
                    year: this.state.gameToAdd.year,
                    description: e.target.value,
                    poster: this.state.gameToAdd.poster
                  }
                })}
                value={this.state.gameToAdd.description} 
                className="form__field" id="description" type="text" name="description" />
              </div>
            </div>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="poster">Poster link:</label>
                <input onChange={e => this.setState({
                  gameToAdd: {
                    title: this.state.gameToAdd.title,
                    category: this.state.gameToAdd.category,
                    studio: this.state.gameToAdd.studio,
                    country: this.state.gameToAdd.country,
                    year: this.state.gameToAdd.year,
                    description: this.state.gameToAdd.description,
                    poster: e.target.value
                  }
                })}
                value={this.state.gameToAdd.poster} 
                className="form__field" id="poster" type="text" name="poster" />
              </div>
            </div>
            <div className="row button-row d-flex flex-row justify-content-center">
              <button className="button" type="submit" value="Submit">Add</button>
            </div>
            <br />
          </form>
          <div className="container d-flex flex-column spam-container">
            <h2 className="form-label">Requests test</h2>
            <div>
              <button className="button spam-button" onClick={this.add100games}>Send 100 requests</button>
              <button className="button spam-button" onClick={this.add1000games}>Send 1000 requests</button>
            </div>
          </div>
          <form className="container" name="removeForm" onSubmit={this.removeGame}>
            <h2 className="form-label">Remove Game</h2>
            <div className="row row d-flex flex-row justify-content-center">
              <div className="form__group field">
                <label className="form__label" htmlFor="titleToRemove">Title to remove:</label>
                <input onChange={e => this.setState({titleToRemove: e.target.value})}
                className="form__field form-control" id="titleToRemove" type="text" name="titleToRemove" value={this.state.titleToRemove} required />
              </div>
            </div>
            <div className="row button-row d-flex flex-row justify-content-center">
              <button className="button" type="submit">Remove</button>
            </div>
          </form>
        </div>
      </main>
      )
    }
}

export default Crud;