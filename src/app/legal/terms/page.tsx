import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of this website and engagement of services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Terms &amp; <span className="text-gradient-purple">Conditions</span>
          </>
        }
        description="Last updated: 6 July 2026"
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="prose-dark">
              <p>
                These terms govern your use of this website and, in general
                terms, how consulting engagements with {site.name} operate.
                Individual projects are always governed by a written agreement
                or statement of work, which takes precedence over these general
                terms.
              </p>

              <h2>Use of this website</h2>
              <p>
                Content on this site, including case studies, articles, and
                design, is provided for information. You may not reproduce it
                commercially without permission. Case study metrics are genuine
                but anonymised; client identities are confidential.
              </p>

              <h2>Engagements</h2>
              <h3>Proposals & scope</h3>
              <p>
                Every engagement starts with a written proposal covering scope,
                timeline, deliverables, and price. Work begins once the proposal
                has been accepted in writing and any agreed deposit has been
                paid. Material changes to scope are quoted and agreed before any
                additional work starts.
              </p>
              <h3>Payment</h3>
              <p>
                Fixed-scope projects are typically invoiced at 40% in advance,
                with the balance tied to milestones. Retainers are invoiced
                monthly in advance. Invoices are payable within 14 days unless
                otherwise agreed.
              </p>
              <h3>Intellectual property</h3>
              <p>
                On full payment, you own the custom code and deliverables
                produced for your project. I retain the right to reuse generic,
                non-confidential techniques, libraries, and know-how, and, with
                your permission, to reference anonymised outcomes in my
                portfolio.
              </p>
              <h3>Confidentiality</h3>
              <p>
                Anything I learn about your business, customers, or data during
                an engagement remains confidential. I am happy to sign a mutual
                non-disclosure agreement before any detailed discussions.
              </p>

              <h2>Warranties & liability</h2>
              <p>
                Deliverables are provided with reasonable skill and care, and
                launch-critical defects reported within the agreed support
                window are fixed at no charge. To the maximum extent permitted
                by law, total liability under any engagement is limited to the
                fees paid for that engagement, and neither party is liable for
                indirect or consequential losses.
              </p>

              <h2>Third-party platforms</h2>
              <p>
                Commerce projects depend on third-party platforms such as
                Shopify, hosting providers, and APIs. I am not responsible for
                outages, pricing changes, or policy decisions made by those
                platforms, though I will always engineer sensibly around their
                constraints.
              </p>

              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of India. Disputes will
                first be addressed in good faith between the parties before any
                formal proceedings.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about these terms? Email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
