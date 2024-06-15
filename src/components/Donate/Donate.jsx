import React, { useState, useEffect} from 'react'
import './Donate.scss';
import { Close } from '@mui/icons-material';
import axios from 'axios';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Buffer } from 'buffer'


const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};


export default function Donate() {
  
  const [phoneNumber, setPhoneNumber] = useState();
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(null);
  
  const handleClose = () => {
    if(document.querySelector('.donate').classList.contains('active')) {
      document.querySelector('.donate').classList.remove('active');
    }
  }

  const getAccessToken = async () => {
    const consumerKey = "RdEJrgnH4JrWohlITIhbaX4wGnDTzdoCYc3V7N9zGho36SI8";//yourConsumerKey
    const consumerSecret = "LvH3Y9DGBYOZIvOef7qy8cijl1Qxy9L4jGgiPXVuYdX73lesA7GmxHbkb1W9NZ3O";//yourConsumerKey
    //choose one depending on you development environment
    const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";  //sandbox
    //const url = "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",  //live
    
  try {
    const encodedCredentials = new Buffer.from(consumerKey + ":" + consumerSecret).toString('base64');
    const headers = {
      'Authorization': "Basic" + " " + encodedCredentials,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://kdan.onrender.com/',
      'mode': 'no-cors',
    }; 
    const response = await axios.get(url, { headers });
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    //throw new Error('Failed to get access token.');
  }
}


  async function sendStkPush (event) {
    event.preventDefault();
    if(!isPhoneValid(phoneNumber)){
      setError("invalid phone number");
      return;
    } 
    if(phoneNumber <= 0){
      setError("amount can not be empty");
      return;
    } 
    
    const numberArray = phoneNumber.split("");
    numberArray.shift();

    const token = await getAccessToken();
    const date = new Date();
    const timestamp =
    date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

    //you can use momentjs to generate the same in one line 

    const shortCode = 174379;//"YOUR_PAYBILL"; //sandbox -174379
    const passkey = "YOUR_PASSKEY";
    

    const stk_password = new Buffer.from(shortCode + passkey + timestamp).toString(
          "base64"
        );

    //choose one depending on you development environment
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    //const url = "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
  
    const headers = {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://kdan.onrender.com/',
      'mode': 'no-cors',
    };
  
    const requestBody = {
      "BusinessShortCode": shortCode,
      "Password": stk_password,
      "Timestamp": timestamp,
      "TransactionType": "CustomerPayBillOnline", //till "CustomerBuyGoodsOnline"
      "Amount": "10",
      "PartyA": numberArray.join(""),
      "PartyB": shortCode,
      "PhoneNumber": numberArray.join(""),
      "CallBackURL": "https://yourwebsite.co.ke/callbackurl",
      "AccountReference": "CompanyXLTD",//"account",
      "TransactionDesc": "test",
    };
  
    try {
      const response = await axios.post(url, requestBody, { headers });
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
  
  useEffect(() => {
    error && setTimeout(() => {
      setError(null);
    }, 1000);
  }, [error]);
  
  return (
    <div className='donate' id='donate'>
        <Close className='close' onClick={handleClose}/>
        <h1>Be Part Of Us</h1>
        <h4>How it works:</h4>
        <ul>
            <li>&raquo; Enter your phone number</li>
            <li>&raquo; Select the amount you wish to donate and click "SEND NOW"</li>
            <li>&raquo; Complete the transaction by entering you pin and submit</li>
        </ul>
        <form onSubmit={sendStkPush}>
            <h4>Get started:</h4>
            <label htmlFor='name'>Phone number</label>
            <PhoneInput
              defaultCountry='ke'
              value={phoneNumber}
              onChange={phone => setPhoneNumber( phone)}
              hideDropdown
              className='input'
            />
            
            <label htmlFor='amount'>Amount</label>
            <input type="number" name="amount" id="amount" placeholder={1000} required value={amount} onChange={e => setAmount(e.target.value)} min={5} step={5}/>
            <button className="btn" type='submit' role='button' title='send'>SEND NOW</button>
            {
              error && <h4 className='error'>Invalid Phone Number</h4>
            }
        </form>
    </div>
  )
}
