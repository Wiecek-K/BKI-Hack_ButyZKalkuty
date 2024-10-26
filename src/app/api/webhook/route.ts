// app/api/webhook/route.ts
import { checkIfItsAResource, parseSmsToSchema } from '@/actions/ai/gpt';
import { addResource } from '@/actions/resourceNeedHandler';
import { prisma } from '@/lib/prisma';
import { NeedSchema, ResourceSchema } from '@/types/zodSchema';
import { NextResponse } from 'next/server';
import querystring from 'querystring';

export async function POST(req: Request) {
  // Collect raw data from the request
  const rawBody = await req.text(); // Read the body as a string

  // Parse the raw body as URL-encoded form data
  const parsedBody = querystring.parse(rawBody);

  // Extract relevant fields from Twilio's request
  const {
    Body,
    From,
    To,
    SmsSid,
    SmsStatus,
    AccountSid,
    MessageSid,
    NumMedia,
    ToCountry,
    ToState,
    ToCity,
    FromCountry,
    FromState,
    FromCity,
    NumSegments,
    ToZip,
    FromZip,
    ApiVersion,
  } = parsedBody;

  // Process the extracted data as needed
  console.log(`Received SMS from ${From}: ${Body}`);
  console.log(`Sent to: ${To}`);
  console.log(`SMS SID: ${SmsSid}`);
  console.log(`Status: ${SmsStatus}`);
  console.log(`Account SID: ${AccountSid}`);
  console.log(`Message SID: ${MessageSid}`);
  console.log(`Number of Media: ${NumMedia}`);
  console.log(`Destination Country: ${ToCountry}`);
  console.log(`Destination State: ${ToState}`);
  console.log(`Destination City: ${ToCity}`);
  console.log(`Source Country: ${FromCountry}`);
  console.log(`Source State: ${FromState}`);
  console.log(`Source City: ${FromCity}`);
  console.log(`Number of Segments: ${NumSegments}`);
  console.log(`Destination ZIP: ${ToZip}`);
  console.log(`Source ZIP: ${FromZip}`);
  console.log(`API Version: ${ApiVersion}`);

  callOpenAIAPI(
    Body?.toString() || 'mam worki z piaskiem do oddania',
    From?.toString() || '123456798',
    FromCity?.toString() || 'nowy jork',
    FromState?.toString() || 'nowy jork',
    FromCountry?.toString() || 'polska',
    FromZip?.toString() || '69-666',
  );

  // Return a 200 OK response to Twilio to acknowledge receipt
  return NextResponse.json({ message: 'SMS received' }, { status: 200 });
}

async function callOpenAIAPI(
  body: string,
  from: string,
  city: string,
  state: string,
  country: string,
  zip: string,
) {
  console.log("\n\n\nTESTTESTTEST\n\n\n");
  console.log("\n\n\nTESTTESTTEST\n\n\n");
  console.log("\n\n\nTESTTESTTEST\n\n\n");
  
  const isAResource = await checkIfItsAResource(body);
  const schemaToParse = isAResource ? ResourceSchema : NeedSchema;
  const aiResponse = await parseSmsToSchema(body, isAResource, city, state, country, zip);
  const parsedAiResponse = schemaToParse.safeParse(aiResponse);

  if (!parsedAiResponse.success) {
    console.error('Validation errors for Resource:', parsedAiResponse.error.errors);
  } else {
    console.log('Resource data is valid:', parsedAiResponse.data);

    if(isAResource){
      await addResource(parsedAiResponse.data)
    }

  }


  
}
