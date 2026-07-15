import { usePageViews } from '../../hooks/usePageViews'

function formatViews(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export default function ViewerCount({ className = '', light = false }) {
  const { views, ready } = usePageViews()

  return (
    <div
      className={`inline-flex items-center gap-2 text-sm ${
        light ? 'text-white/80' : 'text-muted'
      } ${className}`}
      title="Total page views — increases on each visit or refresh"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span>
        <span className={`font-semibold tabular-nums ${light ? 'text-white' : 'text-ink'}`}>
          {ready ? formatViews(views) : '…'}
        </span>{' '}
        viewers
      </span>
    </div>
  )
}
