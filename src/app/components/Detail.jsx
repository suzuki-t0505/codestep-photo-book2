export const Detail = () => {
  return (
    <div id='detail' className='max-w-full bg-gray-100 mt-16 py-16 sm:py-10 px-16 sm:px-5'>
      <h2 className='text-center font-bold text-lg'>DETAIL</h2>
      <div className='mt-7 flex flex-wrap'>
        <dl className='text-sm leading-normal md:pr-10 md:border-r sm:border-b sm:w-full sm:pb-10 border-black'>
          <dt className='font-bold'>著者：</dt>
          <dd>タイトルタイトルタイトル</dd>
          <dt className='font-bold mt-4'>出版社：</dt>
          <dd>タイトルタイトルタイトル</dd>
          <dt className='font-bold mt-4'>発行年：</dt>
          <dd>2021年1月1日</dd>
        </dl>
        <div className='md:ml-10 sm:pt-10 text-sm w-3/5 sm:w-full'>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <p className='mt-6'>テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <a className='underline mt-6 inline-block'>オンラインストアで見る</a>
        </div>
      </div>
    </div>
  )
}