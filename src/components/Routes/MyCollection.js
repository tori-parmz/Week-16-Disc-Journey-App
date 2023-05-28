import CoverArtGrid from "../CoverArtGrid";
import Header from "../Header";

// renders the header and coverartgrid components
const MyCollection = () => {
  return (
    <div id="collection-page">
      <Header />
      <div className="container">
        <CoverArtGrid />
      </div>
    </div>
  );
};

export default MyCollection;
