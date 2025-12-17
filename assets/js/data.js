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
        "Theatre lo andaru seats nunchi lechi whistles, goosebumps, slow-motion walks tho full charge avvalante design chesina elevation scenes ki special department."
    },
    {
      id: "action-violence",
      name: "Action & Violence Studies",
      description:
        "Over-the-top fights, flying vehicles, indestructible heroes anni pure mass energy meeda run avvadam meeda research chese action violence department."
    },
    {
      id: "sentiment-emotion",
      name: "Sentiment & Emotion Engineering",
      description:
        "Family sentiment ni design cheyyadam, tear-jerker moments ni tune cheyyadam, elevation nunchi oka second lo emotion ki malli back elevation ki switch cheyyadam anni ikada engineering."
    },
    {
      id: "dialogue-punchology",
      name: "Dialogue Science & Punchology",
      description:
        "Theatre lo echo ayyye, memes lo repeat ayyye, group chats lo forward ayyye punch dialogues meeda advanced study chese science department idi."
    },
    {
      id: "interval-bang",
      name: "Interval Bang Theory",
      description:
        "Screen explode ayye, lights dim ayye, fans canteen ki run avthu kuda shout cheyyadam apegani interval blocks ni craft cheyyadam meeda focus chesina theory."
    },
    {
      id: "climax-physics",
      name: "Climax Physics (BoyaBalaya Law)",
      description:
        "Ikada BoyaBalaya Law apply avthundi, physics bend avthundi, gravity compromise avthundi, final climax matram hero favour lo ne landing avthundi."
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
        "Hero frame lo step vesaga background score silent nunchi stadium level varaku okka beat lo jump ayipotundi.",
      explanation:
        "Crowd heartbeat drum beat tho sync avthundi. Science idi noise antundi, BoyaBalaya Law matram pure elevation antundi." 
    },
    {
      id: "law-agni-dialogue-resonance",
      unitId: "akhanda-agni-mass-dialogue-theory",
      lawTitle: "Agni Dialogue Resonance Law",
      lawStatement:
        "Fire daggara deliver chesina dialogue ki automatic ga 300% bass, echo, meme potential add ayipothundi.",
      explanation:
        "Flames rise ayye moment lo words slow motion lo travel ayi direct ga front-bench whistle section lo burn ayipothayi."
    },
    {
      id: "law-villain-fragmentation",
      unitId: "akhanda-villain-destruction-algorithms",
      lawTitle: "Villain Fragmentation Principle",
      lawStatement:
        "Oka hero punch valla okka villain three different angles nunchi slow-motion replay lo fragment avutadu.",
      explanation:
        "Impact anni conserve cheyyali kabatti, same damage ni multiple times replay chesi audience ki full satisfaction istaru."
    },
    {
      id: "law-interval-shockwave",
      unitId: "akhanda-interval-bang-engineering",
      lawTitle: "Interval Shockwave Law",
      lawStatement:
        "Interval bang time lo sound, lights, goosebumps anni kalsi same second lo peak ki vellali tarvata screen 'INTERVAL' ki cut avvali.",
      explanation:
        "Ade frame lo snack sales, hype rendu spike avthai. Idi theatre ki official reset button laga panichestundi." 
    },
    {
      id: "law-climax-rewrite",
      unitId: "akhanda-climax-justice-protocol",
      lawTitle: "Climax Justice Rewrite Law",
      lawStatement:
        "Final reel lo movie lo jarigina anni injustice ni oka lengthy monologue lo complete ga settle cheyyali.",
      explanation:
        "Courts ki years padachu, kani BoyaBalaya Law lo end credits mundey anni cases close ayipothayi, extra background score tho."
    },
    {
      id: "law-airport-anti-gravity",
      unitId: "skanda-airport-fight-physics",
      lawTitle: "Airport Anti‑Gravity Law",
      lawStatement:
        "Airport fight start ayyaka luggage, villains, vehicles anni ki konchem time ki gravity free pass istaru.",
      explanation:
        "Physics officers coffee break ki vellasar kabatti prathi throw, flip, jump maximum slow-motion height ki reach avthundi."
    },
    {
      id: "law-speech-amplification",
      unitId: "skanda-climax-speech-dynamics",
      lawTitle: "Climax Speech Amplification Law",
      lawStatement:
        "Hero climax speech start chesaka, dooram lo unna loudspeakers kuda automatic ga HD audio mode ki shift ayipothayi.",
      explanation:
        "Mic lekapoyina parledhu, mass acoustics valla prathi maat villain, crowd, balcony last row varaku clear ga reach avthundi." 
    }
  ]
};

if (typeof window !== "undefined") {
  window.BU_DATA = BU_DATA;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = BU_DATA;
}
