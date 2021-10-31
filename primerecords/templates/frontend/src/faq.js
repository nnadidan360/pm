import React from 'react'

function faq() {
    return (
        <div>
            <main>
                <section id="faq-hero-bg">
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                                <div class="col-md-10 text-center d-flex flex-column pb-5 pt-0 pt-md-3 pt-lg-5">
                                    <h1 style={{color:"#fff", fontSize:"2.5rem", lineHeight:"1"}}>Help Center (FAQ)</h1>
                                </div>
                            
                                <div class="col-lg-4 d-flex flex-column align-items-center faq-contact-infor">
                                    <div class="svg d-flex all-center mb-4">
                                        <i class="fas fa-globe-americas d-flex all-center"></i>
                                    </div>
                                    <h6 class="text-center">PRIME MINNERS Ltd</h6>
                                </div>
                                <div class="col-lg-4 d-flex flex-column align-items-center faq-contact-infor">
                                    <div class="svg d-flex all-center mb-4">
                                        <i class="fas fa-envelope d-flex all-center"></i>
                                    </div>
                                    <h6>Get in touch</h6>
                                    <p class="m-0 text-center">Feel free to get in touch with us via email</p>
                                    <p class="m-0 text-center"><a class="ml-0" target="blank" href="mailto:" role="button"><span></span></a></p>
                                </div>
                                <div class="col-lg-4 d-flex flex-column align-items-center faq-contact-infor">
                                    <div class="svg d-flex all-center mb-4">
                                        <i class="fas fa-share-alt d-flex all-center"></i>
                                    </div>
                                    <h6>Conecting with us</h6>
                                    <li class="d-flex align-items-center">				
                                        
                                        {/* <a href="https://t.me/cryptominingbiz" class="social-btn d-flex all-center m-1"><i class="fab fa-telegram-plane"></i></a>		 */}
                                            
                                    </li>
                                </div>
                                
                                
                        </div>
                    </div>
                </section>

                <section id="about-tabs">
                        <div class="container">
                            <div class="row faq_page">
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                {/* <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">COMPANY INFORMATION</h6>
                                    <div class="accordion" id="accordion_1">

                                        {/* <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_1">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_1" aria-expanded="true" aria-controls="qa_1">
                                                        <i class="fas fa-caret-down pr-3"></i> Are you a registered company? 
                                                    </span>
                                            </div>
                                            <div id="qa_1" class="collapse" aria-labelledby="q_1" data-parent="#accordion_1">
                                                <div class="card-body">
                                                    Yes, Crypto Mining is an officially registered, UK-based cloud crypto mining initiative that prides itself on the security of its users.  
                                                    PRIME MINNERS LTD <a class="ml-0" target="blank"  role="button"></a>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>			
                                </div> */}
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">ACCOUNT INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">




                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_2">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_2" aria-expanded="true" aria-controls="qa_2">
                                                        <i class="fas fa-caret-down pr-3"></i> How do I make a new account?
                                                    </span>
                                            </div>
                                            <div id="qa_2" class="collapse" aria-labelledby="q_2" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Opening a new PRIME MINNERS account is easy. Just fill enter your details on the form and quickly choose your plan.<br />
                                                    Once you have agreed to Crypto Mining’s terms and conditions, you will receive a confirmation email asking that you verify your email address. If you do not receive a confirmation email, please check your spam folder and adjust your email settings to ensure you don’t miss out on exciting future opportunities reserved for our newsletter recipients.<br>
                                                    Once you have followed this, you will have access to your new Crypto Mining account section and be able to begin enjoying the profitable world of Crypto Mining!
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_3">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_3" aria-expanded="true" aria-controls="qa_3">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How can I erase my account?
                                                    </span>
                                            </div>
                                            <div id="qa_3" class="collapse" aria-labelledby="q_3" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    In the unfortunate occasion that you wish to end your time with Crypto Mining, closing your account could not be easier. Just get in touch with our friendly customer support team and let them know that you wish to terminate your account.<br>
                                                    Please remember that if you terminate your account you will permanently lose your stored details and any funds. 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_4">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_4" aria-expanded="true" aria-controls="qa_4">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How do I unlock my account?
                                                    </span>
                                            </div>
                                            <div id="qa_4" class="collapse" aria-labelledby="q_4" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    The Crypto Mining customer support team reserves the ability to unlock your Crypto Mining account for security reasons. If you require this service, simply use the web contact form to submit a ticket to customer support. We will contact you using your Crypto Mining account linked email to alert you when your account has been successfully unlocked and is ready for use once more.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_5">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_5" aria-expanded="true" aria-controls="qa_5">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        What can I do if I forget my 2FA code?
                                                    </span>
                                            </div>
                                            <div id="qa_5" class="collapse" aria-labelledby="q_5" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Due to security measures, Crypto Mining can only deactivate 2FA codes once approved following a discussion between yourself and a member of the Crypto Mining customer support team. If you require this service, simply submit a ticket using the web contact form using the appropriate topic for a faster response. We will contact you using your Crypto Mining account linked email to let you know when your account has been successfully unlocked and is ready for use once more.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_6">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_6" aria-expanded="true" aria-controls="qa_6">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How do I update my email address?
                                                    </span>
                                            </div>
                                            <div id="qa_6" class="collapse" aria-labelledby="q_6" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    To update your email address, you first need to complete Crypto Mining’s identification protocol for the protection of your personal information and assets. If you require this, simply submit a ticket using the web contact form below using the appropriate topics – be sure to specify whether or not you still have access to your existing linked email.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">WALLET INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_7">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_7" aria-expanded="true" aria-controls="qa_7">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Is it possible to set up a new wallet?
                                                    </span>
                                            </div>
                                            <div id="qa_7" class="collapse" aria-labelledby="q_7" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    At current, Crypto Mining does not provide a wallet service. We cannot recommend any specific wallet, only suggest you do your own research to discover the wallet that best suits your needs. We do however feature explanations on different types of crypto wallet available as a starting point for your research. Please be aware that it can take up to 48 hours for changes in linked wallets to be recognised by your Crypto Mining account.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_8">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_8" aria-expanded="true" aria-controls="qa_8">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        What are the payment methods and limits by which you operate?
                                                    </span>
                                            </div>
                                            <div id="qa_8" class="collapse" aria-labelledby="q_8" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Please find an overall list of our payment methods and limits below. <br>
                                                    Crypto Mining accepts payment methods including credit/debit card (Visa, Mastercard) and cryptocurrency (Bitcoin, Bitcoin Cash, Zcash, Litecoin, Dogecoin).<br><br>

                                                    Card limits: <br />
                                                    - 5 purchases per day<br>
                                                    - 10 purchases per week<br>
                                                    - 10 USD minimum purchase<br>
                                                    - 6000 USD transaction limit<br>
                                                    - 25000 USD daily/monthly purchase limit<br><br>

                                                    Crypto limits:<br />
                                                    - Unlimited purchases per day<br>
                                                    - Unlimited purchases per week<br>
                                                    - Unlimited minimum purchase<br>
                                                    - Unlimited transaction limit<br>
                                                    - Unlimited daily/monthly purchase limit<br><br>
                                                    Please be aware that certain banks charge an additional fee to those purchasing cryptocurrencies or related services. This is called Cash Advance, though it is uncommon. If you are concerned, please contact your bank for further information. <br>
                                                    If you wish for further clarification on any of the above information, please do not hesitate to reach out to our friendly customer support for a swift resolution. 

                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                    </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">MINING INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">	
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_9">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_9" aria-expanded="true" aria-controls="qa_9">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Where are my mining outputs?
                                                    </span>
                                            </div>
                                            <div id="qa_9" class="collapse" aria-labelledby="q_9" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    There are occasional slight delays in the receipt of mining outputs following purchase. Please see below for a list of the main reasons. If you do not find your answer, please reach out to our friendly customer support for an efficient resolution. 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_10">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_10" aria-expanded="true" aria-controls="qa_10">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        I paid for my contract via debit/credit card within the last month
                                                    </span>
                                            </div>
                                            <div id="qa_10" class="collapse" aria-labelledby="q_10" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Please be aware that mining returns purchased via debit/credit card are held for 30 days before release due to security reasons. 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_11">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_11" aria-expanded="true" aria-controls="qa_11">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        I bought my contract in the past 48 hours
                                                    </span>
                                            </div>
                                            <div id="qa_11" class="collapse" aria-labelledby="q_11" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Usual mining output receipt time is 24 hours following mining day. Due to timezone overlaps and mining days running 00:00-23:59 UTC, please wait up to 48 hours to receive your initial mining input. For follow-up purchases, you can expect to receive your outputs each day.<br>
                                                    If, however, you have purchased a contract in a time of presale, you will receive your outputs at the time specified by the offer.<br>
                                                    Once this holding period has passed, you will receive your outputs within 48 hours. For follow-up purchases, you can expect to receive your outputs each day. If you are uncertain, please reach out to our customer support.<br>
                                                    Please remember that outputs are automatically conducted every 24 hours but final transfers occur only once your account’s minimal transfer amounts have been met.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_12">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_12" aria-expanded="true" aria-controls="qa_12">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        In the past 24 hours I’ve received no mining outputs
                                                    </span>
                                            </div>
                                            <div id="qa_12" class="collapse" aria-labelledby="q_12" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Occasionally mining outputs can be slightly delayed due to ongoing work by our team to boost your mining performance. Such platform fluctuation is normal and nothing to be concerned about with your asset security as our top priority. <br>
                                                    In the same manner, you might receive your daily mining outputs slightly quicker than 24 hours since the last receipt.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_13">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_13" aria-expanded="true" aria-controls="qa_13">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        I changed my wallet address recently
                                                    </span>
                                            </div>
                                            <div id="qa_13" class="collapse" aria-labelledby="q_13" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Simply head to your account section and check that your new wallet address is correct. If it is, and you have not received your outputs for any other reason, please reach out to our customer support.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">RETURNS INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">	
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_14">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_14" aria-expanded="true" aria-controls="qa_14">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you tell me the expected returns?
                                                    </span>
                                            </div>
                                            <div id="qa_14" class="collapse" aria-labelledby="q_14" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    We cannot make any concrete statements regarding your contract’s performance due to the flexibility of the crypto mining market. <br>
                                                    However, we can provide a general explanation of mining scenarios and their potential avenues, plus provide guidance on generating your own predictions with some level of accuracy.<br>
                                                    Please remember that pre-agreed Crypto Mining maintenance fees should be factored in when calculating the performance of your mining enterprise. <br>
                                                    Please also remember that individual networks and valuators within the crypto market will offer differing valuations and appreciations of network performance regarding the specific cryptocurrencies being mined.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_15">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_15" aria-expanded="true" aria-controls="qa_15">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you please explain why my mining output is dropping?
                                                    </span>
                                            </div>
                                            <div id="qa_15" class="collapse" aria-labelledby="q_15" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining users recognise the volatility of the crypto markets and understand we have no outright control over the rewards you enjoy. Occasionally they are less than expected, often they are greater than expected. Reasons for the drop in your mining output performance are mostly temporary and with excellent potential to reverse. If you are concerned by your contract’s performance, please contact our customer support for a swift explanation and sound resolution.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_16">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_16" aria-expanded="true" aria-controls="qa_16">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How frequent is the payment?
                                                    </span>
                                            </div>
                                            <div id="qa_16" class="collapse" aria-labelledby="q_16" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining contracts are a simple one time only payment. Certain variations of contract will have a maintenance fee that will be deducted from your mining outputs. These will be expressed clearly to you before you agree to any contract.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                                </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">ALLOCATION</h6>
                                    <div class="accordion" id="accordion_2">	
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_17">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_17" aria-expanded="true" aria-controls="qa_17">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Why’s my allocation reverting to BTC (SHA-256)?
                                                    </span>
                                            </div>
                                            <div id="qa_17" class="collapse" aria-labelledby="q_17" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Don’t worry, it is only in appearance that the allocation is switching back. SHA-256 is the default allocation that will be shown when viewing your mining allocation. Simply click on the allocation tab referring to the currency you are mining to enjoy an accurate allocation reportage. If you are unsure, please reach out to our friendly customer support team.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_18">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_18" aria-expanded="true" aria-controls="qa_18">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain which coins can be mined using each algorithm?
                                                    </span>
                                            </div>
                                            <div id="qa_18" class="collapse" aria-labelledby="q_18" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Certainly – to make this clear to each Crypto Mining user, we have included the table below where you can find allthe information you need. If you are confused or require guidance, please raise a ticket with our friendly customer support staff and they will be delighted to guide you in the right direction.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_19">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_19" aria-expanded="true" aria-controls="qa_19">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Please explain how your allocation works and the relevance of AUTO?
                                                    </span>
                                            </div>
                                            <div id="qa_19" class="collapse" aria-labelledby="q_19" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    The algorithm that you choose to use in your mining contract can only be used to mine select cryptocurrencies. Discover which cryptos can be mined by your chosen algorithm below:<br><br>
                                                    SHA-256 &gt; BTC, BCH<br>
                                                    Ethereum &gt; ETH, ETC<br>
                                                    Zcash &gt; ZEC<br>
                                                    X11 &gt; DASH<br>
                                                    Scrypt &gt; LTC, DOGE<br>
                                                    CryptoNight-R &gt; XMR<br>
                                                    CryptoNightV0 &gt; XMC<br><br>
                                                    AUTO refers to coins that are indirectly mined rather than direct mining as per the above cryptocurrencies. AUTO coins run on a variable daily exchange rate. 

                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                                    </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">CONTRACTS INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_20">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_20" aria-expanded="true" aria-controls="qa_20">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Please can you explain the architectures and algorithms used by Crypto Mining?
                                                    </span>
                                            </div>
                                            <div id="qa_20" class="collapse" aria-labelledby="q_20" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    As you may know, most cryptocurrency protocols draw on specific or semi-specific architecture types and proof- of-work algorithms to fulfil the rules of their blockchain. At Crypto Mining, we use the following (see table):<br>
                                                    The crypto markets are incredibly fast paced with expected and unexpected changes occurring. Please be aware that developers may alter mining factors that prompt Crypto Mining’s expert team to take a different chip route with regards to mining your chosen cryptocurrencies. We will of course update you on all changes relevant to your contract by email.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_21">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_21" aria-expanded="true" aria-controls="qa_21">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How do I get started mining?
                                                    </span>
                                            </div>
                                            <div id="qa_21" class="collapse" aria-labelledby="q_21" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Simply select the coin you’d like to mine, purchase a contract and you’re on your way. <br><br>
                                                    - First, purchase your hashpower following the instructions in your Crypto Mining account area<br>
                                                    - Choose your preferred payment method from cryptocurrency or debit/credit card<br>
                                                    - Select your hashrate<br>
                                                    - Review order and approve terms and conditions<br>
                                                    - If you have a promo code, you can insert it before you confirm your order<br>
                                                    - Time to confirm your order!<br><br>
                                                    For those paying via cryptocurrency, send the correct amount to the address provided. It is best to complete this as soon as possible as there is a chance that your order may expire 30 mins or less after setting up. If this occurs, please get in touch with customer support so that they may manually approve your order.<br>
                                                    For those paying via debit/credit card, simply follow onscreen instructions including identification check procedures. <br>
                                                    Once your payment has been authorised, your mining order will be fulfilled and displayed on your Crypto Mining page. If this does not occur, please get in touch with customer support so that they may manually approve your order.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_22">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_22" aria-expanded="true" aria-controls="qa_22">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain the maintenance fee?
                                                    </span>
                                            </div>
                                            <div id="qa_22" class="collapse" aria-labelledby="q_22" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Certain Crypto Mining contracts feature maintenance fees that partially support operational costs our end including cooling, electrical bills, physical maintenance and hosting services plus other essential operational elements.<br>
                                                    The amount will be expressed clearly to you before you agree to any contract, and will be deducted in your chosen coin’s equivalent of the maintenance fee’s fixed USD value.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_23">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_23" aria-expanded="true" aria-controls="qa_23">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain what it means by open-ended contract?
                                                    </span>
                                            </div>
                                            <div id="qa_23" class="collapse" aria-labelledby="q_23" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining’s open-ended contracts are affected by three factors: difficult of mining, exchange rate of BTC and USD, and maintenance fees (daily). <br>
                                                    The first two factors are outside of Crypto Mining’s control with any issue mitigated by our pledge to always use the most powerful technologies available to us.<br>
                                                    The latter factor, the maintenance fee, is in place to partially support operational costs our end including cooling, electrical bills, physical maintenance and hosting services plus other essential operational elements.<br>
                                                    If the fee exceeds that of your mining output, your mining output will drop to zero. We will then support the contract for 60 days in case it returns to activity (due to crypto price increase or mining difficulty decrease).<br>
                                                    If this does not occur, the contract will be terminated.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_24">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_24" aria-expanded="true" aria-controls="qa_24">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        I have lost hashpower, why is this?
                                                    </span>
                                            </div>
                                            <div id="qa_24" class="collapse" aria-labelledby="q_24" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Your lesser hashpower may be due to contracts of yours being switched to inactive. This occurs when mining rewards are not larger than the daily maintenance fee your contract requires to run. <br>
                                                    If you wish for further clarification, please contact customer support for a swift resolution.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_25">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_25" aria-expanded="true" aria-controls="qa_25">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Is it possible to change my contract to another product?
                                                    </span>
                                            </div>
                                            <div id="qa_25" class="collapse" aria-labelledby="q_25" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    No, this is not possible. Once you have selected your coin of choice and mining has started, there is no shifting. You may simply open another contract.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_26">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_26" aria-expanded="true" aria-controls="qa_26">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Are my mining outputs valid for purchasing further mining service contracts?
                                                    </span>
                                            </div>
                                            <div id="qa_26" class="collapse" aria-labelledby="q_26" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    This is not currently possible but we are looking into this functionality for a future Crypto Mining update. Until we create an automatic upgrade style feature, you can simply grow your mining outputs in your account wallet then use them to purchase a new contract.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_27">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_27" aria-expanded="true" aria-controls="qa_27">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        My purchase order is expired – why?
                                                    </span>
                                            </div>
                                            <div id="qa_27" class="collapse" aria-labelledby="q_27" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    For those paying for orders via cryptocurrency, there is a 30-minute window in which cryptocurrencies can be sent to the Crypto Mining wallet. After this length of time, the order window expires.<br>
                                                    Simply set up the payment again and send your funds within 30 minutes or contact our customer support to have the order approved manually.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_28">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_28" aria-expanded="true" aria-controls="qa_28">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can I be refunded?
                                                    </span>
                                            </div>
                                            <div id="qa_28" class="collapse" aria-labelledby="q_28" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    As clearly stated, all orders are non-refundable.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_29">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_29" aria-expanded="true" aria-controls="qa_29">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        In what frequency do I receive my mining outputs?
                                                    </span>
                                            </div>
                                            <div id="qa_29" class="collapse" aria-labelledby="q_29" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    At Crypto Mining we supply your mining outputs to your wallet as soon as the minimum required amount for transfer has been met. It is unfortunately not possible to advance or delay the sending of the mining deposit to meet any timed structure you may wish for. If you wish to discover your account’s minimum transaction amounts, visit your wallet section within your Crypto Mining personal account area.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_30">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_30" aria-expanded="true" aria-controls="qa_30">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        When Ethereum changes from PoW to PoS what will happen?
                                                    </span>
                                            </div>
                                            <div id="qa_30" class="collapse" aria-labelledby="q_30" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Ethereum’s current PoW (Proof of Work) model makes for gradual release to miners based on proof of time and energy spent mining. Ethereum has stated that it is considering a future switch to PoS (Proof of Stake) approach, which will rely on length of hold as justification for release to miners.<br>
                                                    This will result in the end of the possibility to mine Ethereum via Crypto Mining. However, we will not disband the hashrate you have accumulated. We will reattribute this in a way to be confirmed – but rest assured your hard time spent will not go to waste. <br>
                                                    We will be prompt to update you on any development in this field as and when it is announced and takes place.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_31">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_31" aria-expanded="true" aria-controls="qa_31">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        My transaction in the blockchain is being reported as unconfirmed – why?
                                                    </span>
                                            </div>
                                            <div id="qa_31" class="collapse" aria-labelledby="q_31" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining always uses the correct fees to have the relevant blockchain approve the transaction as soon as your payment is received but occasionally there can be delays in the blockchain. This is to be expected and is no cause for concern. Please wait up to 48 hours before contacting customer support.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_32">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_32" aria-expanded="true" aria-controls="qa_32">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        My card’s been charged but I have no active contract – why?
                                                    </span>
                                            </div>
                                            <div id="qa_32" class="collapse" aria-labelledby="q_32" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Rest assured that no debit/credit card charge will ever be experienced if your contract is not approved. If it is approved but delayed, you may experience a card charge before you experience an approved order in your Crypto Mining account page. This is to be expected and is no cause for concern. If you have not made an order but have been charged, please contact customer support for a swift resolution.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_33">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_33" aria-expanded="true" aria-controls="qa_33">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        What is Cash Advance and why have I been charged for it?
                                                    </span>
                                            </div>
                                            <div id="qa_33" class="collapse" aria-labelledby="q_33" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Certain banks charge an additional fee to those purchasing cryptocurrencies or related services. This is called Cash Advance, though it is uncommon. If you are concerned, please contact your bank for further information. 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                    </div>			
                                </div>
                                <div class="col-lg-6 d-flex flex-column mt-4 mb-4">
                                    <h6 class="mb-3">AFFILIATE INFORMATION</h6>
                                    <div class="accordion" id="accordion_2">
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_34">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_34" aria-expanded="true" aria-controls="qa_34">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain how the affiliate program works?
                                                    </span>
                                            </div>
                                            <div id="qa_34" class="collapse" aria-labelledby="q_34" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    The Crypto Mining affiliate program could not be easier to use or more profitable. It all begins with an affiliate code that is unique to your account. Whenever a user registers and inputs your referral code, they receive 3% discount on whatever purchase they make. And you enjoy a significant hash power boost. <br>
                                                    The more referrals you make, the higher your affiliate rank rises. And the higher your affiliate rank, the bigger hashpower boost you enjoy.  <br>
                                                    It’s as simple and as profitable as that. We will be sure to remind you via your linked email whenever your referral code is used.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_35">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_35" aria-expanded="true" aria-controls="qa_35">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain how affiliate URLs and promo codes differ?
                                                    </span>
                                            </div>
                                            <div id="qa_35" class="collapse" aria-labelledby="q_35" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    When you participate in Crypto Mining’s affiliate program, you have access to affiliate URLs and affiliate promotional codes. <br>
                                                    URLs are specific to your account and used by your referrals to gain you hashpower boosts. 
                                                    Promo codes, however, are used separately for any platform offers and can be entered by new and existing accounts. <br>
                                                    An affiliate URL and promotional code can be used in conjunction with the code taking precedent. If both are used by a new account, only the code’s supplier will be factored in.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_36">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_36" aria-expanded="true" aria-controls="qa_36">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Can you explain the ranking method?
                                                    </span>
                                            </div>
                                            <div id="qa_36" class="collapse" aria-labelledby="q_36" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining provides a tiered affiliate program that acknowledges the efforts and results of those who contribute to the growth of our platform. The number of referrals you secure correlates directly to the bonuses you enjoy. Why not see how far up the Crypto Mining rankings you can climb? With no limit to the rewarding potential of our affiliate program, it’s a great idea! 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_37">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_37" aria-expanded="true" aria-controls="qa_37">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How do I share my affiliate code?
                                                    </span>
                                            </div>
                                            <div id="qa_37" class="collapse" aria-labelledby="q_37" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    There is no limit to the creativity you can call on when sharing your affiliate code. Feature it on your favoured social media channels, give it out at university, call up old friends and use it as a talking point to get back in touch. 
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_38">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_38" aria-expanded="true" aria-controls="qa_38">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        How good are the affiliate rewards?
                                                    </span>
                                            </div>
                                            <div id="qa_38" class="collapse" aria-labelledby="q_38" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining is proud to provide industry-leading reward rates to our affiliate users. From the start of your contribution, you will enjoy 5% of the hashpower your referral chooses to purchase.<br>
                So if your referral enters your affiliate code then purchases a 10MH/s contract, you enjoy a totally free 25MH/s. They also receive a discount of 3% on the price. 

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_39">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_39" aria-expanded="true" aria-controls="qa_39">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Please explain how affiliate ranks are gained or lost?
                                                    </span>
                                            </div>
                                            <div id="qa_39" class="collapse" aria-labelledby="q_39" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Crypto Mining affiliate ranks are simply based on the value of purchases made by all your referrals within the last 100 days. Once a purchase passes 100 days in age, it is omitted from your ranking’s calculation and your ranking is recalculated.<br>
                At any time, you can find your rank and performance metrics on the affiliate page of your Crypto Mining personal account area.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_40">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_40" aria-expanded="true" aria-controls="qa_40">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Why is my referral stuck on PENDING?
                                                    </span>
                                            </div>
                                            <div id="qa_40" class="collapse" aria-labelledby="q_40" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Occasionally there is a delay between the completion of your referral’s purchase and the acknowledgement of the purchase by the Crypto Mining system. Please be patient and be aware that finalisation can take up to 6 days to be approved. If a longer period of time has passed without sale confirmation, please raise a ticket with our friendly customer support.
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="card">
                                            <div class="card-header d-flex align-items-center mb-0" id="q_41">
                                                    <span class="faq-btn d-flex align-items-center" type="button" data-toggle="collapse" data-target="#qa_41" aria-expanded="true" aria-controls="qa_41">
                                                        <i class="fas fa-caret-down pr-3"></i> 
                                                        Do you want to hear how you can improve your affiliate program?
                                                    </span>
                                            </div>
                                            <div id="qa_41" class="collapse" aria-labelledby="q_41" data-parent="#accordion_2">
                                                <div class="card-body">
                                                    Yes, please! We value the feedback of our users and enjoy hearing everything positive and negative that you have in mind to tell us regarding your Crypto Mining experience.<br>
                Please reach out to our Customer Support staff using the appropriate subject to voice your every compliment, complaint and suggestion so that we can keep evolving and providing the world’s best cloud crypto mining program.

                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                    </div>			
                                </div>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                            </div>
                        </div>
                </section>
                    
            </main>
        </div>
    )
}

export default faq
