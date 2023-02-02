export type FetchTypes = {
  url: string
  method: string
  body?: any
  json: boolean
}

const fetcher = async ({ url, method, body, json }: FetchTypes) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (!res.ok) {
    throw new Error('API Error')
  }

  if (json) {
    const data = await res.json()
    return data
  }
}

export const getNews = async (query: string) => {
  return fetcher({
    url: `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`,
    method: 'GET',
    json: false
  })
}

export const delay = (time: number) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(1), time)
  })
