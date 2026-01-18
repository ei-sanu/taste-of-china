import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const loadingTexts = [
    "Preparing authentic flavors...",
    "Heating up the wok...",
    "Crafting your experience..."
  ];

  useEffect(() => {
    // Monitor online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    // Only progress if online
    if (!isOnline) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 1.5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete, isOnline]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className={`loader-container transition-opacity duration-700 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center gap-6 relative z-10">
        {/* Animated Logo Container */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg width="160" height="160" viewBox="0 0 160 160" className="opacity-30">
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="20 10"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(0 84% 60%)" />
                  <stop offset="100%" stopColor="hsl(45 100% 50%)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Pulsing Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse-slow" />
          </div>

          {/* Chef Icon */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="loader-chef transform hover:scale-110 transition-transform duration-300">
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                {/* Professional Chef's Toque (Tall Traditional Hat) */}
                <g>
                  {/* Animated hat with tilt and wobble */}
                  <g transform="rotate(-5 60 20)">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="-5 60 20;-3 60 20;-5 60 20"
                      dur="3s"
                      repeatCount="indefinite"
                    />

                    {/* Hat shadow */}
                    <ellipse cx="60" cy="35" rx="24" ry="7" fill="url(#hatShadow)" opacity="0.15" />

                    {/* Tall mushroom-shaped toque */}
                    <path
                      d="M38 36 Q38 22 42 16 C42 14 44 10 48 8 C50 6 52 4 56 3 C58 2 60 2 62 3 C66 4 68 6 70 8 C74 10 76 14 76 16 Q80 22 80 36 L80 42 C80 45 78 47 75 47 L43 47 C40 47 38 45 38 42 Z"
                      fill="url(#hatGradient)"
                      stroke="hsl(0 0% 85%)"
                      strokeWidth="0.5"
                    />

                    {/* Prominent vertical pleats */}
                    <path d="M46 15 Q46 8 50 5" stroke="hsl(0 0% 88%)" strokeWidth="1" opacity="0.6" fill="none" />
                    <path d="M54 4 Q54 2 60 2" stroke="hsl(0 0% 88%)" strokeWidth="1" opacity="0.6" fill="none" />
                    <path d="M66 5 Q70 8 70 15" stroke="hsl(0 0% 88%)" strokeWidth="1" opacity="0.6" fill="none" />
                    <path d="M50 10 L50 35" stroke="hsl(0 0% 90%)" strokeWidth="0.8" opacity="0.4" />
                    <path d="M60 8 L60 35" stroke="hsl(0 0% 90%)" strokeWidth="0.8" opacity="0.4" />
                    <path d="M68 12 L68 35" stroke="hsl(0 0% 90%)" strokeWidth="0.8" opacity="0.4" />

                    {/* Professional red band */}
                    <ellipse cx="60" cy="42" rx="22" ry="3.5" fill="hsl(0 84% 60%)" />
                    <rect x="38" y="42" width="44" height="5" rx="1.5" fill="hsl(0 84% 60%)" />
                    <ellipse cx="60" cy="47" rx="22" ry="2" fill="hsl(0 84% 50%)" opacity="0.6" />
                  </g>
                </g>

                {/* Animated head with nodding motion */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;0 -1;0 0"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />

                  {/* Head shape */}
                  <ellipse cx="60" cy="65" rx="17" ry="20" fill="hsl(25 45% 75%)" />

                  {/* Ears with detail */}
                  <ellipse cx="44" cy="65" rx="3.5" ry="4.5" fill="hsl(25 40% 70%)" />
                  <ellipse cx="45" cy="65" rx="1.5" ry="2" fill="hsl(25 35% 65%)" />
                  <ellipse cx="76" cy="65" rx="3.5" ry="4.5" fill="hsl(25 40% 70%)" />
                  <ellipse cx="75" cy="65" rx="1.5" ry="2" fill="hsl(25 35% 65%)" />

                  {/* Hair/sideburns */}
                  <path d="M45 54 Q44 57 44 60" stroke="hsl(30 20% 30%)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M75 54 Q76 57 76 60" stroke="hsl(30 20% 30%)" strokeWidth="2" strokeLinecap="round" />

                  {/* Animated eyebrows */}
                  <path d="M49 58 Q52 57 55 58" stroke="hsl(30 20% 30%)" strokeWidth="1.8" strokeLinecap="round">
                    <animate attributeName="d" values="M49 58 Q52 57 55 58;M49 58 Q52 56.5 55 58;M49 58 Q52 57 55 58" dur="3s" repeatCount="indefinite" />
                  </path>
                  <path d="M65 58 Q68 57 71 58" stroke="hsl(30 20% 30%)" strokeWidth="1.8" strokeLinecap="round">
                    <animate attributeName="d" values="M65 58 Q68 57 71 58;M65 58 Q68 56.5 71 58;M65 58 Q68 57 71 58" dur="3s" repeatCount="indefinite" />
                  </path>

                  {/* Eyes with blinking animation */}
                  <g>
                    <ellipse cx="52" cy="63" rx="4" ry="4.5" fill="white" />
                    <ellipse cx="68" cy="63" rx="4" ry="4.5" fill="white" />

                    {/* Animated pupils with eye movement */}
                    <circle cx="52" cy="64" r="2.2" fill="hsl(25 15% 25%)">
                      <animate attributeName="cy" values="64;63.5;64;64;64" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="52;53;52;51;52" dur="8s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="68" cy="64" r="2.2" fill="hsl(25 15% 25%)">
                      <animate attributeName="cy" values="64;63.5;64;64;64" dur="5s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="68;69;68;67;68" dur="8s" repeatCount="indefinite" />
                    </circle>

                    {/* Eye highlights */}
                    <circle cx="52.8" cy="62.5" r="1.2" fill="white" opacity="0.95" />
                    <circle cx="68.8" cy="62.5" r="1.2" fill="white" opacity="0.95" />

                    {/* Blinking eyelids */}
                    <ellipse cx="52" cy="63" rx="4" ry="0" fill="hsl(25 45% 75%)">
                      <animate attributeName="ry" values="0;4.5;0;0;0;0;0" dur="5s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="68" cy="63" rx="4" ry="0" fill="hsl(25 45% 75%)">
                      <animate attributeName="ry" values="0;4.5;0;0;0;0;0" dur="5s" repeatCount="indefinite" />
                    </ellipse>
                  </g>

                  {/* Nose */}
                  <path d="M60 67 L60 72" stroke="hsl(25 35% 65%)" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M58 72 Q60 73.5 62 72" stroke="hsl(25 35% 65%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />

                  {/* Animated rosy cheeks */}
                  <ellipse cx="47" cy="69" rx="3.5" ry="2.5" fill="hsl(0 60% 70%)" opacity="0.4">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
                  </ellipse>
                  <ellipse cx="73" cy="69" rx="3.5" ry="2.5" fill="hsl(0 60% 70%)" opacity="0.4">
                    <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
                  </ellipse>

                  {/* Animated smile */}
                  <path
                    d="M50 75 Q60 81 70 75"
                    stroke="hsl(0 50% 50%)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  >
                    <animate attributeName="d" values="M50 75 Q60 81 70 75;M50 75 Q60 82 70 75;M50 75 Q60 81 70 75" dur="2.5s" repeatCount="indefinite" />
                  </path>

                  {/* Smile dimples */}
                  <circle cx="50" cy="75" r="1" fill="hsl(25 35% 65%)" opacity="0.5" />
                  <circle cx="70" cy="75" r="1" fill="hsl(25 35% 65%)" opacity="0.5" />

                  {/* Professional mustache */}
                  <path
                    d="M46 73 Q52 75 60 73.5 Q68 75 74 73"
                    stroke="hsl(30 20% 25%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </g>

                {/* Neck and shoulders with subtle movement */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 0;0 0.5;0 0"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />

                  {/* Neck */}
                  <rect x="54" y="83" width="12" height="6" rx="1.5" fill="hsl(25 40% 72%)" />

                  {/* Chef Coat with shoulders */}
                  <path
                    d="M40 89 L45 96 Q50 92 60 92 Q70 92 75 96 L80 89 Q78 87 75 87 L45 87 Q42 87 40 89 Z"
                    fill="white"
                    opacity="0.97"
                  />

                  {/* Coat collar detail */}
                  <path d="M45 89 L47 87" stroke="hsl(0 0% 88%)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M75 89 L73 87" stroke="hsl(0 0% 88%)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M54 87 L54 92" stroke="hsl(0 0% 92%)" strokeWidth="0.8" opacity="0.5" />
                  <path d="M66 87 L66 92" stroke="hsl(0 0% 92%)" strokeWidth="0.8" opacity="0.5" />

                  {/* Animated golden buttons */}
                  <circle cx="60" cy="100" r="3" fill="hsl(45 100% 50%)">
                    <animate attributeName="opacity" values="1;0.9;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="60" cy="108" r="3" fill="hsl(45 100% 50%)">
                    <animate attributeName="opacity" values="1;0.9;1" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <circle cx="60" cy="116" r="3" fill="hsl(45 100% 50%)">
                    <animate attributeName="opacity" values="1;0.9;1" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </circle>

                  {/* Button shine */}
                  <circle cx="61" cy="99" r="1" fill="hsl(45 100% 75%)" opacity="0.9" />
                  <circle cx="61" cy="107" r="1" fill="hsl(45 100% 75%)" opacity="0.9" />
                  <circle cx="61" cy="115" r="1" fill="hsl(45 100% 75%)" opacity="0.9" />
                </g>

                {/* Animated cooking sparkles */}
                <circle cx="30" cy="28" r="2.5" fill="hsl(45 100% 50%)" opacity="0.7">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="cy" values="28;18;28" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="r" values="2.5;1.5;2.5" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="90" cy="32" r="2.5" fill="hsl(45 100% 50%)" opacity="0.7">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" begin="0.8s" />
                  <animate attributeName="cy" values="32;22;32" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                  <animate attributeName="r" values="2.5;1.5;2.5" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
                </circle>
                <circle cx="60" cy="18" r="2" fill="hsl(0 84% 60%)" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  <animate attributeName="cy" values="18;12;18" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
                </circle>
                <circle cx="75" cy="22" r="1.8" fill="hsl(45 100% 50%)" opacity="0.5">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.2s" repeatCount="indefinite" begin="1s" />
                  <animate attributeName="cy" values="22;15;22" dur="3s" repeatCount="indefinite" begin="1s" />
                </circle>

                <defs>
                  <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(0 0% 100%)" />
                    <stop offset="40%" stopColor="hsl(0 0% 98%)" />
                    <stop offset="100%" stopColor="hsl(0 0% 94%)" />
                  </linearGradient>
                  <radialGradient id="hatShadow">
                    <stop offset="0%" stopColor="hsl(0 0% 0%)" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="hsl(0 0% 0%)" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Restaurant Name with Animation */}
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            TASTE OF CHINA
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/50" />
            <p className="text-secondary/80 font-medium text-sm tracking-[0.2em] uppercase animate-fade-in">
              Since 2012
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/50" />
          </div>
        </div>

        {/* Offline Warning */}
        {!isOnline && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 max-w-md animate-fade-in">
            <p className="text-red-400 text-sm text-center font-medium">
              ⚠️ No internet connection. Please check your network and try again.
            </p>
          </div>
        )}

        {/* Tagline */}
        <p className="text-muted-foreground text-center max-w-md px-4 text-sm leading-relaxed animate-fade-in-up opacity-0 animation-delay-300">{!isOnline ? 'Waiting for connection...' : 'Authentic Chinese cuisine crafted with passion, tradition, and the finest ingredients'}
        </p>

        {/* Progress Bar with Percentage */}
        <div className="w-80 max-w-[90vw] space-y-3">
          <div className="relative h-2 bg-background/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/30">
            {/* Background shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            {/* Progress fill */}
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient transition-all duration-300 rounded-full relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-slide" />
            </div>
          </div>

          {/* Progress percentage */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-mono">{Math.round(progress)}%</span>
            <span className="text-muted-foreground font-mono">100%</span>
          </div>
        </div>

        {/* Animated Loading Text */}
        <div className="h-6 flex items-center justify-center">
          <p className="text-muted-foreground/80 text-sm tracking-wider uppercase animate-pulse-text">
            {loadingTexts[textIndex]}
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex gap-2 mt-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-slow animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-pulse-slow" />

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-secondary/30 rounded-full animate-float-particle" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-primary/30 rounded-full animate-float-particle animation-delay-500" />
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-secondary/30 rounded-full animate-float-particle animation-delay-1000" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-primary/30 rounded-full animate-float-particle animation-delay-1500" />
      </div>
    </div>
  );
};

export default Loader;
