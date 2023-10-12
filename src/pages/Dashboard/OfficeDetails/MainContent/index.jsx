import React from "react";
import { Progress } from "antd";
import {QuestionCircleOutlined} from '@ant-design/icons'

const MainContent = () => {
  return (
    <div className="OfficeMain">
        <div className="office-progress">
          <h6>Current office occupancy:</h6>
          <span>50%</span>
          <Progress percent={50} showInfo={false} />
        </div>
        <div className="office-title color">
        <h6>criteria for increasing occupancy:</h6>
         <ul>
            <li><p>Haven Guidelines <QuestionCircleOutlined/></p> <span className="not-met">Not met</span></li>
            <li><p>Country/state guidelines <QuestionCircleOutlined/></p> <span className="met">Met</span></li>
         </ul>
        </div>
    </div>
  );
};

export default MainContent;
