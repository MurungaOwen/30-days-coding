class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <button onClick={this.props.onClick}>{this.props.text}</button>
            </>
        )
    }
}

export default class MyComponent extends React.Component{
    constructor(props){
        super(props);
    }
    greet(){
        alert("Hello coder")
    }
    render(){
        return (
            <Button text="Greet me" onClick={this.greet}/>
        )
    }
}