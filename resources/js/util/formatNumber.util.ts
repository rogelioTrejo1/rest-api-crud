/**
 *
 * @param phone
 * @returns
 */
export function formatNumber(phone: string) {
  // Valido que exista un numero de telefono
  if (!phone) return 'N/A';

  const [contryCode, number] = phone.includes(' ') ? phone.split(' ') : [null, phone];

  const bigLadas = ['55', '56', '33', '81'];
  let formatNumber:string[] = [];

  // Verifico si el numero corresponde a alguna lada
  const someStartWiththisLada = bigLadas.some(lada => number.startsWith(lada));
  if (someStartWiththisLada) {
    const part1 = number.substring(0, 2);
    const part2 = number.substring(2, 6);
    const part3 = number.substring(6);
    formatNumber = [part1, part2, part3];
  } else {
    const part1 = number.substring(0, 3);
    const part2 = number.substring(3, 6);
    const part3 = number.substring(6, 10);

    formatNumber = [part1, part2, part3];
  }

  return contryCode ? `+${contryCode} ${formatNumber.join('-')}` : formatNumber.join('-');
}