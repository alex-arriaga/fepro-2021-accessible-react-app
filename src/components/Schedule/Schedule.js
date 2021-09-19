import "./Schedule.css"

function Schedule({talks}) {
    return (
        <ul className="talks">
            {talks.map(talk => (

                <li className="talk">
                    <div className="row">
                        <div className="col-2">
                            <img src={talk.image} className="img-fluid"/>
                        </div>
                        <div className="col-10">
                            <span className="talk-date">
                                {talk.date}
                            </span>
                            <a href="#"><h2 className="mt-3 talk-title">{talk.title}</h2></a>
                            <p className="mb-0">{talk.description}</p>
                        </div>
                    </div>
                </li>

            ))}
        </ul>
    );
}

export default Schedule;
