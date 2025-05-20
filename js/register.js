document.addEventListener("DOMContentLoaded", () => {
  const selectBox = document.getElementById("song-code");
  const searchBtn = document.getElementById("search-btn");
  const resultBlock = document.getElementById("search-result");
  const fastpassCheck = document.getElementById("fastpass-check");
  const submitBtn = document.getElementById("submit-btn");

  // Load dữ liệu từ mockDB vào dropdown
  Object.keys(mockDB).forEach(code => {
    const song = mockDB[code];
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${code} - ${song.title} / ${song.artist}`;
    selectBox.appendChild(option);
  });

  searchBtn.addEventListener("click", () => {
    const code = selectBox.value;

    if (!code) {
      alert("曲を選択してください。");
      return;
    }

    const song = mockDB[code];
    if (!song) {
      alert("曲が見つかりませんでした。");
      return;
    }

    document.getElementById("r-title").textContent = song.title;
    document.getElementById("r-artist").textContent = song.artist;
    document.getElementById("r-genre").textContent = song.genre;
    document.getElementById("r-date").textContent = song.date;
    document.getElementById("r-code").textContent = song.code;
    document.getElementById("r-jukebox").textContent = song.jukebox;

    resultBlock.style.display = "block";
  });

  submitBtn.addEventListener("click", () => {
    const code = selectBox.value;
    const song = mockDB[code];
    const fastpass = fastpassCheck.checked;

    if (!song) {
      alert("曲情報がありません。");
      return;
    }

    // Ghi vào localStorage
    const songQueue = JSON.parse(localStorage.getItem("jukeboxQueue") || "[]");

    const newSong = {
      state: "待機中",
      title: song.title,
      artist: song.artist,
      jukebox: song.jukebox,
      number: song.code,
      fastpass: fastpass,
      datetime: new Date().toLocaleDateString("ja-JP")
    };

    songQueue.push(newSong);
    localStorage.setItem("jukeboxQueue", JSON.stringify(songQueue));

    alert(`登録しました：${song.title} ${fastpass ? "(FastPass)" : ""}`);
    window.location.href = "tablet.html"; // quay về giao diện quản lý
  });
});
