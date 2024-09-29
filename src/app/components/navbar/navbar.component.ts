import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: 'pi pi-home'
          },
          {
              label: 'Friends',
              icon: 'pi pi-users'
          },
          {
              label: 'Projects',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'Done',
                      icon: 'pi pi-check-circle'
                  },
                  {
                      label: 'Working',
                      icon: 'pi pi-bars'
                  },
                  {
                      label: 'Planning',
                      icon: 'pi pi-lightbulb'
                  },
              ]
          },
          {
              label: 'Chat',
              icon: 'pi pi-envelope'
          }
      ]
  }
}