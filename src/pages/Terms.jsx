import React from 'react';

import first from "../assets/first.png";
import second from "../assets/second.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <>
            <div className="breadcrumbarea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="breadcrumb__content__wraper">
                                <div className="breadcrumb__title">
                                    <h2 className="heading">Terms & Condition</h2>
                                </div>
                                <div className="breadcrumb__inner">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                      <Link to="/terms"><li>Terms & Condition</li></Link>  
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
                        <div className="content">
                            <h3>Introduction</h3>
                            <p>www.oratrics.com is an online portal, owned by Oratrics Learning Solutions, a company incorporated in India, with the goal of creating a generation of confident communicators. Oratrics recognizes the crucial role that soft skills play in shaping well-rounded individuals</p>

                            <h3>General</h3>
                            <p>These terms and conditions ("Terms") govern the usage and services made available on or through https://www.oratrics.com and our mobile applications (collectively, the "Platform"). The Terms are to be read together with the Privacy Policy available on the Platform and any other agreement which we may enter into with you.</p>
                            <p>The Terms constitute a binding contract between Oratrics learning solutions, a company having its registered office at Property no. 224, 3rd floor, #80/3, Vijinapura Village Old Madras Rd, KR Puram, Bangalore, Karnataka, 560016 ("Company") and You, a person visiting, accessing, browsing through and/or using the Platform at any point in time ("You", "Your" or "User"). The Company and You shall be collectively referred as "Parties"</p>
                            
                            <h3>Description:</h3>
                            <ul>
                                <li><b>1</b> Whereas, the Company owns, operates and manages a Platform, wherein, Teachers can be identified to provide their Teaching Services to You by using Teaching Content;</li>
                                <li><b>2</b> Whereas, the Teaching Content provided to You can be owned by the Company or a third party;</li>
                                <li><b>3</b> Whereas, you are desirous to enrol for Courses on the Platform and avail Teaching Services from Teachers;</li>
                                <li><b>4</b> Whereas, the Company and You have agreed to enter into this contract to decide and determine the terms and conditions of usage and services made available on the Platform.</li>
                            </ul>
                            <p>If You do not agree to these Terms, or comply with the requirements listed here, please do not use the Platform</p>

                            <h3>Definitions Of Terms Used in The Terms</h3>
                            <p>"Courses" means educational courses listed on the Platform</p>
                            <p>"Teacher" means a person who has onboarded on the Platform in order to provide Teaching Services through the Platform</p>
                            <p>"Teaching Content" means text, graphics, images, music, software (excluding the Platform), audio, video, information or other materials developed to provide education to You in relation to Courses</p>
                            <p>"Teaching Services" means the services provided by Teachers directly to the students</p>

                            <h3>Scope Of Services</h3>
                            <p>The Services include the provision of the Platform that enables You to arrange and schedule teaching classes with Teachers. We use reasonable efforts to enable you to find a teacher who is able to provide Teaching Services at the requested time slots.</p>
                            <p>In case a request is received from You to change the Teacher or the Teacher makes a request for change of student or the Teacher is no longer associated with the Platform for any reason whatsoever, the Company shall make reasonable efforts to provide You with options of different similar Teachers. In such a case, the agreement with old Teacher shall stand terminated and a fresh agreement shall be entered with new Teacher mutatis mutandis. The amount paid by You for Teaching Services shall be adjusted with the payable to new teacher for the remaining classes.</p>
                            <p>As a part of the Services, the Company facilitates the transfer of payments to Teachers for the services they render to You and collects payments on behalf of such Teachers.</p>
                            <p>You understand and agree that the Company does not provide Teaching Services and that all such services are provided by Teachers who are an independent third-party are not employed by the Company or any of its affiliates. The Teachers are responsible for the services they provide to you.</p>
                            <p>Subject to your agreement and compliance with the Terms, the Company grants you a limited, non - exclusive, revocable, non- transferable license to i) access and use the Platform and Teaching Content on your personal device solely in connection with your use of the service; ii) access and use any content, information and related materials that may be made available through the service; in each case solely for your personal, non -commercial use. You also consent to let the Company grant a limited, non -exclusive, revocable, non- transferable license of Teaching Content to the Teacher to aid in the rendition of Teaching Services to You.</p>
                            <p>In case of third-party content, you agree to abide by all the terms & conditions of the third party providing the content.</p>

                            <h3>User Content</h3>
                            <p>The Platform contains interactive features or services that allow users who have created an account with us to post, upload, publish, display, transmit or submit comments, reviews, suggestions, feedback, ideas, or other content on or through the Platform ("User Content").</p>
                            <p>As part of the effective provision of Services and quality control purposes, we may request reviews from you about Teachers and you agree and acknowledge that Teachers may provide reviews about you to us. You must not knowingly provide false, inaccurate, or misleading formation in respect of the reviews. Reviews will be used by us for quality control purposes and to determine whether Customers and Teachers are appropriate users of the Platform. If we determine at our sole discretion that you are not an appropriate user, we reserve the right to cancel your registration and remove you from the Platform.</p>
                            <p>You grant us a non-exclusive, worldwide, perpetual, irrevocable, transferable, sublicensable, and royalty-free licence to (i) use, publish, display, store, host, transfer, process, communicate, distribute, make available, modify, adapt, translate, and create derivative works of, the User Content, for the functioning of, and in connection with, the Services and (ii) use User Content for the limited purposes of advertising and promoting the Services, or furnishing evidence before a court or authority of competent jurisdiction under applicable laws.</p>
                            <p>In connection with these Terms and the licences granted under this clause, you hereby waive any claims arising out of any moral rights or other similar rights relating to the User Content.</p>
                            <p>You agree and acknowledge that the Company may, without notice to you, remove, or otherwise restrict access to User Content that, in its sole discretion, violates these Terms.</p>

                            <h3>Registration</h3>
                            <p>To use the services provided on the Platform, it is compulsory to create an account. A User may create an account on the Platform which shall collect only Your basic information. To create an account, you need to choose a username and password. You also have the option of linking your social media accounts, such as Your Facebook or Google Plus account with the Oratrics account, to create your Oratrics Account. You must keep your account and registration details current and correct for communications related to your purchases from the Platform.</p>
                            <p>At the time of registration, the Company shall collect the following personally identifiable information about you: Name - including first and last name, email address, mobile phone number and other contact details, demographic profile (like your age, gender, address, etc.,). If you choose to link your social media account with your Oratrics Account, we collect basic information about you from those social media platforms, such as: name, age, gender, location and e-mail address. Information collected about you is subject to the Privacy Policy of the Company, which may be read as part and parcel of these Terms of Use.</p>
                            <p>You are solely responsible for protecting the confidentiality of your username and password and any activity under the account will be deemed to have been done by you. In the event you provide us with false/inaccurate details or the Company has a reasonable ground to believe that false and inaccurate information has been furnished, we hold the right to permanently suspend your account.</p>

                            <h3>Eligibility</h3>
                            <p>Services on the Platform would be available to only select geographies in India. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872 including minors, undischarged insolvents etc. are not eligible to use the Platform.</p>
                            <p>However, if you are a minor, i.e. under the age of 18 years and over the age of 13 years, you may use the Platform under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Use. The Company reserves the right to terminate or refuse your registration, or refuse to permit access to the Platform, if it is discovered or brought to its notice that you are a minor.</p>

                            <h3>Security</h3>
                            <p>Transactions on the Platform are secure and protected. Any information entered by the User when transacting on the Platform is encrypted to protect the User against unintentional disclosure to third parties. The User's credit and debit card information is not received, stored by or retained by the Company / Platform in any manner. This information is supplied by the User directly to the relevant payment gateway which is authorized to handle the information provided, and is compliant with the regulations and requirements of various banks and institutions and payment franchisees that it is associated with.</p>

                            <h3>License And Access</h3>
                            <p>The Company grants you a limited license to access and make personal use of the Platform and Teaching Content, but not to download (other than page caching) or modify it, or any portion of it, except with express written consent of the Company. Such limited license does not include/permit any resale or commercial use of the Platform or its contents; any collection and use of any product listings, descriptions, or prices; any derivative use of the Platform or its contents; any downloading or copying of information for the benefit of another merchant; or any use of data mining, robots, or similar data gathering and extraction tools. Any portion of the Platform may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without express written consent of the Company. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of the Platform or of the Company and/or its affiliates without the express written consent of the Company. You may not use any meta tags or any other "hidden text" utilizing the Company's name or trademarks without the express written consent of the Company. You shall not attempt to gain unauthorized access to any portion or feature of the Platform, or any other systems or networks connected to the Platform or to any server, computer, network, or to any of the services offered on or through the Platform, by hacking, 'password mining' or any other illegitimate means.</p>
                            <p>You hereby agree and undertake not to host, display, upload, modify, publish, transmit, update or share any information which:</p>
                            <ul>
                                <li><b>1.</b> belongs to another person and to which you do not have any right;</li>
                                <li><b>2.</b> is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
                                <li><b>3.</b> harms minors in any way;</li>
                                <li><b>4.</b> infringes any patent, trademark, copyright or other proprietary/intellectual property rights;</li>
                                <li><b>5.</b> violates any law for the time being in force;</li>
                                <li><b>6.</b> deceives or misleads the addressee about the origin of such messages communicates any information which is grossly offensive or menacing in nature;</li>
                                <li><b>7.</b> impersonates another person;</li>
                                <li><b>8.</b> contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                                <li><b>9.</b> threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation; or</li>
                                <li><b>10.</b> is misleading or known to be false in any way.</li>
                            </ul>

                            <h3>Communications</h3>
                            <p>By using this Platform, it is deemed that you have consented to receiving calls, autodialled and/or pre-recorded message calls, e-mails, from Us at any time with the use of the telephone number and e-mail address that has been provided by you for the use of this Platform which are subject to the Privacy Policy. The user agrees to receive promotional communication and newsletters from the Company and its partners.</p>
                            <p>This includes contacting you through information received through other parties. The use of this Platform is also your consent to receive SMSs from Us at any time we deem fit. This consent to be contacted is for purposes that include and are not limited to clarification calls and marketing and promotional calls. The user can opt out from such communication and/or newsletters either by unsubscribing on the Platform itself, or by contacting the customer services team and placing a request for unsubscribing by sending an email to teachersupport@oratrics.com (For Teachers), info@oratrics.com (For Students).</p>
                            <p>You may also be contacted by Service Providers with whom we have entered into a contract in furtherance of our rights, duties and obligations under this document and all other policies followed by Us. Such contact will be made only in pursuance of such objectives, and no other calls will be made.</p>
                            <p>The sharing of the information provided by you will be governed by the Privacy Policy and We will not give out such contact information of yours to third parties not connected with the Platform.</p>

                            <h3>Payment</h3>
                            <p>The Company shall charge you for the different Services you may avail and/or for any other facilities you may opt for, from time to time, on or via the Platform.</p>
                            <p>You shall be required to pay a Teaching Fee to Teachers in respect of Teaching Services that you seek to avail through the Platform. Further, You shall be required to pay a Content Fee to third party in respect of third party content that you seek to avail through the Platform. In relation to Teaching Content provided to you by the Company; you shall be required to pay a Content Fee to the Company. In addition, the Company reserves the right to charge you a convenience fee for facilitating the Teaching Services and transferring payments to the Teachers ("Fees").</p>
                            <p>The Company shall notify you of the applicable Teaching Fee, Content Fees, Fees and payment methods at the time of booking. The total consideration received by the Company shall be on a per-class basis. Generally, you may make payments through credit cards, debit cards, net banking, wallets, and UPI. We have the right to modify otherwise restrict the modes of payment available to you.</p>
                            <p>For the avoidance of doubt, please note that Teaching Fee is payable to Teachers and the Company acts as a limited collection agent on behalf of such Teachers to collect and transfer amounts due to them. Until the payment to the Teacher is affected, the Company may retain the money as deposit from you which is payable to the Teachers.</p>
                            <p>We may avail services of third parties to bill you through your selected mode of payment. The processing of payments will be subject to the terms and policies of such parties in addition to these Terms. We shall not be liable for any error of such parties.</p>

                            <h3>User Obligations</h3>
                            <p>You are a restricted user of the Platform.</p>
                            <ul>
                                <li><b>1.</b> You are bound not to cut, copy, distribute, modify, recreate, reverse engineer, distribute, disseminate, post, publish or create derivative works from, transfer, or sell any information or software obtained from the Platform. With our prior permission limited use may be allowed. For the removal of doubt, it is clarified that unlimited or wholesale reproduction, copying of the content for commercial or non-commercial purposes and unwarranted modification of data and information within the content of the Platform is not permitted.</li>
                                <li><b>2.</b> You agree not to access (or attempt to access) the Platform and/or the materials or Services by any means other than through the interface that is provided by the Platform. The use of deep-link, robot, spider or other automatic device, program, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Platform or Teaching Content, or in any way reproduce or circumvent the navigational structure or presentation of the Platform, materials or any Teaching Content, to obtain or attempt to obtain any materials, documents or information through any means not specifically made available through the Platform. You acknowledge and agree that by accessing or using the Platform or Services, You may be exposed to content from other users that You may consider offensive, indecent or otherwise objectionable. We disclaim all liabilities arising in relation to such offensive content on the Platform. Further, You may report such offensive content.</li>
                                <li><b>3.</b> In places where the Platform allows you to post or upload data/information, you undertake to ensure that such material is not offensive and in accordance with applicable laws. Further, you undertake not to:</li>
                                <ul>
                                    <li><b>i.</b> Abuse, harass, threaten, defame, disillusion, erode, abrogate, demean or otherwise violate the legal rights of others;</li>
                                    <li><b>ii.</b> Engage in any activity that interferes with or disrupts access to the Platform or the Services (or the servers and networks which are connected to the Platform);</li>
                                    <li><b>iii.</b> Impersonate any person or entity, or falsely state or otherwise misrepresent Your affiliation with a person or entity;</li>
                                    <li><b>iv.</b> Publish, post, disseminate, any information which is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever; or unlawfully threatening or unlawfully harassing including but not limited to "indecent representation of women" within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986;</li>
                                    <li><b>v.</b> Post any file that infringes the copyright, patent or trademark of other legal entities;</li>
                                    <li><b>vi.</b> Upload or distribute files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the Platform or another's computer;</li>
                                    <li><b>vii.</b> Download any file posted by another user that you know, or reasonably should know, cannot be legally distributed in such manner;</li>
                                    <li><b>viii.</b> Probe, scan or test the vulnerability of the Platform or any network connected to the Platform, nor breach the security or authentication measures on the Platform or any network connected to the Platform. You may not reverse look-up, trace or seek to trace any information on any other user, of or visitor to, the Platform, or any other customer of the Platform, including any Platform Account not owned by You, to its source, or exploit the Platform or Service or information made available or offered by or through the Platform, in any way whether or not the purpose is to reveal any information, including but not limited to personal identification information, other than Your own information, as provided for by the Platform;</li>
                                    <li><b>ix.</b> Disrupt or interfere with the security of, or otherwise cause harm to, the Platform, system resources, accounts, passwords, servers or networks connected to or accessible through the Platform or any affiliated or linked sites;</li>
                                    <li><b>x.</b> Collect or store data about other users in connection with the prohibited conduct and activities set forth in this Section;</li>
                                    <li><b>xi.</b> Use the Platform or any material or Content for any purpose that is unlawful or prohibited by these Terms of Service, or to solicit the performance of any illegal activity or other activity which infringes the rights of this Platform or other third parties;</li>
                                    <li><b>xii.</b> Violate any code of conduct or other guidelines, which may be applicable for or to any particular Service;</li>
                                    <li><b>xiii.</b> Violate any applicable laws or regulations for the time being in force within or outside India;;</li>
                                    <li><b>xiv.</b> Violate the Terms of Service including but not limited to any applicable Additional Terms of the Platform contained herein or elsewhere;;</li>
                                    <li><b>xv.</b> Violate any code of conduct or other guidelines, which may be applicable for or to any particular Service;</li>
                                    <li><b>xvi.</b> Threaten the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or cause incitement to the commission of any cognizable offence or prevent investigation of any offence or is insulting any other nation;</li>
                                    <li><b>xvii.</b> Publish, post, disseminate information that is false, inaccurate or misleading; violate any applicable laws or regulations for the time being in force in or outside India;</li>
                                    <li><b>xviii.</b> Directly or indirectly, offer, attempt to offer, trade or attempt to trade in any item, the dealing of which is prohibited or restricted in any manner under the provisions of any applicable law, rule, regulation or guideline for the time being in force;</li>
                                    <li><b>xix.</b> Create liability for Us or cause Us to lose (in whole or in part) the services of Our internet service provider ("ISPs") or other suppliers.</li>
                                </ul>
                            </ul>

                            <p>You shall not engage in advertising to, or in solicitation of, other Users of the Platform to buy or sell any products or services, including, but not limited to, products or services related to that being displayed on the Platform or related to us. You may not transmit any chain letters or unsolicited commercial or junk email to other Users via the Platform. It shall be a violation of the Terms to use any information obtained from the Platform in order to harass, abuse, or harm another person, or in order to contact, advertise to, solicit, or sell to another person other than Us without Our prior explicit consent. We can (and You hereby expressly authorize Us to) disclose any information about You to law enforcement or other government officials, as we, in our sole discretion, believe it necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those that may involve personal injury. In order to protect Our Users from such advertising or solicitation, we reserve the right to restrict the number of messages or emails which a user may send to other Users in any 24-hour period which We deem appropriate in our sole discretion. You understand that We have the right at all times to disclose any information (including the identity of the persons providing information or materials on the Platform) as necessary to satisfy any law, regulation or valid governmental request. This may include, without limitation, disclosure of the information in connection with investigation of alleged illegal activity or solicitation of illegal activity or in response to a lawful court order or subpoena.</p>
                            <p>We have no obligation to monitor the materials posted on the Platform. We shall have the right to remove or edit any content that in its sole discretion violates, or is alleged to violate, any applicable law or either the spirit or letter of these Terms of Service. Notwithstanding this right, YOU REMAIN SOLELY RESPONSIBLE FOR THE CONTENT OF THE MATERIALS YOU POST ON THE PLATFORM AND IN YOUR PRIVATE MESSAGES. In no event shall We assume or have any responsibility or liability for any Content posted or for any claims, damages or losses resulting from the use of Content and/or appearance of Content on the Platform. You hereby represent and warrant that You have all necessary rights in and to all Content which You provide and all information it contains and that such Content shall not infringe any proprietary or other rights of third parties or contain any libelous, tortuous, or otherwise unlawful information.</p>

                            <h3>Copyright And Trademark</h3>
                            <p>The Company, its suppliers and licensors expressly reserve all intellectual property rights in all text, programs, products, processes, technology, images, content and other materials which appear on the Platform. Access to or use of the Platform does not confer and should not be considered as conferring upon anyone any license to the Company or any third party's intellectual property rights. All rights, including copyright, in and to the Platform are owned by or licensed to the Company. Any use of the Platform or its contents, including copying or storing it or them in whole or part is prohibited without the permission of the Company.</p>
                            <p>You may not modify, distribute or re-post anything on the Platform for any purpose. The names and logos and all related product and service names, design marks and slogans are the trademarks/service marks of the Company, its affiliates, its partners or its suppliers/service providers. All other marks are the property of their respective owners. No trademark or service mark license is granted in connection with the materials contained on the Platform. Access to or use of the Platform does not authorize anyone to use any name, logo or mark in any manner. References on the Platform to any names, marks, products or services of third parties or hypertext links to third party sites or information are provided solely as a convenience to you and do not in any way constitute or imply the Company's endorsement, sponsorship or recommendation of the third party, the information, its product or services.</p>
                            <p>The Company is not responsible for the content of any third-party sites and does not make any representations regarding the content or accuracy of material on such sites. If you decide to access a link of any third-party Platforms, you do so entirely at your own risk and expense.</p>

                            <h3>Disclaimer Of Warranties and Liabilities</h3>
                            <p>You expressly understand and agree that, to the maximum extent permitted by applicable law:</p>
                            <p>The Platform, services and other materials are provided by this Platform is on an "as is" basis without warranty of any kind, express, implied, statutory or otherwise, including the implied warranties of title, non-infringement, merchantability or fitness for a particular purpose. Without limiting the foregoing, the Company makes no warranty that</p>
                            <ul>
                                <li><b>1.</b> Your requirements will be met or that services provided will be uninterrupted, timely, secure or error-free;</li>
                                <li><b>2.</b> Materials, information and results obtained will be effective, accurate or reliable;</li>
                                <li><b>3.</b> Any errors or defects in the Platform, services or other materials will be corrected.</li>
                            </ul>
                            <p>The user understands and agrees that any material or data downloaded or otherwise obtained through the Platform is done entirely at his/her own discretion and risk and he/she will be solely responsible for any damage to his/her computer systems or loss of data that results from the download of such material or data. We are not responsible for any typographical error leading to an invalid coupon. The Company accepts no liability for any errors or omissions, with respect to any information provided to you whether on behalf of itself or third parties.</p>
                            <p>We shall not be liable for any third-party product or services. The advertisement available on e-mail or Platform with respect to the third-party Platform or the products and services are for information purpose only.</p>

                            <h3>Indemnification And Limitation of Liability</h3>
                            <p>You agree to indemnify, defend and hold harmless this Platform/company including but not limited to its affiliate vendors, agents and employees from and against any and all losses, liabilities, claims, damages, demands, costs and expenses (including legal fees and disbursements in connection therewith and interest chargeable thereon) asserted against or incurred by us that arise out of, result from, or may be payable by virtue of, any breach or non-performance of any representation, warranty, covenant or agreement made or obligation to be performed by you pursuant to these terms of service. Further, you agree to hold us harmless against any claims made by any third party due to, or arising out of, or in connection with, your use of the Platform, any claim that your material caused damage to a third party, your violation of the terms of service, or your violation of any rights of another, including any intellectual property rights.</p>
                            <p>In no event shall the Company, its officers, directors, employees, partners or suppliers be liable to you, the vendor or any third party for any special, incidental, indirect, consequential or punitive damages whatsoever, including those resulting from loss of use, data or profits, whether or not foreseeable or whether or not we have been advised of the possibility of such damages, or based on any theory of liability, including breach of contract or warranty, negligence or other tortious action, or any other claim arising out of or in connection with your use of or access to the Platform, services or materials.</p>
                            <p>The limitations and exclusions in this section apply to the maximum extent permitted by applicable law.</p>

                            <h3>Termination</h3>
                            <p>This User Agreement is effective unless and until terminated by either you or the Company. You may terminate this User Agreement at any time, provided that you discontinue any further use of the Platform. The Company may terminate this User Agreement at any time and may do so immediately without notice, and accordingly deny you access to the Platform.</p>
                            <p>Such termination will be without any liability to the Company. The Company's right to any Comments and to be indemnified pursuant to the terms hereof, shall survive any termination of this User Agreement. Any such termination of the User Agreement shall not cancel your obligation to pay for product(s) already ordered from the Platform or affect any liability that may have arisen under the User Agreement prior to the date of termination.</p>

                            <h3>Hosting Of Third-Party Information</h3>
                            <p>The Platform hosts information provided by third parties. We are in no manner responsible to you for the accuracy, legitimacy and trueness of the information so hosted. We take reasonable care to ensure such accuracy but we are not responsible for the information so furnished. You agree to not hold us liable for the falsification of any such provided information.</p>

                            <h3>Disputes And Jurisdiction</h3>
                            <p>All disputes involving but not limited to rights conferred, compensation, refunds, and other claims will be resolved through a two-step Alternate Dispute Resolution mechanism i.e. Mediation & Arbitration.</p>

                            <h3>Privacy Policy</h3>
                            <p>We encourage you to read the Privacy Policy and to use the information it contains to make informed decisions regarding Your personal information. Please also note that certain information, statements, data and content (such as but not limited to photographs) which You provide on the Platform are likely to reveal Your gender, ethnic origin, nationality, age, and/or other personal information about You. You acknowledge and agree that your submission of such information is voluntary on Your part. Further, you acknowledge, consent and agree that we may access, preserve, and disclose information You provide to Us at any stage during Your use of the Platform. Disclosures of information to Third Parties are further addressed in Our Privacy Policy.</p>

                            <h3>Cancellation & Refund Policy</h3>
                            <p>Only 1: 1 enrolment will be eligible for refund of unconsumed classes subject to the cancellation charges mentioned below. No refund or cancellation is permitted once the customer has consumed 5 or more classes of a course.</p>
                            <p>Refund processing time is between 60-90 days from the date of raising request with the Customer Support. Requests for refund will be considered only when a query is raised with info@oratrics.com</p>
                            <ul>
                                <li><b>1.</b> For all Domestic (Indian) cases, charges of 1000 +GST per class plus processing fee will be applied during cancellation.</li>
                                <li><b>2.</b> For all International cases, charges of $18 per class plus processing fee will be applied during cancellation.</li>
                                <li><b>3.</b> Per class charges will be applicable on the total number of classes taken, processing will be applicable on the entire course fee.</li>
                                <li><b>4.</b> There will be no refund for down payment and registration fees.</li>
                                <li><b>5.</b> Apart from 1000+GST, processing fee of 20% percent will be deducted at the time of refund.</li>
                            </ul>

                            <h3>Forfeiture Of Course Fees</h3>
                            <p>In case where no refund is requested for unused classes within 3 months from the date of last attended class, the Company would become entitled to forfeit the amount pertaining to unused classes for recovering damages borne by it due to platform usage and other resource allocation for facilitating the services.</p>

                            <h3>Oratrics Referral Program</h3>
                            <ul>
                                <li><b>1.</b> The Oratrics Referral Program allows registered Oratrics users to earn cash back when a person they referred subscribe to Oratrics package.</li>
                                <li><b>2.</b> The referrer gets 15 days of free teaching at Oratrics for one subject of choice</li>
                                <li><b>3.</b> The bonus is restricted to 15 days for 1 subject only. But you can refer as many people as you want.</li>
                                <li><b>4.</b> Oratrics reserves the right to modify or terminate offer at any time without prior notice.</li>
                                <li><b>5.</b> Oratrics also reserves the right to deny a claim to the offer at its sole discretion, for misuse of the offer, and Oratrics shall not be obliged to give an explanation for the same.</li>
                                <li><b>6.</b> Oratrics' services shall be governed by the terms and conditions declared at https://www.oratrics.com</li>
                                <li><b>7.</b> In case of any query regarding the offer, please email us at teachersupport@oratrics.com (For Teachers), info@oratrics.com (For Students).</li>
                            </ul>

                            <h3>Miscellaneous Provisions</h3>
                            <ul>
                                <li><b>Entire Agreement:</b> The terms and conditions set forth in this Section 3 and any additional or different terms expressly agreed by Client and Service vendor shall constitute the entire agreement and understanding of Client and Service vendor with respect to each Service Contract and shall cancel and supersede any other prior or contemporaneous discussions, agreements, representations, warranties, and/or other communications between them. Notwithstanding the foregoing, the Client and Service vendor shall always remain subject to the terms of the user Agreement.</li>
                                <li><b>Waiver:</b> The failure of either party at any time to require performance of any provision of this Agreement in no manner shall affect such party's right at a later time to enforce the same. No waiver by either party of any breach of this Agreement, whether by conduct or otherwise, in any one or more instances, shall be deemed to be, or construed as, a further or continuing waiver of any other such breach, or a waiver of any other breach of this Agreement.</li>
                                <li><b>Severability:</b> If any provision of this Agreement shall to any extent be held invalid, illegal or unenforceable, the validity, legality and enforceability of the remaining provisions of this Agreement shall in no way be affected or impaired thereby and each such provision of this Agreement shall be valid and enforceable to the fullest extent permitted by law. In such a case, this Agreement shall be reformed to the minimum extent necessary to correct any invalidity, illegality or unenforceability, while preserving to the maximum extent the rights and commercial expectations of the parties hereto, as expressed herein.</li>
                            </ul>

                            <h3>Contact Us</h3>
                            <p>If you have any questions about the Terms, the practices of the Company, or your experience with the Service, you can e-mail us at teachersupport@oratrics.com (For Teachers) and info@oratrics.com (For Students).</p>
                            <p>The Company would on best efforts basis try to resolve the issue with Teacher but does not provide any guarantee to resolve such issues.</p>

                            <h3>Changes To the Terms</h3>
                            <p>We hold the sole right to modify the Terms without prior permission from You or providing notice to You. The relationship creates on You a duty to periodically check the Terms of Service and stay updated on its requirements. If You continue to use the Platform or avail any of its services without registration following such change, this is deemed as consent by You to the so amended policies. Your continued use of the Platform is conditioned upon your compliance with the Terms, including but not limited to compliance with the Terms even after alterations, if any</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsAndCondition;