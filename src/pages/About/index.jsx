import Banner from "../../components/Banner"
import Collapse from "../../components/Collapse"
import aboutInfo from "../../datas/datasAbout.json"


export default function Apropos () {
    return (
        <main>
            <Banner />
            {aboutInfo.map(({title, info, index}) => (
                <div className="about_container" key={`${title} - ${index}`}>
                    <Collapse name={title} description={info} />
                </div> 
            ))}
        </main>
    )
}