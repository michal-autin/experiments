import React from 'react'
import styled, { css } from 'react-emotion'
import { DatePicker, version } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'

const DateFrom = styled('div')``;
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const Test = css`
  color: green;
`

const Test2 = styled.div`
  ${Test}
  font-size: 36px;
`
// this one is not working
const CustomDateFrom = styled('DatePicker')`
  color: magenta;
`

const DateFromAD = () => {
  return (
    <div style={{ margin: 24 }}>
      <p style={{ marginBottom: 24 }}>
        Current antd version: {version} <br/>
        You can change antd version on the left panel (Dependencies section).
      </p>
      <DatePicker size="small" placeholder="Departure date"/>
      <DatePicker size="small" placeholder="Return date"/>
      <Test>Czy działa babel plugin</Test>
      <Test2>Czy działa babel plugin</Test2>
      <CustomDateFrom size="small" defaultValue={moment.now()}/>
      <DatePicker size="small"/>
    </div>
  )
}

export default DateFromAD;