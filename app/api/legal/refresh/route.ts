import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

/** Cron / ручной запуск: обновить ISR страницы нормативной базы */
export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && auth !== `Bearer ${cronSecret}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("legal-drafts");
  revalidatePath("/normativnaya-baza");

  return Response.json({
    ok: true,
    revalidatedAt: new Date().toISOString(),
    paths: ["/normativnaya-baza"]
  });
}
