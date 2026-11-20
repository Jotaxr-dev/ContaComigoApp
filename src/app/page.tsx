import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-4">
      <Card className="w-full max-w-sm bg-slate-900 text-white border-slate-800">
        <CardHeader>
          <CardTitle className="text-emerald-400">Conta Comigo 💰</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-slate-400">
            Fundação pronta! shadcn/ui funcionando.
          </p>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
            Botão de Teste
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
