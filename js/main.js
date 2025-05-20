document.addEventListener("DOMContentLoaded", () => {
  // Dữ liệu bài hát demo - video URL có thể thay đổi tùy ý
  const songs = [
    {
      title: "Never Gonna Give You Up",
      artist: "Rick Astley",
      genre: "Pop",
      releaseDate: "1987-07-27",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      fastpass: false,
    },
    {
      title: "Song B",
      artist: "Artist B",
      genre: "Rock",
      releaseDate: "2020-01-10",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      fastpass: true,
    },
    {
      title: "Song C",
      artist: "Artist C",
      genre: "Jazz",
      releaseDate: "2018-05-23",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      fastpass: false,
    },
    {
      title: "Song D",
      artist: "Artist D",
      genre: "Electronic",
      releaseDate: "2019-09-09",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      fastpass: false,
    },
    {
      title: "Song E",
      artist: "Artist E",
      genre: "Classical",
      releaseDate: "2015-11-11",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      fastpass: true,
    },
    {
      title: "Song F",
      artist: "Artist F",
      genre: "Blues",
      releaseDate: "2017-03-15",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      fastpass: false,
    },
    {
      title: "Song G",
      artist: "Artist G",
      genre: "Pop",
      releaseDate: "2021-07-07",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      fastpass: false,
    },
    {
      title: "Song H",
      artist: "Artist H",
      genre: "Hip-Hop",
      releaseDate: "2016-12-01",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      fastpass: false,
    },
    {
      title: "Song I",
      artist: "Artist I",
      genre: "Reggae",
      releaseDate: "2014-04-04",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      fastpass: false,
    },
    {
      title: "Song J",
      artist: "Artist J",
      genre: "Country",
      releaseDate: "2013-02-20",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
      fastpass: false,
    },
  ];

  // Biến lưu trạng thái bài hiện tại
  let currentIndex = 0;

  // DOM elements
  const songTitleEl = document.getElementById("song-title");
  const artistNameEl = document.getElementById("artist-name");
  const genreEl = document.getElementById("genre");
  const releaseDateEl = document.getElementById("release-date");
  const videoEl = document.getElementById("current-video");
  const nextListEl = document.getElementById("next-list");
  const fastpassWarningEl = document.getElementById("fastpass-warning");
  const messageTextEl = document.getElementById("message-text");
  const nextNicknameEl = document.getElementById("next-nickname");

  // Hàm cập nhật hiển thị bài hát đang phát
  function updateCurrentSong() {
    const song = songs[currentIndex];
    songTitleEl.textContent = song.title;
    artistNameEl.textContent = song.artist;
    genreEl.textContent = song.genre;
    releaseDateEl.textContent = song.releaseDate;
    videoEl.src = song.videoUrl;
    videoEl.load();
    videoEl.play();

    // Cập nhật message ví dụ (giả lập)
    messageTextEl.textContent = `再生中: ${song.title} - ${song.artist}`;
  }

  // Hàm render danh sách bài kế tiếp
  function renderNextSongs() {
    nextListEl.innerHTML = "";

    // Lấy 9 bài tiếp theo (xoay vòng nếu cần)
    for (let i = 1; i <= 9; i++) {
      let idx = (currentIndex + i) % songs.length;
      const song = songs[idx];

      const li = document.createElement("li");
      li.className = "song-item";
      li.dataset.index = idx;

      if (i === 1) {
        li.classList.add("selected"); // đánh dấu bài tiếp theo gần nhất
      }

      li.innerHTML = `
        <span class="index">${i}</span>
        <span class="title">${song.title}</span>
        <span class="artist">(${song.artist})</span>
        ${song.fastpass ? '<span class="fastpass">🔥</span>' : ''}
      `;

      // Bấm bài kế tiếp sẽ chuyển bài đang phát
      li.addEventListener("click", () => {
        currentIndex = idx;
        updateCurrentSong();
        renderNextSongs();
      });

      nextListEl.appendChild(li);
    }
  }

  // Hiển thị cảnh báo Fastpass nếu >=5 bài
  function updateFastpassWarning() {
    const fastpassCount = songs.filter(s => s.fastpass).length;
    if (fastpassCount >= 5) {
      fastpassWarningEl.style.display = "block";
    } else {
      fastpassWarningEl.style.display = "none";
    }
  }

  // Hiển thị nickname gọi (ví dụ cố định)
  function updateNickname() {
    nextNicknameEl.textContent = "呼出中：にっくねーむ123";
  }

  // Khởi tạo hiển thị
  updateCurrentSong();
  renderNextSongs();
  updateFastpassWarning();
  updateNickname();
});
