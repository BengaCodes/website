import Link from 'next/link'
import { delay, getNews } from './libs/api'

const getData = async (query: string) => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=d1c0adf16619482eb5c03d15a7f45b59`,
    {
      cache: 'reload'
    }
  )
  const news = await res.json()
  return news
}

const News = async ({ query }: { query: string }) => {
  await delay(2000)
  const news = await getData(query)

  console.log(news?.articles[0])

  return (
    <div className='text-l text-center'>
      <Link href={news?.articles[0]?.url}>{news?.articles[0]?.title}</Link>
    </div>
  )
}

export default News
