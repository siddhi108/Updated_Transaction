// import { Component,OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// //import { HttpClient,HttpHeaders } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// //import{EmpService}from './EmpService';

// @Component({
//   selector: 'app-scan',
//   templateUrl: './scan.component.html',
//   styleUrls: ['./scan.component.css']
// })
// export class  ScanComponent  {
//   selecttedFile:File |null=null;
//   constructor(private http: HttpClient){ 
//     onFileChange(event: any) {
//       this.selectedFile = event.target.files[0];

//   }
//   onFileSelected(event: Event) {
//     event.preventDefault();

//     if (!this.selectedFile) {
//       console.log('No file selected');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', this.selectedFile);

//     this.http.post('https://api.example.com/upload', formData)
//       .subscribe(response => {
//         console.log('File uploaded successfully');
//       }, error => {
//         console.error('File upload failed:', error);
//       });
//     }
 
// }


//   //http client
import { Component } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
 
})
export class ScanComponent {
  selectedFile: File | null = null;
  showPopup: boolean = false;

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  onFileSelected(): void {
    if (this.selectedFile) {
      // You can perform any file-related operations here, e.g., upload to a server.
      console.log('Selected File:', this.selectedFile);

      // Show the success popup message
      this.showPopup = true;

      // Hide the popup after 3 seconds
      setTimeout(() => {
        this.showPopup = false;
      }, 15000);
    } else {
      console.log('No file selected.');
    }
  }
}

