// Музыкальные треки
const musicTracks = [
    {
        name: "Электронная",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
        name: "Акустическая", 
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
        name: "Классическая",
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    }
];

let currentTrackIndex = 0;
let music = null;
let isPlaying = false;

// Функции для управления музыкой
function loadTrack(index) {
    if (music) {
        music.pause();
    }
    
    currentTrackIndex = index;
    music = new Audio(musicTracks[currentTrackIndex].url);
    music.loop = true;
    
    document.getElementById('musicInfo').textContent = musicTracks[currentTrackIndex].name;
    
    if (isPlaying) {
        music.play().catch(e => {
            console.log('Автовоспроизведение заблокировано');
        });
    }
}

function playPauseMusic() {
    if (!music) {
        loadTrack(currentTrackIndex);
    }
    
    if (isPlaying) {
        music.pause();
        document.getElementById('musicToggle').textContent = '🎵';
        document.getElementById('musicToggle').title = 'Включить музыку';
        document.getElementById('musicInfo').textContent = 'Пауза';
        isPlaying = false;
    } else {
        music.play().catch(e => {
            document.getElementById('musicInfo').textContent = 'Нажмите для воспроизведения';
        });
        document.getElementById('musicToggle').textContent = '⏸';
        document.getElementById('musicToggle').title = 'Пауза';
        document.getElementById('musicInfo').textContent = musicTracks[currentTrackIndex].name;
        isPlaying = true;
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        music.play();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length;
    loadTrack(currentTrackIndex);
    if (isPlaying) {
        music.play();
    }
}

// Назначаем обработчики при загрузке
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('musicToggle').addEventListener('click', playPauseMusic);
    document.getElementById('musicNext').addEventListener('click', nextTrack);
    document.getElementById('musicPrev').addEventListener('click', prevTrack);
    
    // Загружаем первый трек
    loadTrack(0);
});
