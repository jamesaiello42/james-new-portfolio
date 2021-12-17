import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  // This is hard coded and need to be refactored later to from a database or json file
  experience = [	
                    {
                      company: "Accenture Federal Services", 
                      dates: "September 2021 - Present",
                      resp: [
                          'Develops software for clients using Java.',
                        ]
                      },
                      { 
                        company: "Charter Communications", 
                        dates: "July 2019 - September 2021", 
                        boldText: 'Promoted from Associate Software Developer to Software Developer in April of 2021.',
                        resp: [ 
                                'Design, develop, implement, support, and maintain applications based on business requirements using Scrum / Agile, and MS Office.', 
                                'Identify gaps in technical practices and collaboratively seek remedies to bridge them together while documenting processes and tools and collecting viable metrics.',
                                'Formulate, and deploy innovative Software Development solutions on a collaborative, product-focused team to build innovative customer experiences, and deliver value to the business.',
                                'Create new SQL queries and stored procedures optimizing existing procedures. Develop reports using Jaspersoft, while concurrently validating data with Excel, and creating pie charts, and drill downs using Tableau.',
                                'Develop, implement, support, and maintain applications based on business requirements using an array of technical tools to connect technical functions to drive upward business mobility.',
                                'Devise solutions by combining technical expertise with a developing understanding of basic software design concepts throughout the software development lifecycle.',
                                'In collaboration with a team, use technical expertise combined with business acumen to envision what’s possible in solving business challenges using technology to differentiate Charter Communications in the market.'
                              ]
                      }, 
                      {
                        company: "Mastersolve", 
                        dates: "March 2019 - May 2019",
                        resp: [
                          'Facilitated in setting up customer test instances utilizing a Linux server.',
                          'Debugged, analyzed, developed, fixed, and tested new and existing code that performs and delivers timely, while simultaneously learning SugarCRM PHP and JavaScript and setting up a Sugar CRM instance'
                        ]
                      },
                      {
                        company: "Schnucks", 
                        dates: "November 2017 - December 2018",
                        resp: [
                          'Worked with business stakeholders of applications in important projects to ensure quality software. ',
                          'Communicated with internal teams and recommended modifications to processes and procedures to accomplish large projects in a timely manner.',
                          'Collaborated with team members to evaluate, and query data from Schnucks’ databases to complete extensive projects.',
                          'Designed, developed, coded, and tested software systems or applications for software improvements and new products.',
                          'Harnessed Talend and SQL to extract data and transform it to meet the end customer’s needs. Load into Domo (ETL) to finalize.',
                          'Utilized top-notch technologies; Jira, SourceTree, and Bitbucket to track stories and check progress in a large project, and source control of ETL Talend jobs.'
                        ]
                      }
                    ];
  constructor() { }

  ngOnInit(): void {
  }

}
