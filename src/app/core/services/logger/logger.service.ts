import { Injectable } from '@angular/core';
import { LogLevel, LogMessage } from './logger.type';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  readonly logLevel: LogLevel = environment.logLevel || LogLevel.ERROR;
  constructor() {
  }

  get timestamp(): string {
    return new Date().toString();
  }

  formatLog(log: LogMessage): string {
    if (!log) {
      console.error('Missing log!');
    }
    if (!log.tag) {
      console.warn('Missing tag information!');
    }
    return `${this.timestamp} - ${log.tag}: ${log.message}`;
  }

  info(log: LogMessage): void {
    console.info(this.formatLog(log), ...log.params || []);
  }

  debug(log: LogMessage): void {
    if (this.logLevel !== LogLevel.DEBUG) {
      return;
    }
    console.debug(this.formatLog(log), ...log.params || []);
  }

  warn(log: LogMessage): void {
    console.warn(this.formatLog(log), ...log.params || []);
  }

  error(log: LogMessage): void {
    console.error(this.formatLog(log), ...log.params || []);
  }

}
