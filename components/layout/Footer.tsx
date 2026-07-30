import { APP_CONFIG } from "@/config";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex min-h-16 items-center justify-center py-4 text-center text-sm text-slate-500">
          {APP_CONFIG.shortName} · {APP_CONFIG.name}
        </div>
      </Container>
    </footer>
  );
}