import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DeptComponent } from "../dept/dept.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from '../api.service';
import { departmentService } from './department.service';

@Component({
    selector: 'app-department',
    standalone: true,
    templateUrl: './department.component.html',
    styleUrl: './department.component.scss',
    imports: [DeptComponent, CommonModule, HttpClientModule],
    providers:[apiService, departmentService, HttpClient]
})
export class DepartmentComponent implements OnInit{

    constructor(private route: ActivatedRoute,
        private router: Router,public apiService:apiService, public departmentService: departmentService){
      }

      @Output() newItemEvent = new EventEmitter<string>();

      
    consData:any;
    ngOnInit(): void {
        this.departmentService.getDepartments().subscribe((data)=>{
            console.log(data)
            this.consData = data.body;
        })
    }

    rowData(data: any) {
        localStorage.setItem("empId",data.id)
         this.router.navigate(['employee'],{ queryParams: {employeeList: "this.consData" }})
         this.apiService.showEmpData = true;
         this.newItemEvent.emit("value");
        }


    
    
}
