import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {

  public members = [{
    givers: {
      guid: "",
      name: {
        first: "",
        last: ""
      },
      email: "",
      phone:""
    },
    receiver: {
      guid: "",
      name: {
        first: "",
        last: ""
      },
      email: "",
      phone:""
    }
  }
  ];
  public finalList;
  public memberList;
  
  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.getMembers()
      .subscribe((data: any) => {
        this.members = data.users;
        this.finalList = this.membersService.couple(this.members);
      })

      this.memberList = document.getElementById('memberList');
      setTimeout(() => {
        this.memberList.classList.add('show');
      },2500)
    }

    public update(){
      this.memberList.classList.toggle('show');
      this.finalList = [];
      setTimeout(() => {
        this.memberList.classList.toggle('show');
        this.finalList = this.membersService.couple(this.members);
      },1500);
      return this.finalList;
    }
}
