import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAudioPlayerModule } from 'ngx-audio-player'; // Importa NgxAudioPlayerModule desde la ubicación correcta

import { SpeakerComponent } from './components/speaker/speaker.component'; // Ajusta la ruta según tu estructura de archivos


@NgModule({
  declarations: [
    SpeakerComponent
  ],
  imports: [
    CommonModule,
    NgxAudioPlayerModule // Asegúrate de importar NgxAudioPlayerModule aquí
  ],
  exports: [
    SpeakerComponent
    // Exporta SpeakerComponent para que esté disponible globalmente
  ]
})
export class SharedModule { }