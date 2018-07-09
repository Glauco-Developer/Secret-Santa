import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {

  public members;
  public members2;
  public partic1 = [{
    guid: "",
    name: {
      first: "",
      last: ""
    },
    email: "",
    phone:""
  }
  ];
  public partic2;
  public memberList;
  public memberList2;
  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.membersService.getMembers()
      .subscribe((data: any) => {
        this.members = data.users;
        this.members2 = data.users;
        this.partic1 = this.membersService.updateMembers(this.members)
      })

      this.memberList = document.getElementById('memberList')
      this.memberList2 = document.getElementById('memberList2')
      setTimeout(() => {
        this.memberList.classList.add('show')
        setTimeout(() => {
          this.memberList2.classList.add('show')
        },1500)
      },2500)
    }
    public update(partic1){
      return this.membersService.updateMembers(partic1)
    }
}
