(function () {
  if (typeof window === "undefined" || !window.BU_DATA) {
    return;
  }

  var data = window.BU_DATA || {};
  var units = data.units || [];
  var subjects = data.subjects || [];
  var laws = data.laws || [];

  function getUnitFromQuery() {
    var search = window.location.search || "";
    var params = new URLSearchParams(search);
    var unitId = params.get("unit");
    if (!unitId) return null;

    for (var i = 0; i < units.length; i++) {
      if (units[i].id === unitId) return units[i];
    }
    return null;
  }

  function getSubjectForUnit(unit) {
    if (!unit || !unit.subjectId) return null;
    for (var i = 0; i < subjects.length; i++) {
      if (subjects[i].id === unit.subjectId) return subjects[i];
    }
    return null;
  }

  function getLawForUnit(unit) {
    if (!unit) return null;
    for (var i = 0; i < laws.length; i++) {
      if (laws[i].unitId === unit.id) return laws[i];
    }
    return null;
  }

  function buildVideoMarkup(videoUrl) {
    if (!videoUrl) {
      return (
        '<div class="bu-unit-video-message">' +
        "Ee unit ki video inka add cheyyaledu." +
        "</div>"
      );
    }

    var lower = videoUrl.toLowerCase();

    // Basic decision: YouTube/iframe vs direct video file
    if (
      lower.indexOf("youtube.com") !== -1 ||
      lower.indexOf("youtu.be") !== -1
    ) {
      return (
        '<div class="bu-unit-video-aspect">' +
        '<iframe src="' +
        videoUrl +
        '" title="Unit video" frameborder="0" allowfullscreen loading="lazy"></iframe>' +
        "</div>"
      );
    }

    if (
      lower.indexOf(".mp4") !== -1 ||
      lower.indexOf(".webm") !== -1 ||
      lower.indexOf(".ogg") !== -1
    ) {
      return (
        '<div class="bu-unit-video-aspect">' +
        '<video src="' +
        videoUrl +
        '" controls playsinline></video>' +
        "</div>"
      );
    }

    // Fallback: treat as iframe-friendly URL
    return (
      '<div class="bu-unit-video-aspect">' +
      '<iframe src="' +
      videoUrl +
      '" title="Unit video" frameborder="0" allowfullscreen loading="lazy"></iframe>' +
      "</div>"
    );
  }

  function renderUnitDetail() {
    var container = document.getElementById("unit-detail");
    if (!container) return;

    var unit = getUnitFromQuery();
    if (!unit) {
      container.innerHTML = "";
      return;
    }

    var subject = getSubjectForUnit(unit);
    var law = getLawForUnit(unit);

    var videoUrl = "";
    if (typeof unit.videoUrl === "string" && unit.videoUrl.trim() !== "") {
      videoUrl = unit.videoUrl.trim();
    } else if (
      typeof unit.placeholderVideoUrl === "string" &&
      unit.placeholderVideoUrl.trim() !== ""
    ) {
      videoUrl = unit.placeholderVideoUrl.trim();
    }

    var html = "";
    html += '<div class="bu-unit-detail">';
    html += '  <div class="bu-unit-detail-header">';
    html += '    <p class="bu-kicker">Selected Unit</p>';
    html += '    <h2 class="bu-unit-detail-title">' + unit.title + "</h2>";
    if (subject) {
      html +=
        '    <p class="bu-unit-detail-subtitle">' + subject.name + "</p>";
    }
    html += "  </div>";

    html += '  <div class="bu-unit-video-wrapper">';
    html += buildVideoMarkup(videoUrl);
    html += "  </div>";

    if (law) {
      html += '<section class="bu-law-section">';
      html += '  <div class="bu-law-header">';
      html += '    <span class="bu-law-icon" aria-hidden="true">🔥</span>';
      html += '    <span>🔥 BoyaBalayya Law</span>';
      html += "  </div>";
      html += '  <div class="bu-law-card">';
      html += '    <h3 class="bu-law-title">' + law.lawTitle + "</h3>";
      html += '    <p class="bu-law-statement">' + law.lawStatement + "</p>";
      html +=
        '    <p class="bu-law-explanation">' + law.explanation + "</p>";
      html += "  </div>";
      html += "</section>";
    }

    html += "</div>";

    container.innerHTML = html;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderUnitDetail);
  } else {
    renderUnitDetail();
  }
})();
