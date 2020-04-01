/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import QuantifiedSelfLayout from "./quanitifedSelfLayout"
import HappiestPlaylist from "../../components/happiestPlaylist"
import BlogPost from "../../components/blogText"

const Playlist = ({ children }) => {
  return (
    <QuantifiedSelfLayout>
      {" "}
      <HappiestPlaylist />
      <BlogPost>
        <p>
          When I was a kid, my mom gave me an album put out by Clinique called
          Happy. It was a compilation of random songs about being happy. I
          listened to it all the time. In high school, I made my own version
          with songs that were happy just to me. In the last two years, I
          realized I needed a grown up version. I found songs I enjoyed that had
          a positive message. I found as many as I could, and I listened to it
          all the time. At some point I put it out to facebook that I was
          looking for suggestions and people came through! In that way, this
          list was collaborative. I've spent many hours trying to make all
          transitions smooth. You shouldn't listen on shuffle.{" "}
        </p>
        <p>
          This visualization was drastically different for pin-up than it is
          now. It was simply a bar chart of release yaer with color based on
          happiness score. From feedback I could tell this wasn't as interesting
          to everyone else as it was to me. Even to me I was finding it a little
          boring. What I really wanted to do was showcase the playlist.{" "}
        </p>
        <p>
          I realized I could include the playlist itself. It is searchable by
          artist, track name, happiness score, and release year. Then, the
          audience will have a reference point when they look at the other
          visualizations. This was inspired by many of my classmates
          implementing search features and Tableau stories in creative ways.{" "}
        </p>
        <p>
          The most interesting thing in this for me was being able to showcase
          the playlist. Naturally, you can't have a visualization about music
          without music. I did some searching and found a way to display song
          previews using Tableau actions. This adds richness to the experience
          since no one will know every song just by reading the title. It also
          gives the reader an opportunity to see if they agree with Spotify in
          its happiness ratings (or me for that matter).
        </p>
        <p>
          One detail that I focused on through this whole project was only using
          tooltips when it made sense. Perhaps because I work for a newspaper, I
          am constantly thinking about how a visualization will translate to
          print. I wanted to challenge myself in that way.
        </p>
        <p>
          Another thing I was very careful about in the playlist visualization
          was strategic use of color. It was important to me to not have an
          overwhelming palette. Just two colors: one for happy and one for not
          happy. To me this made the entire thing easier to digest.
        </p>
        <p>
          One peculiar design decision I made was to do a bubble chart for each
          individual score. This was interesting to me because it allowed you to
          have a rough idea of composition with having to use a pie chart or
          tree map. You also can see which songs spotify rated the same when you
          hover over.{" "}
        </p>
        <p>
          I also made a bunch of visualizations that ended up not making the
          cut. I enjoyed the creative processing of making a bunch of
          visualizations quickly and then choosing the interesting ones to take
          to the next level.
        </p>
        <p>I am still open to suggestions for additional happy songs.</p>
      </BlogPost>
    </QuantifiedSelfLayout>
  )
}

Playlist.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Playlist
