import React from 'react';
import './changingdata.scss';
import GameService from '../services/GameService';
import Perf from 'react-addons-perf';

class ChangingDataComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games:[],
            filter:'',
            finalFilter:'',
            componentLoadTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        }
    }

    componentWillMount() {
        window.performance.mark('ChangingDataComponent');
      }

    componentDidMount() {
        GameService.getLargeLoad().then((response) => {
            this.setState({ games: response.data })
        });
        this.setState({componentLoadTime: window.performance.now('ChangingDataComponent')});
        this.setState({jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit});
        this.setState({totalJSHeapSize: window.performance.memory.totalJSHeapSize});
        this.setState({usedJSHeapSize: window.performance.memory.usedJSHeapSize});
    }

    changeFilter = event => {
        if(event.key == "Enter") {
            this.setState({finalFilter: this.state.filter});
        }
    }

    render() {
        return (
        <main className="main-changingdata">
            <div className="container performance-measure text-center my-4 row">
                <h3 className="text-center">Performance measure:</h3>
                <p className="text-center">
                    Component load time: {this.state.componentLoadTime} ms
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
            <div className="container text-center">
                <input className="form-control"
                       type="text"
                       placeholder="Search ..."
                       onChange={e => this.setState({filter: e.target.value})}
                       onKeyPress={this.changeFilter} 
                       value={this.state.filter}/>
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
                    {this.state.games.filter((game) =>{
                        if(this.state.finalFilter == '') {
                            return game;
                        }
                        else{
                            if(game.category.toLowerCase().includes(this.state.finalFilter.toLowerCase())){
                                return game;
                            }
                        }
                        }).map(
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
        </main>
        )
    }
}

export default ChangingDataComponent;