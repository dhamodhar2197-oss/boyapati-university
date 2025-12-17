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

  function renderCertificate() {
    var container = document.getElementById("certificates-grid");
    if (!container) return;

    var subjectId = getQueryParam("subject");
    var scoreParam = getQueryParam("score");
    var totalParam = getQueryParam("total");
    var nameParam = getQueryParam("name");

    var score = parseInt(scoreParam, 10);
    if (isNaN(score) || score < 0) {
      score = 0;
    }

    var total = parseInt(totalParam, 10);
    if (isNaN(total) || total <= 0) {
      total = 5;
    }

    var subject = findSubjectById(subjectId);

    var storedName = null;
    try {
      storedName = window.localStorage
        ? window.localStorage.getItem("buStudentName")
        : null;
    } catch (e) {
      storedName = null;
    }

    var studentName = nameParam || storedName || "Mass Student";

    var subjectName = subject ? subject.name : "Unknown Subject";

    var html = "";
    html += '<div class="bu-card" id="bu-certificate-card">';
    html += '  <h2 class="bu-card-title">Boyapati University</h2>';
    html +=
      '  <p class="bu-card-tagline">Official Certificate of Mass Completion</p>';
    html += '  <div class="bu-card-body">';
    html +=
      "    <p><strong>Student Name:</strong> " + studentName + "</p>";
    html +=
      "    <p><strong>Subject:</strong> " + subjectName + "</p>";
    html +=
      "    <p><strong>Marks:</strong> " + score + " / " + total + "</p>";
    html +=
      '    <p style="margin-top: 1.4rem; line-height: 1.7;">Ee certificate dwara, student gaaru ee subject ni BoyaBalayya Law prakaram complete chesaru ani prakatinchabadutondi.</p>';
    html +=
      '    <p style="margin-top: 1.3rem; font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.12em;">Issued under BoyaBalayya Law Authority</p>';
    html +=
      '    <p style="margin-top: 1.6rem;"><strong>Dean  Nandamuri Balakrishna</strong></p>';
    html += "  </div>";
    html += '  <div class="bu-hero-actions" style="margin-top: 1rem;">';
    html +=
      '    <button type="button" id="bu-print-certificate" class="bu-btn bu-btn-primary">Download Certificate</button>';
    html += "  </div>";
    html += "</div>";

    container.innerHTML = html;

    var printBtn = document.getElementById("bu-print-certificate");
    if (printBtn) {
      printBtn.addEventListener("click", function () {
        window.print();
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCertificate);
  } else {
    renderCertificate();
  }
})();
