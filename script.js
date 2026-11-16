(function(){
var KEY="chest-tracker-v1";
var T={
en:{title:"Chest Tracker",sub:"Count every pirate chest you open.",total:"Chests in total",tog_on:"Misclicked? Switch to remove",tog_off:"Back to adding",
 keys:"Shortcuts",add1:"Add 1",add10:"Add 10",rem1:"Remove 1",rem10:"Remove 10",shift:"Hold Shift to remove instead of add.",
 h_start:"Opened chests already?",p_start:"Enter your current total. The page keeps counting from there.",ph_start:"e.g. 1300",set:"Set",session:"this session",alltime:"in total",
 h_list:"What you’ve got",p_list:"Tick what dropped for you. The number is the chance per chest.",
 h_save:"Save your session",p_save:"Everything is remembered in this browser. You can also save a small file and load it again later.",dl:"Download .json",imp:"Load file",
 e_num:"Please enter a number from 0.",ok_set:"Total set to ",ok_load:"Session loaded.",bad:"This file doesn’t fit the tracker.",ok_save:"File saved.",no_dl:"Downloads aren’t available here.",cancel:"Save cancelled.",fail:"Saving didn’t work.",
 items:["Weekly gold outfit","Pirate shop access","Weekly vehicle & decal","Weekly pickaxe or back bling","Weekly Jam Track","Weekly loading screen"],odds:function(n){return "1 in "+n},loc:"en-US",alt:"Golden pirate chest with a skull",h_sim:"Chest simulator",p_sim:"See how many chests it could take. Pick a speed and hit start. Every drop is rolled with its real odds.",sim_chests:"Chests",sim_per:"every … seconds",sim_start:"Start simulation",sim_stop:"Pause",sim_reset:"Reset",sim_skip:"Skip to the end",sim_opened:"chests opened",sim_time:"time passed",sim_units:["d","h","min","s"]},
de:{title:"Kisten-Tracker",sub:"Zähl jede Piratenkiste, die du öffnest.",total:"Kisten insgesamt",tog_on:"Verklickt? Auf Abziehen umschalten",tog_off:"Zurück zu Hinzufügen",
 keys:"Tastenkürzel",add1:"+1",add10:"+10",rem1:"−1",rem10:"−10",shift:"Mit gedrückter Shift-Taste wird abgezogen statt addiert.",
 h_start:"Schon Kisten geöffnet?",p_start:"Trag deinen bisherigen Stand ein, ab dann zählt die Seite weiter.",ph_start:"z. B. 1300",set:"Setzen",session:"diese Sitzung",alltime:"insgesamt",
 h_list:"Das hast du schon bekommen",p_list:"Hak ab, was dir gedroppt ist. Die Zahl ist die Chance pro Kiste.",
 h_save:"Sitzung speichern",p_save:"Alles bleibt in diesem Browser gespeichert. Zusätzlich kannst du eine kleine Datei sichern und später wieder laden.",dl:".json herunterladen",imp:"Datei laden",
 e_num:"Bitte eine Zahl ab 0 eingeben.",ok_set:"Stand gesetzt: ",ok_load:"Sitzung geladen.",bad:"Diese Datei passt nicht zum Tracker.",ok_save:"Datei gespeichert.",no_dl:"Download ist hier nicht möglich.",cancel:"Speichern abgebrochen.",fail:"Speichern hat nicht geklappt.",
 items:["Goldenes Outfit der Woche","Zugang zum Piraten-Shop","Fahrzeug & Abziehbild der Woche","Spitzhacke oder Rücken-Accessoire der Woche","Jam-Track der Woche","Ladebildschirm der Woche"],odds:function(n){return "1 zu "+n},loc:"de-DE",alt:"Goldene Piratenkiste mit Totenkopf",h_sim:"Kisten-Simulator",p_sim:"Probier aus, wie viele Kisten es brauchen könnte. Stell die Geschwindigkeit ein und starte. Jeder Drop wird mit seiner echten Chance ausgewürfelt.",sim_chests:"Kisten",sim_per:"alle … Sekunden",sim_start:"Simulation starten",sim_stop:"Pause",sim_reset:"Zurücksetzen",sim_skip:"Bis zum Ende springen",sim_opened:"Kisten geöffnet",sim_time:"vergangene Zeit",sim_units:["Tg.","Std.","min","s"]},
es:{title:"Rastreador de cofres",sub:"Cuenta cada cofre pirata que abras.",total:"Cofres en total",tog_on:"¿Te equivocaste? Cambia a restar",tog_off:"Volver a sumar",
 keys:"Atajos",add1:"+1",add10:"+10",rem1:"−1",rem10:"−10",shift:"Mantén Shift para restar en lugar de sumar.",
 h_start:"¿Ya abriste cofres?",p_start:"Escribe tu total actual. La página sigue contando desde ahí.",ph_start:"p. ej. 1300",set:"Fijar",session:"esta sesión",alltime:"en total",
 h_list:"Lo que ya has conseguido",p_list:"Marca lo que te ha tocado. El número es la probabilidad por cofre.",
 h_save:"Guarda tu sesión",p_save:"Todo se guarda en este navegador. También puedes guardar un archivo pequeño y cargarlo más tarde.",dl:"Descargar .json",imp:"Cargar archivo",
 e_num:"Escribe un número desde 0.",ok_set:"Total fijado en ",ok_load:"Sesión cargada.",bad:"Este archivo no corresponde al rastreador.",ok_save:"Archivo guardado.",no_dl:"Aquí no se puede descargar.",cancel:"Guardado cancelado.",fail:"No se pudo guardar.",
 items:["Atuendo dorado semanal","Acceso a la tienda pirata","Vehículo y calcomanía semanal","Pico o accesorio de espalda semanal","Jam Track semanal","Pantalla de carga semanal"],odds:function(n){return "1 entre "+n},loc:"es-ES",alt:"Cofre pirata dorado con calavera",
 h_sim:"Simulador de cofres",p_sim:"Mira cuántos cofres podrían hacer falta. Elige la velocidad y pulsa iniciar. Cada premio se sortea con su probabilidad real.",sim_chests:"Cofres",sim_per:"cada … segundos",sim_start:"Iniciar simulación",sim_stop:"Pausa",sim_reset:"Reiniciar",sim_skip:"Saltar al final",sim_opened:"cofres abiertos",sim_time:"tiempo transcurrido",sim_units:["d","h","min","s"]},
ru:{title:"Трекер сундуков",sub:"Считай каждый пиратский сундук, который откроешь.",total:"Всего сундуков",tog_on:"Ошибся? Переключить на вычитание",tog_off:"Назад к добавлению",
 keys:"Горячие клавиши",add1:"+1",add10:"+10",rem1:"−1",rem10:"−10",shift:"Удерживай Shift, чтобы вычитать вместо добавления.",
 h_start:"Уже открывал сундуки?",p_start:"Введи текущее число. Дальше сайт продолжит счёт.",ph_start:"напр. 1300",set:"Задать",session:"за сессию",alltime:"всего",
 h_list:"Что уже выпало",p_list:"Отметь, что тебе выпало. Число — шанс на один сундук.",
 h_save:"Сохрани сессию",p_save:"Всё хранится в этом браузере. Можно также сохранить небольшой файл и загрузить его позже.",dl:"Скачать .json",imp:"Загрузить файл",
 e_num:"Введи число от 0.",ok_set:"Всего задано: ",ok_load:"Сессия загружена.",bad:"Этот файл не подходит трекеру.",ok_save:"Файл сохранён.",no_dl:"Скачивание здесь недоступно.",cancel:"Сохранение отменено.",fail:"Не удалось сохранить.",
 items:["Золотой наряд недели","Доступ в пиратский магазин","Транспорт и наклейка недели","Кирка или украшение на спину недели","Джем-трек недели","Экран загрузки недели"],odds:function(n){return "1 из "+n},loc:"ru-RU",alt:"Золотой пиратский сундук с черепом",
 h_sim:"Симулятор сундуков",p_sim:"Узнай, сколько сундуков может понадобиться. Выбери скорость и нажми старт. Каждый дроп разыгрывается с реальным шансом.",sim_chests:"Сундуков",sim_per:"раз в … сек.",sim_start:"Запустить симуляцию",sim_stop:"Пауза",sim_reset:"Сбросить",sim_skip:"Перейти к концу",sim_opened:"сундуков открыто",sim_time:"прошло времени",sim_units:["д","ч","мин","с"]},
pl:{title:"Tracker skrzyń",sub:"Zliczaj każdą piracką skrzynię, którą otworzysz.",total:"Skrzynie łącznie",tog_on:"Pomyłka? Przełącz na odejmowanie",tog_off:"Wróć do dodawania",
 keys:"Skróty",add1:"+1",add10:"+10",rem1:"−1",rem10:"−10",shift:"Przytrzymaj Shift, by odejmować zamiast dodawać.",
 h_start:"Masz już otwarte skrzynie?",p_start:"Wpisz swój obecny wynik. Strona liczy dalej od tego miejsca.",ph_start:"np. 1300",set:"Ustaw",session:"ta sesja",alltime:"łącznie",
 h_list:"Co już masz",p_list:"Zaznacz, co Ci wypadło. Liczba to szansa na jedną skrzynię.",
 h_save:"Zapisz sesję",p_save:"Wszystko zapisuje się w tej przeglądarce. Możesz też zapisać mały plik i wczytać go później.",dl:"Pobierz .json",imp:"Wczytaj plik",
 e_num:"Wpisz liczbę od 0.",ok_set:"Ustawiono: ",ok_load:"Sesja wczytana.",bad:"Ten plik nie pasuje do trackera.",ok_save:"Plik zapisany.",no_dl:"Pobieranie jest tu niedostępne.",cancel:"Anulowano zapis.",fail:"Zapis się nie udał.",
 items:["Złoty strój tygodnia","Dostęp do pirackiego sklepu","Pojazd i naklejka tygodnia","Kilof lub plecak tygodnia","Jam Track tygodnia","Ekran ładowania tygodnia"],odds:function(n){return "1 na "+n},loc:"pl-PL",alt:"Złota piracka skrzynia z czaszką",
 h_sim:"Symulator skrzyń",p_sim:"Zobacz, ile skrzyń może być potrzebnych. Wybierz tempo i kliknij start. Każdy drop jest losowany z prawdziwą szansą.",sim_chests:"Skrzyń",sim_per:"co … sekund",sim_start:"Start symulacji",sim_stop:"Pauza",sim_reset:"Resetuj",sim_skip:"Skocz do końca",sim_opened:"otwartych skrzyń",sim_time:"upłynęło czasu",sim_units:["d","godz.","min","s"]}
};
var IDS=["gold","shop","car","pick","jam","load"],ODDS=[1562500,137500,7813,568,391,272];
var S={total:0,session:0,checks:{},lang:"en"};
function $(i){return document.getElementById(i)}
function L(){return Object.assign({},T.en,T[S.lang])}
function fmt(n){return n.toLocaleString(L().loc)}
function load(){try{var r=localStorage.getItem(KEY);if(r)merge(JSON.parse(r))}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
function merge(d){
 if(!d||typeof d!=="object")return false;
 var t=parseInt(d.total,10),s=parseInt(d.session,10);
 if(isNaN(t)||t<0)return false;
 S.total=t;S.session=isNaN(s)?0:s;
 if(T[d.lang])S.lang=d.lang;
 S.checks={};IDS.forEach(function(id){S.checks[id]=!!(d.checks&&d.checks[id])});
 return true;
}
var minus=false,shift=false,lastMsg=null;
function setMode(){
 var m=minus||shift;
 $("hero").classList.toggle("minus",m);$("btns").classList.toggle("minus",m);
 $("b1").textContent=m?"−1":"+1";$("b10").textContent=m?"−10":"+10";
 $("tog").setAttribute("aria-pressed",String(minus));
 $("tog").textContent=minus?L().tog_off:L().tog_on;
}
function applyLang(){
 var l=L();document.documentElement.lang=S.lang;
 document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=l[e.getAttribute("data-i")]});
 document.querySelectorAll("[data-ip]").forEach(function(e){e.placeholder=l[e.getAttribute("data-ip")]});
 $("chest").alt=l.alt;
 buildLang();
 IDS.forEach(function(id,i){var li=$("li-"+id);li.querySelector(".n").textContent=l.items[i];li.querySelector(".o").textContent=l.odds(fmt(ODDS[i]))});
 setMode();say(lastMsg);simRender();
}
function render(bump){
 $("count").textContent=fmt(S.total);$("tot").textContent=fmt(S.total);
 $("sess").textContent=(S.session>0?"+":"")+fmt(S.session);
 IDS.forEach(function(id){var li=$("li-"+id);li.classList.toggle("done",!!S.checks[id]);li.querySelector("input").checked=!!S.checks[id]});
 if(bump)["count","chest"].forEach(function(id){var e=$(id),c=id==="count"?"bump":"hit";e.classList.add(c);setTimeout(function(){e.classList.remove(c)},150)});
 save();
}
function say(k,extra){lastMsg=k;$("msg").textContent=k?(L()[k]+(extra||"")):""}
function add(n){var nt=Math.max(0,S.total+n);S.session+=nt-S.total;S.total=nt;render(true)}
function press(n,e){add((minus||shift||(e&&e.shiftKey))?-n:n)}
$("b1").addEventListener("click",function(e){press(1,e)});
$("b10").addEventListener("click",function(e){press(10,e)});
$("tog").addEventListener("click",function(){minus=!minus;setMode()});
document.addEventListener("keydown",function(e){
 if(e.key==="Shift"){shift=true;setMode();return}
 var t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"))return;
 if(e.ctrlKey||e.metaKey||e.altKey)return;
 var c=e.code,k=e.key;
 if(c==="Digit2"||k==="2")add(1);else if(c==="Digit3"||k==="3")add(10);
 else if(c==="Digit7"||k==="7")add(-1);else if(c==="Digit8"||k==="8")add(-10);
 else if(k==="Escape"){closePop();closeLang()}
});
document.addEventListener("keyup",function(e){if(e.key==="Shift"){shift=false;setMode()}});
window.addEventListener("blur",function(){shift=false;setMode()});

$("setStart").addEventListener("click",function(){
 var v=parseInt($("start").value,10);
 if(isNaN(v)||v<0){say("e_num");return}
 S.total=v;S.session=0;$("start").value="";render(true);say("ok_set",fmt(v));
});
$("start").addEventListener("keydown",function(e){if(e.key==="Enter")$("setStart").click()});

IDS.forEach(function(id){
 var li=document.createElement("li");li.id="li-"+id;
 li.innerHTML='<label><input type="checkbox"><span class="n"></span><span class="o"></span></label>';
 li.querySelector("input").addEventListener("change",function(e){S.checks[id]=e.target.checked;render(false)});
 $("list").appendChild(li);
});

var LANGS=["en","de","es","ru","pl"],NAMES={en:"English",de:"Deutsch",es:"Español",ru:"Русский",pl:"Polski"};
function closeLang(){$("lang").classList.remove("open");$("langCur").setAttribute("aria-expanded","false")}
function buildLang(){
 var c=$("langCur");c.textContent=S.lang.toUpperCase();c.setAttribute("aria-label",NAMES[S.lang]);c.title=NAMES[S.lang];
 var o=$("langOpts");o.innerHTML="";
 LANGS.filter(function(l){return l!==S.lang}).forEach(function(l,i){
  var b=document.createElement("button");b.type="button";b.textContent=l.toUpperCase();b.title=NAMES[l];b.setAttribute("aria-label",NAMES[l]);b.style.setProperty("--d",(i*45)+"ms");
  b.addEventListener("click",function(e){e.stopPropagation();S.lang=l;closeLang();applyLang();render(false)});o.appendChild(b);
 });
}
$("langCur").addEventListener("click",function(e){e.stopPropagation();var o=!$("lang").classList.contains("open");$("lang").classList.toggle("open",o);$("langCur").setAttribute("aria-expanded",String(o))});
document.addEventListener("click",closeLang);

function closePop(){$("pop").hidden=true;$("info").setAttribute("aria-expanded","false")}
$("info").addEventListener("click",function(e){e.stopPropagation();var o=$("pop").hidden;$("pop").hidden=!o;$("info").setAttribute("aria-expanded",String(o))});
document.addEventListener("click",function(e){if(!$("pop").hidden&&!$("pop").contains(e.target))closePop()});

$("dl").addEventListener("click",function(){
 var data=JSON.stringify({app:"chest-tracker",version:2,saved:new Date().toISOString(),lang:S.lang,total:S.total,session:S.session,checks:S.checks},null,2);
 var name="chest-tracker-"+new Date().toISOString().slice(0,10)+".json";
 var blob=new Blob([data],{type:"application/json"});
 if(window.claude&&claude.use){
  claude.use("downloads").then(function(d){
   if(!d){say("no_dl");return}
   return d.save({filename:name,data:blob}).then(function(){say("ok_save")},function(err){say(err&&err.code==="declined"?"cancel":"fail")});
  });
 }else{
  var a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();say("ok_save");
 }
});
$("imp").addEventListener("click",function(){$("file").click()});
$("file").addEventListener("change",function(e){
 var f=e.target.files[0];if(!f)return;
 var r=new FileReader();
 r.onload=function(){try{if(merge(JSON.parse(r.result))){applyLang();render(true);say("ok_load")}else say("bad")}catch(x){say("bad")}};
 r.readAsText(f);e.target.value="";
});

var sim={on:false,f:0,t:0,last:0,tm:null,d:null};
function simRoll(){sim.d=ODDS.map(function(o){return Math.ceil(Math.log(Math.random()||1e-12)/Math.log(1-1/o))})}
function simMax(){return Math.max.apply(null,sim.d)}
function simRate(){var c=parseFloat($("simC").value),s=parseFloat($("simS").value);return c>0&&s>0?c/s:0}
function fmtT(s){var u=L().sim_units,v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),Math.floor(s%60)],i=0;while(i<3&&!v[i])i++;var o=v[i]+" "+u[i];if(i<3)o+=" "+v[i+1]+" "+u[i+1];return o}
function simStop(){sim.on=false;clearInterval(sim.tm);simRender()}
function simTick(){var n=performance.now(),dt=Math.min((n-sim.last)/1000,2);sim.last=n;sim.t+=dt;sim.f+=simRate()*dt;var m=simMax();if(sim.f>=m){sim.f=m;simStop();return}simRender()}
function simReset(){clearInterval(sim.tm);sim.on=false;sim.f=0;sim.t=0;simRoll();simRender()}
function simGo(){
 if(sim.on){simStop();return}
 if(sim.f>=simMax())simReset();
 if(!simRate())return;
 sim.on=true;sim.last=performance.now();sim.tm=setInterval(simTick,50);simRender();
}
function simSkip(){var r=simRate(),m=simMax();clearInterval(sim.tm);sim.on=false;sim.f=m;if(r)sim.t=m/r;simRender()}
function simRender(){
 var l=L(),n=Math.floor(sim.f);
 $("simN").textContent=fmt(n);$("simT").textContent=fmtT(sim.t);
 IDS.forEach(function(id,i){var li=$("sl-"+id),done=n>=sim.d[i];li.classList.toggle("done",done);li.querySelector("input").checked=done;li.querySelector(".n").textContent=l.items[i];li.querySelector(".o").textContent=done?"#"+fmt(sim.d[i]):l.odds(fmt(ODDS[i]))});
 $("simGo").textContent=sim.on?l.sim_stop:l.sim_start;
}
IDS.forEach(function(id){var li=document.createElement("li");li.id="sl-"+id;li.innerHTML='<label><input type="checkbox" disabled><span class="n"></span><span class="o"></span></label>';$("simList").appendChild(li)});
$("simGo").addEventListener("click",simGo);$("simReset").addEventListener("click",simReset);$("simSkip").addEventListener("click",simSkip);
simRoll();
IDS.forEach(function(id){S.checks[id]=false});
load();applyLang();render(false);
})();