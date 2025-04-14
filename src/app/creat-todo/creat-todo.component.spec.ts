import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTodoComponent } from './creat-todo.component';

describe('CreatTodoComponent', () => {
  let component: CreatTodoComponent;
  let fixture: ComponentFixture<CreatTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatTodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
