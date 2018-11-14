import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPurchaseComponent } from './quick-purchase.component';

describe('QuickPurchaseComponent', () => {
  let component: QuickPurchaseComponent;
  let fixture: ComponentFixture<QuickPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
