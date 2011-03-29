(function($){
	
	var html = $("html");
	
	// OS detection
	$.each(['Mac','Win','Linux'], function(i, val){
		if ( navigator.platform.match(val) )
			html.addClass( val.toLowerCase() );
	});

	// Platform Detection
	$.each(['msie','mozilla','webkit'], function(i, val) {
		if ( $.browser[val] )
			html.addClass(val);
	});
	
})(jQuery);

jQuery(document).ready(function($) {
	$("p").fancyletter();
});

/*!
 * jQuery Fancy Letter Plugin v1.1
 *
 * Date: Sun Feb 06 20:51:59 2011 EST
 * Requires: jQuery v1.2.6+
 *
 * Copyright 2011, Karl Swedberg
 * Dual licensed under the MIT and GPL licenses (just like jQuery):
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Contributor: Matt Wiebe (::first-letter spec semi-conformance)
 *
 *
*/
(function(g){g.fn.fancyletter=function(m){function k(a,d,b){return['<span class="',b.punctuationClass," ",b.ltrClassPrefix+b["punctuation"+a][d],'">',d,"</span>"].join("")}function l(a,d){var b=a.firstChild,e="",f={};if(!a)return f;for(;a.childNodes.length;)a=a.firstChild;e=a.nodeValue&&a.nodeValue.replace(/^\s\s*/,"")||"";if(e===""&&b&&b.nextSibling)return l(b.nextSibling,d);else{b=e;for(var i=f="",c=0,h=b.charAt(c),j={};h in d.punctuationLeft;){c++;f+=k("Left",h,d);h=b.charAt(c)}j.pl=f;j.firstChar=
h;c++;for(h=b.charAt(c);h in d.punctuationRight;){c++;i+=k("Right",h,d);h=b.charAt(c)}j.pr=i;j.slicePoint=c;f=j;f.node=a;f.val=e;return f}}this.each(function(){var a,d,b,e,f=this;a=g(this);var i=g.extend({},g.fn.fancyletter.defaults,m||{},g.metadata?a.metadata():g.meta?a.data():{}),c=RegExp(i.characters);e=l(f,i);if(e.firstChar){a=e.val;f=e.node;d=e.firstChar;b=d.toLowerCase();if(c.test(d)){c=g("<span></span>");f.nodeValue=a.slice(e.slicePoint);c.html(e.pl+d+e.pr);c.addClass(i.commonClass+" "+i.ltrClassPrefix+
b);c.prependTo(this)}}});return this};g.fn.fancyletter.defaults={commonClass:"first-letter",ltrClassPrefix:"ltr-",characters:"[a-zA-Z0-9]",groupPunctuation:true,punctuationClass:"punct",punctuationLeft:{'"':"dquo","'":"squo","\u201c":"ldquo","\u2018":"lsquo","\u00ab":"laquo","\u2039":"lsaquo","(":"lparen"},punctuationRight:{'"':"dquo","'":"squo","\u201d":"rdquo","\u2019":"rsquo","\u00bb":"raquo","\u203a":"rsaquo",")":"rparen"}}})(jQuery);