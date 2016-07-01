import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BigPicsAppComponent } from '../app/big-pics.component';

beforeEachProviders(() => [BigPicsAppComponent]);

describe('App: BigPics', () => {
  it('should create the app',
      inject([BigPicsAppComponent], (app: BigPicsAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
