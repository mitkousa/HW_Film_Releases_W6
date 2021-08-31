import React, {useState} from "react";
import ReleasesList from "../components.js/ReleasesList";

const FilmReleases = () => {

    const [releases] = useState(
    [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
            url: <a href={"https://www.imdb.com/title/tt4633694/?ref_=rlm"}>"Spider-Man: Into the Spider-Verse"</a>
        },
        {
          id: 2,
          name: "Life Itself",
          url: <a href={"https://www.imdb.com/title/tt5989218/?ref_=rlm"}>"Life Itself"</a>
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: <a href={"https://www.imdb.com/title/tt2328900/?ref_=rlm"}>"Mary Queen of Scots"</a>
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", 
          url: <a href={"https://www.imdb.com/title/tt3513498/?ref_=rlm"}>"The Lego Movie 2: The Second Part"</a>
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: <a href={"https://www.imdb.com/title/tt4154664/?ref_=rlm"}>"Captain Marvel"</a>
        }
      ]
    )
    
    return (
        <>
        <div className = "allApp">
        <h1>Upcoming Film releases for UK:</h1>
        <hr></hr>
        < ReleasesList releases={releases} />
        <hr></hr>
        <tr>
        <td className = "upcoming-releases"><a href={"https://www.imdb.com/calendar/?region=gb"}>View More Upcoming Releases >>  </a></td>
        </tr>
        </div>
        </>
    )
}

export default FilmReleases;