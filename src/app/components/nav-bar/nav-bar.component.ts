import { Component, Input } from '@angular/core';
import { NavItemConfig } from '../../interfaces/ui-configs/nav-item-config.interface';
import { CommonModule, NgClass } from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  navItems: NavItemConfig[] = [
    {
      name: 'Movie',
      path: 'movies',
      active: false
    },
    {
      name: 'TV Shows',
      path: 'tvshows',
      active: false
    },
    {
      name: 'Suggest me',
      path: 'suggests',
      icon: 'bi bi-arrow-right',
      active: false
    }
  ]

  selectedNav(nav: NavItemConfig) {
    this.navItems.map((item: NavItemConfig) => {
      item.active = nav.name === item.name
    })
  }
}
