import recipes from "../recipes";
import Swal from 'sweetalert2'

const Menu = () => {

    const handleOrder = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, order it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "ordered!",
                text: "Your order has been processing.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className="menu-container" id="menu">
            <div className="menu-header">
                <h2>This Weeks Specials</h2>
                <p className="orderMenu">Order Menu</p>
            </div>

            {/* Menu cards */}
            <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items">
                        <img src={recipe.image} alt="" />
                        <div className="menu-content">
                            <div className="heading">
                                <h5>{ recipe.title }</h5>
                                <p>{ recipe.price }</p>
                            </div>
                            <p>{ recipe.description }</p>
                            <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                }
            </div>
            <p className="more-menu">Hungry for more ➡️</p>
        </div>
 
    );
};

export default Menu;