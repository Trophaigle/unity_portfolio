"use client";

import Section from "../ui/Section";
import { useState } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-neutral-950 text-neutral-100">
      <Section id="contact" title="Let’s talk">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-neutral-300">
            If you have a project, a training need, or an idea to explore, feel free to reach out.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 rounded-md border border-neutral-700 bg-neutral-900/20 focus:outline-none focus:border-emerald-400"
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="p-3 rounded-md border border-neutral-700 bg-neutral-900/20 focus:outline-none focus:border-emerald-400 min-h-[120px]"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-emerald-400 text-black font-medium rounded-md hover:bg-emerald-500 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>

          {status === "success" && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-500">Failed to send message. Try again.</p>
          )}

          <div className="flex gap-6 mt-4 text-neutral-400">
          <a
            href="https://github.com/Trophaigle?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/thomas-serafin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
             href="https://thomaserafin.com"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-white transition"
             title="Site internet personnel"
           >
             <FaGlobe size={24} />
           </a>

          </div>
        </div>
      </Section>
    </footer>
  );
}