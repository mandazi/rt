import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Series from "../components/series"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Asalamualykum</h1>
        <p>There is a lot of content this Ramadan 1441/2020 that is online due to the global COVID-19 pandemic. This site is making it easy to browse and listen to the content from various speakers and organizations. <b>We are still working on it, so consider it in beta stage</b>.</p>
        <p>Make dua for us and the entire ummah. Ameen!</p>
        <Series selected="" />
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
