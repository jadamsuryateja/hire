import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function Disclaimer() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Disclaimer - HireLeap</title>
        <meta name="description" content="Legal disclaimer and information about HireLeap's services." />
      </Helmet>

      <main className="flex-1 bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[40px] mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
            <h2>1. General Information</h2>
            <p>
              The information provided by HireLeap ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>

            <h2>2. Professional Advice</h2>
            <p>
              Our services are intended to provide career guidance and support, but they do not constitute guaranteed employment or financial advice. Outcomes vary by individual effort, market conditions, and other factors beyond our control.
            </p>

            <h2>3. External Links</h2>
            <p>
              The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              Should you have any feedback, comments, requests for technical support or other inquiries, please contact us at:{" "}
              <a href="mailto:legal@hireleap.com">legal@hireleap.com</a>.
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
