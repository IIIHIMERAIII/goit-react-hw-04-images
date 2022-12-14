import React from "react";
import { SearchBar } from "./searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/imageGallery";
import { getDataByName } from "./services/api";
import { Loader } from "./loader/loader";
import { Button } from "./button/button";
import { Modal } from "./modal/modal"
import { useEffect } from "react";
import { useState } from "react";


const App = () => {
  const [pictures, setPictures] = useState([]);
  const [searchQ, setSearchQ] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setLoader] = useState(false);
  const [modalImg, setModalImg] = useState("");

  useEffect(() => {
    if (searchQ) {
      getApiByName();
    }

    async function getApiByName() {
      try {
        setLoader(true);
        const data = await getDataByName(searchQ, page);
        if (!data.hits.length) {
          setLoader(false);
          return alert("Sorry, we not found images...");
        }
        setPictures(prevState => [...prevState, ...data.hits]);
        setLoader(false);
        return;
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchQ, page]);

  const searchImg = searchQuerry => {
    if (!searchQuerry || searchQuerry === searchQ) return;
    setSearchQ(searchQuerry);
    setPage(1);
    setPictures([]);
  };

  const onClickLoadMore = () => {
    setPage(page + 1);
  };

  const onModalOpen = url => {
    setModalImg(url);
  };

  const onModalClose = () => {
    setModalImg('');
  };

  return (
    <div>
      <SearchBar
        onFind={searchImg} />
      <ImageGallery
        data={pictures}
        onClick={onModalOpen}
      />
      {isLoading && <Loader />}
      {modalImg && (
        <Modal
          closeModal={onModalClose}
          url={modalImg}
        />)}
      <Button
        onClick={onClickLoadMore}
        isLoading={isLoading}
        Pictures={pictures}
      />
    </div>
  )
};
export { App }
