// app/api/webhook/route.ts
import { prisma } from '@/lib/prisma';
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
      ApiVersion
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


  callOpenAIAPI(Body?.toString() || "", From?.toString() || "", To?.toString() || "", SmsSid?.toString() || "", SmsStatus?.toString() || "");


    // Return a 200 OK response to Twilio to acknowledge receipt
    return NextResponse.json({ message: 'SMS received' }, { status: 200 });
}


async function callOpenAIAPI(body: string, from: string, to: string, smsSid: string, smsStatus: string) {


}