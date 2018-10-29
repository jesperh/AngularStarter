import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetEditorComponent } from './greet-editor.component';

describe('GreetEditorComponent', () => {
  let component: GreetEditorComponent;
  let fixture: ComponentFixture<GreetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
