export interface LogMessage {
    tag: string;
    message: string;
    params?: object[];
}

export enum LogLevel {
    DEBUG,
    ERROR,
}