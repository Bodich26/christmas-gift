"use client";

import { scenes } from "@/scenes";
import * as Phaser from "phaser";
import { useEffect, useRef } from "react";

export default function Home() {
  const gameContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && gameContainerRef.current) {
      const game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        title: "Christmas Gift",
        scene: scenes,
        url: process.env.NEXT_PUBLIC_URL || "",
        version: process.env.NEXT_PUBLIC_VERSION || "0.0.1",
        backgroundColor: "#000",
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        pixelArt: true,
        parent: gameContainerRef.current,
      });

      return () => {
        game.destroy(true);
      };
    }
  }, []);

  return <div ref={gameContainerRef}></div>;
}
