import { NextResponse } from "next/server";
import { isValid } from "@telegram-apps/init-data-node";

export const runtime='edge'
export async function GET() {
  const token = "7083792185:AAG_vXlU-riNirXpzu4aNATvFZCLCwCgqas";
  const initData =
    "user=%7B%22id%22%3A1055841612%2C%22first_name%22%3A%22Pri%22%2C%22last_name%22%3A%22Sri%22%2C%22username%22%3A%22prisri_org%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%2C%22photo_url%22%3A%22https%3A%5C%2F%5C%2Ft.me%5C%2Fi%5C%2Fuserpic%5C%2F320%5C%2FEZBk_Qf5JWA9LrwjwZAgPVf1IOFDZXt70KoXy4DR3Eo.svg%22%7D&chat_instance=-957272263859148134&chat_type=private&auth_date=1735239281&signature=uhaFlFAUEwK7FSbW96rQaexYm7UT2GNwrT7msxzfF7QirCy46HJkkgCIZXEUZa8iWTHkmCzW0xN7KPBJnLBoBA&hash=c5c2e367e263e29dbb32bce8dda4835eb624974219c0e989f0433a3ae96c6524";
  const ddd = isValid(initData, token);
  return NextResponse.json({ ddd });
}
