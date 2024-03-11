import { routes } from './../../../app.routes';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planupdate',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,HttpClientModule],
  templateUrl: './planupdate.component.html',
  styleUrl: './planupdate.component.css'
})
export class PlanupdateComponent {
  [x: string]: any;
  filename: any;
  basePath:any = '';
  Path:any;
  Name:any;
  Info:any;
  oldPath:any;
  planId:any;
responseMessage: any;
 Message: any;
 oldPlanData:any;
 oldPlanData2:any;

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute 
    ) { 
    this.planId = this.route.snapshot.params['id'];
    this.basePath=environment.baseUrl;
    this.getPlan();
  }
  fileChange(file:any) {
    this.Path = file.target.files[0];
    this.filename = this.Path.name
  }
  getPlan(){
    const headersData= new HttpHeaders({
      'Authorization': 'Bearer 24|n6OX6A0MrNdnLhCIX4ujMBCk4Y8Le4p5o5M5fRQac848a932',
    })
    this.http.get(this.basePath+'api/health_plan_type_edit/'+this.planId,{headers:headersData}).subscribe(response =>  {
      this.oldPlanData2 = response;
      this.oldPlanData = this.oldPlanData2.data;
      this.Name=this.oldPlanData.Name;
      this.Info=this.oldPlanData.Info;
      this.oldPath=this.oldPlanData.Path;
    },error =>{
      console.log('error');
    } 
  )}

  dataUpdate(){
    const formData: FormData = new FormData();
    formData.append('Name', this.Name);
    formData.append('Info', this.Info);
    formData.append('Path', this.Path);
    formData.append('id', this.planId);
   const headersData= new HttpHeaders({
      'Authorization': 'Bearer 24|n6OX6A0MrNdnLhCIX4ujMBCk4Y8Le4p5o5M5fRQac848a932',
    })
    this.http.post(this.basePath+'api/health_plan_update', formData,{headers:headersData}).subscribe(response =>  {
        this.responseMessage = response;
        this.Message = this.responseMessage.message;
         this.Name='';
         this.Info='';
         this.Path='';
        //  this.router.navigate(['/health/plan/plan_list']);
      },error =>{
        console.log('error');
      } 

    )}
}
