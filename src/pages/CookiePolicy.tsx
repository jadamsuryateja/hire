import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function CookiePolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Cookie Policy - HireLeap</title>
        <meta name="description" content="Learn about how HireLeap uses cookies to improve your experience." />
      </Helmet>

      <main className="flex-1 bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[40px] mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
            </p>

            <h2>2. How we use cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Essential cookies:</strong> These are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas.</li>
              <li><strong>Analytical/performance cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it.</li>
              <li><strong>Functionality cookies:</strong> These are used to recognize you when you return to our website.</li>
            </ul>

            <h2>3. Managing cookies</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:{" "}
              <a href="mailto:privacy@hireleap.com">privacy@hireleap.com</a>.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
             <Link to="/" className="text-primary hover:underline text-sm font-medium">&larr; Back to Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
