import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button } from 'reactstrap';
import Desktop_L from './Desktop_L';
import Header from './Header';

const items = [
    {
        src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg',
        alt: 'Interview of Prof. Chandra',
        captionT: 'hahahaha',
        captionH: 'haeyyy'
    },
    {
        src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg',
        alt: 'Slide 2',
        captionT: 'Slide 2',
        captionH: 'slide 2'
    },
    {
        src: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2019/3/7/w900X450/Take_in_the_Scenery.jpg',
        alt: 'Slide 3',
        captionT: 'Slide 3',
        captionH: 'Slide 3'
    },
]

class Achievements extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            activeIndex: 0,
            animating: false,
            back: false
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.back = this.back.bind(this);
        this.handlePopout = this.handlePopout.bind(this);
        // this.slides = this.slides.bind(this);
    }

    next() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    previous() {
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            activeIndex: nextIndex,
        });
    }

    goToIndex(newIndex) {
        if (this.state.animating) return;
        this.setState({
            activeIndex: newIndex,
        });
    }
    back() {
        this.setState({
            back: true
        })
    }

    handlePopout() {
        return (
            <Redirect to="Desktop_L" />
        )
    }




    render() {
        if (this.state.back) {
            return (
                <Desktop_L />
            )
        }
        let slides = items.map((item) => {
            return (
                <CarouselItem onExiting={() => this.setState({ animating: true })}
                    onExited={() => this.setState({ animating: false })}
                    key={item.src}>
                    <div className="container d-flex justify-content-center" id="card1">
                        <img style={{ width: "80%", maxHeight: "95%" }} className="img-fluid" id="img1" src={item.src} alt={item.alt_text} />
                    </div>
                    <div className="container d-flex justify-content-center" id="cardText">
                        <CarouselCaption captionText={item.captionT} id="cardText" className="text-dark" captionHeader={item.captionH} />
                    </div>
                </CarouselItem>
            );
        });
        return (
            <div style={{ overflowY: "none" }}>
                <Header />
                <div style={{ height: "100vh", width: "100vw" }} className="bg_header" >
                    <div className="my-auto">
                        <Carousel activeIndex={this.state.activeIndex} next={this.next} previous={this.previous} >
                            <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;
