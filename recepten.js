// ===== RECEPTEN VAN FEMKE =====
// Nieuw recept? Kopieer een blok { ... } en pas het aan.
// id: uniek woord zonder spaties | emoji: icoon | color: achtergrondkleur
// tag: korte info (tijd) | desc: korte omschrijving
// ing: ingrediënten | steps: bereidingsstappen
window.RECEPTEN = [
  {
    id:"gyoza", name:"Gyoza ovenschotel", emoji:"🥟", color:"#f7ddd0",
    tag:"Oven · ±35 min", desc:"Udon, kip-gyoza en groenten in een romige rode-currysaus.",
    ing:["2 udon noodles","1 pak gyoza kip","1 paksoi","1 paprika","400 ml kokosmelk","Rode currypasta","3 el sojasaus","1 el rijstazijn","1 el pindakaas","1 el honing","Knoflook(poeder)","Bosui (topping)","Sesamzaadjes (topping)"],
    steps:["Verwarm de oven voor op 200 °C.","Roer in een ovenschaal de kokosmelk, rode currypasta, sojasaus, rijstazijn, pindakaas, honing en knoflook door elkaar.","Snijd de paprika in reepjes en de paksoi in stukken. Schep ze samen met de losgemaakte udon door de saus.","Leg de gyoza er bovenop en druk ze een klein beetje aan.","Bak ±25 minuten in de oven tot de gyoza goudbruin zijn.","Bestrooi met bosui en sesamzaadjes."]
  },
  {
    id:"pesto", name:"Rijst met rode pesto", emoji:"🍚", color:"#f9e6c9",
    tag:"Pan · ±30 min", desc:"Kip, paprika en broccoli met rijst in bouillon en rode pesto.",
    ing:["2 paprika's","Kipfilet","Knoflookpoeder, paprikapoeder, peper (voor de kip)","2 tl tomatenpuree","Broccoli","Rijst","Kippenbouillon (blokje)","Rode pesto","Italiaanse kruiden","Geraspte kaas"],
    steps:["Kook de rijst in kippenbouillon.","Snijd de kip in blokjes en kruid met knoflook, paprikapoeder en peper.","Bak de kip goudbruin in een grote pan.","Voeg de paprika in stukjes en de broccoliroosjes toe en bak 5–6 minuten mee.","Roer de tomatenpuree erdoor en bak 1 minuut mee.","Schep de rijst, rode pesto en Italiaanse kruiden erdoor.","Strooi de geraspte kaas erover en laat smelten (of zet het 10 min in een oven van 200 °C)."]
  },
  {
    id:"stoof", name:"Stoofvlees", emoji:"🍲", color:"#e8d9cc",
    tag:"Stoven · ±3 uur", desc:"Rundvlees in donker bier met ontbijtkoek en mosterd.",
    ing:["600 g rundvlees (grove stukken)","2 laurierblaadjes","3 kruidnagels","Bosje tijm","1,5 grote ontbijtkoek","Grove mosterd","Wortel","Ui","Knoflook","Roomboter","300 ml runderbouillon","2 tl tomatenpuree","180 ml donker bier"],
    steps:["Dep het vlees droog en bestrooi met peper en zout.","Bruin het vlees in porties in flink wat roomboter in een braadpan. Haal het eruit.","Fruit de gesneden ui, knoflook en wortel in dezelfde pan.","Roer de tomatenpuree erdoor en bak 1 minuut mee.","Blus af met het donkere bier en schraap de aanbaksels los.","Doe het vlees terug en voeg de bouillon, laurier, kruidnagels en tijm toe.","Besmeer de plakken ontbijtkoek met grove mosterd en leg ze op het vlees.","Laat met deksel op heel zacht vuur 2,5–3 uur stoven. Roer af en toe, tot het vlees uit elkaar valt.","Vis de laurier, kruidnagels en tijmtakjes eruit en proef op smaak."]
  },
  {
    id:"zalm", name:"Zalm teriyaki", emoji:"🍣", color:"#dde6f0",
    tag:"Pan/oven · ±25 min", desc:"Zalm in zoete teriyakisaus met rijst, avocado, komkommer en edamame.",
    ing:["4 el ketjap manis","2 el sojasaus","1 el donkerbruine basterdsuiker","1 el sesamolie","Knoflook","150 g rijst","Zalm","Avocado","Komkommer","Edamameboontjes","Sesamzaadjes"],
    steps:["Kook de rijst volgens de verpakking.","Maak de teriyakisaus: roer ketjap manis, sojasaus, basterdsuiker, sesamolie en geperste knoflook door elkaar.","Bak de zalm 3–4 minuten op de huidkant in een pan en draai hem om (of 12–15 min in de oven op 200 °C).","Schenk de saus over de zalm en laat 1–2 minuten inkoken tot hij glanst.","Kook of ontdooi de edamame een paar minuten. Snijd de avocado en komkommer in plakjes of blokjes.","Verdeel de rijst over kommen, leg de zalm en de groenten erop en schep de rest van de saus erover.","Bestrooi met sesamzaadjes."]
  },
  {
    id:"burger", name:"Burgerbowl", emoji:"🍔", color:"#dfe9d6",
    tag:"Oven + pan · ±35 min", desc:"Alles van een burger in een kom, met krokante aardappelschijfjes en frietsaus.",
    ing:["Aardappelschijfjes","Mager gehakt","Augurk","Tomaat","Komkommer","IJsbergsla","Geraspte kaas","Friteslijn"],
    steps:["Bak de aardappelschijfjes in de oven of airfryer volgens de verpakking, tot ze goudbruin en krokant zijn.","Rul het gehakt in een koekenpan en bak het gaar. Breng op smaak met peper en zout.","Strooi de geraspte kaas over het gehakt en laat even smelten.","Snijd de ijsbergsla, tomaat, komkommer en augurk.","Vul de kommen met de sla, de aardappelschijfjes, het gehakt en de groenten.","Maak af met een flinke streep friteslijn."]
  },
  {
    id:"zoeteaardappel", name:"Gevulde zoete aardappel", emoji:"🍠", color:"#f9e6c9",
    tag:"Oven · ±50 min", desc:"Zoete aardappel gevuld met gehakt, mais en paprika, met kaas en avocado-tomaat.",
    ing:["Zoete aardappel","Mager gehakt","Mais","Tomatenpuree","Paprika","Geraspte kaas","Avocado","Tomaat"],
    steps:["Verwarm de oven voor op 200 °C. Prik de zoete aardappels een paar keer in met een vork.","Bak ze 40–45 minuten in de oven tot ze zacht zijn (sneller: eerst 6–8 min in de magnetron, dan 15 min in de oven).","Rul ondertussen het gehakt in een pan. Voeg de paprika in blokjes toe en bak 4–5 minuten mee.","Roer de tomatenpuree en de uitgelekte mais erdoor en warm 2 minuten door. Breng op smaak met peper en zout.","Snijd de aardappels open, druk ze een beetje open en schep de gehaktvulling erin.","Strooi de geraspte kaas erover en zet ze nog 5 minuten in de oven tot de kaas gesmolten is.","Snijd de avocado en tomaat in blokjes, meng ze en schep ze er bij het serveren bovenop."]
  },
  {
    id:"wraps", name:"Fajita pesto wraps", emoji:"🌯", color:"#f3dfe9",
    tag:"Oven · ±30 min", desc:"Gekruide kip en paprika met rode pesto en crème fraîche, gegratineerd in de oven.",
    ing:["Volkoren wraps","Kipfilet","3 paprika's","125 g crème fraîche light","Rode pesto","Geraspte kaas","Paprikapoeder","Knoflook(poeder)","Peper en zout","Oregano"],
    steps:["Verwarm de oven voor op 180 °C.","Snijd de kip in reepjes en kruid met paprikapoeder, knoflook, peper, zout en oregano.","Bak de kip in een pan bijna gaar. Voeg de paprika in reepjes toe en bak 4–5 minuten mee.","Roer de crème fraîche en de rode pesto erdoor.","Verdeel de vulling over de wraps, rol ze op en leg ze naast elkaar in een ovenschaal.","Strooi de geraspte kaas erover.","Bak 10–15 minuten op 180 °C tot de kaas gesmolten en goudbruin is."]
  },
  {
    id:"andijvie", name:"Stamppot andijvie met gehaktballen", emoji:"🥔", color:"#e3ebd9",
    tag:"Pan · ±45 min", desc:"Romige stamppot met rauwe andijvie en spekjes, met zelfgemaakte gehaktballen en jus.",
    ing:["800 g kruimige aardappelen","300 g andijvie (gesneden)","75 g spekjes","Scheutje melk","Klontje roomboter","1 tl mosterd","Nootmuskaat","400 g gehakt","1 ei","3 el paneermeel","1 kleine ui (fijngesnipperd)","Peper en zout","Roomboter (om te bakken)"],
    steps:["Schil de aardappelen, snijd ze in stukken en kook ze in 20 minuten gaar in water met zout.","Meng het gehakt met het ei, paneermeel, de fijne ui, peper, zout en een snufje nootmuskaat.","Draai er met natte handen 4–6 ballen van.","Bak de gehaktballen rondom bruin in een flinke klont roomboter.","Zet het vuur laag, doe een scheutje water in de pan en laat ze met deksel 20 minuten zacht garen. Het bakvet wordt jus.","Bak ondertussen de spekjes knapperig in een droge koekenpan.","Giet de aardappelen af en stamp ze fijn met melk, boter, mosterd en wat nootmuskaat.","Schep de rauwe andijvie en de spekjes erdoor. De andijvie slinkt vanzelf door de warmte.","Breng op smaak met peper en zout en serveer met de gehaktballen en jus."]
  }
];
