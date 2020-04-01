/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Layout from "../../components/layout"
import BillViz from "./visualization"
import WhitePaper from "./WhitePaper"
import BlogPost from "./BlogPost"

const Bill = () => {
  return (
    <Layout styles={{ maxWidth: 1300, paddingBottom: 50 }}>
      <div>
        <BillViz />
      </div>
      <BlogPost />
      <WhitePaper />
    </Layout>
  )
}

Bill.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Bill
