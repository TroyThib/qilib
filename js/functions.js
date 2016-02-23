$.qs = function (key) {
	key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
	var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
	return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};
$.stripLeadingZeros = function(stringIn){
	while(stringIn.substr(0,1)==="0"){
		stringIn = stringIn.substr(1,stringIn.length-1);
	}
	return stringIn;
};

var __I = $.qs("id");
var __W = ((__I!=null)?__I.substr(0,2):"01");
var __W1 = $.stripLeadingZeros(__W);
var __W2 = $.stripLeadingZeros(__W);
var __G = (__I!=null)?__I.substr(2,1):"0";
var __N = $.qs("firstName");
//window.history.pushState( {} , 'Galderma - Qilib', '/' );
	
$(document).ready(function(){
	if(__G=="1"){
		$(".weekCircle").each(function(){
			var h = $(this).parent().attr("href").substr(0,2) + "1";
			$(this).parent().attr("href",h);
		});
	}
	$.resizeElements = function(){
		var p0 = $("#bodyContent").width()/1280;
		$(".headerSep").css({"width":"0"});
		if($("#bodyContent").width()<1280){
			$("#headerContent .sectionContent").css({"margin-top":(15*p0)+"px","margin-bottom":(67*p0)+"px"});
			$("#headerPurple .sectionContent").css({"margin-top":"0px","margin-bottom":(35*p0)+"px"});
			$(".headerContentWeek").css({"font-size":((32*p0)<20?20:32*p0)+"px"});
			$(".headerContentWelcome").css({"font-size":((32*p0)<20?20:32*p0)+"px","line-height":((42*p0)<36?36:42*p0)+"px"});
			$(".headerContentTag").css({"font-size":((32*p0)<20?20:32*p0)+"px","line-height":((42*p0)<36?36:42*p0)+"px"});
			
		}else{
			$(".headerSep").css({"width":"365px"});
			$("#headerContent .sectionContent").css({"margin-top":"15px","margin-bottom":"67px"});
			$("#headerPurple .sectionContent").css({"margin-top":"0","margin-bottom":"35px"});
			$(".headerContentWeek").css({"font-size":"32px","line-height":"60px"});
			$(".headerContentWelcome").css({"font-size":"32px","line-height":"42px"});
			$(".headerContentTag").css({"font-size":"32px","line-height":"42px"});
		}
		$(".sectionHalf ul").css({"margin-left":"18px"});
		var p = $("#bodyContent").width()/1000;
		if($("#bodyContent").width()>1000){
			$(".headerLink").css({"margin-right":"55px"});
			$(".headerLink:last-child").css({"margin-right":"0"});
			$(".sectionWhiteTitle").css({"font-size":"38px","line-heiht":"42px","margin":"40px 0"});
			$(".sectionQuote01").css({"width":"116px","margin-top":"145px"});
			$(".sectionQuote02").css({"width":"116px","margin-top":"205px"});
			$(".sectionSeparator").css({"margin-top":"50px"});
			$(".sectionContent").css({"width":"900px","padding":"25px 0","font-size":"18px","line-height":"26px"});
			$("#headerNav .sectionContent").css({"padding":"15px"});
			$(".sectionTitle").css({"font-size":"42px","margin-bottom":"30px"});
			$(".sectionSubTitleLarge").css({"font-size":"24px"});
			$(".sectionSubTitle").css({"font-size":"18px"});
			$(".sectionHalfSeparator").css({"margin":"60px 65px 0 65px"});
			$(".sectionHalf").css({"width":"380px","margin-bottom":"50px"});
			$(".sectionPurpleTitle").css({"font-size":"42px","margin-bottom":"40px","margin-top":"40px"});
			$(".sectionHalfImg").css({"margin":"50px 0","width":"306px","height":"306px"});
			$(".footerLogo").css({"margin-bottom":"27px"});
			$(".footerRight").css({"font-size":"12px"});
			$(".footerSocialRight").css({"font-size":"12px"});
		}else{
			$(".headerLink").css({"margin-right":(55*p0/2)+"px"});
			$(".headerLink:last-child").css({"margin-right":"0"});
			$(".sectionWhiteTitle").css({"font-size":((38*p)<30?24:38*p)+"px","line-height":((42*p)<28?34:42*p)+"px","margin":((40*p))+"px 0"});
			$(".sectionQuote01").css({"width":((116*p))+"px","margin-top":((145))+"px"});
			$(".sectionQuote02").css({"width":((116*p))+"px","margin-top":((205*p)<145?145:205*p)+"px"});
			$(".sectionSeparator").css({"margin-top":((50*p)<20?20:50*p)+"px"});
			$(".sectionContent").css({"width":(900*p)+"px","padding":(25*p)+"px 0","font-size":((18*p)<14?14:18*p)+"px","line-height":((26*p)<20?20:26*p)+"px"});
			$(".sectionTitle").css({"font-size":((42*p)<30?30:42*p)+"px","margin-bottom":((30*p<20)?20:30*p)+"px"});
			$(".sectionSubTitleLarge").css({"font-size":((24*p)<18?18:24*p)+"px"});
			$(".sectionSubTitle").css({"font-size":((18*p)<14?14:18*p)+"px"});
			$(".sectionHalfSeparator").css({"margin":((60*p<30)?30:60*p)+"px "+((65*p<32)?32:65*p)+"px 0 "+((65*p<32)?32:65*p)+"px"});
			$(".sectionHalf").css({"width":((380*p))+"px","margin-bottom":(50*p)+"px"});
			$(".sectionPurpleTitle").css({"font-size":((42*p)<30?30:42*p)+"px","margin-bottom":((40*p<20)?20:40*p)+"px","margin-top":((40*p<20)?20:40*p)+"px"});
			$(".sectionHalfImg").css({"margin":((50*p)<20?20:50*p)+"px 0","width":((306*p)<200?200:300*p)+"px","height":((306*p)<200?200:300*p)+"px"});
			$(".footerLogo").css({"margin-bottom":((27*p))+"px"});
			$(".footerRight").css({"font-size":((12*p)<9?9:12*p)+"px"});
			$(".footerSocialRight").css({"font-size":((12*p)<9?9:12*p)+"px"});
		}
		if($("#bodyContent").width()<600){
			$(".headerLink:first-child").css({"margin-right":"20px"});
			$("#headerWeek").css({"height":"80px","line-height":"80px"});
			$(".sectionHalfSeparator").hide();
			$(".sectionHalf").css({"width":"100%"});
			$(".sectionHalfImg").css({"margin-left":"auto","margin-right":"auto"});
			$(".footerLeft").css({"clear":"both","width":"100%","text-align":"center"});
			$(".footerRight").css({"text-align":"center","clear":"both","width":"100%","margin-top":"10px","margin-bottom":"10px"});
			$(".footerLogo").css({"width":"90%","margin":"10px auto"});
			$(".footerSocialLeft").css({"clear":"both","width":"100%","text-align":"center"});
			$(".footerSocialRight").css({"text-align":"center","clear":"both","width":"100%","margin-top":"10px","font-size":"12px"});
			$("#footerSocial .sectionContent").css({"padding-top":"15px","padding-bottom":"5px"});
			$(".sectionQuote01").css({"width":((116*p))+"px","margin-top":"120px"});
			$(".sectionQuote02").css({"width":((116*p))+"px","margin-top":"120px"});
			$(".firstSection").css({"width":"100%"});
			$(".secondSection img").css({"margin-left":"0"});
		}else{
			$("#headerWeek").css({"height":"40px","line-height":"40px"});
			$(".sectionHalfSeparator").show();
			$(".sectionHalfImg").css({"margin-left":"0","margin-right":"0"});
			$(".footerLeft").css({"clear":"none","float":"left","width":"auto","text-align":"left"});
			$(".footerRight").css({"text-align":"right","clear":"none","float":"right","width":"auto","margin-top":"0","margin-bottom":"0"});
			$(".footerLogo").css({"width":"auto"});
			$(".footerSocialLeft").css({"clear":"none","float":"left","width":"auto","text-align":"left"});
			$(".footerSocialRight").css({"text-align":"right","clear":"none","float":"right","width":"auto","margin-top":"0","font-size":"9px"});
			$("#footerSocial .sectionContent").css({"padding-top":"10px","padding-bottom":"5px"});
			$(".firstSection").css({"width":"50%"});
			$("#headerAd_010 .firstSection").css({"width":"30%"});
			$("#headerAd_011 .firstSection").css({"width":"30%"});
			$("#headerAd_020 .firstSection").css({"width":"auto"});
			$("#headerAd_021 .firstSection").css({"width":"auto"});
			$(".secondSection img").css({"margin-left":"10%"});
		}
		var top = $("#actionSection").prev().children("img").height()/2;
		$("#actionSection").prev().css({"margin-bottom":"-"+top+"px"})
		top =  top + (25*p);	
		$("#actionSection").css({"padding-top":(top)+"px"});
		
		//Week and Gender Specific
		$("#headerSection #week").css({"margin-bottom":"0"});
		$("#actionSection .sectionContent").css("padding-bottom","0");
		$("#action_010").find("img").css("margin-bottom","-5px");
		$("#action_011").find("img").css("margin-bottom","-5px");
		$("#action_020 .secondSection").find("img").css({"top":"-65px","position":"relative"});
		$("#action_021 .secondSection").find("img").css({"top":"-65px","position":"relative"});
		$("#headerPurple .sectionContent").css({"margin-bottom":"0"});
		return true;
	};
	$.checkScrollPane = function(){
		//for(var i=0;i<$(".
	};
	
	$.positionToolTip = function(e){
		$("#toolTipWrapper").css({"top":(e.pageY+15) + "px","left":(e.pageX-($("#toolTipWrapper").outerWidth()/2)) + "px"});
	};
	$.setupPageItems = function(){
		
		$(".weekBlockArrow").parent().unbind("click").each(function(e){
			//console.log(e);
			$(this).hide();
			if(e==0){
				if(__W1!=1){
					$(this).show();
					if(__W2-1<1){
						$(this).attr("href",__W1+__G);
					}else{
						if(__W2.length==1){
							$(this).attr("href","0" + (__W2-1)+__G);
						}else{
							$(this).attr("href",(__W2-1)+__G);
						}
					}
				}
			}else{
				if(__W1!=1){
					$(this).show();
					if(__W2+1>__W1){
						$(this).attr("href","01"+__G);
					}else{
						if(__W2.length==1){
							$(this).attr("href","0" + (__W2+1)+__G);
						}else{
							$(this).attr("href",(__W2+1)+__G);
						}
					}
				}
			}
		});
		$(window).unbind("resize").resize(function(){
			$.resizeElements();
		});

		$(".weekCircle").each(function(i){
			$(this).html("&#9702;").removeClass("lightPurpleF").removeClass("weekCircleDisabled");
			if(i==__W2-1)$(this).addClass("lightPurpleF").html("&#149;");
			if(i+1>__W1)$(this).addClass("weekCircleDisabled");
			$(this).unbind("hover").hover(function(){
				$(this).html("&#149;");
			},function(){
				if(!$(this).hasClass("lightPurpleF")){
					$(this).html("&#9702;");
				}
			});
		});

		$("a").unbind("click").click(function(e) {
			e.preventDefault(); 
			var URL = $(this).attr("href");
			if(URL.substring(0, 1) == '#'){								
				URL = URL.substring(1);
				if(URL=="top"||URL==""){
					$('html,body').animate({scrollTop: 0},'slow');
				}else{
					var aTag = $("div[id='"+ URL +"']");
					$('html,body').animate({scrollTop: aTag.offset().top},'slow');
				}
			}else if(URL.substring(0,7)=="http://"){
				window.open(URL);
			}else{
				$.changePage($(this).attr("href"));
			}
		});
		
		$(window).unbind("mousemove",$.positionToolTip).mousemove(function(e){
			$.positionToolTip(e);
		});
		$(".toolTip").unbind("hover").hover(function(e){
			$("#toolTipWrapper").stop().hide().find("#toolTip").html($(this).attr("toolTip")).parent().fadeIn();
			$.positionToolTip(e);
		},function(e){
			$("#toolTipWrapper").stop().fadeOut(function(){
				$(this).find("#toolTip").html("");
			});
		});
		$("#weekLink").html("WEEK " + __W2);
		$(".weekBlock2Title").html("Week " + __W2).parent().attr("href","#week");
		$(".headerContentWelcomeName").html(__N)
		if($.resizeElements()){
			$("#bodyContent").stop().fadeIn(500);	
			$(".scrollUp").fadeIn();
		}
	};
	
	$.checkPagesToLoad = function(pageIn){
		var loaded = true;
		$.pagesToLoad[pageIn] = true;
		for(var key in $.pagesToLoad){
			if($.pagesToLoad[key]==false){
				loaded = false;
			}
		}
		if(loaded==true){
			$.setupPageItems();
		}
		return	loaded;
	};
	$.changePage = function(urlIn){
		$(".scrollUp").stop().fadeOut(100,function(){
			$("#headerBG").css('background-image','url(../img/headers/' + __W + __G + '.jpg)');
		});
		__I = (urlIn==null)?"010":urlIn;
		__I = __I.replace(/\?/g,"");
		__I = __I.replace(/\//g,"");
		__W = __I.substr(0,2)
		__W2 = $.stripLeadingZeros(__W);
		__G = __I.substr(2,1);
		
		//console.log(__I + " - " + __W + " - " + __W2 + " - " + __G);
		$.pagesToLoad = {
			"header":false,
			"headerAd":false,
			"growth":false,
			"action":false,
			"results":false	
		};
		$.ajax({
			method:"GET",
			url:"inc/"+__W+__G+"_header.html",
			success:function(dataIn){
				$("#headerContent").html(dataIn);
				$.checkPagesToLoad("header");
			}
		});
		$.ajax({
			method:"GET",
			url:"inc/"+__W+__G+"_headerAd.html",
			success:function(dataIn){
				$("#headerAd").html(dataIn);
				$.checkPagesToLoad("headerAd");
			}
		});
		$.ajax({
			method:"GET",
			url:"inc/"+__W+__G+"_growth.html",
			success:function(dataIn){
				$("#growthSection").html(dataIn);
				$.checkPagesToLoad("growth");
			}
		});
		$.ajax({
			method:"GET",
			url:"inc/"+__W+__G+"_action.html",
			success:function(dataIn){
				$("#actionSection").html(dataIn);
				$.checkPagesToLoad("action");
			}
		});
		$.ajax({
			method:"GET",
			url:"inc/"+__W+__G+"_results.html",
			success:function(dataIn){
				$("#resultsSection").html(dataIn);
				$.checkPagesToLoad("results");
			}
		});
	};
	
	$.changePage(__I);	
});

 