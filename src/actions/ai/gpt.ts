import { generateText, generateObject } from 'ai';
import { gptModel } from '@/lib/aisdk';
import { boolean, z } from 'zod';
import { prisma } from '@/lib/prisma';

export const generateTextWithGpt = async ({
  system,
  prompt,
}: {
  system: string;
  prompt: string;
}) => {
  'use server';
  const { text } = await generateText({
    model: gptModel,
    system,
    prompt,
  });
  return text;
};

export const generateObjectWithGpt = async ({
  schema,
  prompt,
}: {
  schema: z.ZodType;
  prompt: string;
}) => {
  'use server';
  const { object } = await generateObject({
    model: gptModel,
    schema,
    prompt,
  });
  return object;
};

// generateObjectWithGpt({
//   schema: z.object({
//     recipe: z.object({
//       name: z.string().describe('The name of our version of lasagne'),
//       ingredients: z.array(z.object({ name: z.string(), amount: z.string() })),
//       steps: z.array(z.string()),
//     }),
//   }),
//   prompt: 'Generate a lasagna recipe.',
// })

const resourceSchema = z.object({
  isAResource: z.boolean(),
});

export const checkIfItsAResource = async (smsBody: string): Promise<boolean> => {
  try {
    const response = await generateObject({
      model: gptModel,
      schema: resourceSchema,
      messages: [
        {
          role: 'system',
          content: `You work as part of a natural disaster relief force.
          Somebody has sent us an sms, and your job is to verify if its somebody requesting or offering help.
          If its somebody offering help, the isAResource field should be true.,
          This is the SMS somebody has sent us: "${smsBody}".`,
        },
      ],
    });

    const { object } = response;

    const parsedData = resourceSchema.parse(object); // Validate the object against the schema

    return parsedData.isAResource; // Return the boolean value
  } catch (error) {
    console.error('Error checking resource:', error);
    return false; // Return false in case of an error
  }
};


export const parseSmsToSchema = async (smsBody: string, isResource: boolean, city: string, state: string, country: string, zip: string): Promise<boolean> => {
  try {
    const response = await generateObject({
      model: gptModel,
      schema: isResource ? prisma.resource : prisma.need,
      messages: [
        {
          role: 'system',
          content: `You work as part of a natural disaster relief force.
          You will be provided with some data received via an sms. Your job is to read it and 
          SMS text: "${smsBody}"
          Source city: "${city}"
          Source state: "${state}"
          Source country: "${country}"
          Source ZIP: "${zip}"`,
        },
      ],
    });

    const { object } = response;

    const parsedData = resourceSchema.parse(object); // Validate the object against the schema

    return parsedData.isAResource; // Return the boolean value
  } catch (error) {
    console.error('Error checking resource:', error);
    return false; // Return false in case of an error
  }
};