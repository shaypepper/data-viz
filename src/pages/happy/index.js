/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import QuantifiedSelfLayout from "./quanitifedSelfLayout"
import HappiestDog from "../../components/happiestDog"
import BlogPost from "../../components/blogText"

const Dog = () => {
  return <QuantifiedSelfLayout> </QuantifiedSelfLayout>
}

Dog.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Dog
