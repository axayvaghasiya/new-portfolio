import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "How deposits, milestones, and refunds work for consulting engagements.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Refund <span className="text-gradient-gold">Policy</span>
          </>
        }
        description="Last updated: 6 July 2026"
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="prose-dark">
              <p>
                Consulting is a service rather than a product, but that does
                not mean refunds should be unclear. This policy explains exactly
                how money moves if an engagement changes course.
              </p>

              <h2>Audit sprints</h2>
              <p>
                If you cancel before the sprint starts, the fee is refunded in
                full. Once work has begun, the fee is non-refundable. However,
                if the delivered audit does not meet the scope promised in the
                proposal, I will either revise it until it does or refund 50%.
              </p>

              <h2>Fixed-scope projects</h2>
              <ul>
                <li>
                  <strong>Before work begins.</strong> Deposits are refunded in
                  full, less any third-party costs already incurred on your
                  behalf.
                </li>
                <li>
                  <strong>Mid-project cancellation by you.</strong> You pay for
                  completed milestones and work in progress at the agreed rate,
                  and any unearned portion of payments is refunded within 14
                  days.
                </li>
                <li>
                  <strong>Cancellation by me.</strong> If I have to end an
                  engagement for reasons within my control, all payments for
                  undelivered work are refunded in full.
                </li>
              </ul>

              <h2>Retainers</h2>
              <p>
                Retainers can be paused or cancelled at any time before the next
                billing date, with no lock-in and no cancellation fee. The
                current month is non-refundable once it has started, as capacity
                has been reserved for you.
              </p>

              <h2>What is not refundable</h2>
              <ul>
                <li>Third-party costs such as licences, apps, and hosting purchased for your project</li>
                <li>Completed and accepted milestones</li>
                <li>Delays caused by missing content, access, or approvals on the client side</li>
              </ul>

              <h2>How to request a refund</h2>
              <p>
                Email <a href={`mailto:${site.email}`}>{site.email}</a> with
                your project reference. Eligible refunds are processed within
                14 days to the original payment method.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
