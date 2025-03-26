export default function formatCurrency(amount: number, currency: string) {
  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  });
  return formatter.format(amount);
}
