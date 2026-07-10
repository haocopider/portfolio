import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  highlights: string[];
  image: string;
  isAvailable: boolean;
  statusLabel?: string;
}

interface Skill {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'ITer Portfolio';
  name = 'Hao Copider';
  role = 'Full-Stack Developer';
  summary =
    'I craft bright, thoughtful digital experiences with Angular, .NET, Flutter, and a strong focus on clarity, performance, and user delight.';
  contactEmail = 'haocopider544@gmail.com';
  cvUrl = '/cv/PHAN-NHUT-HAO-CV.pdf';

  stats = [
    { value: '3+', label: 'Launch-ready apps' },
    { value: '1 yrs', label: 'Hands-on experience' },
    { value: '2+ stack', label: 'Frontend + backend' },
  ];

  skills: Skill[] = [
    {
      title: 'Modern Frontends',
      description: 'Build polished interfaces with Angular, responsive layouts, and smooth interactions.',
    },
    {
      title: 'Reliable APIs',
      description: 'Design clean backend services with .NET and practical architecture that scales.',
    },
    {
      title: 'Mobile-first thinking',
      description: 'Deliver cross-platform product ideas that feel natural on every screen size.',
    },
  ];

  about =
    'I am a passionate software developer who enjoys turning ideas into products that feel effortless to use. My work blends elegant UI, strong engineering habits, and a practical approach to solving real user problems.';

  projects: Project[] = [
    {
      id: 'bida-score',
      title: 'Bida Score',
      description: 'A lively app for tracking pool matches with a simple, fast experience for casual and competitive players.',
      longDescription:
        'Bida Score was designed to make scorekeeping feel effortless during every match. The app focuses on clarity, quick interactions, and a lightweight experience that players can use right away.',
      tech: ['Flutter', 'Tool', 'Free'],
      highlights: ['Real-time match tracking', 'Clean score history', 'Accessible interactions'],
      image: 'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/penalty_screen.jpg?raw=true',
      isAvailable: true,
    },
    {
      id: 'bookstore-web-admin',
      title: 'Bookstore Admin',
      description: 'A polished admin panel for managing inventory, orders, promotions, and customer workflows.',
      longDescription:
        'This web admin experience was built to help store managers move quickly through stock updates, order fulfillment, and promotional campaigns with confidence.',
      tech: ['Blazor', 'ASP.NET Core API', 'Admin UX'],
      highlights: ['Inventory control', 'Promotion management', 'Order overview dashboards'],
      image: 'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/dashboard.png?raw=true',
      isAvailable: true,
    },
    {
      id: 'bookstore-mobile-app',
      title: 'Bookstore Mobile',
      description: 'A mobile shopping experience for readers, with quick browsing, checkout, and account management.',
      longDescription:
        'The mobile app combines inviting product discovery with a smooth checkout flow so customers can search and buy books anytime, anywhere.',
      tech: ['Flutter', 'Mobile commerce', 'Customer experience'],
      highlights: ['Search and browse', 'Mobile checkout', 'User account dashboard'],
      image: 'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/home.png?raw=true',
      isAvailable: true,
    },
    {
      id: 'bida-trader',
      title: 'Bida Trader',
      description: 'A platform for trading billiards equipment, connecting buyers and sellers in a seamless experience.',
      longDescription:
        'Bida Trader provides a modern marketplace for billiards enthusiasts to buy and sell equipment with ease.',
      tech: ['Blazor', 'ASP.NET Core API', 'E-commerce'],
      highlights: ['Real-time', 'Secure transactions', 'User-friendly interface'],
      image: 'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/home.png?raw=true',
      isAvailable: true,
    },
  ];

socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/haocopider/portfolio',
    icon: 'fab fa-github'
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/pnhao544',
    icon: 'fab fa-facebook'
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@pnhao544',
    icon: 'fab fa-tiktok'
  }
];
}
