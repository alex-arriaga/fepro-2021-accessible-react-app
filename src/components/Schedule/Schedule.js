import "./Schedule.css"
import {Fragment} from "react";

function Schedule({talks}) {
    return (
        <Fragment>
            <h1 className="mt-2 mb-4">Programa de conferencias</h1>
            <ul className="talks">
                {talks.map(talk => (

                    <li className="talk" key={talk.id}>
                        <div className="row">
                            <div className="col-2">
                                <img src={talk.image} className="img-fluid" alt=""/>
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
        </Fragment>
    );
}

export default Schedule;
