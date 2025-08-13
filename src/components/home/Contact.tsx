import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">
          CONTACT.SH
        </h2>
        <div className="border-2 border-white p-8 bg-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="font-bold mb-2">EMAIL</h3>
              <a
                href="mailto:oznuroznurr26@email.com?subject=Request%20for%20Contact"
                className="border-2 border-white px-3 py-1 inline-block items-center gap-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                oznuroznurr26@email.com
              </a>
            </div>

            <div className="text-center">
              <Github size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="font-bold mb-2">GITHUB</h3>
              <a
                href="https://github.com/oznuroznur/"
                className="border-2 border-white px-3 py-1 inline-block items-center gap-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/oznuroznur
              </a>
            </div>

            <div className="text-center">
              <Linkedin size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="font-bold mb-2">LINKEDIN</h3>
              <a
                href="https://linkedin.com/in/oznuroznur"
                className="border-2 border-white px-3 py-1 inline-block items-center gap-2 hover:bg-white hover:text-black hover:bg-none transition-none text-center text-sm md:text-base bg-[url('/assets/banner-bg.png')] bg-cover bg-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/oznuroznur
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-400 font-bold">
              console.log(&quot;Let&apos;s build something that works.&quot;)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
