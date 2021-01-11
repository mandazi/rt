import React from "react";
import Layout from "../components/layout";
import Episode from "../components/episode";

export default function EpisodeTemplate({pageContext}) {
  const { episode } = pageContext;
  return (
    <Layout>
        <Episode episode={episode} />
    </Layout>
  )
}