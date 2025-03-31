import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComicPageComponent } from './comic-page.component';

describe('ComicPageComponent', () => {
  let component: ComicPageComponent;
  let fixture: ComponentFixture<ComicPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ComicPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
