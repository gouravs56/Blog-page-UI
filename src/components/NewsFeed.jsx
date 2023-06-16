import React from "react";

const NewsFeed = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 mt-4"  id="News Feed">News Feed</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Subsegment 1 */}
        <div className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300">
          <img
            src="https://images.unsplash.com/photo-1592180205742-3205be300e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3cyUyMGhlYWRsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="News"
            className="mb-3 rounded"
          />
          <a href="#" className="hover:underline ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos labore suscipit pariatur, inventore iste sint dolores.
          </a>
        </div>

        {/* Subsegment 2 */}
        <div className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300">
          <img
            src="https://images.unsplash.com/photo-1592180205742-3205be300e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3cyUyMGhlYWRsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="News"
            className="mb-3 rounded"
          />
          <a href="#" className="hover:underline ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos labore suscipit pariatur, inventore iste sint dolores.
          </a>
        </div>

        {/* Subsegment 3 */}
        <div className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300">
          <img
            src="https://images.unsplash.com/photo-1592180205742-3205be300e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3cyUyMGhlYWRsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="News"
            className="mb-3 rounded"
          />
          <a href="#" className="hover:underline ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos labore suscipit pariatur, inventore iste sint dolores.
          </a>
        </div>

        {/* Subsegment 4 */}
        <div className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300">
          <img
            src="https://images.unsplash.com/photo-1592180205742-3205be300e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3cyUyMGhlYWRsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="News"
            className="mb-3 rounded"
          />
          <a href="#" className="hover:underline ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos labore suscipit pariatur, inventore iste sint dolores.
          </a>
        </div>

        {/* Subsegment 5 */}
        <div className="bg-slate-200 p-4 rounded shadow-lg hover:bg-slate-300">
          <img
            src="https://images.unsplash.com/photo-1592180205742-3205be300e6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmV3cyUyMGhlYWRsaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="News"
            className="mb-3 rounded"
          />
          <a href="#" className="hover:underline ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos labore suscipit pariatur, inventore iste sint dolores.
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
