import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent implements OnInit {
  education = [
    {
      school: "Promineo Tech Bootcamp",
      dates: "November 2020 - April 2021"  
    },
    {
      school: "University of Missouri - St. Louis",
      dates: "May 2019",
      degree: "Bachelor of Science in Computer Science"  
    },
    {
      school: "St. Charles Community College",
      dates: "December 2016",
      degree: "Associate of Arts of Science in Computer Science"  
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
