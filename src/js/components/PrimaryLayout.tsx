import * as React from "react";
import { Route } from "react-router-dom";

import Menu from "./Menu"
import PageOne from "./PageOne"
import PageTwo from "./PageTwo"
import TestList from "./TestList"

export default class PrimaryLayout extends React.Component {
    public render() {  
      return (
        <div className="primary-layout">
          <header>
            
            <Menu></Menu>
  
          </header>
          <div>
            <Route path="/page-1" render={(props) => ( <PageOne/> )} />
            <Route path="/page-2" component={PageTwo} />
            <Route path="/tests" component={TestList} />
          </div>
        </div>
      )
    }
  }