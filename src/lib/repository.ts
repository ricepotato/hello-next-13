import prisma from "./prisma";

export async function getPlans(where: any) {
  const plans = await prisma.plan.findMany();
  return plans;
}

export async function insertPlan(
  name: string,
  description: string,
  dailyApiCall: number,
  activeAccount: number,
  price: number,
  chargePerExcess: number
) {
  const plan = await prisma.plan.create({
    data: {
      name,
      description,
      dailyApiCall,
      activeAccount,
      price,
      chargePerExcess,
    },
  });
  return plan;
}
