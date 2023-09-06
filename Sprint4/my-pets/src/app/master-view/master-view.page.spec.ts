import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterViewPage } from './master-view.page';

describe('MasterViewPage', () => {
  let component: MasterViewPage;
  let fixture: ComponentFixture<MasterViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MasterViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
