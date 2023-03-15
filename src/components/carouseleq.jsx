
import React, {useState, useEffect} from 'react';
import '../css/style.css';
import  Carousel from 'react-elastic-carousel';
import axios from 'axios';
//import Slider from 'react-slick'

const breakPoints = [
  { width: 1, itemsToShow: 3 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function Carouseleq() {
   
  //Funcion para cambio de estado
  const [category, setCategory] = useState(['']);
  console.log(category)

  //Funcion para llamar a la API
  useEffect(() => {
     
    //llamado asincronico de la API
    const obtenerCategory = async() => {
        const url = 'https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory';
        const result = await axios.get(url)
          .catch(error => {
            console.log(error)
          });
          /*  console.log(result)  //probar con sin await tambien
          console.log(result.data) 
           console.log(result.data.Categorias)  */

          setCategory(result.data.Categorias)
    }
    obtenerCategory()
  }, []);
  console.log(category,'category') //comprobar si trae el array del api

  //console.log(category.map(function(categorias,i){return( {categorias})}),'map')
   
  return (
    <div className='carousel' >
   <Carousel breakPoints={breakPoints} className="contCarousel">
  {
    category.map((categorias, i) => {
      return(
       <div className='cajas'> <item className="item" key={i}>{categorias}</item></div>
        
      )
    })
   } 
  {/*  <item>Hola1</item>
   <item>Hola2</item>
   <item>Hola3</item>
   <item>Hola4</item>
   <item>Hola5</item>
   <item>Hola6</item> */}
   </Carousel>
   
    </div>
  )
}

export default Carouseleq
















/* function Carouseleq() {
     const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }; 

  return (
    <div>
      <Slider {...settings}> 
     <div className='card'>
      <h3>Hola1</h3>
    </div>
    <div className='card'>
      <h3>Hola2 Hola2 </h3>
    </div>
    <div className='card'>
      <h3>Hola3 Hola3 Hola3</h3>
    </div>
    <div className='card'>
      <h3>Hola4 Hola4 Hola4 Hola4</h3>
    </div>
    <div className='card'>
      <h3>Hola5 Hola5 Hola5 Hola5</h3>
    </div>
    <div className='card'>
      <h3>Hola6 Hola6 Hola6 Hola6</h3>
    </div>

      </Slider>


    </div>
  )
}

export default Carouseleq
 */





