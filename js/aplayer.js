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
	  lrcType: 3,
      audio: [
        {
          name: '彼女は旅に出る - 鎖那',
          artist: '鎖那',
          url: '/songs/彼女は旅に出る - 鎖那.mp3',
          cover: '/img/Hush a by little girl.jpg',
		  lrc: '/lrc/彼女は旅に出る - 鎖那.lrc'
        }
      ]
    });
  }
})();