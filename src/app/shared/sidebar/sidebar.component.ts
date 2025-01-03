import { Component } from '@angular/core';
import { link } from '../../models/Link';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  standalone : false
})
export class SidebarComponent {
  isOpen = false;
  links : link [] = [
    {
      title:'Dashboard' ,
      link: '/'
    },
    {title:'Profile' ,
      link: '/employee/profile'
    },
    {title:'Settings' ,
      link: '/employee/settings'
    },
    {title:'Messages' ,
      link: '/employee/messages'
    },
    {title:'Logout' ,
      link: '/logout'
    }
   ];
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

}

