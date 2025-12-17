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

  function renderResults() {
    var container = document.getElementById("results-grid");
    if (!container) return;

    var subjectId = getQueryParam("subject");
    var scoreParam = getQueryParam("score");
    var totalParam = getQueryParam("total");

    var score = parseInt(scoreParam, 10);
    if (isNaN(score) || score < 0) {
      score = 0;
    }

    var total = parseInt(totalParam, 10);
    if (isNaN(total) || total <= 0) {
      total = 5;
    }

    var subject = findSubjectById(subjectId);
    var passMark = 3; // marks >= 3 ante pass
    var isPass = score >= passMark;
    var rank = Math.floor(Math.random() * 50) + 1; // 1-50

    var titleText = subject
      ? subject.name + " Result Sheet"
      : "Cinematic Exam Result";

    var statusLabel = isPass ? "PASS" : "FAIL";
    var statusClass = isPass ? "bu-chip" : "bu-chip bu-chip-muted";

    var certParams = new URLSearchParams();
    if (subjectId) {
      certParams.set("subject", subjectId);
    }
    certParams.set("score", String(score));
    certParams.set("total", String(total));

    var html = "";
    html += '<div class="bu-card">';
    html += '  <h2 class="bu-card-title">' + titleText + "</h2>";
    html +=
      '  <p class="bu-card-tagline">Mass exam, mass result. Real life lo matram chala light ga theesuko.</p>';
    html += '  <div class="bu-card-body">';

    html +=
      "    <p><strong>Subject:</strong> " +
      (subject ? subject.name : "Unknown Subject") +
      "</p>";
    html +=
      "    <p><strong>Marks:</strong> " + score + " / " + total + "</p>";
    html +=
      '    <p><strong>Status:</strong> <span class="' +
      statusClass +
      '">' +
      statusLabel +
      "</span></p>";
    html +=
      "    <p><strong>Mock Rank:</strong> #" + rank + " out of 50</p>";

    html += "  </div>";
    html += '  <div class="bu-hero-actions" style="margin-top: 0.75rem;">';
    html +=
      '    <a href="certificate.html?' +
      certParams.toString() +
      '" class="bu-btn bu-btn-primary">Download Certificate &rarr;</a>';
    html += "  </div>";
    html += "</div>";

    container.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderResults);
  } else {
    renderResults();
  }
})();
