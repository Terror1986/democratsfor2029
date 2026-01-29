import Container from "@/components/Container";
import { Button } from "@/components/Button";
import PillarCard from "@/components/PillarCard";
import Callout from "@/components/Callout";
import { pillars } from "@/content/pillars";

// Google Forms (live)
const CANDIDATE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehuzHmwgIKLirN0aJuoJRkKiJb4kYGP76xWlzUBjZ1IJCR_Q/viewform?usp=publish-editor";

const PERSONNEL_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScBvJEwqRadoO1Wen-KPcjZ5ppbuwUtXvs77_wbB4VXCG7mnw/viewform?usp=publish-editor";

// Formspree email signup endpoint
const FORMSPREE_URL = "https://formspree.io/f/xrekblve";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative bg-subtle-grid">
        {/* Fade the grid so it feels intentional and more “live site” */}
        <div className="pointer-events-none absolute inset-0 bg-white/70" />

        <Container>
          <div className="relative py-14 sm:py-16">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold tracking-wide text-slate-600">
                DEMOCRATS FOR 2029
              </div>

              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                A Governing Agenda for Working Families
              </h1>

              <p className="mt-4 text-lg font-semibold text-slate-700">
                Prepared. Staffed. Ready to govern on Day One.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="#signup" variant="primary">
                  Join the Movement
                </Button>
                <Button href="/platform.pdf" variant="secondary" external>
                  Read the Platform (PDF)
                </Button>
              </div>

              <p className="mt-6 text-sm text-slate-600">
                This is not a campaign site. It’s a governing blueprint.
              </p>
            </div>
          </div>
        </Container>

        {/* Subtle divider so the hero “lands” cleanly */}
        <div className="h-px w-full bg-slate-200/70" />
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Callout title="The Problem">
              Republicans entered the White House with Project 2025—a fully staffed,
              pre-written governing blueprint. Democrats won in 2020 and spent critical
              years debating priorities after the election was over. Working families
              paid the price. That failure is not acceptable again.
            </Callout>

            <Callout title="The Solution">
              Democrats for 2029 is a pre-built governing agenda. Not talking points.
              Not aspirational white papers. Actual legislation. Executive actions.
              Agency timelines. Trained personnel. Ready to deploy on Day One. If voters
              hand us power, we will not waste a single month figuring out what comes
              next. This is the Democratic equivalent of Project 2025—built for working
              families.
            </Callout>
          </div>
        </Container>
      </section>

      {/* PILLARS */}
      <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-14">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
            <div>
              <div className="text-sm font-semibold text-slate-600">Seven Pillars</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                Build the plan. Staff the plan. Execute the plan.
              </h2>
            </div>

            <div className="hidden sm:block">
              <Button href="/blueprint.pdf" variant="secondary" external>
                Full Platform (PDF)
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {pillars.map((p) => (
              <PillarCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                summary={p.summary}
                implementation={p.implementation}
              />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Button href="/platform.pdf" variant="secondary" external>
              Full Platform (PDF)
            </Button>
          </div>
        </Container>
      </section>

      {/* WHO WE ARE + SIDEBAR */}
      <section className="py-12 sm:py-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="text-sm font-semibold text-slate-600">Who We Are</div>

              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                A bench that’s ready.
              </h2>

              <p className="mt-4 text-sm text-slate-700">
                Founded by{" "}
                <span className="font-semibold text-slate-900">Matt Schoville</span>,
                Navy veteran and 2028 congressional candidate (CA-08). We are building a
                coalition of 2028 candidates who will campaign on detailed implementation
                plans—not just values.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm text-slate-700">
                  “I managed million-dollar operations in the Navy. You don’t ‘figure it
                  out’ after you take command.”
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-900">You plan.</p>
                <p className="text-sm font-semibold text-slate-900">You staff.</p>
                <p className="text-sm font-semibold text-slate-900">You execute.</p>
                <p className="mt-3 text-sm text-slate-700">
                  “Democrats need to govern like professionals.”
                </p>
                <p className="mt-3 text-xs font-semibold text-slate-600">— Matt Schoville</p>
              </div>

              <p className="mt-6 text-sm text-slate-700">
                This isn’t about one candidate. It’s about building a bench that’s ready.
              </p>
            </div>

            <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="text-sm font-extrabold tracking-tight text-slate-900">
                  Join the Coalition
                </div>

                <div className="mt-4 space-y-4 text-sm text-slate-700">
                  <div>
                    <div className="font-semibold text-slate-900">
                      Running for office in 2028?
                    </div>
                    <div className="mt-1 text-slate-600">
                      Candidates for federal, state, or major municipal office.
                    </div>
                    <div className="mt-3">
                      <Button href={CANDIDATE_FORM_URL} variant="primary" external>
                        Candidate Signup
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Policy expert or organization?
                    </div>
                    <div className="mt-1 text-slate-600">
                      Partner with us to develop implementation plans.
                    </div>
                    <div className="mt-3">
                      <Button
                        href="mailto:info@democratsfor2029.com"
                        variant="secondary"
                      >
                        Partner With Us
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      Help staff the next administration
                    </div>
                    <div className="mt-1 text-slate-600">
                      Policy, operations, legal, communications, and agency roles.
                    </div>
                    <div className="mt-3">
                      <Button href={PERSONNEL_FORM_URL} variant="secondary" external>
                        Personnel Signup
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Email signup */}
                <div
                  id="signup"
                  className="mt-8 scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="text-sm font-extrabold tracking-tight text-slate-900">
                    Stay Updated
                  </div>

                  <p className="mt-2 text-sm text-slate-600">
                    Add your email to receive platform updates and coalition announcements.
                  </p>

                  <form
                    className="mt-4 flex gap-2"
                    action={FORMSPREE_URL}
                    method="POST"
                  >
                    <input type="hidden" name="source" value="democratsfor2029-home" />
                    <input type="hidden" name="_redirect" value="/thanks" />

                    {/* honeypot */}
                    <div className="hidden">
                      <label>
                        Don’t fill this out:
                        <input name="website" />
                      </label>
                    </div>

                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-slate-300 focus:outline-none"
                    />

                    <button
                      type="submit"
                      className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Join
                    </button>
                  </form>

                  <p className="mt-2 text-xs text-slate-500">
                    You’ll receive occasional updates. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
