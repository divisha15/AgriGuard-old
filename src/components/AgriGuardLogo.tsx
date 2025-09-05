const AgriGuardLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <img 
        src="/lovable-uploads/5febb978-3b2a-490d-b498-7b748a8f949e.png" 
        alt="AgriGuard Logo" 
        className="h-10 w-auto flex-shrink-0"
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