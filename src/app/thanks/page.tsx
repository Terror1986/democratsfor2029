import Container from "@/components/Container";
import { Button } from "@/components/Button";

export default function ThanksPage() {
  return (
    <main className="bg-white">
      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-600">
              Thank you
            </div>

            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              You’re on the list.
            </h1>

            <p className="mt-4 text-sm text-slate-700">
              We’ll send updates as platform documents, staffing pipelines, and
              coalition milestones go live.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/platform.pdf" variant="primary" external>
                Read the Platform
              </Button>
              <Button href="/" variant="secondary">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
