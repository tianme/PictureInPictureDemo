<template>
  <div class="user-media">
    <video id="v" width="640" height="320"></video>
    <button class="btn" @click="pictureInPicture">画中画</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  private video: any = document.createElement('video');

  callMedia() {
    const constraints = {
      video: {
        width: 640, height: 320,
      },
      audio: false,
    };
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
      this.video.srcObject = stream;
      // 视频元数据(分辨率、时长等)加载完毕，开始播放
      this.video.onloadedmetadata = () => {
        this.video.play();
      };
    });
  }

  async pictureInPicture(event: any) {
    console.log('picture-in-picture');
    // eslint-disable-next-line no-param-reassign
    event.target.disabled = true;
    const d: any = document;
    try {
      if (this.video !== d.pictureInPictureElement) {
        await this.video.requestPictureInPicture();
      } else {
        await d.exitPictureInPicture();
      }
    } catch (error) {
      console.log(`> Argh! ${error}`);
    } finally {
      // eslint-disable-next-line no-param-reassign
      event.target.disabled = false;
    }
  }

  mounted() {
    this.video = document.getElementById('v') as HTMLVideoElement;
    this.callMedia();
  }
}
</script>

<style scoped>
.user-media {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn {
  margin-top: 10px;
  display: block;
  padding: 5px 10px;
}
</style>
