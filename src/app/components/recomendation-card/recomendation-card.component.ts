import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'recommendation-card',
    templateUrl: './recomendation-card.component.html',
    standalone: true,
    imports: [CardModule]
})
export class RecomendationCardComponent {}