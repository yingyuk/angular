/*
* @Author: Yuk¡¤
* @Date:   2016-09-25 14:14:52
* @Last Modified by:   Yuk·
* @Last Modified time: 2016-09-25 14:14:54
*/

'use strict';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});
