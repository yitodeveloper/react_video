import React, { Component} from 'react';
import HomeLayout from '../components/home-layout.jsx'
import Categories from '../../categories/components/categories.jsx'
import Related from '../components/related.jsx'
import ModalContainer from '../../widgets/containers/modal.jsx'
import Modal from '../../widgets/components/modal.jsx'
import HandleError from '../../error/containers/handle-error.jsx'
import VideoPlayer from '../../player/container/video-player.jsx'

class Home extends Component{
    state = {
        modalVisible: false
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false,
        })
    }
    handleOpenModal = () => {
        this.setState({
            modalVisible: true
        })
    }
    render(){
        return (
            <HandleError>
                <HomeLayout>
                    <Related/>
                    <VideoPlayer
                        autoplay={true}
                    />
                    <Categories 
                        categories={this.props.data.categories} 
                        handleOpenModal={this.handleOpenModal}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h1>Hola soy un modal</h1>
                            </Modal>
                        </ModalContainer> 
                    }
                    
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home;