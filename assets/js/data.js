// Fictional data for Boyapati University
// All names, exams, and certificates here are cinematic parody only.
const BU_DATA = {
  university: {
    name: "Boyapati University",
    tagline: "No Newton Law. Only BoyaBalaya Law.",
    founder: "Boyapati Sreenu",
    dean: "Nandamuri Balakrishna"
  },

  departments: [
    {
      id: "mass-elevation",
      name: "Mass Elevation Department",
      description:
        "Dedicated to scenes that lift the entire theatre out of their seats with whistles, goosebumps, and slow-motion walks."
    },
    {
      id: "action-violence",
      name: "Action & Violence Studies",
      description:
        "Research on over-the-top fights, flying vehicles, and indestructible heroes operating on pure mass energy."
    },
    {
      id: "sentiment-emotion",
      name: "Sentiment & Emotion Engineering",
      description:
        "Design and calibration of family sentiment, tear-jerker moments, and instant mood switches back to elevation."
    },
    {
      id: "dialogue-punchology",
      name: "Dialogue Science & Punchology",
      description:
        "Advanced study of punch dialogues that echo in theatres, memes, and group chats long after the scene ends."
    },
    {
      id: "interval-bang",
      name: "Interval Bang Theory",
      description:
        "Focused on crafting interval blocks where the screen explodes, lights dim, and fans run to the canteen still shouting."
    },
    {
      id: "climax-physics",
      name: "Climax Physics (BoyaBalaya Law)",
      description:
        "Applies BoyaBalaya Law, where physics bends, gravity negotiates, and the climax always lands in favour of the hero."
    }
  ],

  subjects: [
    {
      id: "akhanda",
      departmentId: "mass-elevation",
      name: "Akhanda"
    },
    {
      id: "legend",
      departmentId: "mass-elevation",
      name: "Legend"
    },
    {
      id: "skanda",
      departmentId: "action-violence",
      name: "Skanda"
    },
    {
      id: "vinaya-vidheya-rama",
      departmentId: "action-violence",
      name: "Vinaya Vidheya Rama"
    },
    {
      id: "sarrainodu",
      departmentId: "dialogue-punchology",
      name: "Sarrainodu"
    }
  ],

  units: [
    // Akhanda units
    {
      id: "akhanda-balayya-entry-mechanics",
      subjectId: "akhanda",
      title: "Balayya Entry Mechanics",
      placeholderVideoUrl: ""
    },
    {
      id: "akhanda-agni-mass-dialogue-theory",
      subjectId: "akhanda",
      title: "Agni Mass Dialogue Theory",
      placeholderVideoUrl: ""
    },
    {
      id: "akhanda-villain-destruction-algorithms",
      subjectId: "akhanda",
      title: "Villain Destruction Algorithms",
      placeholderVideoUrl: ""
    },
    {
      id: "akhanda-interval-bang-engineering",
      subjectId: "akhanda",
      title: "Interval Bang Engineering",
      placeholderVideoUrl: ""
    },
    {
      id: "akhanda-climax-justice-protocol",
      subjectId: "akhanda",
      title: "Climax Justice Protocol",
      placeholderVideoUrl: ""
    },

    // Skanda units
    {
      id: "skanda-hero-entry-mechanics",
      subjectId: "skanda",
      title: "Hero Entry Mechanics",
      placeholderVideoUrl: ""
    },
    {
      id: "skanda-airport-fight-physics",
      subjectId: "skanda",
      title: "Airport Fight Physics",
      placeholderVideoUrl: ""
    },
    {
      id: "skanda-interval-bang-theory",
      subjectId: "skanda",
      title: "Interval Bang Theory",
      placeholderVideoUrl: ""
    },
    {
      id: "skanda-climax-speech-dynamics",
      subjectId: "skanda",
      title: "Climax Speech Dynamics",
      placeholderVideoUrl: ""
    }
  ],

  laws: [
    {
      id: "law-instant-elevation",
      unitId: "akhanda-balayya-entry-mechanics",
      lawTitle: "Law of Instant Elevation",
      lawStatement:
        "When the hero steps into frame, background score must jump from silence to stadium level in one beat.",
      explanation:
        "Crowd heartbeat syncs with the drum beat. Science calls it noise, BoyaBalaya Law calls it elevation." 
    },
    {
      id: "law-agni-dialogue-resonance",
      unitId: "akhanda-agni-mass-dialogue-theory",
      lawTitle: "Agni Dialogue Resonance Law",
      lawStatement:
        "Any dialogue delivered near fire automatically gains 300% bass, echo, and meme potential.",
      explanation:
        "When flames rise, words travel in slow motion, burning straight into the front-bench whistle section."
    },
    {
      id: "law-villain-fragmentation",
      unitId: "akhanda-villain-destruction-algorithms",
      lawTitle: "Villain Fragmentation Principle",
      lawStatement:
        "One hero punch can split a single villain into three slow-motion replays from different angles.",
      explanation:
        "Every impact is conserved by replaying it multiple times so the audience can fully enjoy the damage report."
    },
    {
      id: "law-interval-shockwave",
      unitId: "akhanda-interval-bang-engineering",
      lawTitle: "Interval Shockwave Law",
      lawStatement:
        "At interval bang, sound, lights, and goosebumps must peak simultaneously before the screen cuts to "
          + "INTERVAL.",
      explanation:
        "Snack sales and hype both spike exactly at this frame. This is the official reset button of the theatre." 
    },
    {
      id: "law-climax-rewrite",
      unitId: "akhanda-climax-justice-protocol",
      lawTitle: "Climax Justice Rewrite Law",
      lawStatement:
        "In the final reel, every injustice committed in the movie must be settled within one extended monologue.",
      explanation:
        "Courts take years, but BoyaBalaya Law closes all cases before the end credits with extra background score."
    },
    {
      id: "law-airport-anti-gravity",
      unitId: "skanda-airport-fight-physics",
      lawTitle: "Airport Anti‑Gravity Law",
      lawStatement:
        "During airport fights, luggage, villains, and vehicles are all allowed temporary freedom from gravity.",
      explanation:
        "Physics officers go on coffee break so that every throw, flip, and jump can reach maximum slow-motion height."
    },
    {
      id: "law-speech-amplification",
      unitId: "skanda-climax-speech-dynamics",
      lawTitle: "Climax Speech Amplification Law",
      lawStatement:
        "When the hero starts a climax speech, even distant loudspeakers automatically route the audio in HD.",
      explanation:
        "No mic, no problem. Mass acoustics ensure every word reaches the villain, the crowd, and the balcony row." 
    }
  ]
};

if (typeof window !== "undefined") {
  window.BU_DATA = BU_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = BU_DATA;
}
