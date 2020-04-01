import React from "react"

class BillViz extends React.Component {
  componentDidMount() {
    var divElement = document.getElementById("viz1576397550540")
    var vizElement = divElement.getElementsByTagName("object")[0]
    vizElement.style.width = "1250px"
    vizElement.style.height = "987px"
    var scriptElement = document.createElement("script")
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
    vizElement.parentNode.insertBefore(scriptElement, vizElement)
  }

  render() {
    return (
      <div
        class="tableauPlaceholder"
        id="viz1576397550540"
        style={{ position: "relative", marginBottom: 50 }}
      >
        <noscript>
          <a href="#">
            <img
              alt=" "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bi&#47;BillPlay&#47;Bill&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object class="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />{" "}
          <param name="embed_code_version" value="3" />{" "}
          <param name="site_root" value="" />
          <param name="name" value="BillPlay&#47;Bill" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Bi&#47;BillPlay&#47;Bill&#47;1.png"
          />{" "}
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    )
  }
}

export default BillViz
