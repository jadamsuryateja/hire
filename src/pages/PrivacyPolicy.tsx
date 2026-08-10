import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Privacy Policy - HireLeap</title>
        <meta name="description" content="Learn how HireLeap collects, uses, and protects your personal data." />
      </Helmet>

      <main className="flex-1 bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[40px] mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
            <h2>1. Introduction</h2>
            <p>
              At HireLeap, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>

            <h2>2. The data we collect about you</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
            </ul>

            <h2>3. How we use your personal data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
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
