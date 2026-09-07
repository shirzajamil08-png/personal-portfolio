const mongoose = require("mongoose");

/** A portfolio project rendered in the Projects section. */
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tech: { type: [String], default: [] },
    tags: { type: [String], default: [] },     // filter buttons: mern, react, api
    emoji: { type: String, default: "\u{1F4BB}" },
    thumb: { type: Number, default: 1 },       // 1-6, picks the gradient in the CSS
    github: { type: String, default: "" },
    demo: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
