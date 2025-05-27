"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import axios from "axios";

const Page = () => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const formRef = useRef(null);
  const buttonRef = useRef(null);
  const floatDotRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(titleRef.current, {
      y: -40,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    gsap.from(subtitleRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    gsap.from(formRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "power2.out",
    });

    gsap.from(buttonRef.current, {
      scale: 0.95,
      opacity: 0,
      duration: 0.8,
      delay: 0.8,
      ease: "back.out(1.7)",
    });

    gsap.to(floatDotRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await axios.post(
        "http://localhost:4000/api/wait/join",
        {
          name,
          email,
        },
        config
      );
      setMessage("Successfully joined the waitlist!");
      setName("");
      setEmail("");
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : "Failed to join waitlist.";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-black px-4"
    >
      <div className="relative bg-black border border-gray-200 rounded-2xl shadow-xl shadow-blue-500 p-10 max-w-xl w-full">
        <div
          ref={floatDotRef}
          className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full"
        ></div>

        <h1
          ref={titleRef}
          className="text-4xl font-semibold text-black text-center mb-4"
        >
          Join the Waitlist
        </h1>

        <p
          ref={subtitleRef}
          className="text-center text-gray-600 text-base mb-8"
        >
          Be the first to know when we launch. Get early access and updates!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-3 text-lg font-medium rounded-lg transition-all transform hover:scale-[1.02] ${
              loading
                ? "bg-red-500 text-white-300 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loading ? "Joining..." : "Join Now"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-green-600 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
