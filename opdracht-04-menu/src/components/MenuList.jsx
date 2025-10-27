
import { useState } from "react";
import Menu from './Menu.jsx';
import data from '../data.js';

const MenuList = () => {
        const [gerechten, setGerechten] = useState(data)
        return (
                <section>

                        {gerechten.map((menu, index) => (
                                <Menu className="menu-container"
                                        key={index}
                                        title={menu.title}
                                        category={menu.category}
                                        price={menu.price}
                                        img={menu.img}
                                        desc={menu.desc} />
                        ))}


                </section>
        );
}



export default MenuList;

