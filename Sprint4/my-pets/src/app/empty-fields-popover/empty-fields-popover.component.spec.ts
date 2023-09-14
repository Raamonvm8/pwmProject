import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmptyFieldsPopoverComponent } from './empty-fields-popover.component';

describe('EmptyFieldsPopoverComponent', () => {
  let component: EmptyFieldsPopoverComponent;
  let fixture: ComponentFixture<EmptyFieldsPopoverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFieldsPopoverComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyFieldsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
