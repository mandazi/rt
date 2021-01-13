import React from "react";
import seriesData from "../content/series.json";
import _ from 'lodash';
export default class Series extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedYear: "2020",
        };
    }

    setYear(event){
        this.setState({selectedYear: event.target.value});
    }

    render() {
        const filteredData = _.filter(seriesData.content,{"year":this.state.selectedYear});
        return (
            <div className="ramadan-series-selector">
                <h3>Select Year</h3>
                <select defaultValue={this.state.selectedYear} onChange={(event)=>this.setYear(event)}>
                    <option value="2020">2020/1441</option>
                    <option value="2019">2019/1440</option>
                    <option value="2018">2018/1439</option>
                </select>

                <h3>Select Ramadan Series:</h3>
                {filteredData.map((data,index) =>  {
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