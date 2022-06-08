import { Component, OnInit } from '@angular/core';
import { IResponseStatistics } from '@core/models/statistic/response-statistec';
import { DevtoService } from '@core/services/devto/devto.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  statsData!: IResponseStatistics;

  constructor(private devtoService: DevtoService) {}

  ngOnInit(): void {
    this.getStats();
  }

  getStats(): void {
    this.devtoService.getStats().subscribe((response) => {
      this.statsData = response;
    });
  }
}
