interface TooltipProps {
  message: string;
  children: React.ReactNode;
  hasPermission: boolean;
}

export const Tooltip = ({ message, children, hasPermission }: TooltipProps) => {
  // If the user has permission, render the children without the tooltip.
  if (hasPermission) {
    return <>{children}</>;
  }

  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
        {message}
      </div>
    </div>
  );
}

export default Tooltip;
