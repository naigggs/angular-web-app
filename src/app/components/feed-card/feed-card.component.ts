import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'feed-card',
    templateUrl: './feed-card.component.html',
    standalone: true,
    imports: [CardModule]
})
export class FeedCardComponent {}