import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SuspensionService } from './suspension.service';

@Component({
  selector: 'app-suspension',
  templateUrl: 'suspension.component.html',
  styleUrls: ['./suspension.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuspensionComponent implements OnInit {
  public detailData: object = null;

  constructor(
    private suspensionService: SuspensionService
  ) { }

  @Input() set suspension(data: object) {
    if (data) {
      this.detailData = data;
    }
  }

  ngOnInit() {

  }

  // 加锁/解锁
  changeLock(data) {
    let param = {
      film_id: '',
      film_lock: '',
      user_id: '0001'
    };
    this.suspensionService.changeLock('post', 'popFilmLock', param).then(res => {
      console.log(res);
    });
  }

}
