import { Component, OnInit } from '@angular/core';
import { Designation } from 'src/app/Model/designation';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-desgination-list',
  templateUrl: './desgination-list.component.html',
  styleUrls: ['./desgination-list.component.css']
})
export class DesginationListComponent implements OnInit {

  designation: Designation[]=[];
  searchText:any;

  constructor(private designationService: DesignationService) { }

  ngOnInit(): void {
    this.designationService.getAllDesignations()
    .subscribe({
      next:(designation)=>{
        this.designation=designation;
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }
}
