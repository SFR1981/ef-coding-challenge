import React from "react";
import WordCloud from 'react-d3-cloud';

const CloudView = function(props) {

const fontSizeMapper = word => word.value * (45) ;
const rotate = word => word.value % 360;
const data = props.cloudWords

return(
    <div>
      <h4 className="title">Reviews Word Cloud</h4>
      <div className="word-cloud">
    <WordCloud
      data={data}
      fontSizeMapper={fontSizeMapper}
      rotate={rotate}
      font={"Calibri"}
    />
  </div>
  </div>

);
}

export default CloudView;
