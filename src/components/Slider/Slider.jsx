import { ArrowLeftOutlined, ArrowRightOutlined  } from '@mui/icons-material';
import {useState} from 'react';
import './Slider.scss'
//slides
import Kdan1 from '../../assets/f3.png';
import Kdan2 from '../../assets/f4.png'
import Kdan3 from '../../assets/f2.png';
import { NavLink } from 'react-router-dom';

const slides = [
    {
        id: 1,
        img: Kdan1,
        title: "Exclusive research on tax issues in Kenya",
        link: "#featured"
    },
    {
        id: 2,
        img: Kdan2,
        title: "Resources to help you file returns easily",
        link: "/about"
    },
    {
        id: 3,
        img: Kdan3,
        title: "Informational materials and tax insights",
        link: "/news",
    }
    
]

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }
    
    return (
        <div className="slider container">
                
        <div className="arrow"  onClick={() => handleClick("left")}>
           <ArrowLeftOutlined />
        </div>
           
           <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
            {
                slides && slides.map(slide => {
                    return (
                        <div className="slider" style={{background: slide.img}} key={slide.id}>
                            <div className="image-container">
                                <img src={slide.img} alt={slide.title.split(" ").join("_")} />
                            </div>
                            <div className="info">
                                <h1>{slide.title}</h1>
                               <NavLink to={slide.link} className='btn' title={slide.title.split(" ")[0] + "..."}>LEARN MORE</NavLink>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        
        <div className="arrow" onClick={() => handleClick("right")}>
           <ArrowRightOutlined />
        </div>
    </div>
    );
}