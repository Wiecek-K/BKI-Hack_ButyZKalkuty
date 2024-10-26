import { ResourceSchema } from '@/types/zodSchema';
import { prisma } from './prisma';

export async function createResource(resourceData: unknown) {
  const validation = ResourceSchema.safeParse(resourceData);
  if (!validation.success) {
    throw new Error('Invalid resource data: ' + JSON.stringify(validation.error.errors));
  }

  const resource = await prisma.resource.create({
    data: validation.data,
  });

  return resource;
}
