import Container from "@/components/Container";
import { Button } from "@/components/Button";

export default function PersonnelPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-600">
              Personnel
            </div>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              Staff the next administration.
            </h1>

            <p className="mt-4 text-sm text-slate-700">
              Build a serious personnel pipeline for Day One governance: policy,
              operations, legal, communications, and agency roles. The goal is
              readiness—trained people matched to real work.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm font-extrabold tracking-tight text-slate-900">
                Join the Personnel Pipeline
              </div>

              <p className="mt-3 text-sm text-slate-700">
                Share your background, expertise, and interest in contributing to
                a pre-built governing agenda with implementation plans ready on
                Day One.
              </p>

              <div className="mt-5">
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLScBvJEwqRadoO1Wen-KPcjZ5ppbuwUtXvs77_wbB4VXCG7mnw/viewform?usp=sf_link"
                  variant="primary"
                  external
                >
                  Open Personnel Form
                </Button>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                This form is hosted by Google Forms and will open in a new tab.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
