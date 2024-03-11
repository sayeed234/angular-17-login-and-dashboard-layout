import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plancreate',
  standalone: true,
  imports: [RouterModule,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './plancreate.component.html',
  styleUrl: './plancreate.component.css'
})
export class PlancreateComponent {
    filename: any;
    basePath:any = '';
    Path:any;
    Name:any;
    Info:any;
  responseMessage: any;
   Message: any;

    constructor(private http: HttpClient) { 
      this.basePath=environment.baseUrl;
    }
    fileChange(file:any) {
      this.Path = file.target.files[0];
      this.filename = this.Path.name
    }
    dataEntry(){
      const formData: FormData = new FormData();
      formData.append('Name', this.Name);
      formData.append('Info', this.Info);
      formData.append('Path', this.Path);
     const headersData= new HttpHeaders({
        'Authorization': 'Bearer 23|7D2GjaVsk0Bvsdso5NxuSBiTW7i6I0okjMryXRXEc44d1fa4',
      })
      this.http.post(this.basePath+'api/health_plan_create', formData,{headers:headersData}).subscribe(response =>  {
          this.responseMessage = response;
          this.Message = this.responseMessage.message;
           this.Name='';
           this.Info='';
           this.Path='';
        },error =>{
          console.log('error');
        } 

      )}
    }

  