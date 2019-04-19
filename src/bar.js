import React, {Component} from 'react';

class Bar extends Component {
    constructor(props){
        super(props)
        this.canvas = React.createRef();
    }

    componentDidMount(){
        const canvas = this.canvas.current;
        this.setState({
            canvas 
        },() => {
            this.drawBar();
        });
    }

    drawBar = () => { 
        const {data,width,height} = this.props;
        const { canvas } = this.state;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.rect(0,0,width,height);
        ctx.fillStyle = data.color;
        ctx.fill();
    }

    render() {
        const {data,height, width, className} = this.props;
        return ( 
            <span className={`${className ? className: null} bar`}>
                <canvas ref={this.canvas} height={height} width={width} />
                    <span className="bar-hovertext">{data.title}: {data.value}</span>
            </span>
            );
    }
}

export default Bar;