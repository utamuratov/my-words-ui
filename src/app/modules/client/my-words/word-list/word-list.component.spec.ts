import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListComponent } from './word-list.component';

describe('WordListComponent', () => {
  let component: WordListComponent;
  let fixture: ComponentFixture<WordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#clearSearch() should set #searchText to empty string', () => {
    component.clearSearch();
    expect(component.searchText).toBe('');
  });
});
