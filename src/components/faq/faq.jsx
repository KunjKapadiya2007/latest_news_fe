'use client'

import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function Faq() {

    const question = [
        {
            que: 'How can I start earning?',
            ans: 'To start earning click on the "Get Started" button on the EarnKaro Home page. Enter your email id, mobile number & set a password to login in. Once you\'re logged in, you will see more than 100,000+ share worthy deals. Pick a deal you like based on the product, your profit per sale, discount or price and share this link (your profit link) with anyone who would be interested in buying it. You can share as many Profit Links as you want with people on (No Suggestions), Facebook, Instagram or any other social platform. Whenever someone shops through your "Profit Link" you earn "Profit" which is "Real Cash". This cash is added to your EarnKaro Account & you can transfer it directly to your bank account in just a few clicks!'
        },
        {
            que: 'Do I need a bank account to start?',
            ans:'Yes, you need to have a bank account so that you can transfer your profit to your bank. Your profit is safe in your EarnKaro Account till you transfer it to your bank account.'
        },
        {
            que: 'When & How do I get the payment?',
            ans:'Earn profit on each sale that happens through your link. Once your Profit is Confirmed, you can request for its payment. You can track the sales coming from each Profit Link. You will see that Profit is first added to your account in pending status within 5 minutes to 72 hours of a sale. Then, depending on the retailer of the product it can take anywhere between 30 to 90 days for your Profit to get Confirmed. Confirmed Profit can be transferred to your Bank Account by going to your "Payments" section.'
        },
        {
            que: 'What kind of products are available on EarnKaro?',
            ans:'EarnKaro has a variety of products ranging from Sarees, Kurtis, Kids Wear, Home Furnishing, Electronics, Menswear & much more! Everything on EarnKaro is available at the best possible price for you to share and offers you great Profit!'
        },
        {
            que: 'Where should I share the deals?',
            ans:'Once you identify the best products, share it with your friends or family on (No Suggestions) or Facebook or Instagram. You should find products your friends or family would want to buy and share links to products with the best price & profit. For example: If your friend is looking for a new phone and you know they have a big budget, you can share a Profit Link for an iPhone. However, if your friend is looking for a budget phone you can share a Profit Link to a Xiaomi, Oppo or Vivo phone.'
        },
        {
            que: 'How do I contact your Customer Support team?',
            ans:'We\'re always here to help you out! You can call us at 8178021403 or email us at support@earnkaro.com. Our Customer Support team is available from Monday to Friday between 10 am & 6 pm IST. We guarantee a 48 hour response time, but will usually get back to you much sooner than that.'
        },
    ]

    return (
        <Box sx={{my: '40px'}}>
            <Container maxWidth="lg">
                <Box>
                    <Typography sx={{fontSize: {md: '20px', xs: '16px', sm: '18px'}, mb: '15px', fontWeight: 700}}>
                        FAQ
                    </Typography>
                    <Box>
                        {question?.map((question, index) => (
                            <Box  key={index} sx={{mb:'13px'}}>
                                <Typography sx={{color:'#333333' , fontSize: {md:'16px' , xs:'14px'} , mb:'8px' ,fontWeight:600 , lineHeight:'25px'}}>
                                    {question.que}
                                </Typography>
                                <Typography sx={{fontSize:{xs:'12px' , md:'14px'} , mb:'8px' , lineHeight:'24px' , fontWeight:400 , color:'#333333'}}>
                                    {question.ans}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Faq;