/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║            BRIGXMEDIA — VIDEO CONFIGURATION              ║
 * ║  Edit this file to update showreel and portfolio videos. ║
 * ║                                                          ║
 * ║  SUPPORTED PLATFORMS:                                    ║
 * ║    YouTube  → set type: "youtube", id: "VIDEO_ID"        ║
 * ║    Instagram → set type: "instagram", url: "POST_URL"    ║
 * ╚══════════════════════════════════════════════════════════╝
 */

const VIDEO_CONFIG = {

  // ── MAIN SHOWREEL ─────────────────────────────────────────
  // This plays when a visitor clicks the big play button.
  showreel: {
    type: "youtube",              // "youtube" | "instagram"

    // ── YouTube ──────────────────────────────────────────
    // Grab the ID from the URL: youtube.com/watch?v=XXXXXXXXXXX
    youtubeId: "dQw4w9WgXcQ",    // ← replace with your YouTube video ID

    // ── Instagram (uncomment & fill in if using Instagram) ──
    // type: "instagram",
    // instagramUrl: "https://www.instagram.com/reel/XXXXXXXXXXX/",
  },

  // ── PORTFOLIO / "WATCH OUR WORK" LINK ────────────────────
  // Where the "Watch Our Work →" button takes the visitor.
  portfolioUrl: "https://www.youtube.com/@brigmedia",  // ← your channel or portfolio page

};
