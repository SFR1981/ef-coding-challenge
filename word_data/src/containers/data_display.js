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
  const words = this.state.words
  const data_converter = new DataConverter();
  const tableInput = data_converter.wordsPreparedForTable(words)
  const d3Input = data_converter.wordsPreparedForWordCloud(words)
  return (

      <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route path="/table"
        render={()=> <TableView wordArray={tableInput}/>}/>
        <Route path="/cloud"
         render={() => <CloudView cloudWords={d3Input} /> } />
      </React.Fragment>
    </Router>

      )

//

  }






}

export default DataDisplay;
