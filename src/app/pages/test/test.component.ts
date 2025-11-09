import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SegmentedControlComponent } from '../../components/segmented-control/segmented-control.component';
import { SegmentedControlConfig } from '../../interfaces/ui-config/segmented-control.interface';
import { InputComponent } from '../../components/input/input.component';
import { RateChipComponent } from '../../components/rate-chip/rate-chip.component';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { MovieCardConfig } from '../../interfaces/ui-config/movie-card-config.interface';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NavBarComponent,
    SegmentedControlComponent,
    InputComponent,
    RateChipComponent,
    MovieCardComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  segments: SegmentedControlConfig[] = [
    {
      name: 'All',
      active: true
    },
    {
      name: 'Movies',
      active: false
    },
    {
      name: 'TV Shows',
      active: false
    },
  ]

  movieCards: MovieCardConfig[] = [
    {
      img: 'https://m.media-amazon.com/images/M/MV5BNTdjZGUxMTItNjRkNS00N2VhLWE4MjMtMjVhODMwMGIxNjUwXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg',
      rate: 7.28,
      movieName: 'Bug Array'
    },
    {
      img: 'https://m.media-amazon.com/images/M/MV5BOWNlM2E1MDMtYmI5MS00NDQ1LWI3NTctM2VlNjQ5OTAxYTNmXkEyXkFqcGc@._V1_FMjpg_UY720_.jpg',
      rate: 7.28,
      movieName: 'Bug Array'
    },
  ]
}
