import { useState } from 'react';

const YouTubeEmbed = ({ videoId, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-video w-full bg-black">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      )}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;