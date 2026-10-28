
// ---------- Config & data ----------
const GOALS={bulking:{n:"Bulking",m:2.0,c:.15},leanbulk:{n:"Lean bulk",m:1.8,c:.10},weightgain:{n:"Weight gain",m:1.6,c:.12},cutting:{n:"Cutting",m:2.2,c:-.20},weightloss:{n:"Weight loss",m:1.6,c:-.15},maintain:{n:"Maintenance",m:1.2,c:0}};
const ACT={sedentary:{n:"Sedentary (desk job)",f:1.2,pm:-.1,st:6000,w:0},light:{n:"Light (1–3 days/week)",f:1.375,pm:0,st:8000,w:250},moderate:{n:"Moderate (3–5 days/week)",f:1.55,pm:.1,st:10000,w:500},very:{n:"Very active (6–7 days/week)",f:1.725,pm:.2,st:12000,w:750}};
// name:[unit, reference amount, protein g, kcal, carbs g, fat g, fibre g] — values are per reference amount (IFCT/USDA averages)
const FOODS={
"Whole egg (boiled)":["pc",1,6.3,72,.4,4.8,0],"Egg white":["pc",1,3.6,17,.2,.1,0],
"Chapati / roti":["pc",1,3,100,18,2.5,2.5],"Cooked rice":["g",100,2.3,133,29.3,.3,.4],
"Milk (toned)":["ml",100,3.3,51,5,2.1,0],"Curd / dahi":["g",100,3.5,60,4.5,3,0],
"Paneer":["g",100,18,265,1.2,20,0],"Tofu":["g",100,8,76,2,4.8,.3],"Soya chunks (dry)":["g",100,50,333,33,1.3,13],
"Dal (cooked)":["g",100,5.3,100,13.3,2,3.3],"Rajma (cooked)":["g",100,5.3,93,16.7,.3,4.7],
"Chickpeas / chana (cooked)":["g",100,9,169,28,2.5,7.5],"Sprouts (moong)":["g",100,3,30,6,.2,2],
"Chicken breast (cooked)":["g",100,31,165,0,3.6,0],"Fish (rohu, cooked)":["g",100,17,97,0,1.4,0],
"Mixed veg curry":["g",100,2,60,6.7,2.7,2],"Paneer curry":["g",100,6,147,5.3,10.7,1.3],
"Egg curry":["g",100,8.7,153,4,11.3,.7],"Chicken curry":["g",100,14.7,167,4,9.3,.7],
"Pumpkin seeds":["g",100,30,575,10,50,5],"Chia / flax seeds":["g",100,17,483,42,33,33],
"Peanuts":["g",100,25,567,17,47,8],"Almonds":["g",100,21,583,21,50,12.5],"Peanut butter":["g",100,25,590,19,50,6],
"Banana":["pc",1,1.3,105,27,.4,3.1],"Papaya":["g",100,.5,40,10,.3,1.7],"Watermelon":["g",100,.6,31,7.7,.2,.4],
"Apple":["pc",1,.5,95,25,.3,4.4],"Cucumber":["g",100,.7,15,3.6,.1,.5],"Carrot":["g",100,1,41,10,.2,2.8],
"Beetroot":["g",100,1.7,43,10,.2,2.8],"Oats":["g",100,12.5,375,67,7.5,10],"Whey protein (1 scoop)":["pc",1,24,120,3,1.5,0],
"Chicken biryani":["g",100,8,170,20,6,1],"Veg biryani":["g",100,3.5,150,24,4.5,1.5],"Pizza slice":["pc",1,12,285,36,10,2],
"Burger":["pc",1,17,350,30,17,2],"Gulab jamun":["pc",1,2,150,22,6,0],"Ice cream":["g",100,3.5,207,24,11,.7]};
Object.assign(FOODS,{
"Idli":["pc",1,2,39,8,.2,.6],"Dosa":["pc",1,3.9,133,19,4.5,1],"Poha":["g",100,2.5,130,25,2,1.5],"Upma":["g",100,3,120,17,4.5,1.5],
"Bread slice":["pc",1,3,80,14,1,1],"Paratha":["pc",1,5,260,36,10,3],"Khichdi":["g",100,4,110,18,2.5,1.5],"Sambar":["g",100,2,50,7,1.5,1.5],"Samosa":["pc",1,4,260,24,17,2],
"Mango":["g",100,.8,60,15,.4,1.6],"Orange":["pc",1,1.2,62,15,.2,3],"Guava":["g",100,2.6,68,14,1,5.4],"Grapes":["g",100,.7,69,18,.2,.9],"Pomegranate":["g",100,1.7,83,19,1.2,4],
"Potato (boiled)":["g",100,1.9,87,20,.1,1.8],"Sweet potato":["g",100,1.6,86,20,.1,3],"Tomato":["g",100,.9,18,3.9,.2,1.2],"Spinach (palak)":["g",100,2.9,23,3.6,.4,2.2],
"Broccoli":["g",100,2.8,34,6.6,.4,2.6],"Onion":["g",100,1.1,40,9,.1,1.7],"Cauliflower":["g",100,1.9,25,5,.3,2],"Green peas":["g",100,5,81,14,.4,5.7],
"Cheese slice":["pc",1,4,70,1,5.5,0],"Butter":["g",100,.9,717,.1,81,0],"Ghee":["g",100,0,900,0,100,0],"Tea / coffee with milk":["ml",100,1,40,6,1.2,0],
"Mutton (cooked)":["g",100,25,250,0,15,0],"Prawns (cooked)":["g",100,24,99,.2,.3,0],"Walnuts":["g",100,15,654,14,65,7],"Cashews":["g",100,18,553,30,44,3.3],
"Dates":["g",100,2.5,282,75,.4,8],"Sattu":["g",100,20,413,65,6,15],"Makhana":["g",100,9.7,347,77,.1,14.5]});
const EXTRA={"egg":"Whole egg (boiled)","anda":"Whole egg (boiled)","egg whites":"Egg white","chapathi":"Chapati / roti","chapati":"Chapati / roti","roti":"Chapati / roti","phulka":"Chapati / roti","rice":"Cooked rice","white rice":"Cooked rice","chawal":"Cooked rice","milk":"Milk (toned)","doodh":"Milk (toned)","curd":"Curd / dahi","dahi":"Curd / dahi","yogurt":"Curd / dahi","yoghurt":"Curd / dahi","cottage cheese":"Paneer","soya":"Soya chunks (dry)","soy chunks":"Soya chunks (dry)","nutrela":"Soya chunks (dry)","dal":"Dal (cooked)","daal":"Dal (cooked)","lentils":"Dal (cooked)","toor dal":"Dal (cooked)","moong dal":"Dal (cooked)","kidney beans":"Rajma (cooked)","rajma":"Rajma (cooked)","chana":"Chickpeas / chana (cooked)","chickpeas":"Chickpeas / chana (cooked)","chole":"Chickpeas / chana (cooked)","sprouts":"Sprouts (moong)","chicken":"Chicken breast (cooked)","chicken breast":"Chicken breast (cooked)","grilled chicken":"Chicken breast (cooked)","fish":"Fish (rohu, cooked)","rohu":"Fish (rohu, cooked)","curry":"Mixed veg curry","sabzi":"Mixed veg curry","veg curry":"Mixed veg curry","vegetable curry":"Mixed veg curry","chia":"Chia / flax seeds","flax":"Chia / flax seeds","flax seeds":"Chia / flax seeds","seeds":"Pumpkin seeds","pumpkin seed":"Pumpkin seeds","peanut":"Peanuts","groundnut":"Peanuts","almond":"Almonds","badam":"Almonds","whey":"Whey protein (1 scoop)","protein shake":"Whey protein (1 scoop)","protein powder":"Whey protein (1 scoop)","pizza":"Pizza slice","biryani":"Chicken biryani","icecream":"Ice cream","beet":"Beetroot","bread":"Bread slice","potato":"Potato (boiled)","palak":"Spinach (palak)","spinach":"Spinach (palak)","mutton":"Mutton (cooked)","prawn":"Prawns (cooked)","shrimp":"Prawns (cooked)","tea":"Tea / coffee with milk","coffee":"Tea / coffee with milk","chai":"Tea / coffee with milk","cheese":"Cheese slice","peas":"Green peas","matar":"Green peas","walnut":"Walnuts","cashew":"Cashews","date":"Dates","khichri":"Khichdi","kela":"Banana","aam":"Mango","oat":"Oats","oatmeal":"Oats","tofu":"Tofu"};
const ALIAS={};
Object.keys(FOODS).forEach(k=>{[k,k.replace(/\(.*?\)/g,""),...k.split("/")].forEach(a=>{a=a.toLowerCase().trim();if(a)ALIAS[a]=k})});
Object.assign(ALIAS,EXTRA);
const ALKEYS=Object.keys(ALIAS).sort((a,b)=>b.length-a.length);
const CHEAT=[["Chicken biryani",250],["Veg biryani",250],["Pizza slice",2],["Burger",1],["Gulab jamun",2],["Ice cream",100]];
// easy, widely available protein sources with a typical portion
const EASY=[["Whole egg (boiled)",2],["Egg white",3],["Paneer",100],["Curd / dahi",200],["Milk (toned)",250],["Soya chunks (dry)",30],["Dal (cooked)",150],["Chicken breast (cooked)",100],["Peanuts",30],["Chickpeas / chana (cooked)",150],["Whey protein (1 scoop)",1]];
const UL={pc:"pcs",g:"g",ml:"ml"},PRE={g:[50,100,150,200,250],ml:[100,200,250,300],pc:[1,2,3,4]},DEF={pc:1,g:100,ml:200};
const SPLITS={
 ppl:{title:"Push / Pull / Legs + Upper / Lower",desc:"A five-day hybrid with a midweek rest and weekend recovery.",labels:["Sun Rest","Mon Push","Tue Pull","Wed Legs","Thu Rest","Fri Upper","Sat Lower"],days:[{d:"Sunday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest and recover. Optional easy movement and mobility."},{d:"Monday",t:"Push",i:"💪",n:"Chest, shoulders and triceps: bench press, overhead press, incline press and triceps work."},{d:"Tuesday",t:"Pull",i:"🏋️",n:"Back and biceps: rows, pull-downs, rear delts and curls."},{d:"Wednesday",t:"Legs",i:"🦵",n:"Quads, hamstrings, glutes and calves: squats, hinges, curls and calf raises."},{d:"Thursday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest, recover, and prepare for the second half of the week."},{d:"Friday",t:"Upper",i:"🔥",n:"Upper body: combine chest, back, shoulders and arms with balanced volume."},{d:"Saturday",t:"Lower",i:"⚡",n:"Lower body: quads, hamstrings, glutes and calves."}]},
 upperlower:{title:"Upper / Lower × 2",desc:"Upper and lower sessions twice weekly, with midweek rest and an adjustable weekend.",labels:["Sun Rest","Mon Upper","Tue Lower","Wed Rest","Thu Upper","Fri Lower","Sat Rest / Light"],days:[{d:"Sunday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest day. Easy movement is optional."},{d:"Monday",t:"Upper",i:"💪",n:"Chest, back, shoulders and arms. Focus on controlled compound lifts."},{d:"Tuesday",t:"Lower",i:"🦵",n:"Quads, hamstrings, glutes and calves."},{d:"Wednesday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest and recover."},{d:"Thursday",t:"Upper",i:"🔥",n:"Second upper-body session. Use variations from Monday."},{d:"Friday",t:"Lower",i:"⚡",n:"Second lower-body session. Use variations from Tuesday."},{d:"Saturday",t:"Rest / Light",i:"🚶",k:"rest",s:8000,n:"Choose rest or light activity for the weekend."}]},
 arnold:{title:"Arnold split",desc:"Chest + back, shoulders + arms, legs + abs; repeat Thursday through Saturday, Sunday off.",labels:["Sun Rest","Mon Chest+Back","Tue Shoulders+Arms","Wed Legs+Abs","Thu Chest+Back","Fri Shoulders+Arms","Sat Legs+Abs"],days:[{d:"Sunday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Full rest day. Recover for the next training week."},{d:"Monday",t:"Chest + Back",i:"💪",n:"Pair chest and back movements. Balance presses with rows and pull-downs."},{d:"Tuesday",t:"Shoulders + Arms",i:"🏋️",n:"Train delts, biceps and triceps with a mix of compound and isolation work."},{d:"Wednesday",t:"Legs + Abs",i:"🦵",n:"Train quads, hamstrings, glutes, calves and core."},{d:"Thursday",t:"Chest + Back",i:"🔥",n:"Repeat chest and back with different exercises or rep ranges."},{d:"Friday",t:"Shoulders + Arms",i:"⚡",n:"Repeat shoulders and arms with manageable volume."},{d:"Saturday",t:"Legs + Abs",i:"🦿",n:"Repeat legs and abs; adjust load to recover well."}]},
 bro:{title:"Bro split",desc:"A focused muscle group each weekday, followed by two rest days.",labels:["Sun Rest","Mon Chest","Tue Back","Wed Shoulders","Thu Legs","Fri Arms+Abs","Sat Rest"],days:[{d:"Sunday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest and recover."},{d:"Monday",t:"Chest",i:"💪",n:"Chest: presses, incline work and fly variations."},{d:"Tuesday",t:"Back",i:"🏋️",n:"Back: vertical pulls, rows and rear delts."},{d:"Wednesday",t:"Shoulders",i:"🔥",n:"Shoulders: overhead press, lateral raises and rear delts."},{d:"Thursday",t:"Legs",i:"🦵",n:"Legs: squat pattern, hinge, hamstrings and calves."},{d:"Friday",t:"Arms + Abs",i:"⚡",n:"Biceps, triceps and core work."},{d:"Saturday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest day."}]},
 spaced:{title:"Push / Rest / Pull / Rest / Legs + Abs",desc:"Three focused sessions spaced through the week, with recovery between each.",labels:["Sun Rest","Mon Push","Tue Rest","Wed Pull","Thu Rest","Fri Legs+Abs","Sat Rest"],days:[{d:"Sunday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest day."},{d:"Monday",t:"Push",i:"💪",n:"Chest, shoulders and triceps."},{d:"Tuesday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest and recover."},{d:"Wednesday",t:"Pull",i:"🏋️",n:"Back and biceps."},{d:"Thursday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest and recover."},{d:"Friday",t:"Legs + Abs",i:"🦵",n:"Quads, hamstrings, glutes, calves and abs."},{d:"Saturday",t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest day."}]}
};
const WK=[
{d:"Sunday",t:"Cheat day",i:"🍛",s:15000,k:"cheat",n:"Enjoy a cheat meal — biryani, pizza, sweets — guilt-free, but still walk 15,000 steps."},
{d:"Monday",t:"Push day",i:"💪",n:"Chest, shoulders and triceps: bench press, overhead press, incline dumbbell press, dips, triceps pushdowns."},
{d:"Tuesday",t:"Pull day",i:"🏋️",n:"Back and biceps: pull-ups, barbell rows, lat pulldown, face pulls, biceps curls."},
{d:"Wednesday",t:"Leg day",i:"🦵",n:"Squats, leg press, lunges, hamstring curls and calf raises."},
{d:"Thursday",t:"Rest day",i:"🧘",s:15000,k:"rest",n:"No gym today, but stay active: go running, play a sport or swim. Target 15,000 steps."},
{d:"Friday",t:"Upper body",i:"💥",n:"Chest, back, shoulders and arms: compound lifts followed by finishers."},
{d:"Saturday",t:"Lower body",i:"🔥",n:"Quads, hamstrings, glutes and calves: deadlifts, squats, hip thrusts, walking lunges."}];
const STEPQ=[
["Every great journey starts with a single step — take your first 1,000 now!","Lace up! Your future self is already thanking you.","A short walk now beats a long regret later."],
["Good start! Keep moving — momentum is your best friend.","One foot after another — you are building a habit that lasts."],
["Halfway there! Don’t stop when it gets boring.","You’re past the midpoint — the hardest part is behind you."],
["Almost there — finish strong, you’re so close!","Just a few more laps. Don’t leave steps on the table."],
["Step goal smashed! 🚶 Champions keep walking.","Target complete — your legs did the talking today!"]];
const DONEQ=["Champions are built in the kitchen — and today you cooked up a win. 🏆","Small daily wins become big results. You nailed your protein goal!","Discipline beats motivation, and today you showed up. 💪","Every gram counts, and today you counted them all.","Your muscles will thank you tonight. Rest well, rise stronger. 🌙","Consistency is quiet, powerful and beautiful — just like you today."];
const BOTHQ="Protein done, steps done — a perfect day. Consistency is your superpower. 🌟";
const OKMAIL=/^[a-z0-9._%+-]+@(gmail\.com|([a-z0-9-]+\.)+(ac\.in|edu\.in|edu|ac\.[a-z]{2}|edu\.[a-z]{2}))$/;

// ---------- Storage (try/catch: can be empty) ----------
const mem={};
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return mem[k]||null}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){mem[k]=v}};
let S={user:null,profile:null,logs:{},date:today(),tab:"today",edit:null,err:"",editP:false,draft:null,split:null,draftSplit:null,weekendActivity:"rest",customSplit:null};
function today(){return new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10)}
function load(email){let d=null;try{d=JSON.parse(lsGet("pt:"+email))}catch(e){}S.profile=d&&d.profile||null;S.logs=d&&d.logs||{};S.split=d&&d.split||null;S.weekendActivity=d&&d.weekendActivity||"rest";S.customSplit=d&&d.customSplit||null}
function save(){lsSet("pt:"+S.user,JSON.stringify({profile:S.profile,logs:S.logs,split:S.split,weekendActivity:S.weekendActivity,customSplit:S.customSplit}))}
const $=id=>document.getElementById(id);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const r1=n=>Math.round(n*10)/10;
const pickQ=(a,d)=>a[parseInt(d.replace(/-/g,""))%a.length];

// ---------- Calculations ----------
function calc(p){
  const g=GOALS[p.goal],a=ACT[p.act];
  const mult=Math.min(2.5,Math.max(1,r1(g.m+a.pm)));
  const auto=Math.round(p.weight*mult),protein=p.manual||auto;
  const bmr=10*p.weight+6.25*p.height-5*p.age+(p.sex==="male"?5:-161);
  const cal=Math.round(bmr*a.f*(1+g.c));
  const fat=Math.round(cal*.25/9);
  const carbs=Math.max(0,Math.round((cal-protein*4-fat*9)/4));
  return{mult,auto,protein,cal,fat,carbs,fibre:Math.round(cal/1000*14),steps:a.st,water:Math.round((p.weight*35+a.w)/50)*50,bmr:Math.round(bmr)};
}
const wk=d=>{const i=new Date(d+"T00:00:00Z").getUTCDay();if(!S.split)return WK[i];const w=S.split==="custom"?(S.customSplit&&S.customSplit.days[i]||{d:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][i],t:"Rest",i:"🌙",k:"rest",s:15000,n:"Rest day."}):SPLITS[S.split].days[i];if(S.split==="upperlower"&&i===6&&S.weekendActivity==="light")return{...w,t:"Light activity",i:"🚶",k:"rest",s:8000,n:"Optional light activity: take an easy walk, stretch, or enjoy a relaxed bike ride. Keep the effort comfortable."};return w};
const stepGoal=(c,d)=>wk(d).s||c.steps;
const mu=e=>e.ref?e.qty/e.ref:e.qty;
function day(d){return S.logs[d]||(S.logs[d]={entries:[],steps:0,water:0})}
function tot(d){const l=S.logs[d]||{entries:[],steps:0},t={p:0,k:0,c:0,f:0,fb:0,steps:l.steps||0,water:l.water||0};
  l.entries.forEach(e=>{const m=mu(e);t.p+=e.p*m;t.k+=e.k*m;t.c+=e.c*m;t.f+=e.f*m;t.fb+=e.fb*m});
  for(const k of["p","k","c","f","fb"])t[k]=r1(t[k]);return t}
function shift(d,n){const x=new Date(d+"T00:00:00Z");x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)}
function streak(T){let n=0,d=today();if(!(tot(d).p>=T))d=shift(d,-1);while(tot(d).p>=T&&T>0){n++;d=shift(d,-1)}return n}

// ---------- Views ----------
function render(){
  const el=$("app");
  if(!S.user)return el.innerHTML=authV();
  if(!S.profile||!S.profile.name||S.editP)return el.innerHTML=profileV();
  if(!S.split)return el.innerHTML=splitV();
  el.innerHTML=appV();
  if(S.tab==="history")drawChart();else initForm();
}
function authV(){return `<div class="card onboard"><div class="steps"><b class="on"></b><b></b><b></b></div><div class="poster"><div><div class="stamp">REP FUEL · ATHLETE EDITION</div><h2>BUILT IN THE GYM.<br>FUELED EVERY DAY.</h2><p>Train hard · Track smarter</p></div><svg viewBox="0 0 160 170" aria-label="Bodybuilder poster illustration" role="img"><defs><linearGradient id="muscle" x1="0" x2="1"><stop stop-color="#ffd8c9"/><stop offset="1" stop-color="#d76774"/></linearGradient></defs><circle cx="83" cy="23" r="16" fill="#f2c8bb"/><path d="M66 44 Q46 42 38 58 L21 71 Q9 80 18 90 Q27 97 38 84 L53 74 L56 108 L43 152 Q41 164 53 165 Q62 165 66 153 L79 120 L91 154 Q96 166 107 162 Q117 159 111 147 L101 107 L107 75 L122 88 Q134 100 143 90 Q150 81 140 72 L123 57 Q113 47 98 45 L88 54 L74 54Z" fill="url(#muscle)"/><path d="M55 59 Q75 71 101 58 M57 78 Q79 89 104 77 M78 58 L78 102 M62 105 L78 121 L96 104" fill="none" stroke="#622536" stroke-width="4" stroke-linecap="round"/><path d="M12 70V54M5 54H20M5 69H20M145 70V54M138 54H153M138 69H153" stroke="#fff1e8" stroke-width="4" stroke-linecap="round"/></svg></div><h1>Protein Tracker</h1><p class="mu">Step 1 of 3 · Sign in with your Gmail or college email.</p>
<label>Gmail or college email</label><input id="em" type="email" placeholder="name@gmail.com or name@iiti.ac.in" autocomplete="email" onkeydown="if(event.key==='Enter')signIn()">
<div class="err" id="er">${S.err}</div><button class="p" style="width:100%" onclick="signIn()">Continue</button>
<p class="note">Accepted: @gmail.com and college addresses ending in .ac.in, .edu.in, .edu or similar. Demo sign-in: your data is saved per email on this device and the mailbox is not verified. Your profile is saved once and loaded automatically next time.</p></div>`}
function signIn(){const e=$("em").value.trim().toLowerCase();
  if(!OKMAIL.test(e)){S.err="Enter a valid Gmail or college email (e.g. name@iiti.ac.in).";return render()}
  S.err="";S.user=e;lsSet("pt:last",e);load(e);render()}
function profileV(){const p=S.draft||S.profile||{};
 const o=(O,v)=>Object.entries(O).map(([k,x])=>`<option value="${k}" ${v===k?"selected":""}>${x.n}</option>`).join("");
 return `<div class="card onboard formcard"><div class="steps"><b class="on"></b><b class="on"></b><b></b></div><div class="label">STEP 2 / YOUR STARTING POINT</div>
<h1>Your profile</h1><p class="mu">Step 2 of 3 · Fill this once. It is saved automatically and you won’t be asked again.</p>
<label>Your name</label><input id="nm" type="text" maxlength="60" placeholder="What should we call you?" value="${esc(p.name||"")}">
<div class="row"><div><label>Sex</label><select id="sx"><option value="male" ${p.sex==="male"?"selected":""}>Male</option><option value="female" ${p.sex==="female"?"selected":""}>Female</option></select></div>
<div><label>Age (years)</label><input id="ag" type="number" min="12" max="90" value="${p.age||""}"></div></div>
<div class="row"><div><label>Body weight (kg)</label><input id="wt" type="number" min="30" max="250" step="0.1" value="${p.weight||""}"></div>
<div><label>Height (cm)</label><input id="ht" type="number" min="120" max="230" value="${p.height||""}"></div></div>
<label>Goal</label><select id="gl">${o(GOALS,p.goal||"leanbulk")}</select>
<label>Activity level</label><select id="ac">${o(ACT,p.act||"moderate")}</select>
<label>Set protein target manually (g/day, optional)</label><input id="mn" type="number" min="20" max="400" placeholder="Leave empty to auto-calculate" value="${p.manual||""}">
<div class="err" id="er">${S.err}</div><button class="p" style="width:100%" onclick="saveProfile()">${S.editP?"Save profile":"Continue to workout plan"}</button>
${S.editP&&S.profile?`<button style="width:100%;margin-top:8px" onclick="S.editP=false;S.draft=null;S.err='';render()">Cancel</button>`:""}<button style="width:100%;margin-top:8px" onclick="logout()">Sign out</button></div>`}
function saveProfile(){
  const v=id=>$(id).value,n=id=>parseFloat(v(id));
  const p={name:v("nm").trim(),sex:v("sx"),age:n("ag"),weight:n("wt"),height:n("ht"),goal:v("gl"),act:v("ac"),manual:v("mn")?Math.round(n("mn")):0};
  const bad=!p.name?"Enter your name.":!(p.age>=12&&p.age<=90)?"Age must be 12–90.":!(p.weight>=30&&p.weight<=250)?"Weight must be 30–250 kg.":!(p.height>=120&&p.height<=230)?"Height must be 120–230 cm.":(p.manual&&(p.manual<20||p.manual>400))?"Manual target must be 20–400 g.":"";
  if(bad){S.err=bad;S.draft=p;return render()}
  S.err="";S.draft=null;S.editP=false;S.profile=p;save();render()}
function selectSplit(el){S.draftSplit=el.dataset.split;render()}
function saveSplit(){const s=$("splitChoice").value;if(s==="custom"){const title=$("customTitle").value.trim()||"My Custom Split",names=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];const days=names.map((d,i)=>{const t=($("customDay"+i).value.trim()||"Rest"),rest=/^(rest|off|recovery)$/i.test(t);return{d,t:rest?"Rest":t,i:rest?"🌙":"🏋️",k:rest?"rest":undefined,s:rest?15000:undefined,n:rest?"Rest and recover.":"Your custom training day: "+t+"."}});S.customSplit={title,days};S.split="custom"}else{if(!SPLITS[s])return;S.split=s;S.weekendActivity=$("weekendChoice")?$("weekendChoice").value:"rest"}S.draftSplit=null;save();render()}
function splitV(){const selected=S.draftSplit||S.split||"ppl";let cards=Object.entries(SPLITS).map(([id,p])=>'<button type="button" data-split="'+id+'" class="planCard '+(selected===id?"sel":"")+'" onclick="selectSplit(this)"><strong>'+p.title+'</strong><small>'+p.desc+'</small><div class="planDays">'+p.labels.join(" · ")+'</div></button>').join("");cards+='<button type="button" data-split="custom" class="planCard '+(selected==="custom"?"sel":"")+'" onclick="selectSplit(this)"><strong>＋ My own split</strong><small>Add your weekly workout days and rest days to keep your personal routine.</small><div class="planDays">'+(S.customSplit?S.customSplit.days.map(x=>x.t).join(" · "):"Set up your own week")+'</div></button>';const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];let editor="";if(selected==="custom"){editor='<label>Name your split</label><input id="customTitle" maxlength="36" value="'+esc(S.customSplit&&S.customSplit.title||"My Custom Split")+'"><div class="planGrid">'+days.map((d,i)=>'<div><label>'+d+'</label><input id="customDay'+i+'" maxlength="32" placeholder="Workout name or Rest" value="'+esc(S.customSplit&&S.customSplit.days[i]?S.customSplit.days[i].t:"")+'"></div>').join("")+'</div><p class="mu sm">Enter a workout for training days; use “Rest” or leave a day blank to make it a rest day.</p>'}const sat=selected==="upperlower"?'<label>Saturday option</label><select id="weekendChoice"><option value="rest" '+(S.weekendActivity==="rest"?"selected":"")+'>Rest day</option><option value="light" '+(S.weekendActivity==="light"?"selected":"")+'>Light activity</option></select>':"";return '<div class="card onboard"><div class="steps"><b class="on"></b><b class="on"></b><b class="on"></b></div><div class="label">STEP 3 / BUILD YOUR ROUTINE</div><h1>Choose your training split</h1><p class="mu">Pick a weekly structure or add your own. Your workout schedule will appear on the dashboard.</p><div class="planGrid">'+cards+'</div><input id="splitChoice" type="hidden" value="'+selected+'">'+sat+editor+'<button class="p" style="width:100%;margin-top:8px" onclick="saveSplit()">Save routine &amp; open dashboard</button></div>'}
function mini(l,v,t,u){const pc=t?Math.min(100,v/t*100):0;return `<div class="mini"><div class="mu sm">${l}</div><b>${v}</b> <span class="mu">/ ${t} ${u}</span><div class="bar"><i style="width:${pc}%"></i></div></div>`}
function appV(){
  const p=S.profile,c=calc(p),t=tot(S.date),name=p.name||"Athlete";
  return `<div class="top"><div><h1>REP<span style="color:var(--ac)">✳</span>FUEL</h1><div class="mu sm">Hi ${esc(name)} 👋 · ${S.split==="custom"?(S.customSplit&&S.customSplit.title||"My Custom Split"):SPLITS[S.split].title}</div></div><div class="tabs">
<button class="${S.tab==="today"?"on":""}" onclick="S.tab='today';render()">Today</button>
<button class="${S.tab==="history"?"on":""}" onclick="S.tab='history';render()">Weekly history</button>
<button onclick="S.draftSplit=S.split;S.split=null;render()">Training split</button><button onclick="toggleTheme()">🌓</button><button onclick="S.editP=true;render()">Profile</button></div></div>
<div class="fm">${p.weight} kg × ${c.mult} g/kg (${GOALS[p.goal].n}, ${ACT[p.act].n.split(" (")[0]}) = ${c.auto} g protein/day${p.manual?` · manual target in use: ${p.manual} g`:""}</div>
${S.tab==="today"?todayV(c,t):historyV(c)}
`}
function workoutV(){
  const w=wk(S.date),idx=[1,2,3,4,5,6,0],cur=new Date(S.date+"T00:00:00Z").getUTCDay();
  const days=S.split==="custom"?S.customSplit.days:SPLITS[S.split].days;const strip=idx.map(i=>`<div class="${i===cur?"on":""}">${days[i].i}<br><b>${esc(days[i].d.slice(0,3))}</b><br>${esc(days[i].t)}</div>`).join("");
  let x="";
  if(w.k==="rest")x=`<div class="chips"><span class="fm" style="margin:0">🏃 Easy walk / run</span><span class="fm" style="margin:0">🧘 Mobility</span><span class="fm" style="margin:0">🏊 Optional swim</span></div>`;
  if(w.k==="cheat")x=`<div class="mu sm">Tap a cheat food to log it:</div><div class="chips">${CHEAT.map(([k],i)=>`<button class="s" onclick="addCheat(${i})">+ ${k}</button>`).join("")}</div>`;
  return `<div class="card"><div class="row" style="align-items:end"><div><label>Date</label><input type="date" value="${S.date}" max="${today()}" onchange="S.date=this.value||today();S.edit=null;render()"></div></div>
<div class="wk">${strip}</div><h2>${w.i} ${esc(w.d)} · ${esc(w.t)}</h2><div>${esc(w.n)}</div>${x}</div>`}
function sugV(rem){
  const tg=Math.min(rem,25);
  const L=EASY.map(([k,q],i)=>{const f=FOODS[k];return{k,q,i,u:f[0],pr:f[2]*q/f[1]}}).sort((a,b)=>Math.abs(a.pr-tg)-Math.abs(b.pr-tg)).slice(0,4);
  return `<h2>💡 Easy foods to finish your ${rem} g</h2>`+L.map(x=>`<div class="ent"><div><b>${esc(x.k)}</b><div class="mu sm">${x.q} ${UL[x.u]} → ${r1(x.pr)} g protein</div></div><button class="s" onclick="addEasy(${x.i})">+ Add</button></div>`).join("")}
function todayV(c,t){
  const w=wk(S.date),sg=stepGoal(c,S.date),pc=Math.min(100,t.p/c.protein*100),rem=Math.max(0,r1(c.protein-t.p));
  const sp=Math.min(100,t.steps/sg*100),sl=Math.max(0,sg-t.steps),done=t.p>=c.protein;
  const sq=pickQ(STEPQ[sp>=100?4:sp>=75?3:sp>=50?2:sp>=25?1:0],S.date);
  const L=day(S.date),opts=Object.keys(FOODS).map(k=>`<option>${esc(k)}</option>`).join("");
  const side=done?`<h2>🏆 Daily protein goal complete!</h2><p class="quote">${t.steps>=sg?BOTHQ:pickQ(DONEQ,S.date)}</p>`:sugV(rem);
  return `<div class="bento">${workoutV()}
<div class="card"><div class="split"><div><div class="mu sm">Protein</div><div class="big">${t.p} <span class="mu" style="font-size:16px;font-weight:400">/ ${c.protein} g</span></div>
<div class="bar" style="margin:8px 0"><i style="width:${pc}%;${done?"":"background:var(--wa)"}"></i></div><div class="mu">${done?"🎉 Target reached!":`${rem} g remaining`} · ${Math.round(pc)}% done</div></div>
<div class="side">${side}</div></div></div>
<div class="card"><div class="split"><div><div class="mu sm">Footsteps${w.s?` · ${w.t} target`:""}</div><div class="big">${t.steps} <span class="mu" style="font-size:16px;font-weight:400">/ ${sg}</span></div>
<div class="bar" style="margin:8px 0"><i style="width:${sp}%;${sp>=100?"":"background:var(--wa)"}"></i></div><div class="mu">${sl?`${sl} steps to go`:"✅ Step goal reached!"}</div>
<label>Steps walked</label><input type="number" min="0" max="100000" value="${t.steps||""}" onchange="setSteps(this.value)"></div>
<div class="side"><h2>🚶 Keep walking</h2><p class="quote">${sq}</p></div></div></div>
${waterV(c,t)}
<div class="grid" style="margin-bottom:14px">${mini("Calories",Math.round(t.k),c.cal,"kcal")}${mini("Carbs",t.c,c.carbs,"g")}${mini("Fats",t.f,c.fat,"g")}${mini("Fibre",t.fb,c.fibre,"g")}</div></div>
<div class="card"><h2>${S.edit?"Edit entry":"Add food"}</h2>
<label>Quick pick (nutrition fills in automatically)</label><select id="fs" onchange="pick(this.value)"><option value="">— Custom food —</option>${opts}</select>
<div class="row"><div><label>Food name — type e.g. “rice”, “2 eggs”, “banana”</label><input id="fn" oninput="autoFill()" autocomplete="off"></div><div><label id="ql">Quantity (g)</label><input id="fq" type="number" step="any" min="0.1" max="5000" oninput="qIn()"></div></div>
<div class="mu sm" id="am">Type a food name and quantity — nutrition fills in automatically.</div><div class="chips" id="pr"></div><label id="nl">Nutrition per 100 g</label>
<div class="row"><div><label>Protein g</label><input id="fp" type="number" step="0.1" min="0" max="200" oninput="prev()"></div>
<div><label>kcal</label><input id="fk" type="number" min="0" max="1000" oninput="prev()"></div>
<div><label>Carbs g</label><input id="fc" type="number" step="0.1" min="0" max="300" oninput="prev()"></div>
<div><label>Fat g</label><input id="ff" type="number" step="0.1" min="0" max="200" oninput="prev()"></div>
<div><label>Fibre g</label><input id="fb" type="number" step="0.1" min="0" max="100" oninput="prev()"></div></div>
<input type="hidden" id="fu"><input type="hidden" id="fr"><div class="fm" id="pv"></div>
<div class="err" id="er">${S.err}</div><button class="p" onclick="saveFood()">${S.edit?"Update":"Add"}</button> ${S.edit?`<button onclick="S.edit=null;S.err='';render()">Cancel</button>`:""}</div>
<div class="card"><h2>Food log</h2>${L.entries.length?L.entries.map(x=>{const m=mu(x);return `<div class="ent"><div><b>${esc(x.name)}</b> · ${x.qty} ${x.ref?UL[x.unit]||x.unit:"×"}<div class="mu sm">${r1(x.p*m)} g protein · ${Math.round(x.k*m)} kcal · ${r1(x.c*m)} g carbs · ${r1(x.f*m)} g fat</div></div><div><button class="s" onclick="S.edit=${x.id};render();scrollTo(0,500)">Edit</button> <button class="s" onclick="delFood(${x.id})">Delete</button></div></div>`}).join(""):`<p class="mu">Nothing logged yet. Add your first food above.</p>`}</div>`}
function setUnit(u,r){$("fu").value=u;$("fr").value=r;$("ql").textContent=`Quantity (${UL[u]||u})`;$("nl").textContent=`Nutrition per ${r} ${UL[u]||u}`;
  $("pr").innerHTML=(PRE[u]||[]).map(v=>`<button class="s" onclick="setQ(${v})">${v} ${UL[u]}</button>`).join("")}
function setQ(v){$("fq").value=v;prev()}
function prev(){const q=parseFloat($("fq").value),r=parseFloat($("fr").value)||1,u=UL[$("fu").value]||$("fu").value,v=id=>(parseFloat($(id).value)||0)*q/r;
  $("pv").innerHTML=q>0?`<b>${q} ${u}</b> → 🥩 ${r1(v("fp"))} g protein · 🔥 ${Math.round(v("fk"))} kcal · 🍚 ${r1(v("fc"))} g carbs · 🧈 ${r1(v("ff"))} g fat · 🌾 ${r1(v("fb"))} g fibre`:"Enter a quantity to see the totals."}
function initForm(){FA=null;S.qt=false;const x=S.edit&&day(S.date).entries.find(e=>e.id===S.edit);
  if(x){setUnit(x.unit,x.ref||1);$("fn").value=x.name;$("fq").value=x.qty;["fp","fk","fc","ff","fb"].forEach((id,i)=>$(id).value=[x.p,x.k,x.c,x.f,x.fb][i])}
  else{setUnit("g",100);$("fq").value=100}prev()}
function pick(k){if(!k){FA=null;$("am").textContent="";return setUnit("g",100)}FA=k;$("am").textContent="✅ Matched “"+k+"”";const f=FOODS[k];setUnit(f[0],f[1]);$("fn").value=k;$("fq").value=DEF[f[0]];["fp","fk","fc","ff","fb"].forEach((id,i)=>$(id).value=f[i+2]);prev()}
function newId(){return Date.now()*1000+Math.floor(Math.random()*1000)}
function addFood(nm,q){const f=FOODS[nm];day(S.date).entries.push({id:newId(),name:nm,qty:q,unit:f[0],ref:f[1],p:f[2],k:f[3],c:f[4],f:f[5],fb:f[6]});save();render()}
function addEasy(i){addFood(EASY[i][0],EASY[i][1])}
function addCheat(i){addFood(CHEAT[i][0],CHEAT[i][1])}
function saveFood(){
  const g=id=>parseFloat($(id).value),name=cleanName($("fn").value),qty=g("fq");
  const v={p:g("fp"),k:g("fk")||0,c:g("fc")||0,f:g("ff")||0,fb:g("fb")||0};
  const bad=!name?"Enter a food name.":!(qty>0&&qty<=5000)?"Quantity must be between 0.1 and 5000.":!(v.p>=0&&v.p<=200)?"Enter protein (0–200 g).":Object.values(v).some(x=>x<0)?"Values can’t be negative.":"";
  if(bad){S.err=bad;return render()}
  S.err="";const L=day(S.date),o={name,qty,unit:$("fu").value||"g",ref:parseFloat($("fr").value)||100,...v};
  if(S.edit){Object.assign(L.entries.find(x=>x.id===S.edit),o);S.edit=null}else L.entries.push({id:newId(),...o});
  save();render()}
function delFood(id){const L=day(S.date);L.entries=L.entries.filter(x=>x.id!==id);save();render()}
function setSteps(v){const n=Math.max(0,Math.min(100000,parseInt(v)||0));day(S.date).steps=n;save();render()}
function week(){return[6,5,4,3,2,1,0].map(i=>shift(S.date,-i))}
function historyV(c){
  const w=week(),rows=w.map(d=>[d,tot(d)]),hit=rows.filter(r=>r[1].p>=c.protein).length,avg=r1(rows.reduce((a,r)=>a+r[1].p,0)/7);
  return `<div class="card"><h2>Protein — last 7 days</h2><div class="ov"><svg id="ch" viewBox="0 0 640 220" style="width:100%;min-width:480px"></svg></div>
<p class="mu">Weekly average <b>${avg} g</b> · target <b>${c.protein} g</b> · goal met <b>${hit}/7</b> days · 🔥 streak <b>${streak(c.protein)}</b> day(s)</p>
<button onclick="exportCSV()">Export all history (CSV)</button></div>
<div class="card"><h2>Weekly log</h2><div class="ov"><table><tr><th>Date</th><th>Workout</th><th>Protein (g)</th><th>Target</th><th>kcal</th><th>Carbs</th><th>Fat</th><th>Fibre</th><th>Steps</th><th>Step goal</th><th>Water (L)</th><th></th></tr>
${rows.map(([d,t])=>`<tr><td><a href="#" onclick="S.date='${d}';S.tab='today';render();return false" style="color:var(--ac)">${d}</a></td><td>${wk(d).i} ${wk(d).t}</td><td><b>${t.p}</b></td><td>${c.protein}</td><td>${Math.round(t.k)}</td><td>${t.c}</td><td>${t.f}</td><td>${t.fb}</td><td>${t.steps}</td><td>${stepGoal(c,d)}</td><td>${r1(t.water/1000)} / ${r1(c.water/1000)}</td><td class="${t.p>=c.protein?"ok":"no"}">${t.p>=c.protein?"✓ met":t.p?"✗":"–"}</td></tr>`).join("")}</table></div></div>`}
function drawChart(){
  const svg=$("ch");if(!svg)return;const c=calc(S.profile),w=week(),vals=w.map(d=>tot(d).p),mx=Math.max(c.protein*1.2,...vals,10),H=170,bw=56;
  const y=v=>20+H-v/mx*H;let s="";
  w.forEach((d,i)=>{const x=30+i*88,h=vals[i]/mx*H,ok=vals[i]>=c.protein;
    s+=`<rect x="${x}" y="${y(vals[i])}" width="${bw}" height="${h}" rx="6" fill="${ok?"var(--ac)":"var(--wa)"}"/><text x="${x+bw/2}" y="${y(vals[i])-5}" text-anchor="middle" font-size="12" fill="var(--tx)">${vals[i]}</text><text x="${x+bw/2}" y="208" text-anchor="middle" font-size="11" fill="var(--mu)">${d.slice(5)}</text>`});
  s+=`<line x1="20" x2="630" y1="${y(c.protein)}" y2="${y(c.protein)}" stroke="var(--rd)" stroke-dasharray="5 4"/><text x="628" y="${y(c.protein)-4}" text-anchor="end" font-size="11" fill="var(--rd)">target ${c.protein} g</text>`;
  svg.innerHTML=s}
function exportCSV(){
  const c=calc(S.profile);let o="date,workout,protein_g,target_g,kcal,carbs_g,fat_g,fibre_g,steps,step_goal,water_ml,water_goal_ml,goal_met\n";
  Object.keys(S.logs).sort().forEach(d=>{const t=tot(d);o+=[d,wk(d).t,t.p,c.protein,Math.round(t.k),t.c,t.f,t.fb,t.steps,stepGoal(c,d),t.water,c.water,t.p>=c.protein?"yes":"no"].join(",")+"\n"});
  const a=document.createElement("a");a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(o);a.download="protein-history.csv";a.click()}
function toggleTheme(){const r=document.documentElement,d=r.dataset.theme==="dark"||(!r.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);r.dataset.theme=d?"light":"dark";lsSet("pt:theme",r.dataset.theme)}
function logout(){S={user:null,profile:null,logs:{},date:today(),tab:"today",edit:null,err:"",editP:false,draft:null,split:null,draftSplit:null,weekendActivity:"rest",customSplit:null};lsSet("pt:last","");render()}
let FA=null;
const WATERQ=[["A glass now keeps the fatigue away — start sipping! 💧","Your muscles are mostly water — feed them."],["Nice, keep sipping — you’re on your way.","Hydration fuels every rep. Keep going!"],["Past halfway — your body is thanking you.","Steady sips, steady gains."],["Almost there — one or two more glasses!","Finish strong: your recovery depends on it."],["Hydration goal done! A hydrated body is a high-performing body. 💧🏆","Fully hydrated — sharp mind, strong body."]];
function waterV(c,t){const g=c.water,w=t.water,pc=Math.min(100,w/g*100),left=Math.max(0,g-w),q=pickQ(WATERQ[pc>=100?4:pc>=75?3:pc>=50?2:pc>=25?1:0],S.date);
 return `<div class="card"><div class="split"><div><div class="mu sm">💧 Water intake</div><div class="big">${r1(w/1000)} <span class="mu" style="font-size:16px;font-weight:400">/ ${r1(g/1000)} L</span></div><div class="bar" style="margin:8px 0"><i style="width:${pc}%;background:#2f8fd8"></i></div><div class="mu">${left?`${left} ml to go (about ${Math.ceil(left/250)} glasses)`:"✅ Hydration goal reached!"}</div></div>
<div class="side"><h2>Add water</h2><div class="chips">${[250,500,750,1000].map(n=>`<button class="s" onclick="addWater(${n})">+ ${n} ml</button>`).join("")}<button class="s" onclick="addWater(-250)">Undo −250</button></div><p class="quote">${q}</p></div></div></div>`}
function addWater(n){const L=day(S.date);L.water=Math.max(0,Math.min(10000,(L.water||0)+n));save();render()}
const QRE=/(\d+(?:\.\d+)?)\s*(kg|gms?|grams?|g|ml|l|pcs|pc|pieces?|nos)?\b/i;
function cleanName(t){return t.replace(new RegExp(QRE.source,"gi")," ").replace(/\s+/g," ").trim()||t.trim()}
function parseQ(t,u){const m=t.match(QRE);if(!m)return null;let n=parseFloat(m[1]),x=(m[2]||"").toLowerCase();
  if(x==="kg"){n*=1000;x="g"}else if(x==="l"){n*=1000;x="ml"}else if(/^(gms?|grams?)$/.test(x))x="g";else if(/^(pcs|pc|pieces?|nos)$/.test(x))x="pc";
  if(!x)return u==="pc"?n:null;return x===u?n:null}
function findFood(t){
  t=t.toLowerCase().replace(new RegExp(QRE.source,"gi")," ").replace(/\b(of|a|an|the|some|my|boiled|cooked|fried|raw|fresh)\b/g," ").replace(/[^a-z ]/g," ").replace(/\s+/g," ").trim();
  if(!t)return null;const sg=t.replace(/s$/,"");
  if(ALIAS[t])return ALIAS[t];if(ALIAS[sg])return ALIAS[sg];
  const pad=" "+t+" ",pg=" "+t.split(" ").map(w=>w.replace(/s$/,"")).join(" ")+" ";
  const a=ALKEYS.find(a=>pad.includes(" "+a+" ")||pg.includes(" "+a+" "));if(a)return ALIAS[a];
  if(t.length>=3){const k=Object.keys(FOODS).find(k=>k.toLowerCase().includes(t));if(k)return k}
  return null}
function autoFill(){
  const t=$("fn").value,am=$("am"),k=findFood(t);
  if(!t.trim()){FA=null;am.textContent="Type a food name and quantity — nutrition fills in automatically.";return prev()}
  if(!k){FA=null;$("fs").value="";am.textContent=`⚠️ “${cleanName(t)}” isn’t in the built-in food list — enter its nutrition per ${$("fr").value} ${UL[$("fu").value]||""} below.`;return prev()}
  const f=FOODS[k];
  if(FA!==k){FA=k;setUnit(f[0],f[1]);["fp","fk","fc","ff","fb"].forEach((id,i)=>$(id).value=f[i+2]);$("fs").value=k;if(!S.qt)$("fq").value=DEF[f[0]]}
  const q=parseQ(t,f[0]);if(q){$("fq").value=q;S.qt=true}
  am.textContent=`✅ Matched “${k}” — nutrition filled per ${f[1]} ${UL[f[0]]}. Change the quantity and totals update.`;prev()}
function qIn(){S.qt=true;prev()}
document.addEventListener("pointermove",e=>{if(e.pointerType==="touch")return;const card=e.target.closest(".card,.mini,.planCard,.poster");if(!card)return;const r=card.getBoundingClientRect();card.style.setProperty("--mx",(e.clientX-r.left)+"px");card.style.setProperty("--my",(e.clientY-r.top)+"px")},{passive:true});
(function(){const t=lsGet("pt:theme");if(t)document.documentElement.dataset.theme=t;const u=lsGet("pt:last");if(u){S.user=u;load(u)}render()})();
