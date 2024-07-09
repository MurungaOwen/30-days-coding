import React from 'react';

/**
 * 
 * @param {*} props username, desc, stack, img
 * 
 * @returns 
 */
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

class MyComponent extends React.Component{
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
export default function User(props) {
    const divStyle = {
        maxWidth: "540px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto", // This centers the card horizontally
        display: "flex",
        height:"100vh"
    };
    const smallImg = {
        width:"25px",
        height:"25px",
        margin: "0 5px",
        padding:"2px"
    }
    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0" style={divStyle}>
                    <div className="col-md-4">
                        <img src={props.img} className="img-responsive p-3" alt="profile" />
                    </div>
                    <div className="col-md-8 d-flex">
                        <div className="card-body mt-4">
                            <h5 className="card-title m-1 underline d-flex" >{props.username}
                                <span><img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Eo_circle_green_checkmark.svg" style={smallImg}  alt="" /></span>
                            </h5>
                            <p className="card-text m-1">{props.desc}</p>
                            <ul className="d-flex flex-wrap" style={{ listStyleType: "none" }}>
                                {props.stack.map((item, index) => (
                                    <li key={index} className="text-light bg-primary p-1 rounded m-1">{item}</li>
                                ))}
                            </ul>
                            <MyComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
