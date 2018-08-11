import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
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

  @Output() lockChange: EventEmitter<any> = new EventEmitter();
  @Output() favChange: EventEmitter<any> = new EventEmitter();

  @Input() set suspension(data: object) {
    if (data) {
      this.detailData = data;
    }
  }

  ngOnInit() {

  }

  // 加锁/解锁
  changeLock(data) {
    let self = this;
    let param = {
      film_id: data.film_id,
      film_lock: data.film_lock === '1' ? '0' : '1',
      user_id: '0001'
    };
    this.suspensionService.changeLockOrFav('post', 'popFilmLockOrFav', param).then(res => {
      if (res['code'] === 200) {
        self.lockChange.emit(param);
        self.detailData['film_lock'] = param['film_lock'];
      }
    });
  }

  // 收藏/取消
  changeFav(data) {
    let self = this;
    let param = {
      film_id: data.film_id,
      film_favorite: data.film_favorite === '1' ? '0' : '1',
      user_id: '0001'
    };
    this.suspensionService.changeLockOrFav('post', 'popFilmLockOrFav', param).then(res => {
      if (res['code'] === 200) {
        self.favChange.emit(param);
        self.detailData['film_favorite'] = param['film_favorite'];
      }
    });
  }

}
