import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  private route = inject(ActivatedRoute);

  projectId = this.route.snapshot.paramMap.get('id') ?? '';

  projects = [
    {
      id: 'bida-score',
      title: 'Bida Score',
      description: 'A bright, mobile-first scoring experience for billiards lovers.',
      url: 'https://drive.google.com/file/d/1beXW__uTrHLfuPzMpO97AHgD7Mt_gBEv/view?usp=sharing',
      longDescription:
        'The app is built to feel instant and effortless during play, with a layout that stays focused on the current match and the information players need most.',
      tech: ['Flutter', 'Mobile UX', 'Design System'],
      highlights: ['Quick score input', 'Accessible UI', 'Readable match history'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/home_screen.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/cpool_screen.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/penalty_screen.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/apool_screen.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/result_screen.jpg?raw=true',
      ],
    },
    {
      id: 'bida-tournament',
      title: 'Bida Tournament',
      description: 'An organizing tool that supports tournament operations and player engagement.',
      longDescription:
        'This project brings together scheduling, communication, and real-time updates so events feel structured without losing the human side of the experience.',
      tech: ['Angular', 'Flutter', 'Real-time'],
      highlights: ['Tournament dashboard', 'Live updates', 'Participant-friendly experience'],
      images: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80',
      ],
    },
    {
      id: 'bida-trader',
      title: 'Bida Trader',
      description: 'A platform for trading billiards equipment, connecting buyers and sellers in a seamless experience.',
      longDescription:
        'Bida Trader provides a modern marketplace for billiards enthusiasts to buy and sell equipment with ease.',
      tech: ['Blazor', 'E-commerce', 'Marketplace'],
      highlights: ['Course discovery', 'Structured lesson paths', 'Bright visual storytelling'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/home.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/product.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/cart.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/profile.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/order.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/role.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/dashboard.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/s-order.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/account.png?raw=true'
      ],
    },
  ];

  project = this.projects.find((item) => item.id === this.projectId) ?? this.projects[0];
}
