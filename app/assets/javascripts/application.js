// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require jasny-bootstrap
//= require turbolinks
//= require cocoon
//= require chosen-jquery
//= require select2
//= require select2_locale_"es"
//= require autocomplete-rails
//= require lazybox
//= require turbolinks

//= require_tree .

$(document).ready(function(){$("a[rel*=lazybox]").lazybox({close:!1,modal:!1,opacity:.7,klass:"lazybox",speed:200}),$.lazybox.settings={cancelClass:"button green",submitClass:"button red",closeImg:!1,niceClose:!1},$.rails.allowAction=$.lazybox.confirm}),$("#teams").tooltip("show"),$(document).on("ready page:load",function(){function s(s){return s[0].toUpperCase()+s.slice(1)}$(".trs1").on("keyup",function(){a=s($(".trs1").val()),$(".trs1").val(a)}),$(".trs2").on("keyup",function(){a=s($(".trs2").val()),$(".trs2").val(a)}),$(".trs3").on("keyup",function(){a=s($(".trs3").val()),$(".trs3").val(a)}),$(".trs4").on("keyup",function(){a=s($(".trs4").val()),$(".trs4").val(a)})}),$(document).ready(function(){$("#selecctall").click(function(s){this.checked?$(".checkbox1").each(function(){this.checked=!0}):$(".checkbox1").each(function(){this.checked=!1})}),$("#selecctall2").click(function(s){this.checked?$(".checkbox2").each(function(){this.checked=!0}):$(".checkbox2").each(function(){this.checked=!1})})}),$(function(){$(".allchk").click(function(){$(this).is(":checked")?($("#dvPassport").show(),$("#dvPassport2").show(),$("#dvPassport3").show(),$("#dvPassport4").show(),$("#dvPassport5").show(),$("#dvPassport6").show(),$("#dvPassport7").show(),$("#dvPassport8").show(),$("#dvPassport9").show(),$("#dvPassport10").show(),$("#dvPassport11").show(),$("#dvPassport12").show()):($("#dvPassport").hide(),$("#dvPassport2").hide(),$("#dvPassport3").hide(),$("#dvPassport4").hide(),$("#dvPassport5").hide(),$("#dvPassport6").hide(),$("#dvPassport7").hide(),$("#dvPassport8").hide(),$("#dvPassport9").hide(),$("#dvPassport10").hide(),$("#dvPassport11").hide(),$("#dvPassport12").hide())})}),$(function(){$(".allchk2").click(function(){$(this).is(":checked")?($("#dvPassport13").show(),$("#dvPassport14").show(),$("#dvPassport15").show(),$("#dvPassport16").show(),$("#dvPassport17").show(),$("#dvPassport18").show(),$("#dvPassport19").show(),$("#dvPassport20").show(),$("#dvPassport21").show(),$("#dvPassport22").show()):($("#dvPassport13").hide(),$("#dvPassport14").hide(),$("#dvPassport15").hide(),$("#dvPassport16").hide(),$("#dvPassport17").hide(),$("#dvPassport18").hide(),$("#dvPassport19").hide(),$("#dvPassport20").hide(),$("#dvPassport21").hide(),$("#dvPassport22").hide())})}),$(function(){$(".chkPassport").click(function(){$(this).is(":checked")?$("#dvPassport").show():$("#dvPassport").hide()})}),$(function(){$(".chkPassport2").click(function(){$(this).is(":checked")?$("#dvPassport2").show():$("#dvPassport2").hide()})}),$(function(){$(".chkPassport3").click(function(){$(this).is(":checked")?$("#dvPassport3").show():$("#dvPassport3").hide()})}),$(function(){$(".chkPassport4").click(function(){$(this).is(":checked")?$("#dvPassport4").show():$("#dvPassport4").hide()})}),$(function(){$(".chkPassport5").click(function(){$(this).is(":checked")?$("#dvPassport5").show():$("#dvPassport5").hide()})}),$(function(){$(".chkPassport6").click(function(){$(this).is(":checked")?$("#dvPassport6").show():$("#dvPassport6").hide()})}),$(function(){$(".chkPassport7").click(function(){$(this).is(":checked")?$("#dvPassport7").show():$("#dvPassport7").hide()})}),$(function(){$(".chkPassport8").click(function(){$(this).is(":checked")?$("#dvPassport8").show():$("#dvPassport8").hide()})}),$(function(){$(".chkPassport9").click(function(){$(this).is(":checked")?$("#dvPassport9").show():$("#dvPassport9").hide()})}),$(function(){$(".chkPassport10").click(function(){$(this).is(":checked")?$("#dvPassport10").show():$("#dvPassport10").hide()})}),$(function(){$(".chkPassport11").click(function(){$(this).is(":checked")?$("#dvPassport11").show():$("#dvPassport11").hide()})}),$(function(){$(".chkPassport12").click(function(){$(this).is(":checked")?$("#dvPassport12").show():$("#dvPassport12").hide()})}),$(function(){$(".Embarazo").click(function(){$(this).is(":checked")?($("#MostrarEmbarazo").show(),$("#MostrarEmbarazo2").show(),$("#MostrarEmbarazo3").show(),$("#MostrarEmbarazo4").show(),$("#MostrarEmbarazo5").show(),$("#MostrarEmbarazo6").show(),$("#MostrarEmbarazo7").show(),$("#MostrarEmbarazo8").show()):($("#MostrarEmbarazo").hide(),$("#MostrarEmbarazo2").hide(),$("#MostrarEmbarazo3").hide(),$("#MostrarEmbarazo4").hide(),$("#MostrarEmbarazo5").hide(),$("#MostrarEmbarazo6").hide(),$("#MostrarEmbarazo7").hide(),$("#MostrarEmbarazo8").hide())})}),$(function(){$(".chkPassport13").click(function(){$(this).is(":checked")?$("#dvPassport13").show():$("#dvPassport13").hide()})}),$(function(){$(".chkPassport14").click(function(){$(this).is(":checked")?$("#dvPassport14").show():$("#dvPassport14").hide()})}),$(function(){$(".chkPassport15").click(function(){$(this).is(":checked")?$("#dvPassport15").show():$("#dvPassport15").hide()})}),$(function(){$(".chkPassport16").click(function(){$(this).is(":checked")?$("#dvPassport16").show():$("#dvPassport16").hide()})}),$(function(){$(".chkPassport17").click(function(){$(this).is(":checked")?$("#dvPassport17").show():$("#dvPassport17").hide()})}),$(function(){$(".chkPassport18").click(function(){$(this).is(":checked")?$("#dvPassport18").show():$("#dvPassport18").hide()})}),$(function(){$(".chkPassport19").click(function(){$(this).is(":checked")?$("#dvPassport19").show():$("#dvPassport19").hide()})}),$(function(){$(".chkPassport20").click(function(){$(this).is(":checked")?$("#dvPassport20").show():$("#dvPassport20").hide()})}),$(function(){$(".chkPassport21").click(function(){$(this).is(":checked")?$("#dvPassport21").show():$("#dvPassport21").hide()})}),$(function(){$(".chkPassport22").click(function(){$(this).is(":checked")?$("#dvPassport22").show():$("#dvPassport22").hide()})}),$(function(){$(".chkPassport23").click(function(){$(this).is(":checked")?$("#dvPassport23").show():$("#dvPassport23").hide()})}),$(function(){$(".chkPassport24").click(function(){$(this).is(":checked")?$("#dvPassport24").show():$("#dvPassport24").hide()})}),$(function(){$(".chkPassport25").click(function(){$(this).is(":checked")?$("#dvPassport25").show():$("#dvPassport25").hide()})}),$(function(){$(".chkPassport26").click(function(){$(this).is(":checked")?$("#dvPassport26").show():$("#dvPassport26").hide()})}),$(function(){$(".chkPassport27").click(function(){$(this).is(":checked")?$("#dvPassport27").show():$("#dvPassport27").hide()})}),$(function(){$(".chkPassport28").click(function(){$(this).is(":checked")?$("#dvPassport28").show():$("#dvPassport28").hide()})}),$(function(){$(".chkPassport29").click(function(){$(this).is(":checked")?$("#dvPassport29").show():$("#dvPassport29").hide()})}),$(function(){$(".chkPassport30").click(function(){$(this).is(":checked")?$("#dvPassport30").show():$("#dvPassport30").hide()})}),$(function(){$(".chkPassport31").click(function(){$(this).is(":checked")?$("#dvPassport31").show():$("#dvPassport31").hide()})}),$(function(){$(".chkPassport32").click(function(){$(this).is(":checked")?$("#dvPassport32").show():$("#dvPassport32").hide()})}),$(function(){$(".chkPassport33").click(function(){$(this).is(":checked")?$("#dvPassport33").show():$("#dvPassport33").hide()})});