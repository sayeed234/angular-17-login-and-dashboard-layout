import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-plantype',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterLink],
  templateUrl: './plantype.component.html',
  styleUrl: './plantype.component.css'
})
export class PlantypeComponent {
  apiResponse: any;
  data2 : any;
  basePath:any = '';
  message:any
 
  constructor(private http: HttpClient) { 
    this.basePath=environment.baseUrl;
  }

  
  ngOnInit(){    
     this.getPlans();
  }

   getPlans(){
    this.http.get(this.basePath+'api/health_plan_type').subscribe(
      (response) => {
        this.apiResponse = response;
        this.data2 = this.apiResponse.data;
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
   }
  
  planDelete(id:number):void{
    if(confirm('Are You delete this ??')){
      const headersData= new HttpHeaders({
        'Authorization': 'Bearer 23|7D2GjaVsk0Bvsdso5NxuSBiTW7i6I0okjMryXRXEc44d1fa4',
      })
      this.http.get(this.basePath+'api/health_plan_delete/'+id,{headers:headersData}).subscribe(
        (response) => {
          this.message = 'Deleted Successfully';
          this.getPlans();
        },
        (error) => {
          console.error('API Error:', error);
        }
      )
    }
      
  }
 
  }
  
