import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-montserrat font-bold mb-6 text-white">
              Let's <span className="text-primary">Connect</span>
            </h3>
            
            <p className="text-gray-300 mb-8">
              Have a project in mind or interested in my services? Feel free to reach out through any of the following channels, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-medium text-white">Email</h4>
                  <p className="text-gray-300">nofriintraco@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-medium text-white">Phone</h4>
                  <p className="text-gray-300">+62 812 4870 7520</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-medium text-white">Location</h4>
                  <p className="text-gray-300">Sorong,Papua Barat Daya Indonesia</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-montserrat font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-6 md:p-8">
              <h3 className="text-2xl font-montserrat font-bold mb-6 text-white">
                Send <span className="text-primary">Message</span>
              </h3>
              
              {submitSuccess === true && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400">
                  Message sent successfully! I'll respond as soon as possible.
                </div>
              )}
              
              {submitSuccess === false && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400">
                  Something went wrong. Please try again later.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="example@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10"></div>
    </section>
  );
};

export default Contact;