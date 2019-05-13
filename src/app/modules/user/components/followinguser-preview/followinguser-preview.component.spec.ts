import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowinguserPreviewComponent } from './followinguser-preview.component';

describe('FollowinguserPreviewComponent', () => {
  let component: FollowinguserPreviewComponent;
  let fixture: ComponentFixture<FollowinguserPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowinguserPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowinguserPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
