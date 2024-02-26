


const accountSid = process.env.TWILIO_ACCOUNT_SID || 'AC991063c4b5b2f6ea58677801dee4ab37';
const authToken = process.env.TWILIO_AUTH_TOKEN || '2bdbc8d190ed746c35c2826e0e36347b';
const client = require('twilio')(accountSid, authToken);

sendSms=(msg,num)=>{

    client.messages
  .create({
    //  body: 'You have an appointment with Owl, Inc. on Friday, November 3 at 4:00 PM. Reply C to confirm.',
    body: msg,
    from: '+14159697956',
    //  to: '+918604991151'
    to: num
   })
  .then(message => console.log(message.sid));

}

sendSms('shivam bharti','+918604991151')

module.exports=sendSms;