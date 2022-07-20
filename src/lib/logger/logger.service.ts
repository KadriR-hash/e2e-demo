import { Inject, Injectable, InjectionToken } from "@angular/core";
//const fs = require('fs');
//var fs = require('file-system');
//import writeFileUsingFileSystem from './write-file';


export enum LogLevel {
    Error = 0,
    Warn,
    Info
} // notice : we will be only using Info level for Demo purposes

export const LogLevelToken = new InjectionToken<LogLevel>('loglevel');


@Injectable() 
export class LoggerService {

    constructor(@Inject(LogLevelToken) private loglevel: LogLevel ) { }

    info(message: string): void { 
        this.logWidth(LogLevel.Info , message);
        
    }
    warn(message: string): void { 
        this.logWidth(LogLevel.Warn , message);
    }
    error(message: string): void { 
        this.logWidth(LogLevel.Error , message); 
    }

    private logWidth(level: LogLevel, message: string): void {
        if (level <= this.loglevel) {
            switch (level) {
                case LogLevel.Error: console.error(message);
                case LogLevel.Warn: console.warn(message);
                case LogLevel.Info: console.info(message);
            }
        }
    }
}