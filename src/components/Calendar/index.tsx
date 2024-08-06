import { useState } from 'react'
import Cell from './Cell'
import { Setter } from '../../util/Setter'

export default function Calendar(
  { setSelectedDate }: { setSelectedDate: Setter<Date> }
) {
  const [month, setMonth] = useState((new Date()).getMonth())
  const [year, setYear] = useState((new Date()).getFullYear())

  const rows = []
  const date = new Date(year, month, 1)
  date.setDate(date.getDate() - date.getDay())
  for (let i = 0; i < 6; i++) {
    const cells = []
    for (let j = 0; j < 7; j++) {
      cells.push(
        <Cell ms={date.getTime()} setSelectedDate={setSelectedDate} key={j} />
      )
      date.setDate(date.getDate() + 1)
    }
    rows.push(<tr key={i}>{cells}</tr>)
  }

  const yearOptions = []
  for (let i = 0, value = (new Date()).getFullYear(); i < 5; i++, value++)
    yearOptions.push(<option value={value} key={i}>{value}</option>)

  return (
    <div className='text-center'>
      <select defaultValue={(new Date()).getMonth()} onChange={
        e => setMonth(parseInt(e.target.value))
      }>
        <option value='0'>January</option>
        <option value='1'>February</option>
        <option value='2'>March</option>
        <option value='3'>April</option>
        <option value='4'>May</option>
        <option value='5'>June</option>
        <option value='6'>July</option>
        <option value='7'>August</option>
        <option value='8'>September</option>
        <option value='9'>October</option>
        <option value='10'>November</option>
        <option value='11'>December</option>
      </select>
      <select onChange={e => setYear(parseInt(e.target.value))}>
        {yearOptions}
      </select>
      <table>
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}
