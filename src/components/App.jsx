import React from "react";
import { SearchBar } from "./searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/imageGallery";
import { getDataByName } from "./services/api";
import { Loader } from "./loader/loader";
import { Button } from "./button/button";
import { Modal } from "./modal/modal"

export class App extends React.Component {
  state = {
    pictures: [],
    searchQ: "",
    page: 1,
    isLoading: false,
    error: "",
    modalImg: "",
  };


  componentDidUpdate(_, prevState,) {
    const getApiByName = async (searchQ, page) => {
      try {
        this.setState({ isLoading: true });
        const data = await getDataByName(searchQ, page);
        this.setState({ isLoading: false });
        const arr = data.hits;
        this.state.pictures.push(...arr);
      } catch (err) {
        this.setState({
          error: err.message,
        });
      } finally {
        this.setState({ isLoading: false })
      }
    }
    if (prevState.searchQ !== this.state.searchQ) return getApiByName(this.state.searchQ, this.state.page);
    if (prevState.page !== this.state.page) return getApiByName(this.state.searchQ, this.state.page);
    else return;
  };

  onFind = (search) => {
    this.setState({ searchQ: search, pictures: [], page: 1 })
  }

  onClick = () => {
    this.setState({ page: this.state.page + 1 });

  }

  onModalOpen = url => {
    this.setState({ modalImg: url });
  };

  onModalCLose = () => {
    this.setState({ modalImg: '' });
  };

  render() {
    let isLoading = this.state.isLoading;
    return (
      <div>
        <SearchBar
          onFind={this.onFind} />
        <ImageGallery
          data={this.state.pictures}
          onClick={this.onModalOpen}
        />
        {isLoading && <Loader />}
        {this.state.modalImg && (
          <Modal
            closeModal={this.onModalCLose}
            url={this.state.modalImg}
          />)}
        <Button
          onClick={this.onClick}
          isLoading={isLoading}
          Pictures={this.state.pictures}
        />
      </div>
    )
  }
}
