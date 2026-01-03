import React, { useState } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faUsers,
  faGraduationCap,
  faAward,
  faGlobe,
  faComments,
  faHandshake,
  faArrowRight,
  faCheckCircle,
  faQuestionCircle
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
// import Head from 'next/head';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '', email: '', phone: '', course: '', message: '', preferredTime: ''
      });
    }, 2000);
  };

  const courses = [
    'Math Explorers Program',
    'Personality Development',
    'Public Speaking Mastery',
    'Creative Writing Workshop',
    'Confidence Building',
    'Leadership Program',
    'General Inquiry'
  ];

  const officeLocations = [

  ];

  const stats = [
    { icon: faUsers, number: '10,000+', label: 'Students Trained' },
    { icon: faGraduationCap, number: '95%', label: 'Success Rate' },
    { icon: faAward, number: '50+', label: 'Awards Won' },
    { icon: faGlobe, number: '25+', label: 'Countries Reached' }
  ];

  const faqs = [
    {
      question: 'What age groups do you cater to?',
      answer: 'We offer programs for children (8-18 years) and adults (18+ years). Our courses are designed with age-appropriate content and teaching methodologies.'
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes! We offer both online and offline classes. Our online platform provides interactive live sessions with the same quality as in-person classes.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our program. Please refer to our terms and conditions for detailed refund policy.'
    },
    {
      question: 'How do I track my progress?',
      answer: 'We provide a comprehensive dashboard where you can track your progress, view performance reports, and access learning materials 24/7.'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | Oratrics - Transform Your Communication Skills</title>
        <meta name="description" content="Get in touch with Oratrics for world-class communication training programs. Contact our experts for Math, Personality Development, Public Speaking & more." />
        <meta name="keywords" content="contact oratrics, communication training, public speaking courses, personality development" />
      </Head>

      <div style={{
        background: 'linear-gradient(135deg, #050a30 0%, #050a30 25%, #050a30 50%, #050a30 75%, #050a30 100%)',
        minHeight: '100vh'
      }}>


        {/*Header*/}
        <section style={{
          padding: 'clamp(4rem, 8vh, 6rem) 0 clamp(2rem, 4vh, 3rem)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            background: `repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255, 255, 255, 0.05) 100px, rgba(255, 255, 255, 0.05) 101px)`
          }} />

          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            position: 'relative',
            zIndex: 1
          }}>
            <motion.div 
              style={{
                textAlign: 'center',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #050a30, #8b0000)',
                color: '#ffffff',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}>
                <FontAwesomeIcon icon={faHandshake} />
                Get In Touch
              </div>
              <h1 style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.025em',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}>
                Contact 
                <span style={{
                  background: 'linear-gradient(135deg, #8b0000, #8b0000, #8b0000)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}> Oratrics</span>
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                color: '#f1f5f9',
                lineHeight: 1.6,
                maxWidth: '700px',
                margin: '0 auto',
                fontWeight: 400
              }}>
                Ready to transform your communication skills? Get in touch with our expert team and start your journey to excellence today.
              </p>
            </motion.div>

            {/* Stats*/}
            <motion.div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '2rem 1rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <FontAwesomeIcon 
                    icon={stat.icon} 
                    style={{
                      fontSize: '2rem',
                      color: '#8b0000',
                      marginBottom: '1rem'
                    }}
                  />
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>{stat.number}</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#f1f5f9',
                    fontWeight: 500
                  }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{
          background: '#ffffff',
          padding: 'clamp(3rem, 6vh, 5rem) 0'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
              gap: 'clamp(2rem, 4vw, 4rem)',
              alignItems: 'start'
            }}>
              {/*Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  border: '1px solid #e2e8f0',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                }}>
                  <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#1e293b',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <FontAwesomeIcon icon={faComments} style={{ color: '#050a30' }} />
                    Send Us a Message
                  </h2>
                  <p style={{
                    color: '#64748b',
                    marginBottom: '2rem',
                    lineHeight: 1.6
                  }}>
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '0.5rem'
                        }}>Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '0.5rem',
                            fontSize: '0.875rem',
                            transition: 'all 0.2s ease',
                            '&:focus': {
                              borderColor: '#050a30',
                              outline: 'none',
                              boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
                            }
                          }}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: '0.5rem'
                        }}>Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          style={{
                            width: '100%',
                            padding: '0.875rem 1rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '0.5rem',
                            fontSize: '0.875rem'
                          }}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem'
                        }}
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Course of Interest</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          background: '#ffffff'
                        }}
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Preferred Contact Time</label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          background: '#ffffff'
                        }}
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                        <option value="evening">Evening (5 PM - 8 PM)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: '0.5rem'
                      }}>Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        style={{
                          width: '100%',
                          padding: '0.875rem 1rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          resize: 'vertical'
                        }}
                        placeholder="Tell us about your goals and how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        background: isSubmitting 
                          ? '#9ca3af' 
                          : 'linear-gradient(135deg, #050a30, #8b0000)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 14px rgba(102, 126, 234, 0.35)',
                        letterSpacing: '0.025em'
                      }}
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </motion.button>

                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          background: '#dcfce7',
                          border: '1px solid #bbf7d0',
                          borderRadius: '0.5rem',
                          padding: '1rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: '#166534'
                        }}
                      >
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Thank you! Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}>
                  <div style={{
                    // background: 'linear-gradient(135deg, #050a30, #8b0000)',
                            background: 'linear-gradient(135deg, #050a30 0%, #050a30 25%, #050a30 50%, #050a30 75%, #050a30 100%)',

                    borderRadius: '1.5rem',
                    padding: '2rem',
                    color: '#ffffff'
                  }}>
                    <h2 style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      color:"white"
                    }}>About Oratrics</h2>
                    <p style={{
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      opacity: 0.9
                    }}>
                      Oratrics is a premier communication training institute dedicated to transforming lives through the power of effective communication. With over 10 years of experience, we&apos;ve helped thousands of students build confidence, master public speaking, and excel in their personal and professional lives.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '1rem'
                    }}>
                      {[faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube].map((icon, index) => (
                        <a
                          key={index}
                          href="#"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            background: 'rgba(255, 255, 255, 0.15)',
                            borderRadius: '0.5rem',
                            color: '#ffffff',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <FontAwesomeIcon icon={icon} />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1.5rem',
                    padding: '2rem',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
                  }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '1.5rem'
                    }}>Quick Contact</h3>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #050a3020, #8b000020)',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#050a30'
                        }}>
                          <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div>
                          <div style={{
                            fontWeight: 600,
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>Call Us</div>
                          <div style={{
                            color: '#64748b',
                            fontSize: '0.9rem'
                          }}>+91 98765 43210</div>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #f093fb20, #f5576c20)',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#f093fb'
                        }}>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div>
                          <div style={{
                            fontWeight: 600,
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>Email Us</div>
                          <div style={{
                            color: '#64748b',
                            fontSize: '0.9rem'
                          }}>contact@oratrics.com</div>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #43e97b20, #38f9d720)',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#43e97b',
                          flexShrink: 0
                        }}>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </div>
                        <div>
                          <div style={{
                            fontWeight: 600,
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>Visit Us</div>
                          <div style={{
                            color: '#64748b',
                            fontSize: '0.9rem',
                            lineHeight: 1.5
                          }}>A-401, Business Plaza, Andheri East, Mumbai - 400069, Maharashtra, India</div>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem'
                      }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          background: 'linear-gradient(135deg, #4facfe20, #00f2fe20)',
                          borderRadius: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#4facfe'
                        }}>
                          <FontAwesomeIcon icon={faClock} />
                        </div>
                        <div>
                          <div style={{
                            fontWeight: 600,
                            color: '#1e293b',
                            marginBottom: '0.25rem'
                          }}>Business Hours</div>
                          <div style={{
                            color: '#64748b',
                            fontSize: '0.9rem'
                          }}>Mon-Sat: 9:00 AM - 7:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations with Maps */}
        <section style={{
          background: '#f8fafc',
          padding: 'clamp(3rem, 6vh, 5rem) 0'
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)'
          }}>
            <motion.div
              style={{
                textAlign: 'center',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '1rem'
              }}>Our Locations</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Visit us at any of our convenient locations or connect with us online for personalized guidance.
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(500px, 100%), 1fr))',
              gap: '3rem'
            }}>
              {officeLocations.map((location, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: '#ffffff',
                    borderRadius: '1.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e2e8f0'
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Map */}
                  <div style={{
                    height: '250px',
                    position: 'relative'
                  }}>
                    <iframe
                      src={location.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Location Details */}
                  <div style={{
                    padding: '2rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.375rem',
                      fontWeight: 700,
                      color: '#1e293b',
                      marginBottom: '1rem'
                    }}>{location.title}</h3>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}>
                        <FontAwesomeIcon 
                          icon={faMapMarkerAlt} 
                          style={{ color: '#050a30', marginTop: '0.25rem' }}
                        />
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.9rem',
                          lineHeight: 1.5
                        }}>{location.address}</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <FontAwesomeIcon 
                          icon={faPhone} 
                          style={{ color: '#f093fb' }}
                        />
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.9rem'
                        }}>{location.phone}</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          style={{ color: '#43e97b' }}
                        />
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.9rem'
                        }}>{location.email}</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <FontAwesomeIcon 
                          icon={faClock} 
                          style={{ color: '#4facfe' }}
                        />
                        <span style={{
                          color: '#64748b',
                          fontSize: '0.9rem'
                        }}>{location.hours}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section style={{
          background: '#ffffff',
          padding: 'clamp(3rem, 6vh, 5rem) 0'
        }}>
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)'
          }}>
            <motion.div
              style={{
                textAlign: 'center',
                marginBottom: 'clamp(3rem, 6vh, 4rem)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#1e293b',
                marginBottom: '1rem'
              }}>Frequently Asked Questions</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Find answers to common questions about our programs and services.
              </p>
            </motion.div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '1rem',
                    padding: '1.5rem',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '0.75rem'
                  }}>
                    <FontAwesomeIcon 
                      icon={faQuestionCircle} 
                      style={{ color: '#050a30', fontSize: '1.25rem' }}
                    />
                    <h3 style={{
                      fontSize: '1.125rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      margin: 0
                    }}>{faq.question}</h3>
                  </div>
                  <p style={{
                    color: '#64748b',
                    lineHeight: 1.6,
                    margin: 0,
                    paddingLeft: '2.25rem'
                  }}>{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          background: 'linear-gradient(135deg, #050a30, #8b0000)',
          padding: 'clamp(3rem, 6vh, 5rem) 0'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            textAlign: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1rem'
              }}>Ready to Transform Your Life?</h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#f1f5f9',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Join thousands of successful students who have transformed their communication skills with Oratrics. Book your free consultation today!
              </p>
              <motion.button
                style={{
                  background: '#ffffff',
                  color: '#050a30',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Consultation
                <FontAwesomeIcon icon={faArrowRight} />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx>{`
        input:focus,
        select:focus,
        textarea:focus {
          border-color: #050a30 !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
          
          .locations-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;



