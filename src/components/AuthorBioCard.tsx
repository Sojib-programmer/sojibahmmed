import { Link } from "react-router-dom";

interface AuthorBioCardProps {
  className?: string;
  compact?: boolean;
}

const AuthorBioCard = ({ className = "", compact = false }: AuthorBioCardProps) => (
  <div className={`glass-card rounded-xl p-5 ${className}`}>
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 font-bold text-primary">
        SA
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground">Sojib Ahmmed</p>
        <p className="mt-0.5 text-xs text-muted-foreground">
          Founder &amp; CEO, MarketSync Global.
        </p>
        <div className="mt-2 flex gap-3 text-xs">
            <Link to="/about" className="text-primary hover:underline">About</Link>
          <Link to="/who-is-sojib-ahmmed" className="text-primary hover:underline">
            Who is Sojib Ahmmed?
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AuthorBioCard;
