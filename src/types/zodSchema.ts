import { z } from 'zod';

// Define an enum for ResourceCategory if it exists in your schema
// Adjust the enum values according to your actual ResourceCategory definitions
export const ResourceCategoryEnum = z.enum([
  'FOOD_AND_WATER',
  'MEDICINE',
  'CLOTHING_AND_BLANKETS',
  'TRANSPORT_AND_LOGISTICS',
  'CHEMICALS',
  'BUILDING_MATERIALS',
  'TOOLS_AND_EQUIPMENT',
  'INFORMATION_AND_COMMUNICATION',
  'PSYCHOLOGICAL_AND_LEGAL_SUPPORT',
  'OTHER',
]);

// Zod schema for Resource
export const ResourceSchema = z.object({
  id: z.string().uuid(), // or z.string().cuid() if you want to use cuid()
  description: z.string(),
  category: ResourceCategoryEnum,
  location: z.string().optional(),
  phoneNumber: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ResourceType = z.infer<typeof ResourceSchema>

// Zod schema for Need
export const NeedSchema = z.object({
  id: z.string().uuid(), // or z.string().cuid() if you want to use cuid()
  description: z.string(),
  category: ResourceCategoryEnum,
  location: z.string().optional(),
  phoneNumber: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type NeedType = z.infer<typeof NeedSchema>

