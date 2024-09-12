import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

myboldrop:boolean=false;
myboltoggle:boolean=false;

    getActive(){
      this.myboldrop=!this.myboldrop;
      // دا لو كده اعكسها ولو كده اعكسها 

    }

    getActiveToggle(){
      // if(this.myboltoggle==false){
      //   this.myboltoggle=true;
      // }else{
      //   this.myboltoggle=false;
      // }


      this.myboltoggle=!this.myboltoggle;
    }




    
}
