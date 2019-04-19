import React, {Component} from 'react';
import Bar from './bar';
import './index.css'

class BarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
        }
        this.canvas = React.createRef();
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }
    drawBarChart = () => {
        const {data, height,width} = this.props;
        const {windowWidth} = this.state;
        const maxValue = data.reduce((a,b) => {
            return a.value > b.value ? a : b;
        }).value;
        const numberOfBars = data.length;
        console.log(window.innerWidth);
        const barSize = Math.min(width,windowWidth)/(2*numberOfBars);
        const barList = data.map((item) => {
            const barHeight = Math.round(height*item.value/maxValue);
            return (
                <Bar 
                    key={item.title}
                    data={item} 
                    height={barHeight}
                    width={barSize}
                />
                );
        })

        return barList;
    }
    render() {
        const {xAxis,yAxis} = this.props;
        return (
            <div className="main-container">
                <div className="y-axis">{yAxis}</div>
                <div className="center bar-container">
                        <ul className="bar-list">{this.drawBarChart()}</ul>
                    <span>{xAxis}</span>
                </div>
            </div>
        );
    }
}

export default BarChart;