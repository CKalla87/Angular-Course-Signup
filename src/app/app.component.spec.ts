import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseRegisterComponent } from './course-register-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CourseRegisterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CourseRegisterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-Course-Signup'`, () => {
    const fixture = TestBed.createComponent(CourseRegisterComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Angular-Course-Signup');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CourseRegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Angular-Course-Signup app is running!');
  });
});
