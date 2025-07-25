import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative aspect-video bg-gradient-secondary rounded-xl overflow-hidden shadow-glow">
        {/* Video Placeholder - Replace with actual video embed */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/60 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <div className="mb-6">
              <Button
                onClick={handlePlayPause}
                variant="cta"
                size="lg"
                className="rounded-full w-20 h-20 text-2xl"
              >
                {isPlaying ? <Pause /> : <Play />}
              </Button>
            </div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-lg opacity-90">{description}</p>
          </div>
        </div>
        
        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
      </div>
      
      {/* Video controls bar */}
      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>🔴 LIVE Training Session</span>
        <span>Duration: 45:32</span>
      </div>
    </div>
  );
};

export default VideoPlayer;