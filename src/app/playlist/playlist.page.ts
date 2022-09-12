import { Component, OnInit } from '@angular/core';
import * as youtube from 'ionic-youtube-search';
import * as yt from 'ionic-youtube-streams';
import {StreamingMedia,StreamingVideoOptions} from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  
  videos = [];
  searchModel='';

  constructor(private readonly streamingMedias:StreamingMedia) { }

  ngOnInit() {
  }

  async search(){
    this.videos = await youtube.search(this.searchModel);
  }

  async streamVideo(videoId){
    const info: any = await yt.info(videoId);
    this.streamUrl(info.formats[0].url);
  }

  private streamUrl(url:any){
    const options: StreamingVideoOptions={
      successCallback:()=>{

      },
      errorCallback:()=>{
        console.log("Error streaming");
      },
      orientation:"portrait",
      shouldAutoClose:true,
      controls:true,
    };
    this.streamingMedias.playVideo(url,options);
  }
}
