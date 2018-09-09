import React, {Component} from 'react';
import words from '../reviews.json'
import Home from '../components/home.js'
import NavBar from '../components/nav_bar.js';
import TableView from '../components/table_view.js';
import CloudView from '../components/cloud_view.js';
import DataConverter from '../models/data_converter.js';
import { BrowserRouter as Router, Route } from "react-router-dom";


class DataDisplay extends Component {
  constructor(props){
    super(props);
    this.state = {
      words
    }
  }







render(){



    return (

      <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/table"
        render={()=> <TableView />}/>
        <Route path="/cloud"
         render={() => <CloudView /> } />
      </React.Fragment>

    </Router>

      )

//

  }






}

export default DataDisplay;
