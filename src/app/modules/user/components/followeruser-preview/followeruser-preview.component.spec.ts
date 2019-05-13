import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolloweruserPreviewComponent } from './followeruser-preview.component';

describe('FolloweruserPreviewComponent', () => {
  let component: FolloweruserPreviewComponent;
  let fixture: ComponentFixture<FolloweruserPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolloweruserPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolloweruserPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
