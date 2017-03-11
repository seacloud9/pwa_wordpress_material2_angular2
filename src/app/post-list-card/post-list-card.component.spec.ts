import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListCardComponent } from './post-list-card.component';

describe('PostListCardComponent', () => {
  let component: PostListCardComponent;
  let fixture: ComponentFixture<PostListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
