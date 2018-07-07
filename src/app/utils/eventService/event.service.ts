import { EventEmitter2 as _EventEmitter2 } from 'eventemitter2';
// import * as _ from 'underscore';

export interface Observer {
  listNotificationInterests(): Array<string>;
  onNotification(eventName: string, data: any): Promise<any> | void;
}

export class EventEmitter2 extends _EventEmitter2 {
  observers: Array<Observer> = [];
  constructor(options?) {
    super(options);
    this.onAny((event: string, ...values: any[]) => {
      return this.notifyObservers(event, ...values);
    });
  }


  emitAsync(...args): Promise<any> {
    return super['emit' + 'Async'](...args);
  }

  private notifyObservers(event: string, ...values: any[]): Promise<any> {
    return Promise.all(this.observers.map((observer: Observer) => {
      if (observer.listNotificationInterests) {
        const interests = observer.listNotificationInterests();
        if (this.contains(interests, event)) {
          return observer.onNotification(event, values[0]);
        }
      } else {
        return observer.onNotification(event, values[0]);
      }
    }));
  }

  registerOberver(observer: Observer) {
    if (observer.onNotification) {
      if (this.contains(this.observers, observer)) {
      }
      this.observers.push(observer);
    }
  }

  unRegisterOberver(observer: Observer) {
    this.observers = this.without(this.observers, observer);
  }

  contains(interest, event) {
    let result = null;
    if (this.isType(interest) === 'Array') {
      for (let value of interest) {
        if (value === event) {
          result = true;
          return result;
        }
      }
    } else if (this.isType(interest) === 'Object') {
      for (let key in interest) {
        if (interest[key] === event) {
          result = true;
          return result;
        }
      }
    } else {
      result = false;
      return result;
    }
    return result;
  }

  isType(obj) {
    let type = Object.prototype.toString.call(obj);
    if (type === '[object Array]') {
      return 'Array';
    } else if (type === '[object Object]') {
      return 'Object';
    } else {
      return false;
    }
  }

  without(arr, obj) {
    return arr.splice(arr.indexOf(obj), 1);
  }

}

export const EventService = new EventEmitter2();
