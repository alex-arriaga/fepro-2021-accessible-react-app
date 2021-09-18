import {Fragment} from "react";

function Schedule({talks}) {
    return (
        <Fragment>
            {talks.map(talk => (
                <ul>
                    <li>{talk.title}</li>
                </ul>
            ))}
        </Fragment>
    );
}

export default Schedule;
