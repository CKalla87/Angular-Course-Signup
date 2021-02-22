import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './course-register-page.component.html',
  styleUrls: ['./course-register-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CourseRegisterComponent implements OnInit{
  title = 'Angular-Course-Signup';

  public values: Array<string> = [];
  public values2: Array<string> = [];
  public values3: Array<string> = [];
  public classSubject: string = '';
  public classTopic: string = '';
  public timeSelection: string = '';
  public userName: string = '';
  public userEmail: string = '';
  public userId: string = '';
  public isValid: boolean = false;
  public isEmailValid: boolean = false;
  public isNameValid: boolean = false;
  public isIdValid: boolean = false;
  public isTimeValid: boolean = false;
  public isSubjectValid: boolean = false;
  public isTopicValid: boolean = false;
  public addClass: boolean = false;

  ngOnInit() {}

  // Setting up class selection values
  public ClassSelection($event: any) {
    this.classSubject = $event.target.value;

    if (this.classSubject) {

      if (this.classSubject === 'Math') {
        this.values = ['Algebra', 'Trigonometry', 'Calculus'];
      } else if (this.classSubject === 'Science') {
        this.values = ['Physics', 'Chemistry', 'Biology'];
      } else if (this.classSubject === 'Art') {
        this.values = ['Art History', 'Painting', 'Drawing']; 
      } else if (this.classSubject === 'Language Arts') {
        this.values = ['Literature', 'Grammar', 'Writing'];
      } else {
        this.values = [];
        this.values2 = [];
        this.timeSelection = ''; 
      }
    }

    this.ValidateSelection();
  }

  // Setting up topic time values
  public TopicSelection($event: any) {
    this.classTopic = $event.target.value;

    if (this.classTopic) {

      if (this.classTopic === 'Algebra') {
        this.values2 = ['8:00 AM', '11:00 AM'];
      } else if (this.classTopic === 'Trigonometry') {
        this.values2 = ['9:00 AM', '12:00 PM'];
      } else if (this.classTopic === 'Calculus') {
        this.values2 = ['10:00 AM', '3:00 PM']; 
      } else if (this.classTopic === 'Physics') {
        this.values2 = ['10:00 AM', '3:00 PM'];
      } else if (this.classTopic === 'Chemistry'){
        this.values2 = ['9:00 AM', '1:00 PM'];
      } else if (this.classTopic === 'Biology'){
        this.values2 = ['8:00 AM', '10:00 AM'];
      } else if (this.classTopic === 'Art History'){
        this.values2 = ['11:00 AM'];
      } else if (this.classTopic === 'Painting'){
        this.values2 = ['2:00 PM'];
      } else if (this.classTopic === 'Drawing'){
        this.values2 = ['8:00 AM', '5:00 AM'];
      } else if (this.classTopic === 'Literature'){
        this.values2 = ['8:30 AM', '11:45 AM'];
      } else if (this.classTopic === 'Grammar'){
        this.values2 = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM'];
      } else if (this.classTopic === 'Writing'){
        this.values2 = ['8:00 AM', '11:00 AM'];
      } else {
        this.values2 = [];
        this.timeSelection = '';      
      }
    }

    this.ValidateSelection();
  }

  // Setting up time selection
  public TimeSelection($event: any) {
    this.timeSelection = $event.target.value;
    // To Do... Add validation of multiple time selection

    this.ValidateSelection();
  }

  // Validate dropdown selection
  public ValidateSelection() {
    this.isSubjectValid = this.classSubject && this.classSubject !== 'SubjectType' ? true : false;
    this.isTopicValid = this.classTopic && this.classTopic !== 'TopicType' ? true : false;
    this.isTimeValid = this.timeSelection && this.timeSelection !== 'TimeslotType' ? true : false;
  
    this.SubmissionValidation();
  }

  // Validating alphanumeric values for username and id.
  public InputValidator($event: any): any {
    let inputValue = $event.key;

    if (!inputValue.match(/^[a-zA-Z\d\-_\s]+$/)) {
      return false;
    };
  }
 
  // Validating name input
  public NameChange($event: any) {
    let inputValue = $event.target;
    this.userName = $event.target.value;
    this.isNameValid = $event.target.name === 'userName' && inputValue.value !== '' ? true : false;

    this.SubmissionValidation();
  }

  // Validating email input
  public EmailChange($event: any) {
    let inputValue = $event.target;
    this.userEmail = $event.target.value;
    this.isEmailValid = inputValue.name === 'email' && inputValue.value !== '' ? true : false;
     
    this.SubmissionValidation();
  }

  // Validating id change
  public IdChange($event: any) {
    let inputValue = $event.target;
    this.userId = $event.target.value;
    this.isIdValid = $event.target.name === 'studentId' && inputValue.value !== '' ? true : false;

    this.SubmissionValidation();
  }

  // button validation
  public SubmissionValidation() {
    this.isValid = 
      (this.isNameValid &&
      this.isIdValid &&
      this.isEmailValid &&
      this.isSubjectValid &&
      this.isTopicValid &&
      this.isTimeValid &&
      this.values2.length > 0);
  }

  // button click event that takes you to submission results
  public ButtonClicked($event: any) {
    if ($event) {
      this.addClass = true;
    }
  }

  // button click event that returns to main landing page
  public MainPageClick($event: any) {
    if ($event) {
      this.addClass = false;
    }
  }
}
