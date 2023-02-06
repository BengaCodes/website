import Link from 'next/link'
import { delay, getNews } from './libs/api'

const getData = async (query: string) => {
  const todaysDate = new Date().toISOString().split('T')[0]
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&from=${todaysDate}&sortBy=publishedAt&apiKey=d1c0adf16619482eb5c03d15a7f45b59`,
    {
      cache: 'no-cache'
    }
  )
  const news = await res.json()
  return news
}

const News = async ({ query }: { query: string }) => {
  await delay(2000)
  const news = await getData(query)

  return (
    <div className='text-l text-center p-2'>
      <Link href={news?.articles[0]?.url} target='_blank'>
        {news?.articles[0]?.title}
      </Link>
    </div>
  )
}

export default News
