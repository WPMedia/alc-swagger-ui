import React from 'react'
import { createDeepLinkPath } from "core/utils"
import styled from 'styled-components';

const SearchBarElement = styled.div``;

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchFunction= this.searchFunction.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  searchFunction() {
    var errorMsg, filter, li, a, i, noneCt = 0;
    errorMsg = document.getElementById("errorMsg");
    filter = document.getElementById("searchInput").value.toUpperCase();
    li = document.getElementById("sidenav").getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
          li[i].style.display = "";
      else {
        li[i].style.display = "none";
        noneCt++;
      }
    }
    if (noneCt == li.length) {
      errorMsg.innerHTML = "No results for \"" + document.getElementById("searchInput").value + "\".";
      errorMsg.style.display = "block";
    }
    else
      errorMsg.style.display = "none";

    document.getElementById("adjustSidebar").scrollTop = 0;
  }

  resetSearch() {
    var errorMsg, li;
    document.getElementById("errorMsg").style.display = "none";
    $('#scrollingNav .sidenav-search input.search').val('').focus();
    li = document.getElementById("sidenav").getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
      li[i].style.display = "";
    }
  }

  render() {
    let {
      specSelectors,
      layoutSelectors,
      getConfigs
    } = this.props

    let taggedOps = specSelectors.taggedOperations()

    let {
      maxDisplayedTags
    } = getConfigs()

    let filter = layoutSelectors.currentFilter()

    if (filter) {
      if (filter !== true) {
        taggedOps = fn.opsFilter(taggedOps, filter)
      }
    }

    if (maxDisplayedTags && !isNaN(maxDisplayedTags) && maxDisplayedTags >= 0) {
      taggedOps = taggedOps.slice(0, maxDisplayedTags)
    }

    return (
      <nav id="scrollingNav">
        <SearchBarElement className="sidenav-search">
          <input className="search" type="text" placeholder="Filter search..." onKeyUp={this.searchFunction} id="searchInput"></input>
          <span className="search-reset" onClick={this.resetSearch}>x</span>
        </SearchBarElement>
        <div className="adjustSidebar" id="adjustSidebar">
          <ul className="sidenav" id="sidenav">
            <div id="errorMsg"></div>
            {
              taggedOps.map((tagObj, tag) => {
                let operations = tagObj.get("operations")
                let headerRef = ["operations-tag", createDeepLinkPath(tag)]
                return (
                  <div className="header">
                  <li className="nav-header"><a href={`#${headerRef.join("-")}`}>{tag}</a></li>
                    {
                      operations.map(op => {
                        const path = op.get("path")
                        const method = op.get("method")
                        const summary = op.getIn(["operation", "summary"])
                        const summaryId = summary && summary.split(' ').splice(0, 3).join('-')
                        let methodRef = ["operations", tag, summaryId]
                        return (
                          <div className="methods">
                          <li className="is-new"><a href={`#${methodRef.join("-")}`}>{summary}</a></li>
                          </div>
                        )
                      }).toArray()
                    }
                  </div>
                )
              }).toArray()
            }
          </ul>
        </div>
      </nav>
    )
  }
}