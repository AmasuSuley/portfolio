import { useState } from 'react'

const YouTubeEmbed = ({ videoId, title }) => {
  const [isLoading, setIsLoading] = useState(true)

  if (!videoId) return null

  return (
    <div className="relative aspect-video w-full bg-black">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="h-full w-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

export default YouTubeEmbed
