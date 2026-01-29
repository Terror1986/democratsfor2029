export default function Footer() {
  return (
    <footer className="border-t border-navy-light bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="text-sm font-black text-white">
              Democrats for 2029
            </div>
            <p className="mt-2 text-sm text-patriot-cream/70">
              A governing agenda for working families.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-bold text-white">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-patriot-cream/80">
              <div>
                <a href="mailto:info@democratsfor2029.com" className="hover:text-white transition-colors">
                  info@democratsfor2029.com
                </a>
              </div>
              <div>
                <a href="mailto:press@democratsfor2029.com" className="hover:text-white transition-colors">
                  press@democratsfor2029.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-patriot-cream/70">
            <p>© 2026 Democrats for 2029</p>
            <p className="mt-2">
              Built for working families, by working families.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}