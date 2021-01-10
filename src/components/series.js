import React from "react"
import seriesData from "../content/series.json"

export default class Series extends React.Component {

    render() {
        return (
            <div className="ramadan-series-selector">
                <h3>Select Ramadan Series:</h3>
                {seriesData.content.map((data,index) =>  {
                    return  <a href={`series/`+data.url} key={`ramadan-series-${index}`}>
                                <span className="ramadan-series-name">{data.name}</span>
                                <span className="ramadan-series-speaker">{data.speakers.join(', ')}</span>
                                <span className="ramadan-series-org">{data.organization}</span>
                            </a>
                })}
            </div>
        )
    }
}