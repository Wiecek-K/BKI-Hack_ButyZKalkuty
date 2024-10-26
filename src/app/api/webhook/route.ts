// app/api/webhook/route.js
import { NextRequest, NextResponse } from 'next/server';
import querystring from 'querystring';

export const config = {
    api: {
        bodyParser: false, // Disable default JSON parsing
    },
};

export async function POST(req: NextRequest) {
    // Collect raw data from the request
    const rawBody = await req.text(); // Use .text() to read the body as a string

    // Parse the raw body as URL-encoded form data
    const parsedBody = querystring.parse(rawBody);

    // Extract relevant fields from Twilio's request
    const { Body, From, To } = parsedBody;

    // Log or process the data as needed
    console.log(`Received SMS from ${From}: ${Body}`);
    console.log(`Sent to: ${To}`);

    // Return a 200 OK response to Twilio to acknowledge receipt
    return NextResponse.json({ message: 'SMS received' }, { status: 200 });
}
