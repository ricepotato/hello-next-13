import prisma from "./prisma";
import { Prisma } from "@prisma/client";

export async function getPlans(where: any) {
  return await prisma.plan.findMany();
}

export async function insertPlan(plan: {
  id?: string;
  name: string;
  type: string;
  description?: string | null;
  daily_api_call: number;
  active_account: number;
  price: number;
  charge_per_exceed: number;
  created_at?: Date | string;
  updated_at?: Date | string;
}) {
  const newPlan = prisma.plan.create({ data: plan });
}
