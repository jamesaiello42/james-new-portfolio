import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experience = [	
                      { 
                        company: "Charter Communications", 
                        dates: "July 2019 - Present", 
                        boldText: 'Promoted from Associate Software Developer to Software Developer in April of 2021.',
                        resp: [ 
                                'Design, develop, implement, support, and maintain applications based on business requirements using Scrum / Agile, and MS Office.', 
                                'Identify gaps in technical practices and collaboratively seek remedies to bridge them together while documenting processes and tools and collecting viable metrics.',

                              ]
                      }, 
                      {company: "Mastersolve", dates: "March 2019 - May 2019"},
                      {company: "Schnucks", dates: "November 2017 - December 2018"}
                    ];
  constructor() { }

  ngOnInit(): void {
  }

}
