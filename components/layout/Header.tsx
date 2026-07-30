import Link from "next/link";

import { APP_CONFIG } from "@/config";
import { Container } from "@/components/ui";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
              TES
            </div>

            <div>
              <div className="font-semibold leading-tight text-slate-900">
                {APP_CONFIG.shortName}
              </div>

              <div className="hidden text-sm text-slate-500 sm:block">
                {APP_CONFIG.name}
              </div>
            </div>
          </Link>

          <div className="text-sm text-slate-500">
            Prototype v2
          </div>
        </div>
      </Container>
    </header>
  );
}