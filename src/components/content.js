import React from 'react';
import '../components/content.css';
import News1 from '../components/images/businessman.jpg';
import RecentNews1 from '../components/images/RecentNews1.jpg';
import RecentNews2 from '../components/images/RecentNews2.jpg';
import entertainment from '../components/images/entertainment.jpg';
import Entertainment1 from '../components/images/Entertainment1.jpg';
import Entertainment2 from '../components/images/Entertainment2.jpg';
import market from '../components/images/market.jpg';
import finance from '../components/images/finance.jpg';
import {UserOutlined,CalendarOutlined,PhoneOutlined,MailOutlined,
    TwitterOutlined,
    GithubOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    FacebookOutlined,
} from '@ant-design/icons'; 
import {FaCaretDown } from "react-icons/fa";

function content() {
    
    return (
    <div className='news-content'>
        <div className="bottom-navbar">
        <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="/allnews">All News</a></li>
                <li><a href="/politics">Politics</a></li>
                <li><a href="/sports">Sports</a></li>
                <li><a href="/entertainment">Entertainment</a></li>
                <li><a href="/Life">Life style</a></li>
                <li><a href="/environment">Environment</a></li>
                <li><a href="/travel">Travel</a></li>
                <li><a href="/business">Business</a></li>
                <li><a href="/tech">Tech and Science</a></li>
                <li><a href="/fashion">Fasion</a></li>
            </ul>
        </div>
        <div className='page-wrapper'>
            <div className='post-slider'>
                <h1 className='slider-title'>Trending News</h1>

                <div className='post-wrapper'>
                    <div className='post'>
                        <img src={News1} alt='BusinessMan' className='slider-image'/>
                        <div className='post-info'>
                            <h4><a href='/single'>One day your life will flash before your eyes</a></h4>
                            <UserOutlined /><p>Anoja Gamage</p>
                        </div> 
                    </div>
                    <div className='post'>
                        <img src={News1} alt='BusinessMan' className='slider-image'/>
                        <div className='post-info'>
                            <h4><a href='/single'>One day your life will flash before your eyes</a></h4>
                            <UserOutlined /><p>Anoja Gamage</p>
                        </div> 
                    </div>
                    <div className='post'>
                        <img src={News1} alt='BusinessMan' className='slider-image'/>
                        <div className='post-info'>
                            <h4><a href='/single'>One day your life will flash before your eyes</a></h4>
                            <UserOutlined /><p>Anoja Gamage</p>
                        </div> 
                    </div>
                </div>
            </div>

            <div className='content clearfix'>
                <div className='main-content'>
                    <h1 className='recent-post-title'>Recent News</h1>

                    <div className='post'>
                        <img src={RecentNews1} alt='BusinessMan' className='post-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>

                    <div className='post'>
                        <img src={RecentNews2} alt='MusicGirl' className='post-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>

                    <div className='post'>
                        <img src={RecentNews1} alt='BusinessMan' className='post-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>

                 </div>
                <div className='slidebar'>

                    <div className='section search'>
                        <h2 className='section-title'>Search</h2>
                        <form action='/' method='post'>
                            <input type='text' name='search term' className='text-input'placehodder='search..' />
                        </form>
                    </div>

                    <div className='section topics'>
                        <h2 className='section-title'>Topics</h2>
                        <ul>
                            <li><a href='#'>Entertainment</a></li>
                            <li><a href='#'>Politics</a></li>
                            <li><a href='#'>Tech and Science</a></li>
                            <li><a href='#'>Health</a></li>
                            <li><a href='#'>Life Style</a></li>
                            <li><a href='#'>Environment</a></li>
                            <li><a href='#'>Business</a></li>
                        </ul>
                    </div>

                </div>
            </div>



            <div className='content clearfix'>
                <div className='main-content'>
                    <h1 className='recent-post-title'>Entertainment News</h1>

                    <div className="category-navbar">
                    <ul>
                            <li><a className="active" href="#home">All</a></li>
                            <li><a href="/Music">Music</a></li>
                            <li><a href="/Movies">Movies</a></li>
                            <li><a href="/Games">Games</a></li>
                            <li><a href="/Celebrity<">Celebrity</a></li>
                            
                    </ul>
                    </div>
                    <div className='post'>
                        <img src={Entertainment1} alt='BusinessMan' className='entertainment-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>

                    <div className='post'>
                        <img src={Entertainment2} alt='MusicGirl' className='post-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>
                 </div>
                <div className='slidebar'>
                    <img className=' category-news' src={entertainment} alt='MusicGirl' />
                   
                    <div className='section topics'>
                        <h2 className='section-title'>Popular entertainment News</h2>
                        <ul>
                            <li><a href='#'>Entertainment</a></li>
                            <li><a href='#'>Politics</a></li>
                            <li><a href='#'>Tech and Science</a></li>
                            <li><a href='#'>Health</a></li>
                            <li><a href='#'>Life Style</a></li>
                            <li><a href='#'>Environment</a></li>
                            <li><a href='#'>Business</a></li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className='content clearfix'>
                <div className='main-content'>
                    <h1 className='recent-post-title'>Business </h1>

                    <div className="category-navbar">
                    <ul>
                            <li><a className="active" href="#home">All</a></li>
                            <li><a href="/finance">Finance</a></li>
                            <li><a href="/Movies">Money and Marketes</a></li>
                            <li><a href="/Games">Small Business</a></li> 
                    </ul>
                    </div>
                    <div className='post'>
                        <img src={market} alt='BusinessMan' className='entertainment-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>

                    <div className='post'>
                        <img src={finance} alt='MusicGirl' className='post-image'/>
                        <div className='post-preview'>
                            <h2><a href='/single'>The strongest and sweetest songs yet remain to be sung</a></h2>
                            <UserOutlined /><p>Anoja Gamage</p>
                            <p className='preview-text'>
                                Lorem ipsum dolor sit amet consectetor,adipisicing elit.
                            </p>
                            <a href='/single'  className='btn read-more'>Read More</a>
                        </div>
                    </div>
                 </div>
                <div className='slidebar'>
                    <img className=' category-news' src={finance} alt='Money' />
                   
                    <div className='section topics'>
                        <h2 className='section-title'>Popular Business News</h2>
                        <ul>
                            <li><a href='#'>Entertainment</a></li>
                            <li><a href='#'>Politics</a></li>
                            <li><a href='#'>Tech and Science</a></li>
                            <li><a href='#'>Health</a></li>
                            <li><a href='#'>Life Style</a></li>
                            <li><a href='#'>Environment</a></li>
                            <li><a href='#'>Business</a></li>
                        </ul>
                    </div>

                </div>
            </div>






            {/* footer */}

            <div className='footer'>
                <div className='footer-content'>
                    <div className='footer-section about'>
                        <h1 className='logo-text'>News<span>Today</span></h1>
                        <p></p>
                        <div className='contact'>
                        <PhoneOutlined /><span>&nbsp;123-456-789</span>
                        <MailOutlined /> <span>&nbsp;info@aaa-fta.com</span>
                        </div>
                        <div className='socials'>
                             <a href='#'><FacebookOutlined /></a>
                             <a href='#'><TwitterOutlined /></a>
                             <a href='#'><GithubOutlined /></a>
                             <a href='#'><YoutubeOutlined /></a>
                             <a href='#'><LinkedinOutlined /></a>
                        </div>
                    </div>
                    <div className='footer-section links'>
                        <h2>Category</h2>
                            <ul>
                                <li><a href='#'>Entertainment</a></li>
                                <li><a href='#'>Politics</a></li>
                                <li><a href='#'>Tech and Science</a></li>
                                <li><a href='#'>Health</a></li>
                                <li><a href='#'>Life Style</a></li>
                                <li><a href='#'>Environment</a></li>
                                <li><a href='#'>Business</a></li>
                            </ul>
                    </div>
                    <div className='footer-section contact-form'>
                        <h2>Popular News</h2>
                        <ul>
                                <li><a href='#'>The strongest and sweetest songs yet remain to be sung</a></li>
                                <li><a href='#'>One day your life will flash before your eyes</a></li>
                                <li><a href='#'>Tech and Science</a></li>
                                <li><a href='#'>Health</a></li>
                                <li><a href='#'>Life Style</a></li>
                                <li><a href='#'>Environment</a></li>
                                <li><a href='#'>Business</a></li>
                            </ul>
                    </div>
                </div>

                <div className='footer-bottom'>
                    &copy; AAA |design by Anoja Gamage
                </div>
            </div>


        </div>

    </div>

    )
}

export default content
