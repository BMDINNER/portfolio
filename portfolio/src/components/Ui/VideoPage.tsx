import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaImage, FaExpand, FaCompress } from 'react-icons/fa';
import { useLanguage } from '../../Context/LanguageContext';

interface MediaItem {
  type: 'video' | 'image';
  src: string;
  descriptionKey?: string;
}

interface VideoPageProps {
  mediaItems?: MediaItem[];
  projectTitle?: string;
}

const VideoPage = ({ mediaItems = [], projectTitle = '' }: VideoPageProps) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);

  if (!mediaItems || mediaItems.length === 0) {
    return (
      <div className="rounded-lg overflow-hidden border border-light-grey bg-dark-grey p-6 text-center">
        <p className="text-text-grey text-sm">No media available for this project</p>
      </div>
    );
  }

  const currentItem = mediaItems[currentIndex] || mediaItems[0];
  const isVideo = currentItem?.type === 'video';

  const handleVideoEnd = () => {
    if (currentIndex < mediaItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const togglePlay = () => {
    if (isVideo && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < mediaItems.length) {
      setCurrentIndex(index);
      setProgress(0);
      if (isVideo && videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const nextSlide = () => {
    if (currentIndex < mediaItems.length - 1) {
      goToSlide(currentIndex + 1);
    } else {
      goToSlide(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    } else {
      goToSlide(mediaItems.length - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getCurrentDescription = () => {
    if (currentItem.descriptionKey) {
      return t(currentItem.descriptionKey as any);
    }
    return '';
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [currentIndex, isVideo]);

  useEffect(() => {
    if (isVideo && videoRef.current && isPlaying) {
      videoRef.current.play();
    }
  }, [currentIndex, isVideo]);

  return (
    <div 
      ref={containerRef}
      className="rounded-lg overflow-hidden border border-light-grey bg-dark-grey w-full"
    >
      <div 
        ref={mediaContainerRef}
        className="relative w-full overflow-hidden bg-black"
        style={{ 
          aspectRatio: isFullscreen ? 'auto' : '21/9',
          height: isFullscreen ? '100vh' : 'auto',
          maxHeight: isFullscreen ? '100vh' : '50vh',
          minHeight: isFullscreen ? '100vh' : 'auto',
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          {isVideo ? (
            <video
              ref={videoRef}
              src={currentItem.src}
              className="w-full h-full object-contain bg-black"
              onEnded={handleVideoEnd}
              onError={(e) => console.error('Video error:', e)}
              playsInline
            />
          ) : (
            <img
              src={currentItem.src}
              alt={`${projectTitle} - Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain bg-black"
            />
          )}
        </div>

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 rounded-lg backdrop-blur-sm z-10">
          {isVideo ? (
            <>
              <FaPlay size={10} className="text-fire-orange" />
              <span className="text-xs text-white font-mono">Video {currentIndex + 1}</span>
            </>
          ) : (
            <>
              <FaImage size={10} className="text-fire-orange" />
              <span className="text-xs text-white font-mono">Image {currentIndex + 1}</span>
            </>
          )}
        </div>

        <button
          onClick={toggleFullscreen}
          className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-fire-orange rounded-lg backdrop-blur-sm text-white hover:text-white transition-colors z-10"
          aria-label="Toggle fullscreen"
          title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
        >
          {isFullscreen ? <FaCompress size={14} /> : <FaExpand size={14} />}
        </button>

        {isVideo && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/90 to-transparent">
            <div 
              className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-2 hover:h-1.5 transition-all"
              onClick={(e) => {
                if (!isVideo || !videoRef.current) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                videoRef.current.currentTime = x * videoRef.current.duration;
              }}
            >
              <div 
                className="h-full rounded-full transition-all duration-100"
                style={{ 
                  width: `${progress}%`,
                  background: 'linear-gradient(to right, #b33a00, #d45300)',
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="p-1.5 text-white hover:text-fire-orange transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
                </button>
                <span className="text-white text-xs font-mono">
                  {currentIndex + 1} / {mediaItems.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="p-1.5 text-white hover:text-fire-orange transition-colors"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 text-white hover:text-fire-orange transition-colors"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {!isVideo && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/80 to-transparent">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs font-mono flex items-center gap-1.5">
                  <FaImage size={12} className="text-fire-orange" />
                  {currentIndex + 1} / {mediaItems.length}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={prevSlide}
                  className="p-1.5 text-white hover:text-fire-orange transition-colors"
                  aria-label="Previous slide"
                >
                  <FaChevronLeft size={14} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 text-white hover:text-fire-orange transition-colors"
                  aria-label="Next slide"
                >
                  <FaChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {isVideo && currentItem.descriptionKey && (
        <div className="p-3 bg-medium-grey border-b border-light-grey">
          <p className="text-text-grey text-sm leading-relaxed">
            {getCurrentDescription()}
          </p>
        </div>
      )}

      {mediaItems.length > 1 && (
        <div className="flex gap-1.5 p-2 bg-medium-grey overflow-x-auto">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`shrink-0 px-2.5 py-1 text-xs font-mono rounded transition-all duration-200 flex items-center gap-1 ${
                currentIndex === index
                  ? 'text-white'
                  : 'bg-dark-grey text-text-grey hover:text-white'
              } border border-light-grey hover:border-fire-orange`}
              style={{
                background: currentIndex === index 
                  ? 'linear-gradient(to top, #6b1414 0%, #8b1a1a 40%, #b33a00 80%, #d45300 100%)'
                  : 'transparent',
              }}
            >
              {item.type === 'image' ? (
                <FaImage size={10} />
              ) : (
                <FaPlay size={8} />
              )}
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoPage;