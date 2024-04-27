import React, { useEffect, useState } from 'react'
import './gallery-page.scss'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataGallery } from '../../redux/gallery/gallery';
import Loader from '../../components/loader/loader';


function GalleryPage() {

  const dispatch = useDispatch()

  const gallery = useSelector(state => state.gallerySlice.gallery)
  console.log(gallery, 'gallery');

  useEffect(() => {
    dispatch(fetchDataGallery())
  }, [dispatch])

  return (
    <div className='galleryPage'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3, 1440: 3, 1920: 3 }}
      >
        <Masonry
          columnsCount={3}
          gutter="20px"
        >
          {gallery ? gallery.map((items) => (
            <div key={items.id}>
              {Fancybox.bind('[data-fancybox="gallery"]', {
                src: items.image
              })}
              <img src={items.image} data-fancybox="gallery" />
              <p>{items.title}</p>
            </div>
          )) : <Loader />}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default GalleryPage