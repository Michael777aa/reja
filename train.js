//MITASK-C 

// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

class Shop {
  constructor(non, lagmon, cola) {
    this.mahsulotlar = {
      non: non,
      lagmon: lagmon,
      cola: cola
    };
    this.log = [];
  }

  logActivity(activity) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    this.log.push(`[${time}] ${activity}`);
  }

  qoldiq() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const qoldiqMessage = `hozir ${time}da ${this.mahsulotlar.non}ta non, ${this.mahsulotlar.lagmon}ta lagmon va ${this.mahsulotlar.cola}ta cola mavjud!`;
    this.logActivity(`Qoldiq: ${qoldiqMessage}`);
    return qoldiqMessage;
  }

  sotish(mahsulot, amount) {
    if (this.mahsulotlar[mahsulot] >= amount) {
      this.mahsulotlar[mahsulot] -= amount;
      this.logActivity(`Sotish: ${amount}ta ${mahsulot} sotildi.`);
    } else {
      const errorMsg = `${mahsulot} yetarli emas!`;
      this.logActivity(`Sotish xato: ${errorMsg}`);
      return errorMsg;
    }
  }

  qabul(mahsulot, amount) {
    this.mahsulotlar[mahsulot] += amount;
    this.logActivity(`Qabul: ${amount}ta ${mahsulot} qabul qilindi.`);
  }

  getLog() {
    return this.log;
  }
}


const shop = new Shop(4, 5, 2);

console.log(shop.qoldiq()); 

shop.sotish('non', 3);
shop.qabul('cola', 4);

console.log(shop.qoldiq()); 

console.log(shop.getLog()); 
// salom