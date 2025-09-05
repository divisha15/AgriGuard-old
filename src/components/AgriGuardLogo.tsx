const AgriGuardLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Geometric Logo */}
      <img 
        src="/lovable-uploads/65569905-4908-418c-90b7-7aede9055b46.png" 
        alt="AgriGuard Logo" 
        className="h-10 w-10 flex-shrink-0"
      />

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