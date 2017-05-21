import { Component, Input,OnChanges,HostListener, OnInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { Location } from '@angular/common';

import {MdToolbarModule, MdIconModule} from '@angular/material';
import { navComponent } from './component/navComponent/nav.component';
import { appRoutingModule } from './routing/app.route';
import { Router,RouterModule,ActivatedRoute,Params } from '@angular/router';

import { fadeIn } from './animation/routerAnimation';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeIn],
  host: {
        '[@openClose]': 'true',
        'style': 'display: block;'
      }
})
export class AppComponent implements OnInit{

private isInfinitiveScrollLoaderEnabled: boolean;


  constructor(

    private router: Router,
    private location: Location,
    private activatedRoute: ActivatedRoute

  ) {

    this.isInfinitiveScrollLoaderEnabled = false;
    location.go('/detail');
    
  }

routers:Array<String> = ["/detail","/project","/skill","/call"]; 

  ngOnInit() {

    var that = this;

    var MouseWheelHandler = function(e) {

　　  if(isBottom.getScrollTop()  + isBottom.getWindowHeight() - isBottom.getScrollHeight() >= -1||isBottom.getWindowHeight() == isBottom.getScrollHeight()){
　　　　nextOrPrev.check(e.wheelDelta);
　　  }
      
    }

    var nextOrPrev = {

      check: function (value) {

        var valueStr = value<0 ?"next":"prev";

        switch(valueStr) {

          case "next":

            this.getNextUrl(); 
            break;
          
          case "prev":

            this.getPrevUrl(); 
            break;

        }
      },

      getNextUrl: function () {

        var getUrl = that.routers,
            now = that.router.url;

        getUrl.forEach(function(k,v){

          if (k == now) {
            getUrl[v+1] ? that.router.navigate([getUrl[v+1]]):that.router.navigate([getUrl[0]]);  
          }

        });
      },

      getPrevUrl: function () {

        var getUrl = that.routers,
            now = that.router.url;
        
        that.routers.forEach(function(k,v){

          if (k == now) {
            getUrl[v-1] ? that.router.navigate([getUrl[v-1]]):that.router.navigate([getUrl[0]]);  
          }

        });
      }
    }
//
    
var isBottom = {

      getScrollTop:function (){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
},
//文档的总高度
getScrollHeight:function (){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
},
//浏览器视口的高度
getWindowHeight:function (){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}
    }
    
//
    var addMouseWheelHandler = function() {

      document.addEventListener("mousewheel", MouseWheelHandler, false); 
  
    }

    addMouseWheelHandler();

  }
}