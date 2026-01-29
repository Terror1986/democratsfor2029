import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-600">About</div>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
              Govern like professionals.
            </h1>

            <p className="mt-4 text-sm text-slate-700">
              Democrats for 2029 exists to solve a discipline problem: winning elections is not enough.
              Governing requires pre-written plans, vetted personnel, and timelines ready to execute on Day One.
            </p>

            <p className="mt-4 text-sm text-slate-700">
              Founded by <span className="font-semibold text-slate-900">Matt Schoville</span>, Navy veteran and
              2028 congressional candidate (CA-08), this effort is not about one person. It is about building
              a bench—and a governing blueprint—that can deliver for working families immediately.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
              <div className="font-extrabold tracking-tight text-slate-900">Contact</div>
              <div className="mt-3 space-y-2">
                <div>
                  General:{" "}
                  <a className="font-semibold text-slate-900 hover:underline" href="mailto:info@democratsfor2029.com">
                    info@democratsfor2029.com
                  </a>
                </div>
                <div>
                  Press:{" "}
                  <a className="font-semibold text-slate-900 hover:underline" href="mailto:press@democratsfor2029.com">
                    press@democratsfor2029.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
