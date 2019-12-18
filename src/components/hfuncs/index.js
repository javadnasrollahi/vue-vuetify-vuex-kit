import store from "@/store"
export default {
    Dater(date) { // تبدیل تاریخ
      let D = Date.parse(date)
      if (isNaN(D) || D == "NaN") {
        return ''
      } else {
        let i = new Date(D)

        let minAndSecond = ('0' + i.getHours()).slice(-2) + ':' + ('0' + i.getMinutes()).slice(-2);

        return this.gregorian_to_jalali(i.getFullYear(),(i.getMonth()+1),i.getDate()) + " "+minAndSecond
        // return i.getHours() + ':' + i.getMinutes() + ':' + i.getSeconds()
      }
    },
    gregorian_to_jalali(gy, gm, gd) {
      var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
      if (gy > 1600) {
        var jy = 979;
        gy = (gy - 1600);
      } else {
         jy = 0;
         gy = (gy - 621);
      }
      var gy2 = (gm > 2) ? (gy + 1) : gy;
      var days = (365 * gy) + (parseInt((gy2 + 3) / 4)) - (parseInt((gy2 + 99) / 100)) + (parseInt((gy2 + 399) /
        400)) - 80 + gd + g_d_m[gm - 1];
      jy += 33 * (parseInt(days / 12053));
      days %= 12053;
      jy += 4 * (parseInt(days / 1461));
      days %= 1461;
      if (days > 365) {
        jy += parseInt((days - 1) / 365);
        days = (days - 1) % 365;
      }
      var jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
      var jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
      return jy + "/" + jm + "/" + jd;
    },
    isSmallScreen(){
      return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));      
    },
}