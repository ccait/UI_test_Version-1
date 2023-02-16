import React from "react";
import { Progress, Space } from 'antd';

function HPCRResult(){
    return(
        <section>
            <div class="container-fluid">
                <h1 class="mt-5">HPCResult process</h1>
  <Space wrap>
    <Progress type="circle" percent={75} />
    <Progress type="circle" percent={70} status="exception" />
    <Progress type="circle" percent={100} />
  </Space>
            </div>
        </section>
    );
}

export default HPCRResult;