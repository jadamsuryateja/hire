import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Page Not Found - HireLeap</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <main className="flex-1 bg-background pt-24 pb-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-secondary text-primary mx-auto mb-8 shadow-sm">
            <Search className="h-8 w-8" />
          </div>

          <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[40px] mb-4">
            We couldn't find that page
          </h1>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            The link you followed may be broken, or the page may have been removed. Let's get you
            back on track.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Link
              to="/"
              className="flex items-center justify-center bg-secondary text-foreground hover:bg-secondary/80 px-6 py-4 rounded-lg transition-colors font-medium border border-border"
            >
              Return Home
            </Link>
            <Link
              to="/plan-your-next-leap"
              className="flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-lg transition-colors font-medium"
            >
              Plan Your Next Leap
            </Link>
            <Link
              to="/career-journeys"
              className="flex items-center justify-center bg-secondary text-foreground hover:bg-secondary/80 px-6 py-4 rounded-lg transition-colors font-medium border border-border"
            >
              Career Journeys
            </Link>
            <Link
              to="/career-hub"
              className="flex items-center justify-center bg-secondary text-foreground hover:bg-secondary/80 px-6 py-4 rounded-lg transition-colors font-medium border border-border"
            >
              Career Hub
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
