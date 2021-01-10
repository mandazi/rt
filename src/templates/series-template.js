import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import EpisodeLink from "../components/episodeLink";

export default function SeriesTemplate({pageContext}) {
  const { series, episodes } = pageContext;
  return (
    <Layout>
      <div> {series.name}</div>
      {
        episodes && episodes.length > 0 && episodes.map((episode)=><EpisodeLink episode={episode} series={series} />)
      }
    </Layout>
  )
}