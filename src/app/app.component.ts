import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/logger/logger.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { FileService } from './services/file.service';
//const fs = require('fs');
//import * as fs from 'fs';
 //const fs = require('file-system');
//import * as fs from 'file-system';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private logger:LoggerService , private fileService : FileService){} 

  ngOnInit(): void {
    this.logger.info('STARTING ...')
  }

  login(){
    let now = moment();
    this.logger.info(`[${now}]  you just logged in ` );
    let msg = `[${now}]  you just logged in `
    this.fileService.writeFileUsingFs(msg).subscribe()
  }
  record(){
    let now = moment();
    this.logger.info(`[${now}]  setting a record ` );
    let msg = `[${now}]  setting a record `
    this.fileService.writeFileUsingFs(msg).subscribe()
  }
  submit(){
    let now = moment();
    this.logger.info(`[${now}]  submitting the record `);
    let msg = `[${now}]  submitting the record `
    this.fileService.writeFileUsingFs(msg).subscribe()

  }
  logout(){
    let now = moment();
    this.logger.info(`[${now}]  you just logged out  `);
    let msg = `[${now}]  you just logged out  `
    this.fileService.writeFileUsingFs(msg).subscribe()

  }
}
