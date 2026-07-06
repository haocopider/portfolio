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
      longDescription:
        'The app is built to feel instant and effortless during play, with a layout that stays focused on the current match and the information players need most.',
      tech: ['Flutter', 'Mobile UX', 'Design System'],
      highlights: ['Quick score input', 'Accessible UI', 'Readable match history'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/home.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/chinese.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/penalty.jpg?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidascore/american.jpg?raw=true'
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
      id: 'bida-class',
      title: 'Bida Class',
      description: 'A visually warm learning experience for coaching programs and course discovery.',
      longDescription:
        'Designed to guide learners from first lesson to advanced training, the experience balances polished visuals with a practical content structure.',
      tech: ['Angular', 'E-commerce', 'Learning flow'],
      highlights: ['Course browsing', 'Structured curriculum', 'Conversion-focused experience'],
      images: [
        'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80',
      ],
    },
  ];

  project = this.projects.find((item) => item.id === this.projectId) ?? this.projects[0];
}
