import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Translations } from '../../translations';

interface ContactPageProps {
  t: Translations;
}

export function ContactPage({ t }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@linjet.aero?subject=Contact from ${formData.name}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl text-white mb-6">{t.contact.title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
              <h2 className="text-2xl text-white mb-6">{t.contact.formTitle}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-slate-300 mb-2">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors flex items-center justify-center gap-3 group"
                >
                  {t.contact.submitButton}
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl text-white mb-6">{t.contact.locationTitle}</h3>
                <div className="space-y-6 text-slate-300">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-sky-400 flex-shrink-0" size={24} />
                    <div>
                      <p>{t.contact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="text-sky-400 flex-shrink-0" size={24} />
                    <a href="tel:+905448690097" className="hover:text-sky-400 transition-colors">
                      +90 (544) 869 00 97
                    </a>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="text-sky-400 flex-shrink-0" size={24} />
                    <a href="mailto:info@linjet.aero" className="hover:text-sky-400 transition-colors">
                      info@linjet.aero
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl text-white mb-6">{t.contact.departments}</h3>
                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="text-sky-400">{t.contact.ops}:</span>{' '}
                    <a href="mailto:ops@linjet.aero" className="hover:text-sky-400 transition-colors">
                      ops@linjet.aero
                    </a>
                  </p>
                  <p>
                    <span className="text-sky-400">{t.contact.training}:</span>{' '}
                    <a href="mailto:training@linjet.aero" className="hover:text-sky-400 transition-colors">
                      training@linjet.aero
                    </a>
                  </p>
                  <p>
                    <span className="text-sky-400">{t.contact.quality}:</span>{' '}
                    <a href="mailto:quality@linjet.aero" className="hover:text-sky-400 transition-colors">
                      quality@linjet.aero
                    </a>
                  </p>
                  <p>
                    <span className="text-sky-400">{t.contact.camo}:</span>{' '}
                    <a href="mailto:camo@linjet.aero" className="hover:text-sky-400 transition-colors">
                      camo@linjet.aero
                    </a>
                  </p>
                  <p>
                    <span className="text-sky-400">{t.contact.safety}:</span>{' '}
                    <a href="mailto:safety@linjet.aero" className="hover:text-sky-400 transition-colors">
                      safety@linjet.aero
                    </a>
                  </p>
                  <p>
                    <span className="text-sky-400">{t.contact.dispatch}:</span>{' '}
                    <a href="mailto:dispatch@linjet.aero" className="hover:text-sky-400 transition-colors">
                      dispatch@linjet.aero
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
