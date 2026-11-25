import { Link } from "react-router-dom";
import { forwardRef } from "react";

interface SALogoProps {
  size?: "sm" | "md" | "lg";
  linkTo?: string;
  onClick?: () => void;
}

const sizes = {
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-14 w-14 text-xl",
};

const SALogo = forwardRef<HTMLElement, SALogoProps>(({ size = "md", linkTo, onClick }, ref) => {
  const logo = (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-lg border border-border bg-card font-display font-semibold tracking-tight text-primary`}
    >
      SA
    </div>
  );

  const nameEl = (
    <span className="text-lg font-bold tracking-tight text-foreground">
      SOJIB AHMMED
    </span>
  );

  if (linkTo) {
    return <Link to={linkTo} className="flex items-center gap-3" ref={ref as React.Ref<HTMLAnchorElement>}>{logo}{nameEl}</Link>;
  }

  if (onClick) {
    return <button onClick={onClick} className="flex items-center gap-3" ref={ref as React.Ref<HTMLButtonElement>}>{logo}{nameEl}</button>;
  }

  return <div ref={ref as React.Ref<HTMLDivElement>}>{logo}</div>;
});

SALogo.displayName = "SALogo";

export default SALogo;
