import "../main.scss"
import profile from "../assets/man.jpg"
export default function Hero(){
    return (
        <>
            <div className="hero">
                <div className="portfolio">
                    <img src={profile} alt="" className="img-fluid" />
                </div>
            </div>
        </>
    )
}