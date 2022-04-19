import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrepoComponent } from './getrepo.component';

describe('GetrepoComponent', () => {
  let component: GetrepoComponent;
  let fixture: ComponentFixture<GetrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetrepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
