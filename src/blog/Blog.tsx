import { useEffect, useState } from 'react';
import { getArticles } from './fetcher';
import { ArticleSummary } from '../interfaces';
import './Blog.scss';
import createTimeAndDate from './helpers/createTimeAndDate';

export default function Blog() {
  const [articles, setArticles] = useState<ArticleSummary[]>([]);
  console.log('Blog gets called');

  useEffect(() => {
    (async () => {
      const data = await getArticles();
      setArticles(data.articles);
    })();
  }, []);

  return (
    <div className="blog">
      <li>
        {articles.map((article: ArticleSummary) => {
          const author =
            article.author?.firstName && article.author?.lastName
              ? `${article.author.firstName} ${article.author.lastName}`
              : 'Mysterious unknown author';
          console.log(article.createdAt);
          const { time, date } = createTimeAndDate(article.createdAt);
          return (
            <ul key={article._id} className="article-summary">
              <div className="title"> {article.title} </div>
              <div className="time-date">
                <div className="time">{time}</div>
                <div className="createdAt">{date}</div>
              </div>
              <div className="author"> {author} </div>
            </ul>
          );
        })}
      </li>
    </div>
  );
}
