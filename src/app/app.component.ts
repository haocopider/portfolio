import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface Skill {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ITer Portfolio';
  name = 'Hào Copider';
  role = 'Software Developer';
  summary =
    'The past is in your head, the future is in your hands. You just fail when you stop trying.';
  contactEmail = 'hao.jukain.dev.game@gmail.com';

  stats = [
    { value: '1+', label: 'Products' },
    { value: '1 yrs', label: 'Experience' },
    { value: '3+', label: 'Develop application with C#' },
  ];

  skills: Skill[] = [
    {
      title: 'Flutter with Dart',
      description: 'Build cross-platform mobile apps with a single codebase and expressive UI.',
    },
    {
      title: 'Blazor, API with C#',
      description: 'Develop robust web applications and APIs using the .NET ecosystem.',
    },
    {
      title: 'WPF, WinForms with C#',
      description: 'Create rich desktop applications with a modern UI.',
    },
  ];

  about: string =
    'I am a passionate software developer with a strong focus on creating innovative and user-friendly applications. With experience in Flutter, C#, and web development, I strive to deliver high-quality solutions that meet the needs of users and businesses alike. My goal is to continuously learn and grow as a developer, while contributing to impactful projects that make a difference.';

  projects: Project[] = [
    {
      title: 'Bida Score (Published)',
      description: 'A tool for tracking billiard scores, designed with accessibility and user experience in mind.',
      tech: ['Flutter', 'Free', 'Tool'],
      link: '#contact',
    },
    {
      title: 'Bida Tournament (Progress)',
      description: 'A web application for managing billiard tournaments(Organization). The mobile app allows players to participate in and follow the tournament. ',
      tech: ['Angular', 'Flutter', 'Real-time'],
      link: '#contact',
    },
    {
      title: 'Bida Class (Preparation)',
      description: 'The app offers billiards courses from beginner to advanced levels.',
      tech: ['Angular', 'E-commerce'],
      link: '#contact',
    },
  ];

  socials = [
    { label: 'GitHub', url: 'https://github.com/haocopider?tab=repositories' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nh%E1%BB%B1t-h%C3%A0o-phan-72357341b/' },
    { label: 'Tiktok', url: 'https://www.tiktok.com/@pnhao544' },
  ];
}
