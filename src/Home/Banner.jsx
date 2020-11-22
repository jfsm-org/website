import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';
import BannerImage from './BannerImage';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  }
  static defaultProps = {
    className: 'home-banner',
  }
  render() {
    const { className } = this.props;
    return (
      <div className={`home-layout-wrapper ${className}`}>
        <div className="home-layout">
          <QueueAnim className={`${className}-content-wrapper`} delay={300} ease="easeOutQuart">
            <h1 key="h2">
            睿帆商贸
            </h1>
            <p key="p">为您提供专业的软件开发与咨询服务，满足不同行业的个性化需求</p>
            <span key="button">
              <Button
                type="primary"
                onClick={() => {
                window.location.href = 'https://item.taobao.com/item.htm?spm=a1z10.3-c-s.w4002-23310051823.9.75e817afUxwpZ2&id=632430187423';
              }}
              >
                联系我们
              </Button>
            </span>
          </QueueAnim>
          <div className={`${className}-image-wrapper`}>
            <BannerImage />
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
