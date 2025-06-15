import React from 'react';

const articles = [
  {
    id: 1,
    title: 'THE ART OF LIGHT',
    category: '/ STORYTELLING',
    date: 'FEB 3, 2025',
    image:
      'https://images.pexels.com/photos/20616344/pexels-photo-20616344/free-photo-of-chichen-itza-pyramid.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverable: false,
  },
  {
    id: 2,
    title: 'FROM VISION TO REALITY',
    category: '/ CREATIVITY',
    date: 'OCT 17, 2024',
    image:
      'https://images.pexels.com/photos/18646435/pexels-photo-18646435/free-photo-of-a-tent-is-set-up-under-the-milky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverable: false,
  },
  {
    id: 3,
    title: 'THE BEAUTY OF MINIMAL',
    category: '/ PLANNING',
    date: 'MAY 10, 2024',
    image:
      'https://images.pexels.com/photos/7772348/pexels-photo-7772348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    hoverable: true,
  },
];

const ArticleGrid = () => {
  return (
    <section className="bg-black text-white px-6 py-16 min-h-[120vh]">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm text-gray-400 uppercase mb-1">/ Articles</p>
        <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
          FOCUS & INSPIRE: <br className="hidden sm:block" />
          STORIES BEYOND <br className="hidden sm:block" /> THE FRAME
        </h2>
        <button className="mt-4 text-sm uppercase border-b border-white tracking-widest">
          ▸ MORE ARTICLES
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
        {articles.map(({ id, title, image, category, date }) => (
          <div
            key={id}
            className={`relative bg-[#1a1a1a] rounded-lg overflow-hidden group shadow transition-all duration-500 hover:shadow-2xl ${
              id === 1
                ? 'lg:col-span-2 lg:row-span-2 h-[520px]'
                : 'h-[380px]'
            }`}
          >
            {/* Image with hover and overlay */}
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 w-full px-4 py-4 bg-[#1a1a1a]/70 backdrop-blur-sm">
              <div className="flex justify-between text-xs text-gray-400 uppercase">
                <span>{category}</span>
                <span>{date}</span>
              </div>
              <h3 className="text-sm font-semibold mt-2">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
