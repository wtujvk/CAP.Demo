define("gallery/numeral/1.5.3/numeral",[],function(a,b,c){function d(a){this._value=a}function e(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function f(a,b,c){var d;return d=b.indexOf("$")>-1?h(a,b,c):b.indexOf("%")>-1?i(a,b,c):b.indexOf(":")>-1?j(a,b):l(a._value,b,c)}function g(a,b){var c,d,e,f,g,h=b,i=["KB","MB","GB","TB","PB","EB","ZB","YB"],j=!1;if(b.indexOf(":")>-1)a._value=k(b);else if(b===t)a._value=0;else{for("."!==r[s].delimiters.decimal&&(b=b.replace(/\./g,"").replace(r[s].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+r[s].abbreviations.thousand+"(?:\\)|(\\"+r[s].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+r[s].abbreviations.million+"(?:\\)|(\\"+r[s].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+r[s].abbreviations.billion+"(?:\\)|(\\"+r[s].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+r[s].abbreviations.trillion+"(?:\\)|(\\"+r[s].currency.symbol+")?(?:\\))?)?$"),g=0;g<=i.length&&!(j=b.indexOf(i[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(j?j:1)*(h.match(c)?Math.pow(10,3):1)*(h.match(d)?Math.pow(10,6):1)*(h.match(e)?Math.pow(10,9):1)*(h.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=j?Math.ceil(a._value):a._value}return a._value}function h(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),i="";return b.indexOf(" $")>-1?(i=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(i=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=l(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,r[s].currency.symbol+i),e=e.join("")):e=r[s].currency.symbol+i+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,i+r[s].currency.symbol),e=e.join("")):e=e+i+r[s].currency.symbol,e}function i(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=l(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function j(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*60*b)/60),d=Math.round(a._value-60*60*b-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function k(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*60*Number(b[0]),c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function l(a,b,c){var d,f,g,h,i,j,k=!1,l=!1,m=!1,n="",o=!1,p=!1,q=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==t)return t;if(b.indexOf("(")>-1?(k=!0,b=b.slice(1,-1)):b.indexOf("+")>-1&&(l=!0,b=b.replace(/\+/g,"")),b.indexOf("a")>-1&&(o=b.indexOf("aK")>=0,p=b.indexOf("aM")>=0,q=b.indexOf("aB")>=0,u=b.indexOf("aT")>=0,v=o||p||q||u,b.indexOf(" a")>-1?(n=" ",b=b.replace(" a","")):b=b.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=r[s].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||q?(n+=r[s].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||p?(n+=r[s].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||o)&&(n+=r[s].abbreviations.thousand,a/=Math.pow(10,3))),b.indexOf("b")>-1)for(b.indexOf(" b")>-1?(w=" ",b=b.replace(" b","")):b=b.replace("b",""),g=0;g<=z.length;g++)if(d=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=d&&f>a){w+=z[g],d>0&&(a/=d);break}return b.indexOf("o")>-1&&(b.indexOf(" o")>-1?(x=" ",b=b.replace(" o","")):b=b.replace("o",""),x+=r[s].ordinal(a)),b.indexOf("[.]")>-1&&(m=!0,b=b.replace("[.]",".")),h=a.toString().split(".")[0],i=b.split(".")[1],j=b.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=e(a,i[0].length+i[1].length,c,i[1].length)):A=e(a,i.length,c),h=A.split(".")[0],A=A.split(".")[1].length?r[s].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=e(a,null,c),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+r[s].delimiters.thousands)),0===b.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function m(a,b){r[a]=b}function n(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function o(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=n(a),d=n(b);return c>d?c:d},-1/0)}var p,q="1.5.3",r={},s="en",t=null,u="0,0";"undefined"!=typeof c&&c.exports,p=function(a){return p.isNumeral(a)?a=a.value():0===a||"undefined"==typeof a?a=0:Number(a)||(a=p.fn.unformat(a)),new d(Number(a))},p.version=q,p.isNumeral=function(a){return a instanceof d},p.language=function(a,b){if(!a)return s;if(a&&!b){if(!r[a])throw new Error("Unknown language : "+a);s=a}return(b||!r[a])&&m(a,b),p},p.languageData=function(a){if(!a)return r[s];if(!r[a])throw new Error("Unknown language : "+a);return r[a]},p.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),p.zeroFormat=function(a){t="string"==typeof a?a:null},p.defaultFormat=function(a){u="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),p.fn=d.prototype={clone:function(){return p(this)},format:function(a,b){return f(this,a?a:u,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:g(this,a?a:u)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=o.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=o.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=o(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=o(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(p(this._value).subtract(a).value())}},c.exports=p});
