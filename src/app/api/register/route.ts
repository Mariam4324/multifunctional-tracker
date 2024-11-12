import { NextResponse } from "next/server";
import { schema } from "../../../../lib/types";

export async function POST(request: Request) {
  const body: unknown = await request.json();

  const result = schema.safeParse(body);

    if (!result.success) {
      
  }

  return NextResponse.json({});
}
