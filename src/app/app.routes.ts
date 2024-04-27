import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [

    { path: 'employee', component: EmployeeComponent},
    { path: 'dept', component: DepartmentComponent },
    { path: 'products', component: ProductsListComponent }
];
