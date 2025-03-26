export default function formatDate(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  return formatter.format(date);
}
