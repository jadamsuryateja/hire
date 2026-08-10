import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export function TermsConditions() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Terms & Conditions - HireLeap</title>
        <meta name="description" content="Read the Terms and Conditions of using HireLeap." />
      </Helmet>

      <main className="flex-1 bg-background pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[40px] mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted-foreground">Last updated: August 2026</p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-normal prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site.
            </p>

            <h2>2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, HireLeap and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.
            </p>

            <h2>3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>publishing any website material in any other media;</li>
              <li>selling, sublicensing and/or otherwise commercializing any website material;</li>
              <li>publicly performing and/or showing any website material;</li>
              <li>using this website in any way that is or may be damaging to this website;</li>
              <li>using this website in any way that impacts user access to this website.</li>
            </ul>

            <h2>4. Limitation of liability</h2>
            <p>
              In no event shall HireLeap, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this website.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
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
