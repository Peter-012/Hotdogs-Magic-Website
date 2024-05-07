// This script will update links for GitHub and YouTube

// Input links here
const githubLink = "https://github.com/Peter-012/Hotdogs-Magic-VR";
const youtubeDemo = "f3_2lrw-OhA";
const youtubeTutorial = "z8cZtoAXOnY";



// GitHub Project
const projectLink = document.querySelector("#project-link");
projectLink.setAttribute("href", githubLink);

// YouTube Demo Video
const videoDemo = document.querySelector("#youtube-demo");
createVideo(videoDemo, youtubeDemo, "youtube-demo-iframe", "Link to Video Demo");

// YouTube Tutorial Video
const videoTutorial = document.querySelector("#youtube-tutorial");
createVideo(videoTutorial, youtubeTutorial, "youtube-tutorial-iframe", "Link to Tutorial Video");



// YouTube Player API
function createVideo(videoContainer, videoSource, videoId, linkTitle) {
    let videoWindow = document.createElement("div");
    videoWindow.setAttribute("id", videoId);
    videoContainer.appendChild(videoWindow);

    var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player(videoId, {
            videoId: videoSource,
            playerVars: {
                "playsinline" : 1,
                "rel" : 0
            }
        });
    }

    onYouTubeIframeAPIReady();

    let videoLink = document.createElement("a");
    videoLink.textContent = linkTitle;
    videoLink.setAttribute("href", "https://youtu.be/" + videoSource + "?feature=shared");
    videoLink.setAttribute("target", "_blank");
    videoContainer.appendChild(videoLink);
}
