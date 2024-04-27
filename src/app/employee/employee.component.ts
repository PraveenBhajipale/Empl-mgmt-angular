import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { employeeService } from './employee.service';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [apiService, AddEmployeeComponent, Router, employeeService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class EmployeeComponent {

  empList: any;
  empArray: any[] = [];
  constructor(
    private router: Router, public apiService: apiService, public dialog: MatDialog, private route: ActivatedRoute, public employeeService: employeeService) {
  }

  @Output() newItemEvent = new EventEmitter<string>();


  consData: any;
  ngOnInit(): void {
    this.getRouteParams()
  }

  onButtonClick() {
    this.router.navigate(['dept'])
    this.apiService.showEmpData = true;
    this.newItemEvent.emit("value");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: { name: "this.name", animal: "this.animal" },
      height: '550px',
      width: '400px',
      position: { right: '10px', top: '10px' }
    });

    dialogRef.afterClosed().subscribe(result => {
      result.deptId = localStorage.getItem("empId");
      this.empArray.push(result);
      this.employeeService.addEmployee(this.empArray).subscribe((data) => {
        try{
          this.router.navigate(['employee'])
        }
        catch(e){

        }
        
      })
      setTimeout(() => {
        this.getRouteParams();
      }, 100);
    });
  }

  getRouteParams(): void {
    this.empList = this.route.snapshot.queryParamMap;
    this.getApiData();
  }

  getApiData(): void {
    this.employeeService.getEmployees().subscribe((data) => {
      try{
        this.consData = data.body;
        this.router.navigate(['employee'])
      }
      catch(e){
        
      }
      
      
    })
  }

  deleteRow(id: any) {
    console.log(id)
    this.employeeService.deleteEmployee(id).subscribe((data)=>{
      try{
        console.log("data deleted")
        this.router.navigate(['employee'])
      }
      catch(e){
        
      }
      
      
    })
    setTimeout(() => {
      this.getRouteParams();
    }, 100);
    
    
    }

}

