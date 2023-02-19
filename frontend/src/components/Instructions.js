import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
const steps = [
  {
    title: 'Create Database',
    content: '<Create Database> Enter the name and the Schemas for each Table. \nFor example \n name: user \n Schema: id age address',
  },
  {
    title: 'Upload Tables',
    content: '<Upload Tables>: Upload your data for the table you previously specified in a .txt file \n For example:\n John a 5 \nRose b 6\nSam c 8',
  },
  {
    title: 'Display Database',
    content: '<Display Database>: You could always confirm your current database or <Delete Database> will delete ALL data that was saved in database.)',
  },
  {
    title: 'Last',
    content: '<Specify Algo>: Upload your algo options in a txt file.\n  <Start> Before start the De-identification, make sure you have confirmed your algo file and database',
  },
];
const Instructions= () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('You are ready to start now!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default Instructions;