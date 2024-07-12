import { NgIf } from "@angular/common";
import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-speaker",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./speaker.component.html",
  styleUrls: ["./speaker.component.scss"],
})
export class SpeakerComponent {
  @ViewChild("audioPlayer", { static: false }) audioPlayerRef!: ElementRef<HTMLAudioElement>; // Referencia al elemento audio
  isPlaying: boolean = false;

  constructor() {}

  toggleSound(): void {
    const audioPlayer = this.audioPlayerRef.nativeElement;

    if (this.isPlaying) {
      audioPlayer.pause(); // Pausar reproducción
    } else {
      audioPlayer.volume = 0.6; // Establecer volumen al 60%
      audioPlayer.play(); // Iniciar reproducción
    }

    this.isPlaying = !this.isPlaying;
  }
}
