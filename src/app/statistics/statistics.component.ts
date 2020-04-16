import { Component, OnInit } from '@angular/core';
import { DeviceSound } from '../core/model/device.model';
import { Statistics } from '../core/model/statistics.model';
import { DeviceService } from '../core/services/device.service';
import { StatisticsService } from '../core/services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: [ './statistics.component.css' ]
})
export class StatisticsComponent implements OnInit {
  view: any[] = [700, 400];
  xAxisLabel = 'Month';
  yAxisLabel = 'Box Detections';

  statistics: Statistics;
  isSoundOn: boolean;

  constructor(private statisticsService: StatisticsService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.statisticsService.getTotals().subscribe(
      (statistics: Statistics) => this.statistics = statistics,
      (e) => console.error(e)
    );
    this.deviceService.getDeviceSoundStatus().subscribe(
      (deviceSound: DeviceSound) => this.isSoundOn = deviceSound.soundOn,
      (e) => console.error(e)
    );
  }

  changeDeviceSoundStatus() {
    this.deviceService.changeDeviceSoundStatus().subscribe(
      (deviceSound: DeviceSound) => this.isSoundOn = deviceSound.soundOn,
      (e) => console.error(e)
    );
  }
}
