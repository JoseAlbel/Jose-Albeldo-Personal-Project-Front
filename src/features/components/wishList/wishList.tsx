import CarForm from "../carformAdd/carFormAdd";
import List from "../list/List";
// import "./wishList.scss";

export default function WishList() {
  const handleForm = () => {
    const form = document.querySelector(".car-form")!;
    form.classList.toggle("hidden");
  };

  return (
    <>
      <div className="loaded-route wishList">
        <span className="wishList_title">Wishlist</span>
        <button className="wishList_button" onClick={handleForm}>
          SHOW / HIDE FORM
        </button>
        <CarForm></CarForm>
        <h1 className="home_title">Your Cars</h1>
        <List></List>
      </div>
    </>
  );
}
