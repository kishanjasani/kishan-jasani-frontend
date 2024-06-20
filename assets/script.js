let playerAPI = document.getElementById( 'youtube-player-api' ), player;

/**
 * DOMContentLoaded event listener.
 */
document.addEventListener( 'DOMContentLoaded', () => {
	playerAPI = document.createElement( 'script' );
	playerAPI.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName( 'script' )[0];
	firstScriptTag.parentNode.insertBefore( playerAPI, firstScriptTag );
}, false );

/**
 * Called when youtube iframe API is ready.
 *
 * reference: https://developers.google.com/youtube/iframe_api_reference
 */
function onYouTubeIframeAPIReady() { // eslint-disable-line no-unused-vars
	 
	player = new YT.Player( 'header-video', {
		videoId: 'mUGYPlAgJPw',
		playerVars: {
			'playsinline': 1
		},
		events: {
			'onReady': function () {
				document.getElementById( 'play-button' ).addEventListener( 'click', () => {
					document.getElementById( 'video-thumbnail' ).classList.add( 'hide' );
					document.getElementById( 'header-video' ).classList.add( 'show' );

					setTimeout( () => {
						player.playVideo();
					}, 100 );
				} );
			},
			'onStateChange': ( event ) => {
				if ( 0 === event.data ) {
					setTimeout( () => {
						document.getElementById( 'video-thumbnail' ).classList.remove( 'hide' );
						document.getElementById( 'header-video' ).classList.remove( 'show' );
					}, 1000 );
				}
			}
		}
	} );
}
