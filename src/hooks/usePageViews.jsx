import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'amasu_portfolio_views'
const NAMESPACE = 'amasusuley-portfolio'
const KEY = 'pageviews'

const PageViewsContext = createContext({ views: 0, ready: false })

let sharedHitPromise = null

function readLocal() {
  const saved = Number(localStorage.getItem(STORAGE_KEY) || '0')
  return Number.isFinite(saved) && saved > 0 ? saved : 0
}

function writeLocal(value) {
  localStorage.setItem(STORAGE_KEY, String(value))
  return value
}

function bumpLocalCounter() {
  return writeLocal(readLocal() + 1)
}

async function hitRemoteCounter() {
  const endpoints = [
    `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
    `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`,
  ]

  for (const url of endpoints) {
    try {
      const res = await fetch(url, { method: 'GET', cache: 'no-store' })
      if (!res.ok) continue
      const data = await res.json()
      const value = Number(
        data?.count ??
          data?.value ??
          data?.data?.up_count ??
          data?.data?.count
      )
      if (Number.isFinite(value) && value > 0) return value
    } catch {
      // try next
    }
  }
  return null
}

function getSharedHitPromise() {
  if (!sharedHitPromise) {
    sharedHitPromise = (async () => {
      const localNext = bumpLocalCounter()
      const remote = await hitRemoteCounter()
      if (remote != null) {
        return writeLocal(Math.max(remote, localNext))
      }
      return localNext
    })()
  }
  return sharedHitPromise
}

export function PageViewsProvider({ children }) {
  const [views, setViews] = useState(() => readLocal())
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let alive = true
    getSharedHitPromise()
      .then((value) => {
        if (!alive) return
        setViews(value)
        setReady(true)
      })
      .catch(() => {
        if (!alive) return
        setViews(bumpLocalCounter())
        setReady(true)
      })
    return () => {
      alive = false
    }
  }, [])

  const value = useMemo(() => ({ views, ready }), [views, ready])
  return <PageViewsContext.Provider value={value}>{children}</PageViewsContext.Provider>
}

export function usePageViews() {
  return useContext(PageViewsContext)
}
