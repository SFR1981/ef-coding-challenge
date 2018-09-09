import React from "react";
import WordCloud from 'react-d3-cloud';

const CloudView = function(props) {

const fontSizeMapper = word => word.value * (45) ;
const rotate = word => word.value % 20;
const data = props.cloudWords

return(
    <div>



      <div className="word-cloud">
    <WordCloud
      data={data}
      fontSizeMapper={fontSizeMapper}
      font={"Calibri"}
    />
  </div>
  </div>

);
}

export default CloudView;
