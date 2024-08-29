'use client';

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
    <div className="flex flex-col items-center group">
      <small className="absolute hidden group-hover:block text-center w-40 text-primary_alt font-semibold -translate-y-16 bg-white py-2 rounded border-2">
        {message}
      </small>
      {children}
    </div>
  );
}

export default Tooltip;
