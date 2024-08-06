import { Setter } from '../../../util/Setter'

export default function Cell(
  {ms, setSelectedDate}: { ms: number, setSelectedDate: Setter<Date> }
) {
  const date = new Date(ms)
  return (
    <td onClick={
      () => setSelectedDate(new Date(ms))
    } className='size-40 align-top border-collapse border-2'>
      <div className='text-right'>{date.getDate()}</div>
    </td>
  )
}
