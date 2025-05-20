document.addEventListener("DOMContentLoaded", () => {
  let mode = "normal";
  const tableBody = document.getElementById("song-table-body");
  const modeNormalBtn = document.getElementById("mode-normal");
  const modeRandomBtn = document.getElementById("mode-random");

  let songs = JSON.parse(localStorage.getItem("jukeboxQueue") || "[]");

  // Nếu chưa có bài phát nào, đặt bài đầu là 再生中
  if (!songs.some(song => song.state === "再生中") && songs.length > 0) {
    songs[0].state = "再生中";
  }

  function updateStorage() {
    localStorage.setItem("jukeboxQueue", JSON.stringify(songs));
  }

  function renderTable() {
    tableBody.innerHTML = "";
    let displaySongs = [...songs];

    if (mode === "random") {
      displaySongs = displaySongs.sort(() => Math.random() - 0.5);
    }

    displaySongs.forEach((song, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${song.state}</td>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>${song.jukebox}</td>
        <td>${song.number}</td>
        <td>${song.fastpass ? "✔" : ""}</td>
        <td>${song.datetime}</td>
        <td>
          ${song.state === "待機中" ? '<button class="start-btn">Start</button>' : ""}
          ${song.state === "再生中" ? '<button class="stop-btn">Stop</button>' : ""}
          <button class="del-btn">Del</button>
        </td>
      `;
      tableBody.appendChild(tr);

      tr.querySelectorAll(".start-btn").forEach(btn =>
        btn.addEventListener("click", () => {
          songs.forEach(s => s.state = "待機中");
          song.state = "再生中";
          updateStorage();
          renderTable();
        })
      );

      tr.querySelectorAll(".stop-btn").forEach(btn =>
        btn.addEventListener("click", () => {
          song.state = "待機中";
          updateStorage();
          renderTable();
        })
      );

      tr.querySelectorAll(".del-btn").forEach(btn =>
        btn.addEventListener("click", () => {
          if (confirm("この曲を削除しますか？")) {
            songs.splice(index, 1);
            updateStorage();
            renderTable();
          }
        })
      );
    });
  }

  modeNormalBtn.addEventListener("click", () => {
    mode = "normal";
    modeNormalBtn.classList.add("active");
    modeRandomBtn.classList.remove("active");
    renderTable();
  });

  modeRandomBtn.addEventListener("click", () => {
    mode = "random";
    modeRandomBtn.classList.add("active");
    modeNormalBtn.classList.remove("active");
    renderTable();
  });

  renderTable();
});
