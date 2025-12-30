import "../styles/privacy.css";

import first from "../assets/first.png";
import second from "../assets/second.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import { Link } from "react-router-dom";



const PrivacyPolicy = () => {
    return (
        <>
            <div className="breadcrumbarea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb__content__wraper">
                                <div className="breadcrumb__title">
                                    <h2 className="heading">Privacy Policy</h2>
                                </div>
                                <div className="breadcrumb__inner">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <Link to="/privacy"><li>Privacy Policy</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape__icon__2">
                    <img 
                        loading="lazy" 
                        className="shape__icon__img shape__icon__img__1" 
                        src={first} 
                        alt="photo" 
                    />
                    <img 
                        loading="lazy" 
                        className="shape__icon__img shape__icon__img__2" 
                        src={second} 
                        alt="photo" 
                    />
                    <img 
                        loading="lazy" 
                        className="shape__icon__img shape__icon__img__3" 
                        src={three}
                        alt="photo" 
                    />
                    <img 
                        loading="lazy" 
                        className="shape__icon__img shape__icon__img__4" 
                        src={four}
                        alt="photo" 
                    />
                </div>
            </div>

            <section className="pt-4">
                <div className="container">
                    <div className="row">
                        <p>Oratrics learning solutions ("Company") is committed to respecting the privacy of every person who shares personal information with the Company ("Personal Information"). Your privacy is important to us and we strive to take reasonable care in the protection of the Personal Information we receive from you.</p>
                        <p>We value your trust. In order to honour that trust, Oratrics adheres to ethical standards in gathering, using, and safeguarding any information you provide. This privacy policy governs your use of the www.oratrics.com ('Website') and the other associated applications, products, websites and services managed by the Company. Please read this privacy policy ('Policy') carefully before using the Application, Website, our services and products, along with the Terms of Service provided on the Website. Your use of the Website, Application, or services in connection with the Application, Website or products ('Services'). If you do not agree with the terms of this Policy, do not use the Website, Application our products or avail any of our Services.</p>
                        <p>The purpose of this Privacy Policy ("Policy"), as amended from time to time, is to give you an understanding on how we intend to collect, store, transfer and use the Personal Information you provide to us. The Policy may be subject to further changes. We suggest that you regularly check the latest employee handbook / Company's portal to apprise yourself of any updates. The Company may also send you through email updated policy for your information. Your continued engagement with us will imply your acceptance of such updates to this Policy.</p>
                        <p>By providing us your Personal Information, you hereby consent to the collection, storage, disclosure, processing and transfer of such information for the purposes as disclosed in this Policy. You are providing the information out of your free will. You have the option not to provide us the data or Personal Information sought to be collected if you do not agree with this Policy.</p>
                        <p>Further, you will have the option to not provide your consent, or withdraw any consent given earlier, provided that the decision to not provide consent / withdrawal of the consent is intimated to us in writing. If you do not provide us Personal Information or withdraw the consent to provide us with any of your Personal Information at any point in time, we shall have the option not to provide the benefits for the purpose of which the said Personal Information was sought.</p>
                        
                        <p><strong>Personal Information and Its Usage</strong></p>
                        <p>The kind of Personal Information that we collect may include the following:</p>
                        <ul>
                            <li>Name</li>
                            <li>User name</li>
                            <li>Password</li>
                            <li>Date of birth</li>
                            <li>Mobile number</li>
                            <li>E-mail address</li>
                            <li>Location</li>
                            <li>Class, subject and syllabus details</li>
                            <li>Financial information such as bank accounts, credit cards, debit cards details</li>
                        </ul>

                        <p>We may collect, disclose, process and transfer your Personal Information to:</p>
                        <ul>
                            <li>enable the functioning of the Company's business;</li>
                            <li>maintain your employment records, and provide you with related benefits and services and to engage in/ carry out the activities that would enable and assist in providing you the benefits and any services arising out of such employment;</li>
                            <li>transfer information about you if we are acquired by or merged with another company;</li>
                            <li>administer or otherwise carry out our obligations in relation to any agreement you have with us;</li>
                            <li>respond to court or government orders or legal process, or to establish or exercise our legal rights or defend against legal claims; and ;</li>
                            <li>to investigate, prevent, or take action regarding illegal activities, suspected fraud, violations of the website or as otherwise required by law.</li>
                            <li>We may also remove all the personally identifiable information and use the rest of the data / information for historical or statistical purposes.</li>
                        </ul>

                        <p>You hereby consent that the collection disclosure, storage, processing and transfer of any Personal Information or any other information as disclosed under this Policy shall not cause any loss or wrongful gain to you if the same is used for the purposes stated in this Policy.</p>

                        <h3>Cookies</h3>
                        <p>We send cookies to your computer, thereby uniquely identifying your browser. Cookies are used to track your preferences, help you login faster, and aggregated to determine user trends. This data is used to improve our offerings, such as providing more content in areas of greater interest to a majority of users. Most browsers are initially set up to accept cookies, but you can reset your browser to refuse all cookies or to indicate when a cookie is being sent. Some of our features and services may not function properly if your cookies are disabled.</p>

                        <h3>Links</h3>
                        <p>We may present links in a format that enables us to keep track of whether these links have been followed. We use this information to improve our customized content. Clicking on links from other sites may take you to sites outside our domain. We are not responsible for the privacy practices of other web sites. We encourage our users to be aware when they leave our site to read the privacy statements of each and every web site that collects personally identifiable information.</p>
                        <p>This Privacy Policy applies solely to information collected by our website.</p>

                        <h3>Alerts</h3>
                        <p>We may alert you by email or phone (through SMS/call/WhatsApp) to inform you about new service offerings of the Company and its subsidiaries/affiliates or other information which we feel might be useful for you, through the Company or its subsidiaries/affiliates.</p>

                        <h3>Public Forums</h3>
                        <p>When you use certain features on our website like the discussion forums and you post or share your personal information such as comments, messages, files, photos, will be available to all users, and will be in the public domain. All such sharing of information is done at your own risk. Please keep in mind that if you disclose personal information in your profile or when posting on our forums this information may become publicly available.</p>

                        <h3>Security</h3>
                        <p>We are concerned about safeguarding the confidentiality of your Information. We provide physical, electronic, and procedural safeguards to protect Information we process and maintain. For example, we limit access to this Information to authorized employees only who need to know that information in order to operate, develop or improve our Application/Services/products/Website. Please be aware that, although we endeavour to provide reasonable security for information we process and maintain, no security system can prevent all potential security breaches.</p>

                        <h3>Log information</h3>
                        <p>When you access our website, our servers automatically record information that your browser sends whenever you visit a website. These server logs may include information such as your web request, internet protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser.</p>

                        <h3>User communications</h3>
                        <p>When you send an email or other communication to us, we may retain those communications in order to process your inquiries, respond to your requests and improve our Services.</p>

                        <h3>Your Consent</h3>
                        <p>We believe that, every user of our Application/Services/Website must be in a position to provide an informed consent prior to providing any Information required for the use of the Application/Services/products/Website. By registering with us, you are expressly consenting to our collection, processing, storing, disclosing and handling of your information as set forth in this Policy now and as amended by us. Processing, your information in any way, including, but not limited to, collecting, storing, deleting, using, combining, sharing, transferring and disclosing information, all of which activities will take place in India. If you reside outside India your information will be transferred, processed and stored in accordance with the applicable data protection laws of India.</p>

                        <h3>Security</h3>
                        <p>The security of your Personal Information is important to us. We have adopted reasonable security practices and procedure, as described hereunder or which may be set out in our information security policy of the Company (which will be intimated to you in due course), to ensure that the Personal Information collected is secure. You agree that such measures are secure and adequate.</p>
                        <p>While we will endeavour to take all reasonable and appropriate steps to keep secure any information which we hold about you and prevent unauthorized access, you acknowledge that the no electronic medium / security measure is 100% secure and that we cannot provide any absolute assurance regarding the security of your Personal Information. We will not be liable in any way in relation to any breach of security or unintended loss or disclosure of information caused by us in relation to your Personal Information.</p>

                        <h3>Access</h3>
                        <p>If you need to access your Personal Information, update or correct your Personal Information for any reason, you may send such requests, updates and corrections to us at info@oratrics.com and we may take all reasonable efforts to provide you with access to your Personal Information and incorporate the changes within a reasonable period of time.</p>
                        <p>In the event you wish to know the names and addresses of the third parties your Personal Information has been disclosed to, you may request the Company for such information by writing to info@oratrics.com.</p>

                        <h3>Grievance Officer</h3>
                        <p>If you find any discrepancies or have any grievances in relation to the processing of information under this Policy, please contact: Mr. Anas Shoeb at teachersupport@oratrics.com (For Teachers), info@oratrics.com (For Students).</p>
                        <p>We will endeavour to respond within an appropriate timeframe.</p>

                        <h3>User Account Deletion</h3>
                        <p>We value your privacy and provide you with the option to request the deletion of your personal data from our app. If you wish to delete your user account and associated data, please follow the steps outlined below:.</p>
                        <p><b>Initiating Account Deletion Request:</b> You can initiate the account deletion process by contacting our Support Team at support@oratrics.org</p>
                        <p><b>Verification Process:</b> To protect your privacy and ensure the security of your account, we may need to verify your identity before proceeding with the account deletion request. You might be asked to provide certain account information or answer security questions to confirm your ownership.</p>
                        <p><b>Processing Time:</b> Once we receive a valid account deletion request, we will take appropriate steps to delete your personal data from our systems. Please note that the processing time may vary depending on the volume of requests, but we will make reasonable efforts to complete the process within 15 days.</p>
                        <p><b>Backup and Archival Copies:</b> Please be aware that certain data might remain in backup or archival copies for a limited period. However, such data will not be accessible or used for any other purpose than system backup and recovery.</p>
                        <p><b>Reactivation of Deleted Accounts:</b> Once an account is deleted, it cannot be reactivated. If you wish to use our services again, you will need to create a new account.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;