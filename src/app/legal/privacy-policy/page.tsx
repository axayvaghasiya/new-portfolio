import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-gradient-green">Policy</span>
          </>
        }
        description="Last updated: 6 July 2026"
      />
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="prose-dark">
              <p>
                This website is operated by {site.name} (&quot;I&quot;,
                &quot;me&quot;). I take your privacy seriously and collect the
                minimum information needed to respond to enquiries and improve
                the site. This policy explains what is collected, why it is
                collected, and the choices available to you.
              </p>

              <h2>Information I collect</h2>
              <ul>
                <li>
                  <strong>Contact details you provide.</strong> When you use
                  the contact form or email me, I receive your name, email
                  address, company, and the contents of your message.
                </li>
                <li>
                  <strong>Usage data.</strong> Standard, privacy-respecting
                  analytics may record the pages visited, the referring site,
                  the browser type, and the approximate region. No cross-site
                  tracking profiles are built.
                </li>
              </ul>

              <h2>How your information is used</h2>
              <ul>
                <li>To respond to your enquiry and discuss potential work</li>
                <li>To prepare proposals and deliver contracted services</li>
                <li>To understand which content is useful and improve the site</li>
                <li>To meet legal, accounting, or tax obligations</li>
              </ul>
              <p>
                I do not sell, rent, or trade your personal information under
                any circumstances.
              </p>

              <h2>Data sharing</h2>
              <p>
                Information is shared only with the service providers strictly
                necessary to operate this site and my business, such as email
                and hosting providers, each bound by their own privacy
                obligations. Information may also be disclosed where required by
                law.
              </p>

              <h2>Data retention</h2>
              <p>
                Enquiry emails are retained for as long as is needed to manage
                our conversation and any resulting engagement. Records relating
                to contracted work are kept for as long as required for
                accounting and legal purposes, and then deleted.
              </p>

              <h2>Cookies</h2>
              <p>
                This site does not use advertising cookies. Any cookies present
                are strictly functional or used for anonymous analytics.
              </p>

              <h2>Your rights</h2>
              <p>
                You may request a copy of the personal data I hold about you,
                ask for it to be corrected, or ask for it to be deleted.
                Email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> and I will
                action the request within 30 days.
              </p>

              <h2>Changes to this policy</h2>
              <p>
                If this policy changes materially, the &quot;last updated&quot;
                date above will change accordingly. Continued use of the site
                after any change constitutes acceptance of the updated policy.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
