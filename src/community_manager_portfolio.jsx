import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="p-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-3xl font-bold tracking-wide">Community Manager Portfolio</h1>
      </header>

      <main className="space-y-20 px-6 py-10 max-w-6xl mx-auto">
        {/* About Me */}
        <section id="about" className="space-y-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-semibold">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">
              <img src="/avatar.jpg" alt="Profile" className="w-28 h-28 rounded-full border-4 border-blue-500" />
              <p className="text-lg leading-relaxed">
                I’m a Community Manager with experience across startups, Web3, and gaming communities. I specialize in engagement, growth, and building thriving digital spaces.
              </p>
            </div>
            <ul className="list-disc list-inside mt-4 text-md space-y-1">
              <li>Empowering communities through meaningful engagement</li>
              <li>Driving creator partnerships and social growth</li>
              <li>Crafting long-term community strategies</li>
            </ul>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-4xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {["Community Engagement", "Social Media Strategy", "Event Hosting", "Discord/Telegram Management", "Influencer Partnerships", "Content Planning & Analytics"].map(skill => (
              <Card key={skill} className="bg-gray-800 border-none shadow-md rounded-xl">
                <CardContent className="p-5 text-center font-medium text-lg text-blue-300">{skill}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-4xl font-semibold mb-6">Projects</h2>
          <div className="space-y-6">
            {[
              {
                title: "Web3 Gaming DAO",
                description: "Led community campaigns that grew engagement by 60% and increased active users by 40%.",
                logo: "/logos/web3dao.png",
              },
              {
                title: "Startup Incubator",
                description: "Managed creator engagement and hosted weekly AMA sessions leading to 3x increase in Discord participation.",
                logo: "/logos/startup.png",
              },
              {
                title: "Esports Community Hub",
                description: "Built partnerships with 30+ creators, boosting event participation by over 300%.",
                logo: "/logos/esports.png",
              },
            ].map((project, idx) => (
              <Card key={idx} className="bg-gray-800 border border-gray-700 rounded-xl">
                <CardContent className="p-5">
                  <div className="flex items-center gap-5">
                    <img src={project.logo} alt={project.title} className="w-14 h-14 rounded" />
                    <div>
                      <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
                      <p className="text-md mt-1 text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <h2 className="text-4xl font-semibold mb-6">Certifications</h2>
          <ul className="space-y-4">
            {[
              { name: "Community Management", org: "CMX Academy", date: "Jan 2024", link: "#" },
              { name: "Social Media Strategy", org: "HubSpot", date: "May 2023", link: "#" },
            ].map((cert, idx) => (
              <li key={idx} className="border border-gray-700 p-5 rounded-lg bg-gray-800">
                <p className="font-semibold text-lg text-blue-300">{cert.name}</p>
                <p className="text-sm text-gray-400">{cert.org} — {cert.date}</p>
                {cert.link && <a href={cert.link} className="text-blue-400 text-sm underline mt-1 inline-block">View Certificate</a>}
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonials */}
        <section id="testimonials">
          <h2 className="text-4xl font-semibold mb-6">Testimonials</h2>
          <div className="space-y-6">
            <blockquote className="italic border-l-4 border-blue-500 pl-5 text-gray-300">“An absolute professional—brought clarity, structure, and energy to our community.” — Startup Founder</blockquote>
            <blockquote className="italic border-l-4 border-purple-500 pl-5 text-gray-300">“One of the best community builders I’ve worked with.” — Web3 Creator</blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-4xl font-semibold mb-6">Contact</h2>
          <form className="space-y-4 max-w-md">
            <Input placeholder="Your Name" required className="bg-gray-800 border-gray-600 text-white" />
            <Input placeholder="Your Email" type="email" required className="bg-gray-800 border-gray-600 text-white" />
            <Textarea placeholder="Your Message" rows={5} required className="bg-gray-800 border-gray-600 text-white" />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Send</Button>
          </form>
          <div className="mt-6">
            <p className="text-gray-400">Connect with me on:</p>
            <ul className="flex gap-6 mt-3 text-blue-400">
              <li><a href="#" className="underline">LinkedIn</a></li>
              <li><a href="#" className="underline">Twitter</a></li>
              <li><a href="#" className="underline">Discord</a></li>
              <li><a href="/resume.pdf" className="underline">Download Résumé</a></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm p-6 border-t border-gray-700 mt-12 text-gray-500">© 2025 Community Manager Portfolio</footer>
    </div>
  );
}
