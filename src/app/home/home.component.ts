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
  role = 'Product-minded Full-Stack Developer';
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
      tech: ['Flutter', 'Mobile UX', 'Product Design'],
      highlights: ['Real-time match tracking', 'Clean score history', 'Accessible interactions'],
      image: 'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/penalty_screen.jpg?raw=true',
      isAvailable: true,
    },
    {
      id: 'bida-tournament',
      title: 'Bida Tournament',
      description: 'A digital platform for managing tournaments, helping organizers coordinate events and keep players informed.',
      longDescription:
        'The tournament experience combines web and mobile touchpoints so organizers can manage the event while participants stay updated in real time.',
      tech: ['Angular', 'Flutter', 'Real-time'],
      highlights: ['Organizer dashboard', 'Live event updates', 'Player-friendly mobile flow'],
      image: 'https://img.freepik.com/free-vector/gradient-tournament-schedule-template_52683-95156.jpg',
      isAvailable: false,
      statusLabel: 'In development',
    },
    {
      id: 'bida-class',
      title: 'Bida Class',
      description: 'An online learning experience for billiards coaching, from beginner fundamentals to advanced training plans.',
      longDescription:
        'Bida Class brings structured lessons and a modern storefront experience together so learners can discover courses and stay inspired.',
      tech: ['Angular', 'E-commerce', 'Learning flow'],
      highlights: ['Course discovery', 'Structured lesson paths', 'Bright visual storytelling'],
      image: 'https://matchroompool.com/wp-content/uploads/HANOI2024-1920x1080-2.jpg',
      isAvailable: false,
      statusLabel: 'In development',
    },
  ];

socials = [
  {
    label: 'GitHub',
    url: 'https://haocopider.github.io/portfolio/',
    icon: 'fab fa-github'
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61591485732418',
    icon: 'fab fa-facebook'
  },
  {
    label: 'TikTok',
    url: 'https://www.tiktok.com/@pnhao544',
    icon: 'fab fa-tiktok'
  }
];
}
