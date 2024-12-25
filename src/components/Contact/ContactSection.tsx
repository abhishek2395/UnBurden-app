import React from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '../ScrollAnimation';

export const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-neutral-900/30">
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimation className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Have questions about UnBurden or want to discuss student loan management strategies? I'd love to hear from you.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:doitteam12@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg text-neutral-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/iamabhishekjaiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-neutral-800/50 hover:bg-neutral-800 rounded-lg text-neutral-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};