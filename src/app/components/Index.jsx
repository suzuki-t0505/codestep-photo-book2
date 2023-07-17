export const Index = () => {
  const indexText = [
    'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    'タイトルタイトルタイトルタイトルタイトルタイトルタイトル',
    'タイトルタイトルタイトルタイトルタイトルタイトルタイトル'
  ]
  return (
    <div id='index' className='max-w-full bg-gray-100 mt-16 py-16 sm:py-10 px-16 sm:px-5'>
      <h2 className='text-center font-bold text-lg'>INDEX</h2>
      <div className='mt-7 p-7 border border-black'>
        <ol className='block mx-auto max-w-fit text-sm'>
          {indexText.map(text => <li className='mb-5 last:mb-0 list-decimal'>{ text }</li>)}
        </ol>
      </div>
    </div>
  )
}