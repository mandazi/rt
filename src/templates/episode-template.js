import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import Episode from "../components/episode";

export default function EpisodeTemplate({pageContext}) {
  const { episode } = pageContext;
  const youtubeEmbedURl = `https://www.youtube.com/embed/${episode.youtube_id}`;
  return (
    <Layout>
        <Episode episode={episode} />
    </Layout>
  )
}