import { createClient } from "@/lib/supabase/server";
import { logout } from "@/server/actions/auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-400">
            Olá, {user?.user_metadata?.name || user?.email} 👋
          </h1>
          <form action={logout}>
            <Button
              variant="outline"
              className="text-slate-300 border-slate-700"
            >
              Sair
            </Button>
          </form>
        </div>
        <div className="p-6 bg-slate-900 rounded-lg border border-slate-800">
          <p className="text-slate-400">
            Aqui vai ficar o resumo das suas finanças. Em breve!
          </p>
        </div>
      </div>
    </div>
  );
}
