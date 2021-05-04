!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',	  
      preload: 'auto',
	  listFolded: true,
	  listMaxHeight: 90,
	  lrcType: 3,
      audio: [
        {
          name: '彼女は旅に出る - 鎖那',
          artist: 'Hush a by little girl',
          url: '/songs/彼女は旅に出る - 鎖那.mp3',
          cover: '/img/Hush a by little girl.jpg',
		  lrc: '/lrc/彼女は旅に出る - 鎖那.lrc'
        },
		{
          name: '鍵っ子 - 鎖那',
          artist: 'Hush a by little girl',
          url: '/songs/鍵っ子 - 鎖那.mp3',
          cover: '/img/Hush a by little girl.jpg',
		  lrc: '/lrc/鍵っ子 - 鎖那.lrc'
        },
		{
          name: 'シュテルン - 鎖那',
          artist: 'Hush a by little girl',
          url: '/songs/シュテルン - 鎖那.mp3',
          cover: '/img/Hush a by little girl.jpg',
		  lrc: '/lrc/シュテルン - 鎖那.lrc'
        },
		{
          name: 'オオカミと少女 - 鎖那',
          artist: 'Hush a by little girl',
          url: '/songs/オオカミと少女 - 鎖那.mp3',
          cover: '/img/Hush a by little girl.jpg',
		  lrc: '/lrc/オオカミと少女 - 鎖那.lrc'
        }
      ]
    });
  }
})();