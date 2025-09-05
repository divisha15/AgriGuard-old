const AgriGuardLogo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <img 
      src="/lovable-uploads/5febb978-3b2a-490d-b498-7b748a8f949e.png" 
      alt="AgriGuard - Fasal ka Doctor" 
      className={`h-12 w-auto flex-shrink-0 ${className}`}
    />
  );
};

export default AgriGuardLogo;