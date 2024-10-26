import { prisma } from '@/lib/prisma';
// import { ResourceCategory } from '@prisma/client';
import { ResourceCategoryEnum} from '../types/zodSchema'
export async function addResource(data: {
  description: string;
  category: typeof ResourceCategoryEnum;
  location?: string;
  contactInfo: { name: string; phone: string };
  phoneNumber: number;
}) {
  return await prisma.resource.create({
    data: {
      description: data.description,
      category: data.category,
      location: data.location,
      phoneNumber: data.phoneNumber,
      // contactInfo: JSON.stringify(data.contactInfo),
    },
  });
}

export async function addNeed(data: {
  description: string;
  category: typeof ResourceCategoryEnum;
  location?: string;
  contactInfo: { name: string; phone: string };
  phoneNumber: number;
}) {
  return await prisma.need.create({
    data: {
      description: data.description,
      category: data.category,
      location: data.location,
      phoneNumber: data.phoneNumber,
      // contactInfo: JSON.stringify(data.contactInfo),
    },
  });
}

// export async function getResourcesAndNeeds() {
//   const resources = await prisma.resource.findMany();
//   const needs = await prisma.need.findMany();
//   return {
//     resources: resources.map((r: { contactInfo: any }) => ({
//       ...r,
//       contactInfo: JSON.parse(r.contactInfo as any),
//     })),
//     needs: needs.map((n: { contactInfo: any }) => ({
//       ...n,
//       contactInfo: JSON.parse(n.contactInfo as any),
//     })),
//   };
// }
