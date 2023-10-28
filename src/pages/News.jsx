import NewCardWithAuthor from "../components/NewCardWithAuthor";
import { useState } from "react";
const News = ({ data }) => {
  const [visible, setVisible] = useState(6);

  const handleLoadMore = () => {
    setVisible((prev) => prev + 3);
  };
  return (
    <div className="container mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
        {data.slice(0, visible).map((data) => (
          <>
            <NewCardWithAuthor
              coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1698033346.png"
              title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
              description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
            />
          </>
        ))}
      </div>
      {/* load more */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLoadMore}
          className="text-white font-semibold bg-red-600 rounded px-3 py-2 hover:bg-white hover:text-red-600 border hover:border-red-600"
        >
          Load More...
        </button>
      </div>
    </div>
  );
};

export default News;
