import { prisma } from '@/lib/prisma';

export async function addResource(data: {
  description: string;
  category: string;
  location?: string;
  contactInfo: { name: string; phone: string };
}) {
  return await prisma.resource.create({
    data: {
      description: data.description,
      category: data.category,
      location: data.location,
      contactInfo: JSON.stringify(data.contactInfo),
    },
  });
}

export async function addNeed(data: {
    description: string;
    category: string;
    location?: string;
    contactInfo: { name: string; phone: string };
  }) {
    return await prisma.need.create({
      data: {
        description: data.description,
        category: data.category,
        location: data.location,
        contactInfo: JSON.stringify(data.contactInfo),
      },
    });
  }

  export async function getResourcesAndNeeds() {
    const resources = await prisma.resource.findMany();
    const needs = await prisma.need.findMany();
    return {
      resources: resources.map((r: { contactInfo: string; }) => ({
        ...r,
        contactInfo: JSON.parse(r.contactInfo as string),
      })),
      needs: needs.map((n: { contactInfo: string; }) => ({
        ...n,
        contactInfo: JSON.parse(n.contactInfo as string),
      })),
    };
  }