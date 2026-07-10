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

  imageOrientation: Record<string, 'portrait' | 'landscape'> = {};

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
      id: 'bookstore-web-admin',
      title: 'Bookstore Admin',
      description: 'A polished admin panel for managing inventory, orders, promotions, and support workflows.',
      longDescription:
        'This web admin experience helps store teams manage inventory, monitor sales, and launch campaigns from a clean, actionable dashboard.',
      tech: ['Angular', '.NET', 'Admin UX'],
      highlights: ['Inventory control', 'Order and customer oversight', 'Promotion management'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/dashboard.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/order.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/order-detail.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/product.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/create-update-product.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/promotion.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/create-update-promotion.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/human-resource.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/role-perm.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/category.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/author.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-web-admin/chating.png?raw=true'
      ],
    },
    {
      id: 'bookstore-mobile-app',
      title: 'Bookstore Mobile',
      description: 'A customer-facing mobile storefront for browsing, searching, and purchasing books.',
      longDescription:
        'The mobile app blends product discovery with an easy checkout flow, making it simple for people to find new books and manage their account on the go.',
      tech: ['Flutter', 'Mobile commerce', 'Responsive UI'],
      highlights: ['Search-driven browsing', 'Simple checkout experience', 'Account and cart management'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/home.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/search.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/product.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/cart-checkout.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/account.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bookstore-moblie-app/login-register.png?raw=true',
      ],
    },
    {
      id: 'bida-trader',
      title: 'Bida Trader',
      description: 'A platform for trading billiards equipment, connecting buyers and sellers in a seamless experience.',
      longDescription:
        'Bida Trader provides a modern marketplace for billiards enthusiasts to buy and sell equipment with ease.',
      tech: ['Blazor', 'E-commerce', 'Marketplace'],
      highlights: ['Real-time listings', 'Secure checkout flow', 'Clear product details'],
      images: [
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/home.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/product.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/cart.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/profile.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/order.png?raw=true',
        'https://github.com/haocopider/portfolio/blob/main/src/assets/bidatrader/dashboard.png?raw=true',
      ],
    },
  ];

  project = this.projects.find((item) => item.id === this.projectId) ?? this.projects[0];

  onImageLoad(image: string, event: Event) {
    const img = event.target as HTMLImageElement;
    this.imageOrientation[image] = img.naturalWidth >= img.naturalHeight ? 'landscape' : 'portrait';
  }
}
