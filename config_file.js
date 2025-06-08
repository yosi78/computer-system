// קובץ הגדרות מערכת - config.js
// כל הנתונים כאן נשמרים בענן ומתעדכנים אוטומטיות

const CONFIG = {
    // רשימת מורות
    teachers: [
        "אודליה אביבי",
        "אסמא אבו ואסל",
        "גל אורון",
        "איילת רוזנשטיין",
        "אמנון וולף",
        "דדי הראל",
        "אסף ארמוזה",
        "ניצן גולני",
        "דפנה דייני",
        "איריס זוהר",
        "אפרת חבשוש",
        "יוסי אלעזר",
        "שי כרמלי"
        "נעמה לביב",
        "לבנת שקד",
        "לימור לוי",
        "ליאור שלמה",
        "נעמה לסרי",
        "הילה מגד"
        "מור אלקבץ",
        "מורן עזורה"
        "מיסא אגבאריה",
        "הוד נוף",
        "נור גלבוע",
        "מיה סהר",
        "סיון כיאט",
        "ורד עטר",
        "יעל עינת",
        "ענת אנדרסון",
        "קרין פפר",
        "רותי דיבשי",
        "שני שבתאי",
        "טל שחר",
        "דנה שטרנאו",
        "דנה שייקוביץ",
        "שמרית אהרוני"
    ],

    // רשימת כיתות
    classes: [
        "א'", "ב'", "ג'", "ד'", "ה'", "ו'"
    ],

    // שעות זמינות
    timeSlots: [
        "08:00", "09:00", "09:50", "11:00", "12:00",
        "12:50", "13:30", "14:15", "15:00"
    ],

    // עגלות ומחשבים
    carts: {
        cart1: {
            name: "עגלה #1",
            computerPrefix: "PC1",
            computerCount: 24,
            description: "CHROME BOOKS"
        },
        cart2: {
            name: "עגלה #2",
            computerPrefix: "PC2",
            computerCount: 12,
            description: "LENOVO"
        }
    },

    // אפשרויות כמות מחשבים
    computerCountOptions: [
		{ value: 1, label: "1 מחשב" },
		{ value: 2, label: "2 מחשבים" },
		{ value: 3, label: "3 מחשבים" },
		{ value: 4, label: "4 מחשבים" },
		{ value: 5, label: "5 מחשבים" },
		{ value: 6, label: "6 מחשבים" },
		{ value: 7, label: "7 מחשבים" },
		{ value: 8, label: "8 מחשבים" },
		{ value: 9, label: "9 מחשבים" },
		{ value: 10, label: "10 מחשבים" },
		{ value: 11, label: "11 מחשבים" },
		{ value: 12, label: "12 מחשבים" },
		{ value: 13, label: "13 מחשבים" },
		{ value: 14, label: "14 מחשבים" },
		{ value: 15, label: "15 מחשבים" },
		{ value: 16, label: "16 מחשבים" },
		{ value: 17, label: "17 מחשבים" },
		{ value: 18, label: "18 מחשבים" },
		{ value: 19, label: "19 מחשבים" },
		{ value: 20, label: "20 מחשבים" },
		{ value: 21, label: "21 מחשבים" },
		{ value: 22, label: "22 מחשבים" },
		{ value: 23, label: "23 מחשבים" },
		{ value: 24, label: "24 מחשבים" },
		{ value: 25, label: "25 מחשבים" },
		{ value: 36, label: "כל המחשבים" }
    ]
};

// פונקציה ליצירת רשימת מחשבים
function generateComputerList(prefix, count) {
    const computers = [];
    for (let i = 1; i <= count; i++) {
        computers.push(`${prefix}-${i.toString().padStart(3, '0')}`);
    }
    return computers;
}

// יצירת מבנה העגלות עם המחשבים
function initializeCartData() {
    const cartData = {};
    
    Object.keys(CONFIG.carts).forEach(cartId => {
        const cart = CONFIG.carts[cartId];
        cartData[cartId] = {
            name: cart.name,
            description: cart.description,
            computers: generateComputerList(cart.computerPrefix, cart.computerCount)
        };
    });
    
    return cartData;
}

// ייצוא להשימוש במערכת
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, generateComputerList, initializeCartData };
}