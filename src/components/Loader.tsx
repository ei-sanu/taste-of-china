import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-container">
      <div className="flex flex-col items-center gap-8">
        {/* Dragon Icon */}
        <div className="loader-dragon">
          <svg
            width="120"
            height="120"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M50 10C30 10 15 25 15 45C15 55 20 65 30 70L25 85C25 85 40 80 50 80C60 80 75 85 75 85L70 70C80 65 85 55 85 45C85 25 70 10 50 10Z"
              fill="currentColor"
              opacity="0.8"
            />
            <circle cx="35" cy="40" r="5" fill="hsl(45 100% 50%)" />
            <circle cx="65" cy="40" r="5" fill="hsl(45 100% 50%)" />
            <path
              d="M40 55C40 55 45 60 50 60C55 60 60 55 60 55"
              stroke="hsl(45 100% 50%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Restaurant Name */}
        <h1 className="font-display text-3xl md:text-4xl text-secondary glow-text-gold">
          Taste of China
        </h1>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Loading Experience...
        </p>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Loader;
