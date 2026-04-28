/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║            BRIG MEDIA — VIDEO CONFIGURATION              ║
 * ║  Edit this file to populate the "Our Work" grid.         ║
 * ║                                                          ║
 * ║  HOW TO ADD A REGULAR YOUTUBE VIDEO:                     ║
 * ║    { type: "youtube", youtubeId: "VIDEO_ID", ... }       ║
 * ║    → Get ID from: youtube.com/watch?v=VIDEO_ID           ║
 * ║                                                          ║
 * ║  HOW TO ADD A YOUTUBE SHORT:                             ║
 * ║    { type: "short", youtubeId: "VIDEO_ID", ... }         ║
 * ║    → Get ID from: youtube.com/shorts/VIDEO_ID            ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const VIDEO_CONFIG = {

  // ── OUR WORK VIDEO GRID ───────────────────────────────────────
  // Add or remove entries below. Mix regular videos and Shorts.
  // The grid auto-populates — no other file needs to be edited.
  works: [

    // ── Regular YouTube Video ─────────────────────────────────
    {
      type: "youtube",
      youtubeId: "dQw4w9WgXcQ",     // ← replace with your YouTube video ID
      title: "Brand Film 2026",
      tags: "Brand Films • Commercials"
    },

    // ── YouTube Short (portrait 9:16) ─────────────────────────
    {
      type: "short",
      youtubeId: "V-_O7nl0Ii0",     // ← replace with your Shorts video ID
      title: "Behind The Shoot",
      tags: "Reels • Short-form"
    },

    // ── Regular YouTube Video ─────────────────────────────────
    {
      type: "youtube",
      youtubeId: "tgbNymZ7vqY",
      title: "LuxeWear Autumn Collection",
      tags: "Brand Films • Reels"
    },

    // ── YouTube Short ─────────────────────────────────────────
    {
      type: "short",
      youtubeId: "9bZkp7q19f0",
      title: "60-Second Café Spot",
      tags: "Short-form • Commercials"
    },

  ],

  // ── PORTFOLIO / "WATCH OUR WORK" BUTTON LINK ─────────────────
  // Where the button at the bottom of the section takes visitors.
  portfolioUrl: "https://www.youtube.com/@brigmedia",

};
