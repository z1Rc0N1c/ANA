document.addEventListener('DOMContentLoaded', function () {
  const audioPlayer = document.getElementById('audio-player');
  const audioSource = document.getElementById('audio-source');
  const playPauseButton = document.getElementById('play-pause-button');
  const shuffleButton = document.getElementById('shuffle-button');
  const nextButton = document.getElementById('next-button');
  const prevButton = document.getElementById('prev-button');
  const volumeSlider = document.getElementById('volume-slider');
  const songInfo = document.getElementById('song-info');
  const artistInfo = document.getElementById('artist-info');
  const orderInfo = document.getElementById('order-info'); // 추가된 요소

  const playlist = [
    {
      song: 'Hey Brother',
      artist: 'Avicii',
      src: 'Avicii - Hey Brother.mp3'
    },
    {
      song: 'The Nights',
      artist: 'Avicii',
      src: 'Avicii - The Nights (Audio).mp3'
    },
    {
      song: 'Levels',
      artist: 'Avicii',
      src: 'Avicii - Levels.mp3'
    },
    {
      song: 'Waiting For Love',
      artist: 'Avicii',
      src: 'Avicii - Waiting For Love.mp3'
    },
    {
      song: 'Wake Me Up',
      artist: 'Avicii',
      src: 'Avicii - Wake Me Up (Official Video).mp3'
    },
    {
      song: "The Days",
      artist: "Avicii",
      src: 'Avicii - The Days (Lyric Video).mp3'
    }
    // ... (다른 곡 정보)
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let isShuffled = false;

  function loadTrack(index) {
    const track = playlist[index];
    songInfo.textContent = track.song;
    artistInfo.textContent = track.artist;
    audioSource.src = track.src;
    audioPlayer.load();
  }

  function togglePlayPause() {
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    isPlaying = !isPlaying;
    playPauseButton.textContent = isPlaying ? '일시정지' : '재생';
  }

  function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleButton.textContent = isShuffled ? '순서' : '셔플';
    if (isShuffled) {
      shufflePlaylist();
    } else {
      loadTrack(currentTrackIndex);
    }
  }

  function shufflePlaylist() {
    const shuffledPlaylist = [...playlist];
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
    }
    playlist.splice(0, playlist.length, ...shuffledPlaylist);
    loadTrack(0);
  }

  function updateOrderInfo() {
    orderInfo.textContent = `${currentTrackIndex + 1} / ${playlist.length}`;
  }

  playPauseButton.addEventListener('click', function () {
    togglePlayPause();
  });

  shuffleButton.addEventListener('click', function () {
    toggleShuffle();
  });

  nextButton.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    updateOrderInfo(); // 재생 순서 정보 업데이트
    if (isPlaying) {
      audioPlayer.play();
    }
  });

  prevButton.addEventListener('click', function () {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    updateOrderInfo(); // 재생 순서 정보 업데이트
    if (isPlaying) {
      audioPlayer.play();
    }
  });

  volumeSlider.addEventListener('input', function () {
    audioPlayer.volume = volumeSlider.value;
  });

  loadTrack(currentTrackIndex);
  updateOrderInfo(); // 초기 재생 순서 정보 업데이트
});
