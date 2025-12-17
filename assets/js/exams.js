(function () {
  if (typeof window === "undefined" || !window.BU_DATA) {
    return;
  }

  var data = window.BU_DATA || {};
  var subjects = data.subjects || [];

  function getQueryParam(name) {
    var search = window.location.search || "";
    var params = new URLSearchParams(search);
    return params.get(name);
  }

  function findSubjectById(id) {
    if (!id) return null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].id === id) {
        return subjects[i];
      }
    }
    return null;
  }

  var QUESTION_BANK = {
    akhanda: [
      {
        text: "Akhanda subject lo compulsory mass ingredient enti?",
        options: [
          "Silent hero without background score",
          "Temple lo agni backdrop, heavy chanting",
          "Only campus love story montages",
          "Black & white art film framing"
        ],
        correctIndex: 1
      },
      {
        text: "BoyaBalayya style entry shot usually ela untundi?",
        options: [
          "Hero backside nunchi slow zoom with chant",
          "Hero scooter meeda casual entry",
          "Hero library lo silently book chaduvutadu",
          "Only phone call voice over"
        ],
        correctIndex: 0
      },
      {
        text: "Interval bang timing ekkada max impact istundi?",
        options: [
          "Tea break mundu 5 mins",
          "Snack counter daggara",
          "Direct ga villain ki oka mind-blowing dialogue tarvata",
          "End credits lopalaga"
        ],
        correctIndex: 2
      },
      {
        text: "Mass dialogue deliver chesetappudu background lo mostly emi untundi?",
        options: [
          "Full silence",
          "Simple piano score",
          "Thunder, fire, temple bells mix",
          "Only traffic sound"
        ],
        correctIndex: 2
      },
      {
        text: "Climax lo justice ela deliver avvali according to BoyaBalayya vibe?",
        options: [
          "One line lo calm ga settle",
          "Lengthy monologue + slo-mo walk",
          "Whatsapp status lo quote",
          "Hero letter rasukuni vellipovadam"
        ],
        correctIndex: 1
      }
    ],
    skanda: [
      {
        text: "Skanda airport fight lo physics ki jarige main change enti?",
        options: [
          "Gravity lunch break ki veltundi",
          "Time slow ayyi books matrame padtai",
          "Only background extras fly avtaru",
          "Nothing, pure realistic fight"
        ],
        correctIndex: 0
      },
      {
        text: "Hero run chestunnappudu camera mostly ela undi?",
        options: [
          "Static wide shot",
          "360° spinning shot",
          "Handheld documentary style",
          "Only drone top angle"
        ],
        correctIndex: 1
      },
      {
        text: "Skanda style punch dialogue effect enti?",
        options: [
          "Audience silent ga note book lo note chesukuntaru",
          "Echo, reverb, whistle combo",
          "Only soft piano",
          "Background crowd yawning"
        ],
        correctIndex: 1
      },
      {
        text: "Mass chase sequence mandatory element enti?",
        options: [
          "Cycle chase",
          "Car, bus, bike anni kalisi fly avvadam",
          "Slow walking only",
          "Train lo silent conversation"
        ],
        correctIndex: 1
      },
      {
        text: "Skanda climax lo speech impact ekkada highest?",
        options: [
          "Hero alone room lo",
          "Public meeting style setup",
          "Library silent zone",
          "Bus stop daggara"
        ],
        correctIndex: 1
      }
    ],
    legend: [
      {
        text: "Legend subject lo villain usually ela untadu?",
        options: [
          "Very polite & silent",
          "Over-confident with own BGM",
          "Shy and introvert",
          "Only on phone calls"
        ],
        correctIndex: 1
      },
      {
        text: "Mass hero entry ki theatre reaction emi untundi?",
        options: [
          "Pin drop silence",
          "Whistles, papers, confetti",
          "Everyone goes home",
          "Only claps from last row"
        ],
        correctIndex: 1
      },
      {
        text: "Legend style fight lo vehicles mostly emi chestayi?",
        options: [
          "Parking lo calm ga untayi",
          "Physics ni ignore chesi fly avtai",
          "Only horns veskunta untayi",
          "Bike matrame slow ga odtharu"
        ],
        correctIndex: 1
      },
      {
        text: "Sentiment scene tarvata next frame lo mostly emi vastundi?",
        options: [
          "Cooking montage",
          "Instant elevation fight",
          "Silent credits",
          "Nature shots"
        ],
        correctIndex: 1
      },
      {
        text: "Legend hero handshake ante audience ki meaning enti?",
        options: [
          "Normal greeting",
          "War declaration lite version",
          "Random background detail",
          "End of movie signal"
        ],
        correctIndex: 1
      }
    ],
    "vinaya-vidheya-rama": [
      {
        text: "VV Rama style lo hero jump range enti?",
        options: [
          "Normal human jump",
          "Multi-story building level",
          "Only small step",
          "Zero jump, only walk"
        ],
        correctIndex: 1
      },
      {
        text: "Train fight lo mostly jarigedi enti?",
        options: [
          "Ticket checking",
          "Physics resignation",
          "Silent reading",
          "Food delivery"
        ],
        correctIndex: 1
      },
      {
        text: "Hero family sentiment scenes effect enti?",
        options: [
          "Audience sleep",
          "Tears + next frame fight hype",
          "Only jokes",
          "No change"
        ],
        correctIndex: 1
      },
      {
        text: "Mass background score ekkada peak ki veltundi?",
        options: [
          "Hero yawn chestunnappudu",
          "Hero cheyyi raise chesetappudu",
          "Hero tea tagutunnappudu",
          "Nothing, silent movie"
        ],
        correctIndex: 1
      },
      {
        text: "BoyaBalayya inspired visual ante mostly enti?",
        options: [
          "Minimal lighting",
          "Fire, dust, wind, sparks",
          "Black screen",
          "Only pastel colours"
        ],
        correctIndex: 1
      }
    ],
    sarrainodu: [
      {
        text: "Sarrainodu style lo hero dance shots ela untayi?",
        options: [
          "Slow classical",
          "High energy mass steps",
          "Only walking",
          "Yoga poses"
        ],
        correctIndex: 1
      },
      {
        text: "Villain bench lo kurchoni matladetappudu background emi untundi?",
        options: [
          "Calm birds sound",
          "Tension BGM + low angle",
          "Traffic noise",
          "No sound at all"
        ],
        correctIndex: 1
      },
      {
        text: "Bus fight sequence lo audience expect chese element enti?",
        options: [
          "Ticket punch",
          "Window glass break slow motion",
          "Conductor speech",
          "Silent ride"
        ],
        correctIndex: 1
      },
      {
        text: "Sarrainodu kind of hero promise dialog ante mostly emi untundi?",
        options: [
          "Calm negotiation",
          "Life-long mass warning",
          "Soft apology",
          "Random joke"
        ],
        correctIndex: 1
      },
      {
        text: "Final punch dialog deliver chesetappudu hero eyes ela untayi?",
        options: [
          "Close to tears",
          "Full rage + shine",
          "Closed eyes",
          "Looking at phone"
        ],
        correctIndex: 1
      }
    ],
    default: [
      {
        text: "Mass cinema definition lo compulsory element enti?",
        options: [
          "Logical conversations only",
          "Whistle-worthy hero entry",
          "No music at all",
          "Only black screen"
        ],
        correctIndex: 1
      },
      {
        text: "Interval bang lekunda movie feel ela untundi?",
        options: [
          "Normal journey",
          "Snacks sales thaggipovadam",
          "Extra energy",
          "No difference"
        ],
        correctIndex: 1
      },
      {
        text: "Climax lo crowd ki kavalsina main emotion enti?",
        options: [
          "Mild smile",
          "Goosebumps + satisfaction",
          "Confusion",
          "Sleep"
        ],
        correctIndex: 1
      },
      {
        text: "Background score ekkada highlight avvali?",
        options: [
          "Only opening credits",
          "Hero entry, interval, climax",
          "Random traffic scenes",
          "End card matrame"
        ],
        correctIndex: 1
      },
      {
        text: "Punch dialogue ki correct theatre reaction enti?",
        options: [
          "Silence",
          "Whistles + claps + shouting",
          "People leaving",
          "Mobile scrolling"
        ],
        correctIndex: 1
      }
    ]
  };

  function getQuestionsForSubject(subjectId) {
    var list = QUESTION_BANK[subjectId] || QUESTION_BANK.default;
    // Ensure exactly 5 questions
    if (list.length > 5) {
      return list.slice(0, 5);
    }
    return list;
  }

  function renderExam() {
    var container = document.getElementById("exams-grid");
    if (!container) return;

    var subjectId = getQueryParam("subject");
    var subject = findSubjectById(subjectId);
    var questions = getQuestionsForSubject(subjectId);

    var titleText = subject
      ? subject.name + " Cinematic MCQ Test"
      : "Cinematic Mass Exam";

    var html = "";
    html += '<form id="exam-form" class="bu-card">';
    html += '  <h2 class="bu-card-title">' + titleText + "</h2>";
    html +=
      '  <p class="bu-card-tagline">5 mass questions, prathi answer oka mini elevation.</p>';

    for (var i = 0; i < questions.length; i++) {
      var q = questions[i];
      var qNumber = i + 1;
      html += '  <div class="bu-card-body">';
      html +=
        '    <p class="bu-card-tagline">Q' +
        qNumber +
        ". " +
        q.text +
        "</p>";

      for (var j = 0; j < q.options.length; j++) {
        var optionText = q.options[j];
        var inputName = "q" + i;
        var inputId = "q" + i + "_" + j;
        html += '    <p style="margin: 0.15rem 0;">';
        html +=
          '      <label for="' +
          inputId +
          '"><input type="radio" id="' +
          inputId +
          '" name="' +
          inputName +
          '" value="' +
          j +
          '" style="margin-right: 0.4rem;" />' +
          optionText +
          "</label>";
        html += "    </p>";
      }

      html += "  </div>";
    }

    html += '  <div class="bu-hero-actions" style="margin-top: 1rem;">';
    html +=
      '    <button type="submit" class="bu-btn bu-btn-primary">Submit Exam</button>';
    html += "  </div>";
    html += "</form>";

    container.innerHTML = html;

    var form = document.getElementById("exam-form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var score = 0;
      for (var i = 0; i < questions.length; i++) {
        var selected = form.querySelector(
          'input[name="q' + i + '"]:checked'
        );
        if (!selected) continue;
        var value = parseInt(selected.value, 10);
        if (value === questions[i].correctIndex) {
          score += 1;
        }
      }

      var total = questions.length;
      var params = new URLSearchParams();
      if (subjectId) {
        params.set("subject", subjectId);
      }
      params.set("score", String(score));
      params.set("total", String(total));

      window.location.href = "results.html?" + params.toString();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderExam);
  } else {
    renderExam();
  }
})();
