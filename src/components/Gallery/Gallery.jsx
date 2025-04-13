import React from "react";
import Lightroom from "react-lightbox-gallery";
import GalleryImg1 from "../../assets/images/slider/22.png";
import GalleryImg3 from "../../assets/images/slider/tabib.png";
import GalleryImg4 from "../../assets/images/slider/rustam.png";
import GalleryImg6 from "../../assets/images/slider/ti2.jpg";
import GalleryImg7 from "../../assets/images/slider/ti3.jpg";

const Gallery = () => {
   var images = [
      {
         src: GalleryImg1,
         desc: "Doktor Dilmurod Ergashov Tibomedni doimiy iste'mol qiladilar",
         sub: "Tibomed",
      },
      {
         src: GalleryImg3,
         desc: "Blonde woman wearing sunglasses smiling at the camera ",
         sub: "Dmitriy Frantsev",
      },
      {
         src: GalleryImg6,
         sub: "Harry Cunningham",
      },
      {
         src: GalleryImg4,
         desc: "Jaipur , Rajasthan India",
         sub: "Liam Baldock",
      },
      {
         src: GalleryImg7,
         sub: "Verne Ho",
      },
      {
         src: GalleryImg6,
         desc: "Rann of kutch , India",
         sub: "Hari Nandakumar",
      },
   ];

   var settings = {
      columnCount: {
         default: 3,
         mobile: 2,
         tab: 3,
      },
      mode: "dark",
      enableZoom: false,
   };
   return <Lightroom images={images} settings={settings} />;
};

export default Gallery;
