import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee[]=[];
    searchText:any;

    EmployeeNameFilter: string="";
    EmployeeWithoutFilter:any=[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees()
    .subscribe({
      next:(employee)=>{
        this.employee=employee;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
