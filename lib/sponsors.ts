import fs from "fs/promises";
import path from "path";
import type { Sponsor } from "@/types/sponsor";

const dataPath = path.join(process.cwd(), "data", "sponsors.json");

export async function getSponsors(): Promise<Sponsor[]> {
  const raw = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(raw) as Sponsor[];
}
