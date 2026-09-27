import { useRef, useState, useEffect } from 'react';
import { FaExpand, FaSearchPlus, FaSearchMinus, FaCompress, FaArrowsAlt } from 'react-icons/fa';
import { useLanguage } from '../../Context/LanguageContext';

interface FlowchartPageProps {
  imageEn: string;
  imageTr: string;
  projectTitle: string;
  description: string;
}

const FlowchartPage = ({ imageEn, imageTr, projectTitle, description }: FlowchartPageProps) => {
  const { language, t } = useLanguage();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const image = language === 'en' ? imageEn : imageTr;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const zoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (zoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  }, [zoom]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="rounded-lg overflow-hidden border border-light-grey bg-dark-grey w-full"
    >
      <div 
        ref={imageContainerRef}
        className="relative w-full overflow-hidden bg-black"
        style={{ 
          aspectRatio: isFullscreen ? 'auto' : '21/9',
          height: isFullscreen ? '100vh' : 'auto',
          maxHeight: isFullscreen ? '100vh' : '55vh',
          minHeight: isFullscreen ? '100vh' : 'auto',
        }}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Zoom Controls - Top Right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
          <button
            onClick={zoomIn}
            className="p-1.5 bg-black/70 hover:bg-fire-orange rounded-lg backdrop-blur-sm text-white hover:text-white transition-colors"
            aria-label="Zoom in"
            title="Zoom In"
          >
            <FaSearchPlus size={16} />
          </button>
          <button
            onClick={zoomOut}
            className="p-1.5 bg-black/70 hover:bg-fire-orange rounded-lg backdrop-blur-sm text-white hover:text-white transition-colors"
            aria-label="Zoom out"
            title="Zoom Out"
          >
            <FaSearchMinus size={16} />
          </button>
          <button
            onClick={resetZoom}
            className="p-1.5 bg-black/70 hover:bg-fire-orange rounded-lg backdrop-blur-sm text-white hover:text-white transition-colors"
            aria-label="Reset zoom"
            title="Reset View"
          >
            <FaCompress size={16} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-1.5 bg-black/70 hover:bg-fire-orange rounded-lg backdrop-blur-sm text-white hover:text-white transition-colors"
            aria-label="Toggle fullscreen"
            title="Fullscreen"
          >
            <FaExpand size={16} />
          </button>
        </div>

        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded-lg backdrop-blur-sm text-white text-xs font-mono z-10">
          {Math.round(zoom * 100)}%
        </div>

        {zoom > 1 && (
          <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 rounded-lg backdrop-blur-sm text-white/70 text-xs font-mono z-10 flex items-center gap-1.5">
            <FaArrowsAlt size={12} />
            Drag to pan
          </div>
        )}

        <div 
          className="w-full h-full flex items-center justify-center"
          style={{
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
          }}
        >
          <div
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transformOrigin: 'center center',
              transition: isDragging ? 'none' : 'transform 0.2s ease-out',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={image}
              alt={projectTitle}
              className="w-full h-full object-contain bg-black select-none"
              loading="lazy"
              draggable={false}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          </div>
        </div>

        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/70 rounded-lg backdrop-blur-sm z-10">
          <span className="text-xs text-white font-mono">
            {language === 'en' ? 'Flowchart' : 'Akış Şeması'}
          </span>
        </div>
      </div>

      <div className="p-4 bg-medium-grey">
        <h4 className="text-sm font-semibold text-light-text mb-2">
          {projectTitle} - {t('flowchart.title' as any)}
        </h4>
        <p className="text-text-grey text-sm leading-relaxed">
          {t(description as any)}
        </p>
      </div>
    </div>
  );
};

export default FlowchartPage;