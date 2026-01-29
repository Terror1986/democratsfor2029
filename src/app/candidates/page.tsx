import Container from "@/components/Container";
import { Button } from "@/components/Button";

const CANDIDATE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSehuzHmwgIKLirN0aJuoJRkKiJb4kYGP76xWlzUBjZ1IJCR_Q/viewform?usp=sf_link";

export default function CandidatesPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-600">
              Candidates
            </div>

            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              Join the candidate coalition.
            </h1>

            <p className="mt-4 text-sm text-slate-700">
              Democrats for 2029 is a governing readiness coalition—candidates
              committed to campaigning on implementation plans, not just values.
              The goal is simple: if voters hand us power in 2028, we execute on
              Day One.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                Candidate Coalition Application
              </div>

              <p className="mt-3 text-sm text-slate-700">
                If you’re running for federal, state, or major municipal office
                in 2028 (or exploring a run), apply here. Submissions are reviewed
                on a rolling basis.
              </p>

              <div className="mt-5">
                <Button href={CANDIDATE_FORM_URL} variant="primary" external>
                  Open Candidate Application
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                This application is hosted via Google Forms and will open in a
                new tab.
              </p>
            </div>

            <div className="mt-8 text-sm text-slate-700">
              <div className="font-semibold text-slate-900">
                What we’re looking for
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Serious candidates building real governing capacity</li>
                <li>Willingness to campaign on implementation plans</li>
                <li>Commitment to a working families agenda</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
