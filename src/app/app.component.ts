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
  title = 'ITer | Angular Portfolio';
  name = 'ITer';
  role = 'Frontend Developer & UI Engineer';
  summary =
    'I create modern, responsive web experiences with clean interfaces, thoughtful interactions, and a strong focus on usability.';
  contactEmail = 'hello@iter.dev';

  stats = [
    { value: '10+', label: 'Projects shipped' },
    { value: '4 yrs', label: 'Experience' },
    { value: '100%', label: 'Client-focused delivery' },
  ];

  skills: Skill[] = [
    {
      title: 'Angular',
      description: 'Build scalable component-driven applications with modern Angular patterns.',
    },
    {
      title: 'UI Design',
      description: 'Craft polished interfaces with responsive layouts and strong visual hierarchy.',
    },
    {
      title: 'Performance',
      description: 'Optimize loading, accessibility, and usability for faster, nicer experiences.',
    },
  ];

  projects: Project[] = [
    {
      title: 'Studio Showcase',
      description: 'A premium portfolio concept focused on storytelling, motion, and elegant layouts.',
      tech: ['Angular', 'SCSS', 'Accessibility'],
      link: '#contact',
    },
    {
      title: 'Product Landing Page',
      description: 'A conversion-focused website with strong messaging and a modular component system.',
      tech: ['Angular', 'TypeScript', 'Responsive UI'],
      link: '#contact',
    },
    {
      title: 'Developer Brand Site',
      description: 'A personal brand website designed to highlight projects, services, and contact details.',
      tech: ['Angular', 'UI Systems', 'Performance'],
      link: '#contact',
    },
  ];

  socials = [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Email', url: 'mailto:hello@iter.dev' },
  ];
}
