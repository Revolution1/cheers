import "./cheer.scss";
import React from "react";
import cheerIcon from "@/img/beer.svg";
import sparkIcon from "@/img/spark.svg";
import GSAP from "react-gsap-enhancer";
import { TimelineMax, TweenMax } from "gsap";
import Detail from './detail/detail'

import { getScore } from "@/js/api";

class Cheer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loading: props.loading || false,
      loaded: props.loaded || false,
      score: {}
    };
  }

  componentDidMount() {
    this.cheerAnim = this.addAnimation(this.createCheerAnim);
    this.shakeAnim = this.addAnimation(this.createShakeAnim);
    this.shakeAnim.paused(!this.state.loading)
  }

  componentDidUpdate() {
    this.shakeAnim.paused(!this.state.loading)
    if (!this.state.loading)
      this.shakeAnim.seek(0);
  }

  createCheerAnim = ({ target }) => {
    const left = target.find({ name: "left" });
    const right = target.find({ name: "right" });
    const spark = target.find({ name: "spark" });

    return new TimelineMax({ repeat: 1, paused: true, onComplete: () => {
        this.setState({ show: false });
        // setTimeout(() => this.setState({ show: false }), 1000);
      } })
      .set(spark, { opacity: 0 })
      .to(right, 1, { scale: 1.3, x: "20", y: "-=50", rotation: -30, ease: Back.easeInOut.config(2) }, 1)
      .to(left, 1, { scale: 1.3, x: "-20", y: "-=50", rotation: 30, ease: Back.easeInOut.config(2) }, 1)
      .to(spark, 0.3, { opacity: 100 }, 1.7)
      .set(spark, { opacity: 0 });
  };

  createShakeAnim = ({ target }) => {
    let beer = target.find({ name: "beer" });
    let circle = target.find({ name: "circle" });

    return new TimelineMax({
      repeat: -1,
      repeatDelay: 0,
      paused: true,
      smoothChildTiming: true,
      onComplete: () => {
      }
    })
    .to(beer, 1, { rotation: -15}, 1)
    .to(beer, 1, { rotation: 0}, 2)
    .to(beer, 1, { rotation: 15}, 3)
    .to(beer, 1, { rotation: 0}, 4)
  };


  getData = () =>{
    getScore(this.props.login).then(res => this.setState({loading: false, loaded: true, score: res.data}))
  }

  handleClick = () => {
    if (this.state.loading)
      return
    this.slideAnime = this.addAnimation(({target}) =>{
      const circle = target.find({ name: "circle" });
      const loadingTxt = target.find({ name: "loading" });
      const tlm = new TimelineMax({paused: true})
      if (!this.state.loaded)
        tlm.to(circle, 2, {left: 5}, 0)
      tlm.fromTo(loadingTxt, 2, {opacity: 0}, {opacity: 100}, 1)
      return tlm
    })
    this.slideAnime.play()
    this.setState({ show: true, loading: true }, v => {
      this.cheerAnim.play(3);
      // 调用API
      this.getData()
    });
  };

  render() {
    let { show, loading, loaded, score} = this.state;
    let containerStyle = {
      position: "absolute",
      width: "100%",
      height: "100%"
    };

    let leftStyle = {
      display: show ? "inline" : "none",
      transform: "translate(-120px, -150px) rotateY(180deg)",
      width: "100px",
      height: "100px",
      zIndex: 999,
    };

    let rightStyle = {
      display: show ? "inline" : "none",
      transform: "translate(120px, -150px)",
      width: "100px",
      height: "100px",
      zIndex: 999,
    };

    let sparkStyle = {
        display: show ? "inline" : "none",
        opacity: '0',
        position: 'fixed',
        transform: 'rotate(180deg)',
        height: '80px',
        left: '110px',
        top: '130px',
    }

    return (
      <div className="cheer">
        <div className="bar">
          <div name="circle" className="circle" onClick={this.handleClick} style={{left: loaded? '5px': '110px'}}>
            <img name="beer" src={cheerIcon} />
          </div>
          {loading &&
            <span name="loading" className="bar-text" style={{opacity: 0}}>
              正在分析 ...
            </span>
          }
          {loaded && ! loading &&
            <span className="bar-text score">
              契合度：{score.total_score} 分
            </span>
          }
          <div style={containerStyle}>
            <img name="spark" src={sparkIcon} style={sparkStyle} />
            <img name="left" src={cheerIcon} style={leftStyle} />
            <img name="right" src={cheerIcon} style={rightStyle} />
          </div>
        </div>
        {loaded && <Detail score={score}/>}
      </div>
    );
  }
}

export default GSAP()(Cheer);
