import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Series from "../components/series"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Asalamualykum</h1>
        <p>Every Ramadan many speakers and organizations create a video series. This site aims to organize them for easy access and viewing.</p>
        <p>Make dua for us and the entire ummah. Ameen!</p>
        <Series />
    </Layout>
)

export default IndexPage
