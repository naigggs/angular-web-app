import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'feed-card',
  templateUrl: './feed-card.component.html',
  standalone: true,
  imports: [CardModule, AvatarGroupModule, AvatarModule],
})
export class FeedCardComponent {}
