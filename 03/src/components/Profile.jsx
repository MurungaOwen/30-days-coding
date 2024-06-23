import profileImg from "../assets/profile.png"
export default function Profile(){
    return (
        <div className="my__profile">
            <img src={profileImg} alt="" className="img"/>
            <div className="tech__stack">
                <marquee behavior="normal" direction="right">
                    <span>React</span>
                    <span>Mongo DB</span>
                    <span>Redis</span>
                    <span>MySql</span>
                    <span>Node js</span>
                    <span>Django</span>
                </marquee>
                
            </div>
        </div>
    )
}