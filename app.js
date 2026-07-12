var IMG = {
  "family-feast-spread": "images/family-feast-spread.jpg",
  "grilled-chicken-mandi": "images/grilled-chicken-mandi.jpg",
  "kofta-skewers-rice": "images/kofta-skewers-rice.jpg",
  "lamb-haneeth-plate": "images/lamb-haneeth-plate.jpg",
  "lamb-mandi-whole": "images/lamb-mandi-whole.jpg",
  "lamb-mountain-platter": "images/lamb-mountain-platter.jpg",
  "lamb-ribs-mandi": "images/lamb-ribs-mandi.jpg",
  "meat-foil-closeup": "images/meat-foil-closeup.jpg",
  "menu-board-1": "images/menu-board-1.jpg",
  "menu-board-2": "images/menu-board-2.jpg",
  "mixed-grill-platter": "images/mixed-grill-platter.jpg",
  "red-chicken-feast": "images/red-chicken-feast.jpg",
  "red-roast-chicken-trio": "images/red-roast-chicken-trio.jpg",
  "red-roast-twin": "images/red-roast-twin.jpg",
  "smoked-meat-closeup": "images/smoked-meat-closeup.jpg",
  "steak-chicken-mandi": "images/steak-chicken-mandi.jpg",
  "stuffed-vine-platter": "images/stuffed-vine-platter.jpg",
};
const MENU = [
    {
      id: "m001",
      cat: "meat",
      n: "نفر لحم مندي",
      d: "أرز مندي · لحم · صوص طماطم حارة",
      p: "٣٨٠",
      img: IMG["lamb-ribs-mandi"],
      hot: 1,
    },
    {
      id: "m002",
      cat: "meat",
      n: "نفر لحم مندي سوبر",
      d: "أرز مندي · لحم · صوص طماطم حارة",
      p: "٤٥٠",
      img: IMG["lamb-haneeth-plate"],
    },
    {
      id: "m003",
      cat: "meat",
      n: "نفر لحم مضغوط",
      d: "أرز مضغوط · لحم · صوص طماطم حارة",
      p: "٣٨٠",
      img: IMG["meat-foil-closeup"],
      hot: 1,
    },
    {
      id: "m004",
      cat: "meat",
      n: "نفر لحم حنيذ",
      d: "أرز مندي · لحم · صوص طماطم حارة",
      p: "٤٥٠",
      img: IMG["smoked-meat-closeup"],
      hot: 1,
    },
    {
      id: "m005",
      cat: "meat",
      n: "ثمن تيس مندي",
      d: "٢ أرز مندي · لحم · صوص طماطم حارة",
      p: "٧٦٠",
      img: IMG["lamb-ribs-mandi"],
    },
    {
      id: "m006",
      cat: "meat",
      n: "ثمن تيس حنيذ",
      d: "٢ أرز مندي · لحم · صوص طماطم حارة",
      p: "٩٠٠",
      img: IMG["smoked-meat-closeup"],
      pop: 1,
    },
    {
      id: "m007",
      cat: "meat",
      n: "ثمن تيس مضغوط",
      d: "٢ أرز مضغوط · لحم · صوص طماطم حارة",
      p: "٧٦٠",
      img: IMG["meat-foil-closeup"],
    },

    {
      id: "m008",
      cat: "chicken",
      n: "دجاج مندي / مظبي / مضغوط / حنيذ",
      d: "دجاجة · ٢ أرز مندي · صوص طماطم حارة",
      p: "٤٠٠",
      img: IMG["red-roast-chicken-trio"],
      feat: "span2",
      pop: 1,
    },
    {
      id: "m009",
      cat: "chicken",
      n: "نصف دجاج مندي / مظبي / مضغوط / حنيذ",
      d: "نصف دجاجة · أرز · صوص طماطم حارة",
      p: "٢٠٠",
      img: IMG["red-roast-twin"],
    },
    {
      id: "m010",
      cat: "chicken",
      n: "ربع دجاج مندي / مظبي / مضغوط",
      d: "ربع دجاجة · أرز · صوص طماطم حارة",
      p: "١٠٥",
      img: IMG["grilled-chicken-mandi"],
    },
    {
      id: "m011",
      cat: "chicken",
      n: "وجبة مكس مشاوي",
      d: "ربع دجاجة · ثمن كفتة · أرز · صوص حار",
      p: "٢٠٠",
      img: IMG["steak-chicken-mandi"],
      hot: 1,
    },
    {
      id: "m012",
      cat: "chicken",
      n: "عرض الصباح",
      d: "نصف فرخة · ثمن كفتة",
      p: "٢٠٠",
      img: IMG["red-chicken-feast"],
    },

    {
      id: "m013",
      cat: "grill",
      n: "كيلو كفتة",
      d: "٢ أرز مندي · ٢ طحينة · ٢ صوص طماطم حارة",
      p: "٨٥٠",
      img: IMG["kofta-skewers-rice"],
      pop: 1,
    },
    {
      id: "m014",
      cat: "grill",
      n: "نص كيلو كفتة",
      d: "أرز مندي · طحينة · صوص طماطم حارة",
      p: "٤٢٥",
      img: IMG["kofta-skewers-rice"],
    },
    {
      id: "m015",
      cat: "grill",
      n: "ربع كيلو كفتة",
      d: "أرز مندي · طحينة · صوص طماطم حارة",
      p: "٢١٠",
      img: IMG["kofta-skewers-rice"],
    },
    {
      id: "m016",
      cat: "grill",
      n: "وجبة المارد",
      d: "أرز مندي · ربع دجاجة · لحم ستيك · ثمن كفتة · صوص حار",
      p: "٣٠٠",
      img: IMG["mixed-grill-platter"],
      hot: 1,
    },
    {
      id: "m017",
      cat: "grill",
      n: "وجبة التختخة",
      d: "أرز مندي · ربع دجاجة · لحم ستيك · ثمن كفتة · فرد حمام · صوص حار",
      p: "٤٨٠",
      img: IMG["mixed-grill-platter"],
      feat: "span2",
      hot: 1,
    },
    {
      id: "m018",
      cat: "grill",
      n: "فرد حمام محشي",
      d: "حمام بلدي محشي",
      p: "١٩٠",
      img: IMG["mixed-grill-platter"],
    },

    {
      id: "m019",
      cat: "family",
      n: "ربع تيس مندي",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "١٥٠٠",
      img: IMG["lamb-mountain-platter"],
    },
    {
      id: "m020",
      cat: "family",
      n: "نصف تيس مندي",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٢٩٠٠",
      img: IMG["lamb-mountain-platter"],
    },
    {
      id: "m021",
      cat: "family",
      n: "تيس مندي",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٥٨٠٠",
      img: IMG["lamb-mandi-whole"],
      feat: "span2",
      pop: 1,
    },
    {
      id: "m022",
      cat: "family",
      n: "ربع تيس مضغوط",
      d: "أرز مضغوط · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "١٥٠٠",
      img: IMG["meat-foil-closeup"],
    },
    {
      id: "m023",
      cat: "family",
      n: "نصف تيس مضغوط",
      d: "أرز مضغوط · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٢٩٠٠",
      img: IMG["meat-foil-closeup"],
    },
    {
      id: "m024",
      cat: "family",
      n: "تيس مضغوط",
      d: "أرز مضغوط · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٥٨٠٠",
      img: IMG["meat-foil-closeup"],
    },
    {
      id: "m025",
      cat: "family",
      n: "نصف تيس حنيذ",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٢٩٠٠",
      img: IMG["smoked-meat-closeup"],
    },
    {
      id: "m026",
      cat: "family",
      n: "تيس حنيذ",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "٥٨٠٠",
      img: IMG["smoked-meat-closeup"],
    },
    {
      id: "m027",
      cat: "family",
      n: "خروف مندي",
      d: "أرز مندي · لحم · سلطة · زبادي · طحينة · صوص حار",
      p: "حسب الوزن",
      img: IMG["lamb-mandi-whole"],
      feat: "span2",
      hot: 1,
    },

    {
      id: "m028",
      cat: "trays",
      n: "عرض شهرزاد",
      d: "فرخة · كيلو كفتة · ربع كيلو سجق · ربع كيلو ممبار · سلطات · صوص سحاوي · أرز مندي",
      p: "١٥٠٠",
      img: IMG["mixed-grill-platter"],
    },
    {
      id: "m029",
      cat: "trays",
      n: "عرض السندباد",
      d: "٢ فرخة · كيلو كفتة · ٤ فرد حمام · سلطات · صوص سحاوي · أرز مندي",
      p: "٢٣٥٠",
      img: IMG["red-chicken-feast"],
    },
    {
      id: "m030",
      cat: "trays",
      n: "عرض الفرح",
      d: "٤ فرد حمام · نفر لحم سوبر · فرخة · نصف كيلو كفتة · ربع كيلو ممبار · سلطات · أرز مندي",
      p: "٢٠٣٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m031",
      cat: "trays",
      n: "عرض الباشا",
      d: "ثمن تيس · فرخة · كيلو كفتة · ٤ فرد حمام · ممبار · سجق · محشي · سلطات · أرز مندي",
      p: "٣٦٠٠",
      img: IMG["mixed-grill-platter"],
      feat: "span2",
      pop: 1,
    },
    {
      id: "m032",
      cat: "trays",
      n: "عرض الوليمة",
      d: "ربع تيس · ٢ فرخة · كيلو كفتة · ١٢ قطعة سمبوسك · سلطات · صوص سحاوي · أرز مندي",
      p: "٣١٥٠",
      img: IMG["lamb-mountain-platter"],
    },
    {
      id: "m033",
      cat: "trays",
      n: "عرض الكرم",
      d: "فرخة · نصف كيلو كفتة · ٤ قطع سمبوسك · سلطات · صوص سحاوي · أرز مندي",
      p: "٨٢٠",
      img: IMG["red-roast-twin"],
    },
    {
      id: "m034",
      cat: "trays",
      n: "عرض العيد",
      d: "٢ فرخة · كيلو ونصف كفتة · ٣ نفر لحم · ٤ فرد حمام · سجق · سمبوسك · سلطات · أرز مندي",
      p: "٤١٠٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m035",
      cat: "trays",
      n: "عرض الملكي",
      d: "٢ فرخة · كيلو كفتة · ٨ قطع سمبوسك · سلطات · صوص سحاوي · أرز مندي",
      p: "١٦٥٠",
      img: IMG["red-chicken-feast"],
    },
    {
      id: "m036",
      cat: "trays",
      n: "عرض الصحاب",
      d: "نصف فرخة · نصف كيلو كفتة · ٢ فرد حمام · محشي · سلطات · صوص سحاوي · أرز مندي",
      p: "١٥٠٠",
      img: IMG["mixed-grill-platter"],
    },
    {
      id: "m037",
      cat: "trays",
      n: "عرض السعادة",
      d: "ثمن تيس · فرخة · نصف كيلو كفتة · ٤ قطع سمبوسك · سلطات · صوص سحاوي · أرز مندي",
      p: "١٥٥٠",
      img: IMG["lamb-haneeth-plate"],
    },
    {
      id: "m038",
      cat: "trays",
      n: "عرض الملك",
      d: "ربع تيس · ربع كيلو كفتة · سلطات · صوص سحاوي · أرز مندي",
      p: "١٦٥٠",
      img: IMG["lamb-mountain-platter"],
    },
    {
      id: "m039",
      cat: "trays",
      n: "عرض العيلة",
      d: "بطة · نفر لحم سوبر · كيلو ونصف كفتة · فرخة ونصف · ممبار · سجق · ٣ طواجن · سلطات · أرز مندي",
      p: "٤٠٠٠",
      img: IMG["family-feast-spread"],
      feat: "span2",
    },

    {
      id: "m040",
      cat: "tagine",
      n: "خضار مشكل باللحمة",
      d: "طاجن خضار مشكل باللحمة",
      p: "٢٦٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m041",
      cat: "tagine",
      n: "بامية باللحمة",
      d: "طاجن بامية باللحمة",
      p: "٢٦٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m042",
      cat: "tagine",
      n: "بطاطس باللحمة",
      d: "طاجن بطاطس باللحمة",
      p: "٢٦٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m043",
      cat: "tagine",
      n: "بصل باللحمة",
      d: "طاجن بصل باللحمة",
      p: "٢٦٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m044",
      cat: "tagine",
      n: "خضار مشكل سادة",
      d: "طاجن خضار مشكل سادة",
      p: "٨٥",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m045",
      cat: "tagine",
      n: "ملوخية سادة",
      d: "طاجن ملوخية سادة",
      p: "٨٥",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m046",
      cat: "tagine",
      n: "بامية سادة",
      d: "طاجن بامية سادة",
      p: "٨٥",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m047",
      cat: "tagine",
      n: "بطاطس سادة",
      d: "طاجن بطاطس سادة",
      p: "٨٥",
      img: IMG["family-feast-spread"],
    },

    {
      id: "m048",
      cat: "starters",
      n: "باكت بطاطس",
      d: "بطاطس مقلية",
      p: "٤٠",
      img: IMG["stuffed-vine-platter"],
    },
    {
      id: "m049",
      cat: "starters",
      n: "سمبوسك لحمة",
      d: "سمبوسك محشي لحمة",
      p: "٥٠",
      img: IMG["stuffed-vine-platter"],
    },
    {
      id: "m050",
      cat: "starters",
      n: "سمبوسك جبنة",
      d: "سمبوسك محشي جبنة",
      p: "٥٠",
      img: IMG["stuffed-vine-platter"],
    },
    {
      id: "m051",
      cat: "starters",
      n: "أرز مندي",
      d: "أرز مندي حضرمي",
      p: "٥٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m052",
      cat: "starters",
      n: "طبق مقبار",
      d: "طبق مقبار",
      p: "٩٥",
      img: IMG["stuffed-vine-platter"],
    },
    {
      id: "m053",
      cat: "starters",
      n: "محاشي مشكل",
      d: "تشكيلة محاشي",
      p: "٩٥",
      img: IMG["stuffed-vine-platter"],
    },
    {
      id: "m054",
      cat: "starters",
      n: "شوربة لحم",
      d: "شوربة لحم",
      p: "٢٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m055",
      cat: "starters",
      n: "شوربة لسان عصفور",
      d: "شوربة لسان عصفور",
      p: "٢٠",
      img: IMG["family-feast-spread"],
    },
    {
      id: "m056",
      cat: "starters",
      n: "شوربة عدس",
      d: "شوربة عدس",
      p: "٢٥",
      img: IMG["family-feast-spread"],
    },

    {
      id: "m057",
      cat: "pans",
      n: "طاسة كبدة",
      d: "طاسة كبدة",
      p: "٢٠٠",
      img: IMG["meat-foil-closeup"],
    },
    {
      id: "m058",
      cat: "pans",
      n: "ورقة كبدة",
      d: "ورقة كبدة",
      p: "٢٠٠",
      img: IMG["meat-foil-closeup"],
    },
    {
      id: "m059",
      cat: "pans",
      n: "طاسة سجق",
      d: "طاسة سجق",
      p: "٢٠٠",
      img: IMG["smoked-meat-closeup"],
    },
    {
      id: "m060",
      cat: "pans",
      n: "ورقة سجق",
      d: "ورقة سجق",
      p: "٢٠٠",
      img: IMG["smoked-meat-closeup"],
    },
    {
      id: "m061",
      cat: "pans",
      n: "نصف بطة",
      d: "نصف بطة",
      p: "٤٢٥",
      img: IMG["red-chicken-feast"],
    },
    {
      id: "m062",
      cat: "pans",
      n: "بطة كاملة",
      d: "بطة كاملة",
      p: "٨٥٠",
      img: IMG["red-chicken-feast"],
    },
    {
      id: "m063",
      cat: "pans",
      n: "ربع بطة مع عكاوي",
      d: "ربع بطة مع عكاوي",
      p: "٢٠٠",
      img: IMG["family-feast-spread"],
    },

    {
      id: "m064",
      cat: "cooking",
      n: "تسوية تيس",
      d: "خدمة تسوية تيس",
      p: "حسب الوزن",
      img: IMG["lamb-mandi-whole"],
    },
    {
      id: "m065",
      cat: "cooking",
      n: "تسوية خروف",
      d: "خدمة تسوية خروف",
      p: "حسب الوزن",
      img: IMG["lamb-mandi-whole"],
    },
    {
      id: "m066",
      cat: "cooking",
      n: "تسوية ديك رومي",
      d: "خدمة تسوية ديك رومي",
      p: "حسب الوزن",
      img: IMG["red-chicken-feast"],
    },
  ],
  GALLERY = [
    IMG["lamb-mandi-whole"],
    IMG["red-roast-chicken-trio"],
    IMG["mixed-grill-platter"],
    IMG["lamb-ribs-mandi"],
    IMG["kofta-skewers-rice"],
    IMG["lamb-mountain-platter"],
    IMG["steak-chicken-mandi"],
    IMG["red-chicken-feast"],
    IMG["smoked-meat-closeup"],
    IMG["lamb-haneeth-plate"],
    IMG["stuffed-vine-platter"],
    IMG["red-roast-twin"],
    IMG["grilled-chicken-mandi"],
    IMG["meat-foil-closeup"],
    IMG["family-feast-spread"],
  ],
  REVIEWS = [
    {
      t: "أحسن مندي دقته في مصر، اللحم بيسيح في بقك والأرز نكهته حضرمية أصلية ١٠٠٪. السفرة كفّت ٨ أفراد وكلهم انبسطوا.",
      n: "محمد العمودي",
      w: "زيارة عائلية",
      s: 5,
    },
    {
      t: "طلبت دليفري للبيت ووصل سخن وفي معاده. الدجاج الأحمر طعمه خرافي والصوص السحاوي بيكمّل الطبق. هطلب تاني أكيد.",
      n: "سارة منصور",
      w: "طلب أونلاين",
      s: 5,
    },
    {
      t: "حجزت لعيد ميلاد والدي وكانت سفرة عز بمعنى الكلمة. عرض الباشا قيمته تستاهل وكل صنف على أصوله. شكراً حضرموت.",
      n: "أحمد شلبي",
      w: "حجز مناسبة",
      s: 5,
    },
    {
      t: "المكان نضيف والخدمة محترمة جداً والأسعار في متناول الإيد بالنسبة للكمية. الحنيذ هنا حاجة تانية خالص.",
      n: "ليلى عبدالله",
      w: "زيارة المطعم",
      s: 5,
    },
  ],
  menuGrid = document.getElementById("menuGrid"),
  starIco =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8z"/></svg>',
  cartIco =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l2.5 13.5a2 2 0 0 0 2 1.5h7a2 2 0 0 0 2-1.5L22 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>';
function cardHTML(e, t) {
  const a = "span2" === e.feat ? "span2" : "tall" === e.feat ? "tall" : "",
    n = e.hot
      ? '<div class="m-steam" aria-hidden="true"><span></span><span></span><span></span></div>'
      : "",
    i = e.pop ? `<span class="m-badge">${starIco} الأكثر طلباً</span>` : "",
    s = t > 3 ? 'loading="lazy"' : 'fetchpriority="high"';
  return `\n  <article class="m-card ${a} m-reveal" style="--i:${t}" data-lb="${e.img}">\n    <div class="m-photo">\n      <img src="${e.img}" alt="${e.n}" ${s}>\n      <div class="light"></div>\n      <div class="shine"></div>\n      ${n}\n    </div>\n    ${i}\n    <div class="m-content">\n      <div class="m-row" style="display:flex;align-items:flex-end;justify-content:space-between;gap:14px;width:100%">\n        <div class="m-text"><h4>${e.n}</h4><p>${e.d}</p></div>\n        <div class="m-price">${e.p}<small>جنيه</small></div>\n      </div>\n    </div>\n    <button class="m-order m-add" data-id="${e.id}" onclick="event.stopPropagation();addToCart('${e.id}')" aria-label="ضيف ${e.n} للطلب">${cartIco} <span class="m-add-label">ضيف للطلب</span></button>\n  </article>`;
}
function renderMenu(e = "all") {
  const t = MENU.filter((t) => "all" === e || t.cat === e);
  menuGrid.innerHTML = t.map(cardHTML).join("");
  const a = [...menuGrid.querySelectorAll(".m-card")],
    n = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          if (e.isIntersecting) {
            const t = +e.target.style.getPropertyValue("--i") || 0;
            ((e.target.style.transitionDelay = Math.min(70 * t, 560) + "ms"),
              e.target.classList.add("in"),
              n.unobserve(e.target));
          }
        });
      },
      { threshold: 0.1 },
    );
  (a.forEach((e) => n.observe(e)),
    a.forEach((e) =>
      e.addEventListener("click", () => {
        const t = a.map((e) => e.dataset.lb);
        openLB(t, t.indexOf(e.dataset.lb));
      }),
    ),
    !matchMedia("(prefers-reduced-motion:reduce)").matches &&
      matchMedia("(hover:hover)").matches &&
      a.forEach((e) => {
        const t = e.querySelector(".m-photo img");
        (e.addEventListener("pointermove", (a) => {
          const n = e.getBoundingClientRect(),
            i = (a.clientX - n.left) / n.width - 0.5,
            s = (a.clientY - n.top) / n.height - 0.5;
          ((t.style.transform = `scale(1.12) translate(${-14 * i}px,${-14 * s}px)`),
            (e.style.transform = `translateY(-12px) rotateX(${-4 * s}deg) rotateY(${5 * i}deg)`));
        }),
          e.addEventListener("pointerleave", () => {
            ((t.style.transform = ""), (e.style.transform = ""));
          }));
      }));
}
(renderMenu(),
  (function () {
    const e = "hadramoot_cart_v1",
      t = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
      a = (e) => String(e).replace(/[0-9]/g, (e) => t[+e]);
    function n(e) {
      const a = String(e).replace(/[٠-٩]/g, (e) => t.indexOf(e));
      if (/[–\-]/.test(a)) return null;
      const n = a.match(/(\d+)/);
      return n
        ? /[٠-٩0-9].*[-–].*[٠-٩0-9]/.test(String(e))
          ? null
          : parseInt(n[1], 10)
        : null;
    }
    const i = Object.fromEntries(MENU.map((e) => [e.id, e]));
    let s = {};
    try {
      s = JSON.parse(localStorage.getItem(e)) || {};
    } catch (e) {
      s = {};
    }
    Object.keys(s).forEach((e) => {
      i[e] || delete s[e];
    });
    const r = () => {
        try {
          localStorage.setItem(e, JSON.stringify(s));
        } catch (e) {}
      },
      d = document.getElementById("cartFab"),
      c = document.getElementById("cartCount"),
      l = document.getElementById("cartModal"),
      o = document.getElementById("cartBody"),
      m = document.getElementById("cartEmpty"),
      p = document.getElementById("cartTotal"),
      g = document.getElementById("cartTotalNote"),
      u = document.getElementById("cartName"),
      f = document.getElementById("cartNotes"),
      h = document.getElementById("cartSend"),
      y = document.getElementById("cartErr");
    try {
      const t = localStorage.getItem(e + "_name");
      t && (u.value = t);
    } catch (e) {}
    function v() {
      const e = Object.values(s).reduce((e, t) => e + t, 0);
      ((c.textContent = a(e)),
        d.classList.toggle("show", e > 0),
        document.querySelectorAll(".m-add").forEach((e) => {
          const t = e.dataset.id,
            n = s[t] || 0;
          e.classList.toggle("added", n > 0);
          const i = e.querySelector(".m-add-label");
          i && (i.textContent = n > 0 ? `في الطلب (${a(n)})` : "ضيف للطلب");
        }));
    }
    function I() {
      const e = Object.keys(s);
      if (0 === e.length)
        return (
          (m.style.display = "block"),
          o.querySelectorAll(".cart-item").forEach((e) => e.remove()),
          (p.textContent = a(0)),
          (g.textContent = ""),
          void (h.disabled = !0)
        );
      ((m.style.display = "none"), (h.disabled = !1));
      let t = 0,
        r = !1;
      const d = e
        .map((e) => {
          const d = i[e],
            c = s[e],
            l = n(d.p);
          let o;
          return (
            null == l
              ? ((r = !0),
                (o = `<div class="cart-item-price tbc">${d.p} · يتأكد مع المطعم</div>`))
              : ((t += l * c),
                (o = `<div class="cart-item-price">${a(l)} × ${a(c)} = <b>${a(l * c)}</b> جنيه</div>`)),
            `\n        <div class="cart-item" data-id="${e}">\n          <img class="cart-item-img" src="${d.img}" alt="">\n          <div class="cart-item-info">\n            <p class="cart-item-name">${d.n}</p>\n            ${o}\n            <div class="cart-item-ctrl">\n              <button type="button" data-act="dec" aria-label="نقص">−</button>\n              <span class="qty">${a(c)}</span>\n              <button type="button" data-act="inc" aria-label="زيادة">+</button>\n              <button type="button" class="cart-item-remove" data-act="rm">شيل</button>\n            </div>\n          </div>\n        </div>`
          );
        })
        .join("");
      (o.querySelectorAll(".cart-item").forEach((e) => e.remove()),
        o.insertAdjacentHTML("beforeend", d),
        (p.textContent = a(t)),
        (g.textContent = r
          ? "فيه أصناف سعرها بالوزن أو نطاق — هيتحدد مع المطعم على واتساب."
          : ""));
    }
    function b() {
      (l.classList.remove("open"),
        l.setAttribute("aria-hidden", "true"),
        document.body.classList.remove("cart-lock"),
        (y.textContent = ""),
        u.classList.remove("err"));
    }
    (u.addEventListener("input", () => {
      try {
        localStorage.setItem(e + "_name", u.value);
      } catch (e) {}
      (u.classList.remove("err"), (y.textContent = ""));
    }),
      (window.addToCart = function (e) {
        i[e] &&
          ((s[e] = (s[e] || 0) + 1),
          r(),
          v(),
          l.classList.contains("open") && I(),
          d.animate(
            [
              { transform: "scale(1)" },
              { transform: "scale(1.15)" },
              { transform: "scale(1)" },
            ],
            { duration: 300, easing: "ease-out" },
          ));
      }),
      o.addEventListener("click", (e) => {
        const t = e.target.closest("button[data-act]");
        if (!t) return;
        const a = t.closest(".cart-item"),
          n = a?.dataset.id;
        if (!n) return;
        const i = t.dataset.act;
        ("inc" === i
          ? s[n]++
          : "dec" === i
            ? (s[n]--, s[n] <= 0 && delete s[n])
            : "rm" === i && delete s[n],
          r(),
          I(),
          v());
      }),
      d.addEventListener("click", function () {
        (I(),
          l.classList.add("open"),
          l.setAttribute("aria-hidden", "false"),
          document.body.classList.add("cart-lock"),
          setTimeout(() => {
            (u.value ? h : u).focus({ preventScroll: !0 });
          }, 100));
      }),
      l.addEventListener("click", (e) => {
        e.target.closest("[data-close]") && b();
      }),
      document.addEventListener("keydown", (e) => {
        "Escape" === e.key && l.classList.contains("open") && b();
      }),
      h.addEventListener("click", () => {
        const e = u.value.trim();
        if (!e)
          return (
            u.classList.add("err"),
            (y.textContent = "الاسم مطلوب عشان نقدر نتواصل معاك."),
            void u.focus()
          );
        const t = Object.keys(s);
        if (0 === t.length) return void (y.textContent = "السلة فاضية.");
        const r = [];
        (r.push("السلام عليكم حضرموت و السمار،"),
          r.push(""),
          r.push(`الاسم: ${e}`),
          r.push("الطلب:"));
        let d = 0,
          c = !1;
        (t.forEach((e) => {
          const t = i[e],
            l = s[e],
            o = n(t.p);
          null == o
            ? ((c = !0), r.push(`• ${t.n} × ${a(l)}  (السعر: ${t.p} — يتأكد)`))
            : ((d += o * l), r.push(`• ${t.n} × ${a(l)}  —  ${a(o * l)} جنيه`));
        }),
          r.push(""),
          r.push(
            `الإجمالي: ${a(d)} جنيه${c ? " (+ الأصناف اللي بالوزن)" : ""}`,
          ));
        const l = f.value.trim();
        (l && (r.push(""), r.push(`ملاحظات: ${l}`)),
          r.push(""),
          r.push("شكراً 🙏"));
        const o = r.join("\n"),
          m = `https://wa.me/201010922922?text=${encodeURIComponent(o)}`;
        window.open(m, "_blank", "noopener");
      }),
      v());
    window.renderMenu;
    const M = renderMenu;
    ((window.renderMenu = function (e) {
      (M(e), v());
    }),
      document
        .getElementById("filters")
        .addEventListener("click", () => setTimeout(v, 0)));
  })(),
  document.getElementById("filters").addEventListener("click", (e) => {
    const t = e.target.closest(".filter");
    t &&
      (document
        .querySelectorAll(".filter")
        .forEach((e) => e.classList.remove("active")),
      t.classList.add("active"),
      renderMenu(t.dataset.cat));
  }),
  (function () {
    const e = document.querySelector(".menu-section"),
      t = e.querySelector(".spotlight");
    if (
      (matchMedia("(hover:hover)").matches &&
        e.addEventListener("pointermove", (a) => {
          const n = e.getBoundingClientRect();
          (t.style.setProperty("--mx", a.clientX - n.left + "px"),
            t.style.setProperty("--my", a.clientY - n.top + "px"));
        }),
      !matchMedia("(prefers-reduced-motion:reduce)").matches)
    ) {
      const e = document.getElementById("spices"),
        t = ["#e0a53d", "#c8412a", "#f0d49a", "#c8985e"];
      for (let a = 0; a < 22; a++) {
        const n = document.createElement("span");
        ((n.className = "spice"),
          (n.style.left = 100 * Math.random() + "%"),
          (n.style.background = `radial-gradient(circle,${t[a % t.length]},transparent)`),
          (n.style.animationDuration = 9 + 9 * Math.random() + "s"),
          (n.style.animationDelay = 10 * Math.random() + "s"));
        const i = 0.6 + 1.6 * Math.random();
        ((n.style.width = n.style.height = 3 * i + "px"), e.appendChild(n));
      }
    }
  })());
const gallery = document.getElementById("galleryGrid");
gallery.innerHTML = GALLERY.map(
  (e, t) =>
    `\n  <figure class="g-item" data-i="${t}">\n    <img src="${e}" alt="طبق من مطعم حضرموت و السمار" loading="lazy">\n    <span class="zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3M11 8v6M8 11h6"/></svg></span>\n  </figure>`,
).join("");
const lb = document.getElementById("lightbox"),
  lbImg = document.getElementById("lbImg");
let lbList = [],
  lbIdx = 0;
function openLB(e, t) {
  ((lbList = e),
    (lbIdx = t),
    (lbImg.src = lbList[lbIdx]),
    lb.classList.add("open"),
    lb.setAttribute("aria-hidden", "false"),
    (document.body.style.overflow = "hidden"));
}
function closeLB() {
  (lb.classList.remove("open"),
    lb.setAttribute("aria-hidden", "true"),
    (document.body.style.overflow = ""));
}
function step(e) {
  ((lbIdx = (lbIdx + e + lbList.length) % lbList.length),
    (lbImg.src = lbList[lbIdx]));
}
(gallery.addEventListener("click", (e) => {
  const t = e.target.closest(".g-item");
  t && openLB(GALLERY, +t.dataset.i);
}),
  document.querySelectorAll(".dish[data-lb]").forEach((e) => {
    e.addEventListener("click", () => {
      const t = [...document.querySelectorAll(".dish[data-lb]")].map(
        (e) => e.dataset.lb,
      );
      openLB(t, t.indexOf(e.dataset.lb));
    });
  }),
  document.getElementById("lbClose").addEventListener("click", closeLB),
  document.getElementById("lbNext").addEventListener("click", (e) => {
    (e.stopPropagation(), step(1));
  }),
  document.getElementById("lbPrev").addEventListener("click", (e) => {
    (e.stopPropagation(), step(-1));
  }),
  lb.addEventListener("click", (e) => {
    e.target === lb && closeLB();
  }),
  document.addEventListener("keydown", (e) => {
    lb.classList.contains("open") &&
      ("Escape" === e.key && closeLB(),
      "ArrowRight" === e.key && step(1),
      "ArrowLeft" === e.key && step(-1));
  }));
const tw = document.getElementById("testiWrap"),
  td = document.getElementById("testiDots"),
  star =
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3L22 9.3l-5 4.8L18.2 21 12 17.5 5.8 21 7 14.1l-5-4.8 7.1-1z"/></svg>';
((tw.innerHTML = REVIEWS.map(
  (e, t) =>
    `\n  <blockquote class="testi ${0 === t ? "active" : ""}" data-i="${t}">\n    <div class="quote-mark">”</div>\n    <div class="stars">${star.repeat(e.s)}</div>\n    <p>${e.t}</p>\n    <div class="who">${e.n}<span>${e.w}</span></div>\n  </blockquote>`,
).join("")),
  (td.innerHTML = REVIEWS.map(
    (e, t) =>
      `<button class="${0 === t ? "on" : ""}" data-i="${t}" aria-label="رأي ${t + 1}"></button>`,
  ).join("")));
let timer,
  ti = 0;
function showTesti(e) {
  (document
    .querySelectorAll(".testi")
    .forEach((t) => t.classList.toggle("active", +t.dataset.i === e)),
    document
      .querySelectorAll("#testiDots button")
      .forEach((t) => t.classList.toggle("on", +t.dataset.i === e)),
    (ti = e));
}
function autoTesti() {
  timer = setInterval(() => showTesti((ti + 1) % REVIEWS.length), 5500);
}
(td.addEventListener("click", (e) => {
  const t = e.target.closest("button");
  t && (clearInterval(timer), showTesti(+t.dataset.i), autoTesti());
}),
  autoTesti());
const nav = document.getElementById("nav"),
  stickyBar = document.getElementById("stickyBar");
addEventListener(
  "scroll",
  () => {
    const e = scrollY;
    (nav.classList.toggle("solid", e > 40),
      stickyBar.classList.toggle("show", e > 600));
  },
  { passive: !0 },
);
const burger = document.getElementById("burger"),
  navLinks = document.getElementById("navLinks");
(burger.addEventListener("click", () => {
  const e = navLinks.classList.toggle("open");
  (burger.classList.toggle("x", e), burger.setAttribute("aria-expanded", e));
}),
  navLinks.querySelectorAll("a").forEach((e) =>
    e.addEventListener("click", () => {
      (navLinks.classList.remove("open"),
        burger.classList.remove("x"),
        burger.setAttribute("aria-expanded", !1));
    }),
  ));
const io = new IntersectionObserver(
  (e) => {
    e.forEach((e) => {
      e.isIntersecting &&
        (e.target.classList.add("in"), io.unobserve(e.target));
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);
document.querySelectorAll(".reveal").forEach((e) => io.observe(e));
const heroImg = document.getElementById("heroImg"),
  reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
if (!reduce) {
  addEventListener(
    "scroll",
    () => {
      const e = scrollY;
      e < window.innerHeight &&
        (heroImg.style.transform = `scale(1.05) translateY(${0.18 * e}px)`);
    },
    { passive: !0 },
  );
  const e = document.getElementById("embers");
  for (let t = 0; t < 18; t++) {
    const t = document.createElement("span");
    ((t.className = "ember"),
      (t.style.left = 100 * Math.random() + "%"),
      (t.style.animationDuration = 6 + 7 * Math.random() + "s"),
      (t.style.animationDelay = 8 * Math.random() + "s"));
    const a = 0.5 + 1.3 * Math.random();
    ((t.style.transform = `scale(${a})`), e.appendChild(t));
  }
  document.getElementById("top").addEventListener("pointermove", (e) => {
    const t = 16 * (e.clientX / innerWidth - 0.5),
      a = 16 * (e.clientY / innerHeight - 0.5);
    heroImg.style.objectPosition = `${50 + 0.4 * t}% ${50 + 0.4 * a}%`;
  });
}
const hv = document.getElementById("heroVideo");
(hv.addEventListener("loadeddata", () => {
  ((hv.style.display = "block"), (heroImg.style.display = "none"));
}),
  hv.addEventListener("error", () => {
    hv.remove();
  }),
  (function () {
    var e = [].slice.call(document.querySelectorAll("[data-img]"));
    function t(e) {
      var t = e.getAttribute("data-img");
      t && IMG[t] && ((e.src = IMG[t]), e.removeAttribute("data-img"));
    }
    if ("IntersectionObserver" in window) {
      var a = new IntersectionObserver(
        function (e) {
          e.forEach(function (e) {
            e.isIntersecting && (t(e.target), a.unobserve(e.target));
          });
        },
        { rootMargin: "400px" },
      );
      e.forEach(function (e) {
        "heroImg" === e.id || e.closest(".hero") || e.closest(".nav")
          ? t(e)
          : a.observe(e);
      });
    } else e.forEach(t);
  })(),
  (document.getElementById("yr").textContent = new Date().getFullYear()),
  (function () {
    var e = document.getElementById("intro");
    function t() {
      (e.classList.add("done"),
        setTimeout(function () {
          e.style.display = "none";
        }, 900));
    }
    e &&
      ("complete" === document.readyState
        ? setTimeout(t, 1100)
        : window.addEventListener("load", function () {
            setTimeout(t, 700);
          }),
      setTimeout(t, 2600));
  })(),
  (function () {
    var e = document.getElementById("progress");
    function t() {
      var t = document.documentElement,
        a = t.scrollHeight - t.clientHeight;
      e.style.width = (a > 0 ? (t.scrollTop / a) * 100 : 0) + "%";
    }
    (addEventListener("scroll", t, { passive: !0 }), t());
  })());
