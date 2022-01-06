import React from 'react';
import './load.scss';
import GameSmallComponent from '../components/GameSmallComponent';

class Smload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            componentRenderTime: 0,
            jsHeapSizeLimit: 0,
            totalJSHeapSize: 0,
            usedJSHeapSize: 0
        }
      }
    
      componentWillMount() {
        window.performance.mark('Smload');
      }
    
      componentDidMount() {
        this.setState({componentRenderTime: window.performance.now('Smload')});
        this.setState({jsHeapSizeLimit: window.performance.memory.jsHeapSizeLimit});
        this.setState({totalJSHeapSize: window.performance.memory.totalJSHeapSize});
        this.setState({usedJSHeapSize: window.performance.memory.usedJSHeapSize});
      }

    render () {
        return (
        <main className="load-main">
            <div className="container performance-measure text-center my-4 row">
                <h3 className="text-center">Performance measure:</h3>
                <p className="text-center">
                    Component render time: {this.state.componentRenderTime} ms
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
            <GameSmallComponent />
        </main>
        )
    }
}

export default Smload;