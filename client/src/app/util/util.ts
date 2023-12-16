/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-var */
export function getCookie(key: string) {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export function currencyFormat (amount: number | null){
  return '$' + (amount!/100).toFixed(2);
}