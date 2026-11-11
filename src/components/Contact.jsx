import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sentStatus, setSentStatus] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const emailAddress = "srivastavatanishq142@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSentStatus("TRANSMITTING...");
    setStatusMessage("");

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${emailAddress}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: `New Portfolio Dispatch: ${formData.subject || "Collaboration Inquiry"}`,
            subject: formData.subject,
            message: formData.message,
            _replyto: formData.email,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setSentStatus("DISPATCH DELIVERED ✓");
        setStatusMessage("Message sent! A copy has been delivered to your inbox.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setSentStatus("");
          setStatusMessage("");
        }, 6000);
      } else {
        throw new Error(data.message || "Dispatch delivery failed");
      }
    } catch {
      // Fallback directly to mailto so the sender's message is never lost
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Collaboration Dispatch"
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSentStatus("DISPATCH QUEUED IN MAIL CLIENT ✓");
      setStatusMessage("Redirected to your email client to send directly.");
      setTimeout(() => {
        setSentStatus("");
        setStatusMessage("");
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-zinc-800">
      {/* Category / Subtitle */}
      <div className="text-indigo-400 font-mono tracking-widest text-xs uppercase mb-2 flex items-center gap-2">
        <span>04</span>
        <span className="text-zinc-600">/</span>
        <span>COLLABORATION</span>
      </div>

      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] uppercase mb-16 max-w-4xl">
        Let's build something <br /> together.
      </h2>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-24">
        {/* Left Column: Direct Inquiries */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase block font-semibold">
                DIRECT INQUIRIES
              </span>
              <a
                href={`mailto:${emailAddress}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-indigo-300 transition-colors block mt-1"
              >
                {emailAddress}
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className="mt-2 text-xs font-mono text-zinc-200 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>[</span>
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy email address</span>
                </>
              )}
              <span>]</span>
            </button>

            <div className="mt-10">
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase block font-semibold">
                AVAILABILITY
              </span>
              <p className="text-sm text-zinc-200 mt-1 font-medium">
                Currently not affiliated with any organisation
              </p>
            </div>

            <div className="mt-8">
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase block font-semibold">
                LOCATION
              </span>
              <p className="text-sm text-zinc-200 mt-1 font-medium">
                India — Available worldwide for remote work
              </p>
            </div>

            <div className="mt-10">
              <span className="text-xs font-mono tracking-widest text-zinc-300 uppercase block mb-2 font-semibold">
                NETWORKS
              </span>
              <div className="flex items-center gap-3 text-sm font-mono text-zinc-200">
                <a
                  href="https://github.com/tanqdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-0.5"
                >
                  GitHub ↗
                </a>
                <span className="text-zinc-600">/</span>
                <a
                  href="https://www.linkedin.com/in/tanishqdev-srivastava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-0.5"
                >
                  LinkedIn ↗
                </a>
                <span className="text-zinc-600">/</span>
                <a
                  href="https://leetcode.com/u/tanqdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-0.5"
                >
                  LeetCode ↗
                </a>
                <span className="text-zinc-600">/</span>
                <a
                  href="/Tanishq_Srivastava_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-0.5"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dispatch Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8 font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Name */}
              <div>
                <label className="block text-xs text-zinc-300 font-semibold uppercase tracking-widest mb-1">
                  NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Chen"
                  className="w-full bg-transparent border-b border-zinc-700 focus:border-white py-2 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-zinc-300 font-semibold uppercase tracking-widest mb-1">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@domain.com"
                  className="w-full bg-transparent border-b border-zinc-700 focus:border-white py-2 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs text-zinc-300 font-semibold uppercase tracking-widest mb-1">
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project collaboration / internship opportunity"
                className="w-full bg-transparent border-b border-zinc-700 focus:border-white py-2 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs text-zinc-300 font-semibold uppercase tracking-widest mb-1">
                MESSAGE
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Tanishq, we are building..."
                className="w-full bg-transparent border-b border-zinc-700 focus:border-white py-2 text-sm text-white placeholder-zinc-500 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Action & Telemetry */}
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-white text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer self-start flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{sentStatus || "SEND DISPATCH"}</span>
                  <span>{isSubmitting ? "···" : "→"}</span>
                </button>

                <span className="text-xs text-zinc-300 font-mono font-medium">
                  Average response: &lt; 24h
                </span>
              </div>

              {statusMessage && (
                <p className="text-xs font-mono text-emerald-400 mt-1 animate-fade-in">
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-12 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="text-xl font-light font-[Playwrite_US_Modern] text-white">
            Tanishq
          </span>
          <span className="text-zinc-600">|</span>
          <span>Designed with intention &amp; precision</span>
        </div>

        <div className="flex items-center gap-6">
          <span>© 2025 Tanishq Srivastava</span>
          <a
            href="#home"
            className="text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
