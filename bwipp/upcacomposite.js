// file: bwipp/upcacomposite.js
//
// This code was automatically generated from:
// Barcode Writer in Pure PostScript - Version 2015-03-24
//
// Copyright (c) 2011-2015 Mark Warren
// Copyright (c) 2004-2014 Terry Burton
//
// See the LICENSE file in the bwip-js root directory
// for the extended copyright notice.
// BEGIN upcacomposite
if (!BWIPJS.bwipp["raiseerror"] && BWIPJS.increfs("upcacomposite", "raiseerror")) {
	BWIPJS.load("bwipp/raiseerror.js");
}
if (!BWIPJS.bwipp["upca"] && BWIPJS.increfs("upcacomposite", "upca")) {
	BWIPJS.load("bwipp/upca.js");
}
if (!BWIPJS.bwipp["gs1-cc"] && BWIPJS.increfs("upcacomposite", "gs1-cc")) {
	BWIPJS.load("bwipp/gs1-cc.js");
}
if (!BWIPJS.bwipp["renlinear"] && BWIPJS.increfs("upcacomposite", "renlinear")) {
	BWIPJS.load("bwipp/renlinear.js");
}
if (!BWIPJS.bwipp["renmatrix"] && BWIPJS.increfs("upcacomposite", "renmatrix")) {
	BWIPJS.load("bwipp/renmatrix.js");
}
BWIPJS.bwipp["upcacomposite"]=function() {
	function $f0(){
		//#line 19197: token false eq {exit} if dup length string cvs (=) search
		return -1;
	}
	function $f1(){
		//#line 19198: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.ptr--;
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f2(){
		//#line 19198: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f3(){
		//#line 19197: token false eq {exit} if dup length string cvs (=) search
		var a=/^\s*([^\s]+)(\s+.*)?$/.exec(this.stk[this.ptr-1]);
		if (a) {
			this.stk[this.ptr-1]=BWIPJS.psstring(a[2]===undefined?"":a[2]);
			this.stk[this.ptr++]=BWIPJS.psstring(a[1]);
			this.stk[this.ptr++]=true;
		} else {
			this.stk[this.ptr-1]=false;
		}
		this.stk[this.ptr++]=false;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f0;
		var t0=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t0.call(this)==-1) return -1;
		}
		this.stk[this.ptr]=this.stk[this.ptr-1]; this.ptr++;
		if (typeof(this.stk[this.ptr-1].length)!=="number") throw "length: invalid: " + BWIPJS.pstype(this.stk[this.ptr-1]);
		this.stk[this.ptr-1]=this.stk[this.ptr-1].length;
		this.stk[this.ptr-1]=BWIPJS.psstring(this.stk[this.ptr-1]);
		var t=this.stk[this.ptr-2].toString();
		this.stk[this.ptr-1].assign(0,t);
		this.stk[this.ptr-2]=this.stk[this.ptr-1].subset(0,t.length);
		this.ptr--;
		this.stk[this.ptr++]=BWIPJS.psstring("=");
		var h=this.stk[this.ptr-2];
		var t=h.indexOf(this.stk[this.ptr-1]);
		if (t==-1) {
			this.stk[this.ptr-1]=false;
		} else {
			this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
			this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
			this.stk[this.ptr++]=h.subset(0,t);
			this.stk[this.ptr++]=true;
		}
		//#line 19198: true eq {cvlit exch pop exch def} {cvlit true def} ifelse
		this.stk[this.ptr++]=true;
		if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
			this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
		else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
		this.ptr--;
		this.stk[this.ptr++]=$f1;
		this.stk[this.ptr++]=$f2;
		var t1=this.stk[--this.ptr];
		var t2=this.stk[--this.ptr];
		if (this.stk[--this.ptr]) {
			if (t2.call(this)==-1) return -1;
		} else {
			if (t1.call(this)==-1) return -1;
		}
	}
	function $f4(){
		//#line 19195: 1 dict begin
		this.stk[this.ptr++]=1;
		this.stk[this.ptr-1]={};
		this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
		//#line 19196: options {
		var t=this.dstk.get("options");
		if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
		this.stk[this.ptr++]=$f3;
		//#line 19199: } loop
		var t3=this.stk[--this.ptr];
		while (true) {
			if (t3.call(this)==-1) break;
		}
		//#line 19200: currentdict end /options exch def
		this.stk[this.ptr++]=this.dict;
		this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
		this.stk[this.ptr++]="options";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f5(){
		//#line 19202: options {def} forall
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f6(){
		//#line 19206: /linear exch def
		this.stk[this.ptr++]="linear";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
		//#line 19207: pop
		this.ptr--;
		//#line 19208: /comp exch def
		this.stk[this.ptr++]="comp";
		var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
		this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	}
	function $f7(){
		//#line 19210: pop
		this.ptr--;
	}
	function $f8(){
		//#line 19226: 0 1  93 {0} repeat  1 0
		this.stk[this.ptr++]=0;
	}
	function $f9(){
		//#line 19227: 1 0  93 {0} repeat  0 1
		this.stk[this.ptr++]=0;
	}
	function $f10(){
		//#line 19228: 0 1  93 {0} repeat  1 0
		this.stk[this.ptr++]=0;
	}
	//#line 19186: 20 dict begin            % Confine variables to local scope
	this.stk[this.ptr++]=20;
	this.stk[this.ptr-1]={};
	this.dict=this.stk[--this.ptr]; this.dstk.push(this.dict);
	//#line 19188: /options exch def
	this.stk[this.ptr++]="options";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 19189: /barcode exch def
	this.stk[this.ptr++]="barcode";
	var t=this.stk[this.ptr-2]; this.stk[this.ptr-2]=this.stk[this.ptr-1]; this.stk[this.ptr-1]=t;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 19191: /dontdraw false def
	this.stk[this.ptr++]="dontdraw";
	this.stk[this.ptr++]=false;
	this.dict[this.stk[this.ptr-2]]=this.stk[this.ptr-1]; this.ptr-=2;
	//#line 19194: options type /stringtype eq {
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr-1]=BWIPJS.pstype(this.stk[this.ptr-1]);
	this.stk[this.ptr++]="stringtype";
	if (this.stk[this.ptr-2] instanceof BWIPJS.psstring)
		this.stk[this.ptr-2]=this.stk[this.ptr-2].toString()==this.stk[this.ptr-1];
	else this.stk[this.ptr-2]=this.stk[this.ptr-2]==this.stk[this.ptr-1];
	this.ptr--;
	this.stk[this.ptr++]=$f4;
	//#line 19201: } if
	var t4=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t4.call(this)==-1) return -1;
	}
	//#line 19202: options {def} forall
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=$f5;
	var t7=this.stk[--this.ptr];
	var t6=this.stk[--this.ptr];
	for (t5 in t6) {
		if (t6 instanceof BWIPJS.psstring || t6 instanceof BWIPJS.psarray) {
			if (t5.charCodeAt(0) > 57) continue;
			this.stk[this.ptr++]=t6.get(t5);
		} else {
			this.stk[this.ptr++]=t5;
			this.stk[this.ptr++]=t6[t5];
		}
		if (t7.call(this)==-1) break;
	}
	//#line 19205: barcode (|) search {
	var t=this.dstk.get("barcode");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("|");
	var h=this.stk[this.ptr-2];
	var t=h.indexOf(this.stk[this.ptr-1]);
	if (t==-1) {
		this.stk[this.ptr-1]=false;
	} else {
		this.stk[this.ptr-2]=h.subset(t+this.stk[this.ptr-1].length);
		this.stk[this.ptr-1]=h.subset(t,this.stk[this.ptr-1].length);
		this.stk[this.ptr++]=h.subset(0,t);
		this.stk[this.ptr++]=true;
	}
	this.stk[this.ptr++]=$f6;
	//#line 19209: } {
	this.stk[this.ptr++]=$f7;
	//#line 19211: } ifelse
	var t8=this.stk[--this.ptr];
	var t9=this.stk[--this.ptr];
	if (this.stk[--this.ptr]) {
		if (t9.call(this)==-1) return -1;
	} else {
		if (t8.call(this)==-1) return -1;
	}
	//#line 19213: gsave
	this.gsave();
	//#line 19215: options (lintype) (ean13) put
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("lintype");
	this.stk[this.ptr++]=BWIPJS.psstring("ean13");
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	//#line 19216: options (inkspread) (0) put
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("inkspread");
	this.stk[this.ptr++]=BWIPJS.psstring("0");
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	//#line 19217: options (dontdraw) true put
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	this.stk[this.ptr++]=BWIPJS.psstring("dontdraw");
	this.stk[this.ptr++]=true;
	if (this.stk[this.ptr-3] instanceof BWIPJS.psstring || this.stk[this.ptr-3] instanceof BWIPJS.psarray)
		this.stk[this.ptr-3].set(this.stk[this.ptr-2], this.stk[this.ptr-1]);
	else this.stk[this.ptr-3][this.stk[this.ptr-2].toString()]=this.stk[this.ptr-1];
	this.ptr-=3;
	//#line 19220: linear options //upca exec //renlinear exec
	var t=this.dstk.get("linear");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("upca");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	var t=this.dstk.get("renlinear");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	//#line 19223: -1 72 rmoveto <<
	this.stk[this.ptr++]=-1;
	this.stk[this.ptr++]=72;
	var y=this.stk[--this.ptr];
	this.rmoveto(this.stk[--this.ptr],y);
	this.stk[this.ptr++]=Infinity;
	//#line 19224: /ren //renmatrix
	this.stk[this.ptr++]="ren";
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	//#line 19225: /pixs [
	this.stk[this.ptr++]="pixs";
	this.stk[this.ptr++]=Infinity;
	//#line 19226: 0 1  93 {0} repeat  1 0
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=93;
	this.stk[this.ptr++]=$f8;
	var t12=this.stk[--this.ptr];
	var t10=this.stk[--this.ptr];
	for (var t11=0; t11<t10; t11++) {
		if (t12.call(this)==-1) break;
	}
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=0;
	//#line 19227: 1 0  93 {0} repeat  0 1
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=93;
	this.stk[this.ptr++]=$f9;
	var t15=this.stk[--this.ptr];
	var t13=this.stk[--this.ptr];
	for (var t14=0; t14<t13; t14++) {
		if (t15.call(this)==-1) break;
	}
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	//#line 19228: 0 1  93 {0} repeat  1 0
	this.stk[this.ptr++]=0;
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=93;
	this.stk[this.ptr++]=$f10;
	var t18=this.stk[--this.ptr];
	var t16=this.stk[--this.ptr];
	for (var t17=0; t17<t16; t17++) {
		if (t18.call(this)==-1) break;
	}
	this.stk[this.ptr++]=1;
	this.stk[this.ptr++]=0;
	//#line 19229: ]
	for (var i = this.ptr-1; i >= 0 && this.stk[i] !== Infinity; i--) ;
	if (i < 0) throw "array: underflow";
	var t = this.stk.splice(i+1, this.ptr-1-i);
	this.ptr = i;
	this.stk[this.ptr++]=BWIPJS.psarray(t);
	//#line 19230: /pixx 97
	this.stk[this.ptr++]="pixx";
	this.stk[this.ptr++]=97;
	//#line 19231: /pixy 3
	this.stk[this.ptr++]="pixy";
	this.stk[this.ptr++]=3;
	//#line 19232: /height 6 72 div
	this.stk[this.ptr++]="height";
	this.stk[this.ptr++]=6;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	//#line 19233: /width 97 72 div
	this.stk[this.ptr++]="width";
	this.stk[this.ptr++]=97;
	this.stk[this.ptr++]=72;
	this.stk[this.ptr-2]=this.stk[this.ptr-2]/this.stk[this.ptr-1]; this.ptr--;
	//#line 19234: /opt options
	this.stk[this.ptr++]="opt";
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	//#line 19235: >> //renmatrix exec
	var t = {};
	for (var i = this.ptr-1; i >= 1 && this.stk[i] !== Infinity; i-=2) {
		if (this.stk[i-1] === Infinity) throw "dict: malformed stack";
		t[this.stk[i-1]]=this.stk[i];
	}
	if (i < 0 || this.stk[i]!==Infinity) throw "dict: underflow";
	this.ptr = i;
	this.stk[this.ptr++]=t;
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	//#line 19238: -2 6 rmoveto comp options //gs1-cc exec //renmatrix exec
	this.stk[this.ptr++]=-2;
	this.stk[this.ptr++]=6;
	var y=this.stk[--this.ptr];
	this.rmoveto(this.stk[--this.ptr],y);
	var t=this.dstk.get("comp");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("options");
	if (t instanceof Function) t.call(this); else this.stk[this.ptr++]=t;
	var t=this.dstk.get("gs1-cc");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	var t=this.dstk.get("renmatrix");
	this.stk[this.ptr++]=t;
	var t=this.stk[--this.ptr];
	if (t instanceof Function) t.call(this); else this.eval(t);
	//#line 19240: grestore
	this.grestore();
	//#line 19242: end
	this.dstk.pop(); this.dict=this.dstk[this.dstk.length-1];
	psstptr = this.ptr;
}
BWIPJS.decrefs("upcacomposite");
// END OF upcacomposite