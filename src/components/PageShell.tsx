import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function SimplePage({ title, kicker, children }: { title: string; kicker?: string; children?: ReactNode }) {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1100px] px-6 py-20 lg:px-10">
        {kicker && (
          <div className="mb-4 inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-[12px] font-bold uppercase tracking-wider text-primary">
            {kicker}
          </div>
        )}
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{title}</h1>
        <div className="mt-6 max-w-3xl text-[16px] leading-relaxed text-muted-foreground">{children}</div>
      </section>
    </PageShell>
  );
}
