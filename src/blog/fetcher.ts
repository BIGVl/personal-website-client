export async function getArticles() {
  const response = await fetch('https://blog-api-vlasandrei-com.onrender.com/articles');
  const data = await response.json();
  return data;
}
