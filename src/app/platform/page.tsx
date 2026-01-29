import Container from "@/components/Container";
import PillarCard from "@/components/PillarCard";
import { pillars } from "@/content/pillars";
import { Button } from "@/components/Button";

export default function PlatformPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-600">Platform</div>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              A pre-built governing agenda.
            </h1>
            <p className="mt-4 text-sm text-slate-700">
              This is not a list of promises. It’s a governing blueprint: legislation, executive actions,
              agency timelines, and a trained personnel pipeline—ready to deploy on Day One.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="https://example.com/REPLACE_PLATFORM_PDF" variant="primary" external>
                Download PDF (Coming Soon)
              </Button>
              <Button href="/candidates" variant="secondary">
                Candidate Coalition
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
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

          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
            <div className="font-extrabold tracking-tight text-slate-900">Next deliverables</div>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>First 100 Days Playbook (executive actions + agency priorities)</li>
              <li>Pillar memos with implementation timelines and budget logic</li>
              <li>Personnel pipeline for agencies and transition roles</li>
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
