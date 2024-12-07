import InfoLogementRate from "../InfoLogementRate"
import Collapse from "../Collapse"

export default function InfoLogement ({apptId}) {
    const title = apptId["title"]
    const location = apptId["location"]

    const listOwnerInfo = ["host"]
    const ownerInfo = apptId[listOwnerInfo]
    const ownerImg = ownerInfo["picture"]
    const ownerName = ownerInfo["name"]

    const tagsList = ["tags"]
    const tags = apptId[tagsList]

    const rate = Number(apptId["rating"])

    const listEquipmentInfo = ["equipments"]
    const equipments = apptId[listEquipmentInfo]
    const description = apptId["description"]

    return(
        <div>
            <div className="appt-info">
                <div className="appt-info__title-location">
                    <h2>{title}</h2>
                    <p>{location}</p>
                </div>
                <div className="appt-info__owner">
                    <p>{ownerName}</p>
                    <img src={ownerImg} alt={ownerName} />
                </div>
            </div>
            <div className="appt-info__tags-and-rate">
                <div className="tags">
                    {tags.map((tag) => (
                        <div key={tag.toString()} className="tag">
                            <p>{tag}</p>
                        </div>
                    ))}
                </div>
                <div className="rate">
                        <InfoLogementRate rate={rate} />
                </div>
            </div>
            <div className="appt-info__equipement-and-description">
                <Collapse name="Description" description={<p>{description}</p>} />
                <Collapse name="Équipements" description={equipments.map((equipement) => <p key={equipement.toString()}>{equipement}</p>)} />
            </div>
        </div>
    )
}