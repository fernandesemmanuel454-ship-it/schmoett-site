
/* ── DATA ── */
const PRODUCTS = [
  // PIZZAS (pâte artisanale maison · tomates · mozzarella · cuisson au four)
  {id:'p1',name:'Margarita',desc:'Tomates · Mozzarella · Basilic',price:11.90,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7'},
  {id:'p2',name:'Jambon',desc:'Tomates · Mozzarella · Jambon',price:12.90,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7,9'},
  {id:'p3',name:'Champignons',desc:'Tomates · Mozzarella · Champignons',price:12.90,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7'},
  {id:'p4',name:'Diavola',desc:'Tomates · Mozzarella · Salami piquant',price:13.50,cat:'pizza',badge:'🌶️ Piquant',emoji:'🍕',allerg:'1,7,9,10'},
  {id:'p5',name:'Salami',desc:'Tomates · Mozzarella · Salami',price:13.50,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7,9,10'},
  {id:'p6',name:'Calzone',desc:'Tomates · Mozzarella · Jambon · Champignons · Œuf (pliée)',price:14.00,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,3,7,9'},
  {id:'p7',name:'Thon',desc:'Tomates · Mozzarella · Thon · Oignons · Ail',price:14.00,cat:'pizza',badge:'',emoji:'🐟',allerg:'1,4,7'},
  {id:'p8',name:'Jambon & Champignons',desc:'Tomates · Mozzarella · Jambon · Champignons',price:14.50,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7,9'},
  {id:'p9',name:'Lorraine',desc:'Crème fraîche · Mozzarella · Oignons · Lardons · Œuf',price:15.50,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,3,7,9'},
  {id:'p10',name:'Poulet Halal',desc:'Tomates · Mozzarella · Poulet halal · Champignons · Œuf',price:16.00,cat:'pizza',badge:'',emoji:'🍗',allerg:'1,3,7'},
  {id:'p11',name:'4 Fromages',desc:'Tomates · Mozzarella · Gorgonzola · Chèvre · Parmesan',price:16.00,cat:'pizza',badge:'',emoji:'🧀',allerg:'1,7'},
  {id:'p12',name:'Schmoëtt BBQ',desc:'Sauce BBQ · Mozzarella · Emmental · Lardons · Poulet · Poivrons · Oignons',price:17.50,cat:'pizza',badge:'⭐ Signature',emoji:'🍕',allerg:'1,7,9'},
  {id:'p13',name:'Cristina',desc:'Tomates · Mozzarella · Jambon · Salami piquant · Champignons · Oignons',price:17.50,cat:'pizza',badge:'',emoji:'🍕',allerg:'1,7,9,10'},
  // OPTIONS PIZZA
  {id:'op1',name:'Ingrédient supplémentaire',desc:'Ingrédient au choix en plus sur votre pizza',price:1.50,cat:'option-pizza',badge:'',emoji:'➕',allerg:''},
  // BURGERS (viande grillée sur place · oignons caramélisés maison)
  {id:'b1',name:'Le Schmoëtt',desc:'Steak bœuf 150g · Cheddar fondu · Oignons caramélisés · Cornichons · Sauce burger',price:12.90,cat:'burger',badge:'⭐ Signature',emoji:'🍔',allerg:'1,7,10'},
  {id:'b2',name:'Le Grand-Ducal',desc:'Steak bœuf 150g · Kachkeis luxembourgeois · Galette PDT croustillante · Sauce samouraï',price:16.90,cat:'burger',badge:'🇱🇺 Local',emoji:'🍔',allerg:'1,7'},
  {id:'b3',name:'Le Crispy Coq',desc:'Poulet pané 140g · Sauce samouraï · Cornichons',price:11.90,cat:'burger',badge:'',emoji:'🍔',allerg:'1,3,7,10'},
  {id:'b4',name:'Le Vege-Malin',desc:'Double galette PDT · Cheddar · Cornichons · Sauce burger',price:11.50,cat:'burger',badge:'🌿 Veggie',emoji:'🍔',allerg:'1,3,7'},
  // TACOS (produits & ingrédients préparés sur place)
  {id:'t1',name:'L\'Original',desc:'Steak haché · Cordon bleu dinde · Sauce andalouse · Frites · Sauce fromagère',price:9.90,cat:'tacos',badge:'⭐ Signature',emoji:'🌮',allerg:'1,3,7,10'},
  {id:'t2',name:'Le Crousty',desc:'Poulet pané · Cheddar · Sauce algérienne · Frites · Sauce fromagère',price:8.90,cat:'tacos',badge:'',emoji:'🌮',allerg:'1,3,7,10'},
  {id:'t3',name:'Le Kebab',desc:'Poulet halal · Cheddar · Sauce barbecue · Oignons croustillants · Frites · Sauce fromagère',price:9.90,cat:'tacos',badge:'',emoji:'🌮',allerg:'1,7,10'},
  // AILES DE POULET (croustillantes · marinées · cuites à la commande)
  {id:'w1',name:'x6 Ailes',desc:'Ailes croustillantes · 1 sauce incluse au choix',price:8.90,cat:'wings',badge:'',emoji:'🍗',allerg:'1,3,7,10'},
  {id:'w2',name:'x10 Ailes',desc:'Ailes croustillantes · 1 sauce incluse au choix',price:12.90,cat:'wings',badge:'🔥 Best-seller',emoji:'🍗',allerg:'1,3,7,10'},
  {id:'w3',name:'x20 Bucket',desc:'Bucket d\'ailes croustillantes · 1 sauce incluse au choix',price:24.90,cat:'wings',badge:'💪 XL',emoji:'🍗',allerg:'1,3,7,10'},
  // OPTIONS AILES
  {id:'ow1',name:'Sauce supplémentaire',desc:'Barbecue · Andalouse · Spicy & Chili',price:1.20,cat:'option-wings',badge:'',emoji:'🍶',allerg:''},
  // ACCOMPAGNEMENTS
  {id:'a1',name:'Frites',desc:'Frites dorées',price:3.90,cat:'accompagnement',badge:'',emoji:'🍟',allerg:'1'},
  // BOISSONS
  {id:'d1',name:'Coca-Cola 33cl',desc:'Canette',price:2.90,cat:'boisson',badge:'',emoji:'🥤',allerg:'',img:'img/coca.png'},
  {id:'d2',name:'Coca-Cola Zero 33cl',desc:'Canette',price:2.90,cat:'boisson',badge:'',emoji:'🥤',allerg:'',img:'img/coca-zero.png'},
  {id:'d3',name:'Fanta 33cl',desc:'Canette',price:2.90,cat:'boisson',badge:'',emoji:'🥤',allerg:'',img:'img/fanta.png'},
  {id:'d4',name:'Ice Tea 33cl',desc:'Canette',price:2.90,cat:'boisson',badge:'',emoji:'🧊',allerg:'',img:'img/icetea.png'},
  {id:'d5',name:'Cristalline 1,5L',desc:'Bouteille',price:3.20,cat:'boisson',badge:'',emoji:'💧',allerg:'',img:'img/cristalline.png'},
  {id:'d6',name:'Red Bull 25cl',desc:'Canette',price:3.50,cat:'boisson',badge:'⚡ Energy',emoji:'🥫',allerg:'',img:'img/redbull.png'},
  {id:'d7',name:'Coca-Cola 1,5L',desc:'Bouteille',price:3.90,cat:'boisson',badge:'',emoji:'🥤',allerg:''},
  {id:'d8',name:'Fanta 1,5L',desc:'Bouteille',price:3.90,cat:'boisson',badge:'',emoji:'🥤',allerg:''},
];

const FORMULES = [
  {id:'f1',name:'MENU SOLO TACOS',emoji:'🌮',price:12.50,badge:'Populaire',
    desc:'1 Tacos au choix + 1 Canette 33cl',
    items:['1 tacos au choix','1 canette 33cl'],
    choices:{
      tacos:{label:'Choisissez votre tacos',options:['L\'Original','Le Crousty','Le Kebab']},
      canette:{label:'Choisissez votre canette',options:['Coca-Cola','Coca-Cola Zero','Fanta','Ice Tea','Red Bull (+0,60€)']}
    }
  },
  {id:'f2',name:'MENU BURGER COMBO',emoji:'🍔',price:16.90,badge:'Complet',
    desc:'1 Burger + Frites + 1 Canette 33cl',
    items:['1 burger au choix','1 portion de frites','1 canette 33cl'],
    note:'Le Grand-Ducal est exclu de cette formule',
    choices:{
      burger:{label:'Choisissez votre burger',options:['Le Schmoëtt','Le Crispy Coq']},
      canette:{label:'Choisissez votre canette',options:['Coca-Cola','Coca-Cola Zero','Fanta','Ice Tea','Red Bull (+0,60€)']}
    }
  },
  {id:'f3',name:'PACK NIGHT PIZZA',emoji:'🍕',price:18.50,badge:'Soirée',
    desc:'1 Pizza + 1 Bouteille 1,5L',
    items:['1 pizza (classique incluse, premium +3€)','1 bouteille 1,5L'],
    choices:{
      pizza:{label:'Choisissez votre pizza',
        groups:[
          {name:'Classiques (incluses)',extra:0,options:['Margarita','Jambon','Champignons','Salami','Diavola','Thon','Calzone','Jambon & Champignons']},
          {name:'Spéciales Premium (+3,00€)',extra:3,options:['4 Fromages','Schmoëtt BBQ','Cristina','Lorraine','Poulet Halal']}
        ]
      },
      bouteille:{label:'Choisissez votre bouteille 1,5L',options:['Coca-Cola 1,5L','Fanta 1,5L','Cristalline 1,5L']}
    }
  },
];

const UPSELLS = [
  {emoji:'🍟',name:'Frites',desc:'Dorées',price:3.90,id:'a1'},
  {emoji:'🥤',name:'Coca-Cola 33cl',desc:'Bien frais',price:2.90,id:'d1'},
  {emoji:'🍶',name:'Sauce supplémentaire',desc:'BBQ · Andalouse · Spicy',price:1.20,id:'ow1'},
  {emoji:'➕',name:'Ingrédient supp.',desc:'Sur votre pizza',price:1.50,id:'op1'},
];

const ALLERGENS = {1:'Gluten',2:'Crustacés',3:'Œufs',4:'Poisson',5:'Arachides',6:'Soja',7:'Lait',8:'Fruits à coque',9:'Céleri',10:'Moutarde',11:'Sésame',12:'Sulfites',13:'Lupin',14:'Mollusques'};

const MIN_ORDER = 10;
let cart = [];
try { const saved = localStorage.getItem('schmoett_cart'); if (saved) cart = JSON.parse(saved); } catch(e) {}
let stock = {};
let toastTimeout = null;
let pendingUpsell = null;

/* ── STATUS BAR ── */
function updateStatus() {
  const now = new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Luxembourg'}));
  const day = now.getDay(); // 0=dim
  const h = now.getHours();
  const m = now.getMinutes();
  const t = h * 60 + m;
  const bar = document.getElementById('statusBar');
  const txt = document.getElementById('statusText');
  let isOpen = false;
  // Horaires: Mer 17h30–02h, Jeu-Dim 17h30–03h, Ven-Sam 17h30–04h, Lun-Mar fermé
  // Crosses midnight: check if currently in an open window
  // Evening opening (same day): day is Mer(3),Jeu(4),Ven(5),Sam(6),Dim(0) from 17h30 (1050)
  // Late night (after midnight): check PREVIOUS day's schedule
  const openEvening = [0,3,4,5,6]; // days that open at 17h30
  const prevDay = (day + 6) % 7;
  // After midnight portion: Mer close at 02h (120min), Jeu,Dim close at 03h (180min), Ven,Sam close at 04h (240min)
  if (openEvening.includes(day) && t >= 1050) {
    isOpen = true; // evening session started
  } else if (prevDay === 3 && t < 120) {
    isOpen = true; // after midnight, prev day was Mer → open until 02h
  } else if ([0,4].includes(prevDay) && t < 180) {
    isOpen = true; // after midnight, prev day was Jeu/Dim → open until 03h
  } else if ([5,6].includes(prevDay) && t < 240) {
    isOpen = true; // after midnight, prev day was Ven/Sam → open until 04h
  }

  if (isOpen) {
    bar.className = 'status-bar open';
    let closeTime = '';
    if (openEvening.includes(day) && t >= 1050) {
      if (day === 3) closeTime = '02h';
      else if ([0,4].includes(day)) closeTime = '03h';
      else if ([5,6].includes(day)) closeTime = '04h';
    } else if (prevDay === 3 && t < 120) { closeTime = '02h';
    } else if ([0,4].includes(prevDay) && t < 180) { closeTime = '03h';
    } else if ([5,6].includes(prevDay) && t < 240) { closeTime = '04h'; }
    txt.textContent = 'Ouvert jusqu\'à ' + closeTime + ' · Click & Collect en 10–15 min';
  } else {
    bar.className = 'status-bar closed';
    const days = ['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];
    const openDays = [0,3,4,5,6];
    let next = '';
    if (openDays.includes(day) && t < 1050) {
      next = "aujourd'hui à 17h30";
    } else {
      let d = day;
      for (let i = 1; i <= 7; i++) {
        d = (day + i) % 7;
        if (openDays.includes(d)) { next = days[d] + ' à 17h30'; break; }
      }
    }
    txt.textContent = 'Fermé · Prochain service : ' + next;
  }
}
updateStatus();
setInterval(updateStatus, 60000);

/* ── STOCK ── */
async function loadStock() {
  try {
    const r = await fetch('/api/stock');
    if (r.ok) stock = await r.json();
  } catch(e) {
    console.log('Stock API not available, all items in stock');
  }
  renderProducts();
}

/* ── RENDER FORMULES ── */
function renderFormules() {
  const grid = document.getElementById('formulesGrid');
  grid.innerHTML = FORMULES.map(f => `
    <div class="formule" onclick="openFormulaModal('${f.id}')">
      <div class="formule-badge">${f.badge}</div>
      <div class="formule-emoji">${f.emoji}</div>
      <h3>${f.name}</h3>
      <p class="formule-desc">${f.desc}</p>
      <ul class="formule-items">${f.items.map(i => `<li>${i}</li>`).join('')}</ul>
      ${f.note ? `<p style="font-size:.7rem;color:var(--text2);font-style:italic;margin-bottom:.8rem">⚠️ ${f.note}</p>` : ''}
      <div class="formule-price">
        <span class="formule-new">${f.price.toFixed(2)}€</span>
      </div>
      <div class="formule-btn">Commander cette formule →</div>
    </div>
  `).join('');
}

/* ── RENDER PRODUCTS ── */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  let items;
  if (filter === 'all') {
    items = PRODUCTS.filter(p => !p.cat.startsWith('option-'));
  } else if (filter === 'pizza') {
    items = PRODUCTS.filter(p => p.cat === 'pizza');
  } else if (filter === 'wings') {
    items = PRODUCTS.filter(p => p.cat === 'wings' || p.cat === 'option-wings');
  } else {
    items = PRODUCTS.filter(p => p.cat === filter);
  }
  grid.innerHTML = items.map(p => {
    const oos = stock[p.id] === false;
    const isOption = p.cat.startsWith('option-');
    return `
    <div class="product ${oos ? 'out-of-stock' : ''} ${isOption ? 'option-card' : ''}" data-cat="${p.cat}" data-id="${p.id}">
      <div class="product-img">
        <div class="glow"></div>
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        ${p.img ? `<img src="${p.img}" alt="${p.name}" style="width:100px;height:100px;object-fit:contain">` : `<div class="product-img-placeholder">${p.emoji}</div>`}
      </div>
      <div class="product-info">
        <div class="product-cat">${catLabel(p.cat)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        ${p.allerg ? `<div class="product-allerg">${p.allerg.split(',').map(n => ALLERGENS[n.trim()] || n).join(' · ')}</div>` : ''}
        <div class="product-bottom">
          <span class="product-price">${isOption ? '+' : ''}${p.price.toFixed(2)}€</span>
          <button class="product-add" onclick="addProduct('${p.id}')" ${oos ? 'disabled' : ''}>+</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function catLabel(c) {
  const labels = {pizza:'Pizza',burger:'Burger',tacos:'Tacos',wings:'Ailes de poulet',accompagnement:'Accompagnement',boisson:'Boisson','option-pizza':'Option pizza','option-wings':'Option ailes'};
  return labels[c] || c;
}

/* ── RENDER UPSELLS ── */
/* renderUpsells removed — Les Indispensables section deleted */

/* ── FILTERS ── */
document.getElementById('filters').addEventListener('click', function(e) {
  if (!e.target.classList.contains('filter-btn')) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  renderProducts(e.target.dataset.filter);
});

/* ── ADD TO CART ── */
let pendingPizzaId = null;

function addProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  // If it's a pizza, show XXL choice modal (not for options)
  if (p.cat === 'pizza') {
    pendingPizzaId = id;
    document.getElementById('xxlPizzaName').textContent = p.name;
    document.getElementById('xxlNormalPrice').textContent = p.price.toFixed(2) + '€';
    document.getElementById('xxlXxlPrice').textContent = (p.price + 10).toFixed(2) + '€';
    document.getElementById('xxlOverlay').classList.add('show');
    return;
  }

  addProductDirect(id, p.name, p.price);
  showToast(p);
}

function addProductDirect(id, name, price) {
  const p = PRODUCTS.find(x => x.id === id);
  const cartId = name; // use name as cart key (so XXL and normal are separate)
  const existing = cart.find(x => x.name === name);
  if (existing) existing.qty++;
  else cart.push({id, name, desc: p ? p.desc : '', price, cat: p ? p.cat : 'pizza', qty: 1});
  updateCart();
  // Animate button
  const btn = document.querySelector(`.product[data-id="${id}"] .product-add`);
  if (btn) { btn.textContent = '✓'; btn.classList.add('added'); setTimeout(() => { btn.textContent = '+'; btn.classList.remove('added'); }, 600); }
}

function confirmPizzaSize(isXxl) {
  const p = PRODUCTS.find(x => x.id === pendingPizzaId);
  if (!p) return;
  const name = isXxl ? p.name + ' XXL' : p.name;
  const price = isXxl ? p.price + 10 : p.price;
  addProductDirect(pendingPizzaId, name, price);
  showToast({...p, name, price, cat: 'pizza'});
  closeXxlModal();
}

function closeXxlModal() {
  document.getElementById('xxlOverlay').classList.remove('show');
  pendingPizzaId = null;
}

/* ── FORMULA MODAL ── */
let currentFormula = null;
let formulaSelections = {};

let formulaOptionsMap = {};

function openFormulaModal(id) {
  currentFormula = FORMULES.find(x => x.id === id);
  if (!currentFormula) return;
  formulaSelections = {};
  formulaOptionsMap = {};
  const modal = document.getElementById('formulaModal');
  const title = document.getElementById('fmTitle');
  const body = document.getElementById('fmBody');
  const total = document.getElementById('fmTotal');
  title.textContent = currentFormula.name;
  let html = '';
  let optIdx = 0;
  const choices = currentFormula.choices;
  for (const [key, choice] of Object.entries(choices)) {
    html += '<div class="fm-section"><label class="fm-label">' + choice.label + '</label>';
    if (choice.groups) {
      choice.groups.forEach(function(g) {
        html += '<p class="fm-group-name">' + g.name + '</p>';
        g.options.forEach(function(opt) {
          formulaOptionsMap['opt_' + optIdx] = {key: key, name: opt, extra: g.extra};
          html += '<label class="fm-option"><input type="radio" name="fm_' + key + '" data-opt="opt_' + optIdx + '" onchange="selectFormulaOption(this)"><span class="fm-radio"></span><span>' + opt + '</span>' + (g.extra > 0 ? '<span class="fm-extra">+' + g.extra.toFixed(2) + '€</span>' : '') + '</label>';
          optIdx++;
        });
      });
    } else {
      choice.options.forEach(function(opt) {
        var isExtra = opt.indexOf('(+') !== -1;
        formulaOptionsMap['opt_' + optIdx] = {key: key, name: opt, extra: isExtra ? 0.60 : 0};
        html += '<label class="fm-option"><input type="radio" name="fm_' + key + '" data-opt="opt_' + optIdx + '" onchange="selectFormulaOption(this)"><span class="fm-radio"></span><span>' + opt + '</span></label>';
        optIdx++;
      });
    }
    html += '</div>';
  }
  body.innerHTML = html;
  total.textContent = currentFormula.price.toFixed(2) + '€';
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectFormulaOption(radio) {
  var optData = formulaOptionsMap[radio.getAttribute('data-opt')];
  if (!optData) return;
  formulaSelections[optData.key] = {name: optData.name, extra: optData.extra};
  var extraTotal = 0;
  Object.values(formulaSelections).forEach(function(s) { extraTotal += s.extra || 0; });
  document.getElementById('fmTotal').textContent = (currentFormula.price + extraTotal).toFixed(2) + '€';
}

function closeFormulaModal() {
  document.getElementById('formulaModal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('xxlOverlay').classList.contains('show')) closeXxlModal();
    if (document.getElementById('formulaModal').classList.contains('open')) closeFormulaModal();
    if (document.getElementById('checkoutModal').classList.contains('open')) closeCheckout();
  }
});

function confirmFormula() {
  if (!currentFormula) return;
  const choices = currentFormula.choices;
  const keys = Object.keys(choices);
  for (const k of keys) {
    if (!formulaSelections[k]) { alert('Veuillez faire tous vos choix'); return; }
  }
  let extra = 0;
  let details = [];
  Object.entries(formulaSelections).forEach(([k, s]) => {
    extra += s.extra || 0;
    details.push(s.name);
  });
  const totalPrice = currentFormula.price + extra;
  const cartName = currentFormula.name + ' (' + details.join(' + ') + ')';
  const cartId = currentFormula.id + '_' + Date.now();
  cart.push({id: cartId, name: cartName, desc: currentFormula.desc, price: totalPrice, cat: 'formule', qty: 1});
  updateCart();
  showToast({name: currentFormula.name, cat: 'formule'});
  closeFormulaModal();
}

/* ── TOAST ── */
function showToast(product) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toastText');
  const upsellDiv = document.getElementById('toastUpsell');
  const upsellText = document.getElementById('toastUpsellText');

  text.textContent = product.name + ' ajouté ✓';
  // Smart upsell
  pendingUpsell = null;
  upsellDiv.style.display = 'none';

  const drinkOptions = document.getElementById('toastDrinkOptions');
  drinkOptions.innerHTML = '';

  if (['pizza','burger','tacos','wings'].includes(product.cat)) {
    const canettes = [
      {id:'d1',name:'Coca-Cola',emoji:'🥤'},
      {id:'d2',name:'Coca-Cola Zero',emoji:'🥤'},
      {id:'d3',name:'Fanta',emoji:'🥤'},
      {id:'d4',name:'Ice Tea',emoji:'🧊'}
    ];
    upsellText.textContent = '🥤 Ajouter une canette ? (2,90€)';
    canettes.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'toast-drink-btn';
      btn.textContent = c.emoji + ' ' + c.name;
      btn.onclick = () => { addProduct(c.id); hideToast(); };
      drinkOptions.appendChild(btn);
    });
    upsellDiv.style.display = 'flex';
  } else if (product.cat === 'formule') {
    upsellText.textContent = '🍟 Ajouter des frites ? (3,90€)';
    const btn = document.createElement('button');
    btn.className = 'toast-drink-btn';
    btn.textContent = '🍟 Frites';
    btn.onclick = () => { addProduct('a1'); hideToast(); };
    drinkOptions.appendChild(btn);
    upsellDiv.style.display = 'flex';
  }

  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(hideToast, 8000);
}

function hideToast() {
  document.getElementById('toast').classList.remove('show');
  pendingUpsell = null;
}

function acceptUpsell() {
  // Legacy — drink choice now handled by individual buttons
  hideToast();
}

/* ── CART LOGIC ── */
function updateCart() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  document.getElementById('cartCount').textContent = count;
  try { localStorage.setItem('schmoett_cart', JSON.stringify(cart)); } catch(e) {}
  renderCartBody();
  // Update order button
  const btn = document.getElementById('cartOrderBtn');
  if (total >= MIN_ORDER) {
    btn.disabled = false;
    btn.textContent = `Commander ${total.toFixed(2)}€ →`;
  } else {
    btn.disabled = true;
    btn.textContent = `Minimum ${MIN_ORDER.toFixed(2)}€ requis`;
  }
}

function renderCartBody() {
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty"><div class="big">🍕</div><p>Ton panier est vide.<br>Ajoute quelque chose de bon !</p></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const pct = Math.min((total / MIN_ORDER) * 100, 100);
  const reached = total >= MIN_ORDER;

  let html = '';
  // Progress bar
  html += `<div class="cart-progress">
    <div class="cart-progress-bar"><div class="cart-progress-fill ${reached ? 'done' : ''}" style="width:${pct}%"></div></div>
    <div class="cart-progress-text ${reached ? 'done' : ''}">${reached ? '✅ Vous pouvez commander !' : `Plus que ${(MIN_ORDER - total).toFixed(2)}€ pour atteindre le minimum de ${MIN_ORDER}€`}</div>
  </div>`;

  // Items
  cart.forEach((item, i) => {
    html += `<div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-desc">${item.desc || ''}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="changeQty(${i},-1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${i},1)">+</button>
      </div>
      <span class="cart-item-price">${(item.price * item.qty).toFixed(2)}€</span>
    </div>`;
  });

  // Suggestions if under minimum
  if (!reached) {
    const needed = MIN_ORDER - total;
    const suggestions = PRODUCTS.filter(p => p.price <= needed + 3 && p.price >= 1 && !cart.find(c => c.id === p.id)).slice(0, 2);
    if (suggestions.length) {
      html += '<div style="margin-top:.8rem;font-size:.75rem;color:var(--text2);font-weight:600">💡 Suggestions pour compléter :</div>';
      suggestions.forEach(s => {
        html += `<div class="cart-suggest" onclick="addProduct('${s.id}');renderCartBody()">
          <span>${s.emoji}</span>
          <div class="cart-suggest-info">${s.name}</div>
          <span class="cart-suggest-price">${s.price.toFixed(2)}€</span>
          <button class="cart-suggest-add">+</button>
        </div>`;
      });
    }
  }

  body.innerHTML = html;

  // Totals
  const totalsDiv = document.getElementById('cartTotals');
  totalsDiv.innerHTML = `
    <div class="cart-total-row"><span>Sous-total</span><span>${total.toFixed(2)}€</span></div>
    <div class="cart-total-row final"><span>Total</span><span>${total.toFixed(2)}€</span></div>
  `;
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartPanel').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartPanel').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── CHECKOUT ── */
function openCheckout() {
  closeCart();
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Render recap
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  const recap = document.getElementById('modalRecap');
  recap.innerHTML = `<h3>Récapitulatif</h3>
    ${cart.map(x => `<div class="modal-recap-item"><span>${x.name} × ${x.qty}</span><span>${(x.price * x.qty).toFixed(2)}€</span></div>`).join('')}
    <div class="modal-recap-total"><span>Total</span><span>${total.toFixed(2)}€</span></div>`;
  document.getElementById('payText').textContent = `Payer par carte — ${total.toFixed(2)}€`;
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

async function submitOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('payBtn');
  const spinner = document.getElementById('paySpinner');
  const text = document.getElementById('payText');
  btn.disabled = true;
  spinner.style.display = 'block';
  text.textContent = 'Redirection...';

  const payload = {
    items: cart.map(x => ({name: x.name, desc: x.desc || '', price: x.price, qty: x.qty})),
    customer: {
      name: document.getElementById('cName').value,
      phone: document.getElementById('cPhone').value,
      email: document.getElementById('cEmail').value,
      note: document.getElementById('cNote').value,
    }
  };

  try {
    const r = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    });
    const data = await r.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Erreur');
    }
  } catch (err) {
    alert('Erreur : ' + err.message + '\nVeuillez réessayer.');
    btn.disabled = false;
    spinner.style.display = 'none';
    text.textContent = 'Payer par carte →';
  }
  return false;
}

/* ── SUCCESS ── */
function checkOrderStatus() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('order') === 'success') {
    document.getElementById('successModal').classList.add('open');
    cart = [];
    updateCart();
    window.history.replaceState({}, '', '/');
  }
  if (params.get('order') === 'cancelled') {
    alert('Paiement annulé. Votre panier est toujours là.');
    window.history.replaceState({}, '', '/');
  }
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
}

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.1});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── SCROLL TO SECTION (force reveal) ── */
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  // Instantly remove reveal animation (no fade, just show)
  section.classList.remove('reveal');
  section.querySelectorAll('.reveal').forEach(el => el.classList.remove('reveal'));
  // Scroll with offset for fixed navbar
  const navHeight = document.querySelector('.nav')?.offsetHeight || 60;
  const top = section.getBoundingClientRect().top + window.scrollY - navHeight - 10;
  window.scrollTo({top, behavior:'smooth'});
}

/* ── INIT ── */
renderFormules();
renderProducts();
loadStock();
updateCart();
checkOrderStatus();
