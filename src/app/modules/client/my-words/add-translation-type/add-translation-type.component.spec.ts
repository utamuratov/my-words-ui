import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranslationTypeComponent } from './add-translation-type.component';

describe('AddTranslationTypeComponent', () => {
  let component: AddTranslationTypeComponent;
  let fixture: ComponentFixture<AddTranslationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTranslationTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTranslationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
