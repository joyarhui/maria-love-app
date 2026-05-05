"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MariaLoveApp() {
  const [pulse, setPulse] = useState(1);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);

  const fullMessage =
    "Initializing Maria System... Access granted ❤️ You are the best thing in my life.";

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p === 1 ? 1.1 : 1));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index < fullMessage.length) {
      const timeout = setTimeout(() => {
        setMessage((prev) => prev + fullMessage[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <motion.h1
        className="text-5xl font-bold mb-6"
        animate={{ scale: pulse }}
      >
        Maria System ❤️
      </motion.h1>

      <div className="bg-white text-black shadow-2xl rounded-2xl p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Core Attributes</h2>
        <ul className="space-y-2">
          <li>🧠 Intelligence: ∞</li>
          <li>😂 Humor: Elite Timing</li>
          <li>💖 Loyalty: Unbreakable</li>
          <li>⚡ Energy: Hyperactive Engine</li>
          <li>🏡 Family-Oriented: True</li>
          <li>🎯 Determination: Crystal Clear</li>
        </ul>
      </div>

      <motion.div className="mt-8 text-center" animate={{ scale: pulse }}>
        <p className="text-lg">System Status:</p>
        <p className="text-2xl font-bold">Running perfectly 💍</p>
      </motion.div>

      <div className="mt-6 text-green-400 font-mono text-center max-w-md">
        {message}
        <span className="animate-pulse">|</span>
      </div>

      <HeartCanvas />
    </div>
  );
}

function HeartCanvas() {
  const [points, setPoints] = useState([]);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const pts = [];
    for (let t = 0; t < Math.PI * 2; t += 0.05) {
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);
      pts.push({ x, y });
    }
    setPoints(pts);

    const interval = setInterval(() => {
      setScale((s) => (s === 1 ? 1.1 : 1));
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="-20 -20 40 40"
      className="mt-10"
      animate={{ scale }}
    >
      <polyline
        fill="none"
        stroke="white"
        strokeWidth="0.7"
        points={points.map((p) => `${p.x},${-p.y}`).join(" ")}
      />
    </motion.svg>
  );
}
