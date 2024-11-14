import { Injectable } from '@angular/core';
import { LogMessage } from './logger.type';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

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
    console.debug(this.formatLog(log), ...log.params || []);
  }

  warn(log: LogMessage): void {
    console.warn(this.formatLog(log), ...log.params || []);
  }

  error(log: LogMessage): void {
    console.error(this.formatLog(log), ...log.params || []);
  }

}
