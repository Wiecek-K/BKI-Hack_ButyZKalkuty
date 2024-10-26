import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // try {
    const data = await req.json();

    // Process the webhook payload here
    console.log('Received webhook:', data);

    // Respond with success
    return NextResponse.json({ message: 'Webhook received successfully' }, { status: 200 });
  // } catch (error) {
  //   console.error('Error processing webhook:', error);
  //   return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  // }
}

/**    const { Body, From, To } = req.body;  // Body contains the SMS message, From is the sender's number, and To is your Twilio number.

    // Log the data to verify it’s received correctly
    console.log('Received SMS:', Body);
    console.log('From:', From);
    console.log('To:', To);

    // Optionally, process the message (e.g., save to database, trigger a response, etc.)

    // Respond with a 200 OK to acknowledge receipt
    res.status(200).json({ message: 'SMS received' });
    
    
    */