<template>
  <div class="user-media">
    <video id="v" width="640" height="320"></video>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  callMedia() {
    const constraints = {
      video: true,
      audio: false,
    };
    navigator.mediaDevices.getUserMedia(
      constraints,
    ).then((stream) => {
      const video: HTMLVideoElement = document.getElementById('v') as HTMLVideoElement;
      video.srcObject = stream;
      // 视频元数据(分辨率、时长等)加载完毕，开始播放
      video.onloadedmetadata = () => video.play();
    });
  }

  mounted() {
    this.callMedia();
  }
}
</script>

<style scoped>
.user-media {
  /* width: 100px; */
  height:  320px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
