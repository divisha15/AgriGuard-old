const AgriGuardLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Geometric Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Green parts */}
        <path
          d="M15 25 L15 75 L35 85 L55 75 L55 45 L35 35 Z"
          fill="#22C55E"
          fillOpacity="0.9"
        />
        <path
          d="M35 15 L15 25 L35 35 L55 25 Z"
          fill="#16A34A"
        />
        
        {/* Yellow/Orange parts */}
        <path
          d="M45 25 L65 35 L85 25 L85 75 L65 85 L45 75 Z"
          fill="#F59E0B"
          fillOpacity="0.9"
        />
        <path
          d="M65 15 L45 25 L65 35 L85 25 Z"
          fill="#D97706"
        />
      </svg>

      {/* AgriGuard Text */}
      <div className="flex flex-col">
        <div className="text-xl font-bold leading-tight">
          <span className="text-green-600">Agri</span>
          <span className="text-yellow-600">Guard</span>
        </div>
        <p className="text-xs text-muted-foreground leading-tight">Fasal ka Doctor</p>
      </div>
    </div>
  );
};

export default AgriGuardLogo;