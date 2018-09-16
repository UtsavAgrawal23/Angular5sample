import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCount =10;
  isDisable = true;
  serverName = "Test Server";
  serverCreated = false;
  totalServer = ['TestServer1','TestServer2'];
  constructor() { 
    setTimeout(()=>{
        this.isDisable = false;
    },2000);
  }

  onCreateservers(){
      console.log("clicked called..");
      this.serverCreated = true;
      this.totalServer.push(this.serverName);
  }

  ngOnInit() {
    
  }

}
