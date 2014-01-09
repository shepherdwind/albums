/*! albums - v1.0 - 2013-10-29 5:57:19 PM
* Copyright (c) 2013 hanwen.sah; Licensed  */
KISSY.add("gallery/albums/1.0/theme/weibo-tpl",function(){return{html:'<div class="theme-box {{theme}}">\n  <div class="theme-wrap" style="height: {{h}}px">\n    <div class="handers">\n      {{#if len !== 1}}\n      <span class="prev album-prev hander">&lt;</span>   \n      <span class="next album-next hander">&gt;</span>   \n      {{/if}}\n    </div>\n    <div class="box">   \n\n      <div class="box-main album-loading" style="min-height: {{h}}px; {{#if w}}width: {{w}}px; {{/if}}">  \n        <img class="{{imgCls}}" src="{{src}}" style="display: none" alt="" />\n      </div>   \n\n      <div class="box-aside">   \n        <div class="aside-wrap">  \n          <div class="headline">\n            <em class="J_num num">{{index + 1}}/{{len}}</em>{{title}} <a class="close action" data-action="close" href="#nowhere">&times;</a>\n          </div>  \n          {{#if desc}}\n          <p class="J_desc desc">{{prefix}}: {{{desc}}}</p>  \n          {{/if}}\n        </div>   \n      </div>   \n\n    </div>\n  </div>\n</div>\n'}}),KISSY.add("gallery/albums/1.0/theme/weibo",function(a,b,c,d,e){function f(a,b){f.superclass.constructor.call(this,b),this.initializer(a)}var g,h=new e(d.html),i=b.all;return a.extend(f,c,{initializer:function(a){this.host=a,g=a.dialog,this._bind()},_bind:function(){var a=this.host,b=a.get("id");g.on("action:"+b,this._action,this),g.on("turn:"+b,function(){a.go(1)}),a.on("resize",this._resize,this)},_resize:function(){var a=this.get("padding"),b=g.getWinHeight()-a[0]-a[2];g.get("contentEl").all(".theme-wrap").height(b),g.get("contentEl").all(".box-main").css("min-height",b)},_action:function(){},getZoom:function(b,c,d,e){var f={top:0,left:0},h=1;return a.UA.ie,b>d?(h=d/b,f.left=-(b-d)/2,f.top=c*h>e?-c*(1-h)/2:0):f.left=(d-b*h)/2,e>c?f.top=(e-c)/2:f.left-=5,1>h&&g.get("contentEl").all(".box-main").css("height",c*h),{zoom:h,offset:f}},html:function(b,c){var d=this.get("data"),e=this.host,f=g.getWinHeight(),h=g.getWinWidth(),j=this.get("padding"),k=i(b).attr(e.get("origin")),l=i(b).attr("data-download");k||(k=b.src);var m=e.get("len"),n={src:k,imgCls:"J_img",index:c,len:m,h:f-j[0]-j[2],w:6===a.UA.ie?h-j[1]-j[3]:null,desc:i(b).attr("data-desc")||"",theme:"theme-"+this.get("name"),download:l};return a.mix(n,d),this.get("template").render(n)}},{ATTRS:{padding:{value:[20,250,20,20]},name:{value:"weibo"},template:{value:h},data:{value:{title:"\u67e5\u770b\u56fe\u7247",prefix:"\u56fe\u7247\u8bf4\u660e"}}}}),f},{requires:["node","base","./weibo-tpl","xtemplate","./css/weibo.css"]});