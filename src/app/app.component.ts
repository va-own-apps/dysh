import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CoreModule } from './core/core.module';
import { Storage } from '@ionic/storage-angular';
import { LoggerService } from './core/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, CoreModule],
})
export class AppComponent implements OnInit {
  logger = inject(LoggerService);
  constructor(private storage: Storage) { }

  ngOnInit(): void {
    this.storage
      .create()
      .then(() => this.logger.info({
        tag: 'AppComponent',
        message: 'Storage initialized'
      }));
  }
}
