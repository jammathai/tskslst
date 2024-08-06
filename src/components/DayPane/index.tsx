export default function DayPane({ selectedDate }: { selectedDate: Date })
{
  return (
    <div className='w-80'>
      <h1 className='font-bold'>{selectedDate.toLocaleDateString(undefined, {
        'weekday': 'long',
        'year': 'numeric',
        'month': 'long',
        'day': 'numeric',
      })}</h1>
      <ul></ul>
    </div>
  )
}
