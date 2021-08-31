import React from "react";
import Releases from "./Releases";

const ReleasesList = ({releases}) => {

    const releasesNotes = releases.map(releases => {
        return (
            <Releases name={releases.name} key={releases.id} url={releases.url}></Releases>
        )
    })

    return (
        <>
        {releasesNotes}
        </>
    )
}

export default ReleasesList