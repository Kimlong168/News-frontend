import Banner from "../components/Banner";
import NewsCard from "../components/NewsCard";
import NewsLabel from "../components/NewsLabel";
const Home = () => {
  return (
    <div className="container mt-16">
      {/* banner */}
      <Banner />

      {/* latest news label*/}
      <NewsLabel text="Latest News" path="/news" />

      {/* news */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1698033346.png"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />

        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/photos/2/photo_2023-10-21_19-43-27.jpg"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />

        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/photos/2/236486777_214122244057059_6480584669506690212_n.jpg"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />
      </div>

      <NewsLabel text="Latest Sports News" path="/sport" />

      {/* news */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-7 mt-5">
        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/posts/medium/1698033346.png"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />

        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/photos/2/photo_2023-10-21_19-43-27.jpg"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />

        <NewsCard
          coverImage="https://cpl.sgp1.cdn.digitaloceanspaces.com/photos/2/236486777_214122244057059_6480584669506690212_n.jpg"
          title="ភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP នៅថ្ងៃព្រហស្បតិ៍ខាងមុខនេះ"
          description="ក្រុមភ្នំពេញក្រោនត្រូវបន្ដភារកិច្ច AFC CUP បន្ដទៀតក្រោយយកឈ្នះព្រៃវែងនៃខេមបូឌានព្រីមៀរលីគសប្ដាហ៍ទី៨ ដោយលទ្ធផល ៣ទល់១ ក្នុងកីឡដ្ឋាន Smart R.S.N របស់ខ្លួន។"
        />
      </div>
    </div>
  );
};

export default Home;
