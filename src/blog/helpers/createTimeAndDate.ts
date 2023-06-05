export default function createTimeAndDate(dateReceived: Date) {
  const date = new Date(dateReceived).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const time = new Date(dateReceived).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  return { time, date };
}
