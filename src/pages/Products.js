import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import itemInfo from "../itemInfo.json";
import DropDownMenu from "../components/Dropdownmenu";
import '../styles/Products.css';
import { useLocation } from "react-router-dom";
import UseScrollToTop from "../components/ScrollToTop";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = (props) => {
    const renderSwitch = (param) => {
        switch(param){
            case 'all':
                setFilterName('All Products');
            break;
            case 'keyboard':
                setFilterName('Keyboards');
            break;
            case 'mouse':
                setFilterName('Mice');
            break;
            case '':
                setFilterName('Keyboards');
            break;
            case 'monitor':
                setFilterName('Monitors');
            break
            case 'chair':
                setFilterName('chairs');
            break;
            case 'Ninja':
                setFilterName("You're looking at the ninja kit");
            break
            case 'Newbie':
                setFilterName("You're looking at the Newbie kit");
            break
            case 'Master':
                setFilterName("You're looking at the Merge Master kit");
            break
            default: 
                setFilterName('')

        }


    }
    
    const [productArray, setProductArray] = useState(itemInfo);
    const [filterDisplay, setFilterDisplay] =useState('');
    const [filterName, setFilterName] = useState('')
    const [open, setOpen] = useState(false);
    const handleButton = (e) => {
        setOpen(!open);
        renderSwitch(e.target.value)
        e.target.value === "all" ? setProductArray(itemInfo) && setFilterName('') :  setProductArray(itemInfo.filter((item)=>(item.level === e.target.value || e.target.value === item.type )))
       
    }
    const location = useLocation();

    useEffect(()=>{
        AOS.init({duration:2000}); 
        window.scrollTo(0, 0)
         location.state && setProductArray(itemInfo.filter((item)=>(item.level === location.state.level)));
         location.state && renderSwitch(location.state.level);
        
    },[])
    

    
    

    return (
        <div ref={UseScrollToTop()} style={{minHeight: '80vh'}}>
            <div data-aos="fade-down" className="title-sections">
            <h1>Checkout Our Products</h1>
            <div className="filter-section">
                <div onClick={()=> setOpen(!open)}>Filter
                {open && <DropDownMenu handleButton={handleButton}/>} 
                </div>
                <h2 className='title-h2'>{filterName}</h2>
            </div>

            </div>
            <div className="product-container">
            {productArray.map((item)=>(
            <Product
            key={item.id} 
            id={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            price={item.price}
            level={item.level}
            type={item.type}
            item={false}
            
            />))}

            </div>
            

            
        </div>
    )
}

export default Products;