import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DepartmentComponent } from "./department/department.component";
import { DeptComponent } from "./dept/dept.component";
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { apiService } from './api.service';
import { EmployeeComponent } from "./employee/employee.component";
import { ProductsListComponent } from "./products-list/products-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [apiService],
    changeDetection: ChangeDetectionStrategy.Default,
    imports: [RouterOutlet, DepartmentComponent, CommonModule, EmployeeComponent, ProductsListComponent]
})
export class AppComponent {
  title = 'emp-mgmt';
  disableDepartment: boolean = false;
  enableProducts: boolean =false;

  constructor(public apiService: apiService, private router: Router) {
  }

  getData():void {
    this.disableDepartment = true;
    this.enableProducts = false
    this.router.navigate(['/employee'])
  }

  navigateToDep():void {
    console.log("dep")
    this.disableDepartment = false;
    this.enableProducts = false
    this.router.navigate(['/dept'])
  }

  navigateToProducts() {
    this.enableProducts = true
    }
}
