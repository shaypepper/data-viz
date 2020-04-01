import React from "react"
import * as d3 from "d3"
import moment from "moment"

class d3BillViz extends React.Component {
  state = {
    data: [],
    imageUrl: "",
    mode: "Holidays",
  }

  updateImage = newImageUrl => {
    this.setState(() => ({
      imageUrl: newImageUrl,
    }))
  }

  includeIn = (mode, item) => {
    if (!item["Print Image"]) {
      return false
    }

    switch (mode) {
      case "All":
        return item["Title"]
      case "Holidays":
        return item["Holidays"]
    }
  }

  componentDidMount() {
    console.log(d3)
    const { mode } = this.state
    d3.csv(
      "https://docs.google.com/spreadsheets/u/1/d/1_pceQeoDKhNnEtSFD2kLyMq1furUAmHXQDaE5vku_M8/pub?gid=0&output=csv",
      d => {
        if (!this.includeIn(mode, d)) {
          return
        }

        const newDatum = {
          title: d["Title"],
          publishDate: moment(d["Print Date"]),
          id: d.id,
          imageUrl: d["Print Image"],
        }
        this.setState(oldState => {
          return { data: [...oldState.data, newDatum] }
        })
      }
    )
  }

  render() {
    const { data, imageUrl } = this.state
    return (
      <div>
        <img src={imageUrl} />
        <ul>
          {data.map(d => {
            return (
              <li key={d["id"]}>
                <button onClick={() => this.updateImage(d.imageUrl)}>
                  {d.title} <br />
                  <i>{d.publishDate.format("MMMM D, YYYY")}</i>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default d3BillViz
