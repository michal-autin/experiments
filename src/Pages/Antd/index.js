import React from 'react'
import styled from 'react-emotion'
import { DatePicker, version } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'

const DateFrom = styled('div')``;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const DateFromAD = () => {
  return (
    <div style={{ margin: 24 }}>
      <p style={{ marginBottom: 24 }}>
        Current antd version: {version} <br/>
        You can change antd version on the left panel (Dependencies section).
      </p>
      <DatePicker size="small" placeholder="Departure date"/>
      <DatePicker size="small" placeholder="Return date"/>
    </div>
  )
}

export default DateFromAD;