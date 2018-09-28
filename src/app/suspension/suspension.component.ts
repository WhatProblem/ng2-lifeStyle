import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, Route, Routes } from '@angular/router';
import { SuspensionService } from './suspension.service';
import { ElMessageService } from 'element-angular';

@Component({
  selector: 'app-suspension',
  templateUrl: 'suspension.component.html',
  styleUrls: ['./suspension.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuspensionComponent implements OnInit {
  public detailData: object = null;
  private fastClick: boolean = true;

  constructor(
    public router: Router,
    private suspensionService: SuspensionService,
    private message: ElMessageService
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
    };
    if (this.fastClick) {
      this.fastClick = false;
      this.suspensionService.changeLockOrFav('post', 'popFilmLockOrFav', param).then(res => {
        if (res['code'] === 200) {
          self.lockChange.emit(param);
          self.detailData['film_lock'] = param['film_lock'];
        } else if (res['code'] === 511) {
          self.message.show('请先登录!');
        } else if (res['code'] === 201) {
          self.message.show('系统错误');
        }
        this.fastClick = true;
        return;
      });
    }
  }

  // 收藏/取消
  changeFav(data) {
    let self = this;
    let param = {
      film_id: data.film_id,
      film_favorite: data.film_favorite === '1' ? '0' : '1',
    };
    if (this.fastClick) {
      this.fastClick = false;
      this.suspensionService.changeLockOrFav('post', 'popFilmLockOrFav', param).then(res => {
        if (res['code'] === 200) {
          self.favChange.emit(param);
          self.detailData['film_favorite'] = param['film_favorite'];
        } else if (res['code'] === 511) {
          self.message.show('请先登录!');
        } else if (res['code'] === 201) {
          self.message.show('系统错误');
        }
        this.fastClick = true;
        return;
      });
    }
  }

  // 导航
  navigate(data) {
    this.router.navigate(['/home/homeDetail/' + data.film_name], { queryParams: { homeId: 'homeFilmDetail', filmId: data.film_id } });
  }

}
