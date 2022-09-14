import React from 'react'
import "./BodyContainer.css"

import { FiSave } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"
import { BiGroup } from "react-icons/bi"
import { RiPagesFill } from "react-icons/ri"
import { BsCalendar4Event } from "react-icons/bs"
import { BsFillEmojiSmileFill } from "react-icons/bs"
import { FaLink } from "react-icons/fa"
import { RiFileGifLine } from "react-icons/ri"
import { IoIosContrast } from "react-icons/io"
import { FaCameraRetro } from "react-icons/fa"
import { BsEmojiSmile } from "react-icons/bs"
import { BiSearchAlt2 } from "react-icons/bi"
import { BsGlobe } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { RiShareForwardLine } from "react-icons/ri"
import { GoComment } from "react-icons/go"
import { BiChevronDown } from "react-icons/bi"
import { RiSendPlaneFill } from "react-icons/ri"
import { FcLike } from "react-icons/fc"
import { AiFillLike } from "react-icons/ai"
import { FaAngry } from "react-icons/fa"
import { BsEmojiDizzyFill } from "react-icons/bs"
import { BsEmojiLaughingFill } from "react-icons/bs"
import { BsFillFlagFill } from "react-icons/bs"
import { GrEdit } from "react-icons/gr"
import { RiDeleteBin5Line } from "react-icons/ri"
import { FiLink } from "react-icons/fi"
import { BsFillPlusCircleFill } from "react-icons/bs"







            















export default function BodyContainer() {
  return (

    <div className="content-area">
      <div className="container">
        <div className="content">
          {/* left-area start hear */}
          <div className="left-side-content">
            <div className="explore-btn">
              <h3>Explore</h3>
              <ul>
                <li><span><FiSave /></span> Saved Posts</li>
                <li><span><BsPerson /></span> People</li>
                <li><span><BiGroup /></span> Groups</li>
                <li><span><RiPagesFill /></span> Pages</li>
                <li><span><BsCalendar4Event /></span> Events</li>
              </ul>
            </div>
            <div className="download-link">
              <h3>Download App</h3>
              <div className="link">
                <img src="https://i.ibb.co/6y6nwq3/appleplaystore.png" alt="" />
                <img src="https://i.ibb.co/rwxvZ5T/goggleplaystore.jpg" alt="" />
              </div>
            </div>
            <div className="suggested-people">
              <h3>suggested People</h3>
              <div className="suggested-profile">
                <div className="suggest-img">
                  <img src="https://i.ibb.co/3C4qB6K/0x0.jpg" alt="" />
                </div>
                <div className="suggest-name">
                  <h3>Sadek Hossain</h3>
                </div>
                <div className="suggest-btn">
                  <input  type="submit" value='Add +' />
                </div>
              </div>
            </div>
          </div>
          {/* left-area end here  */}


          {/* middle-area start here */}

          
          <div className="middle-content">
            {/* story area start here */}
            <div className="story-img">
              <div className="img1">
                <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                <div className="story-image-icon">
                <h5><BsFillPlusCircleFill/></h5>
                  <h6>Your story</h6>
                </div>
              </div>
              <div className="img2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrnAR-VrauLKyAl4p2QQFXGxhZq6d6B-ovw&usqp=CAU" alt="" />
                <div className="story-image-details">
                  <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                  <h4>Adnan Chowdhury</h4>
                </div>
              </div>
            </div>
            {/* story area end here */}


           {/* timeline start here */}
            <div className="create-story">
              <div className="story-content">
                <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                <input className='' type="search" placeholder="Create a new post..." />
              </div>
              <div className="story-link">
                <p><span><IoIosContrast /></span> Background </p>
                <p><span><FaCameraRetro /></span> Photo/Video </p>
                <p><span><BsEmojiSmile /></span> Feeling/Activity </p>
              </div>
            </div>
           {/* timeline end here */}




            {/* public post start here */}
            <div className="public-post">
              <h3>
                Public post <span>Friend post</span>
              </h3>
            </div>
            {/* public post end here */}




           {/* single post starae here */}

            {/* Adnan chowdhury post here */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                  <p>
                    Adnan Chowdhury <br /> <span> 1 hours ago <BsGlobe /> </span>
                  </p>
                </div>
                <div className="arrowbar">
                  <p><BiChevronDown/></p>
                  <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>your favourite game</p>
                  <div className="poll">
                    <div className="poll-create-profile">
                      <div className="input">
                        <input type="checkbox" />
                      </div>
                      <div className="poll-details">
                        <p>Added by You</p>
                        <h4>Football</h4>
                      </div>
                      <div className="vote">
                        <div className="vote-profile">
                          <img className='w-25 h-25 me-2 img-fluid rounded-circle' src="https://s.car.info/g/no-avatar.jpg" alt="" />
                          <p>1 vote</p>
                        </div>
                        <div className="close-vote">
                          <div className="close">
                            <AiFillCloseCircle />
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="poll-create">
                      <div className="input">
                        <input type="checkbox" />
                      </div>
                      <div className="poll-details">
                        <p>Added by You</p>
                        <h4>Cricket</h4>
                      </div>
                     
                      <div className="close-vote-btn">
                          <div className="close-btn">
                            <AiFillCloseCircle />
                          </div>
                        </div>
                    </div>
                    <div className="poll-create">
                      <div className="input">
                        <input type="checkbox" />
                      </div>
                      <div className="poll-details">
                        <p>Added by You</p>
                        <h4>Badminton</h4>
                      </div>
                    
                      <div className="close-vote-btn">
                          <div className="close-btn">
                            <AiFillCloseCircle />
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="like-comment-count">
                  <div className="like"></div>
                  <p>1 Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
                <div className="comment-bar">
                  <div className="user-image">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                  </div>
                  <div className="single-comment-bar">
                    <div className="gif">
                      <div className="gif-details">
                        <div className="gif-image">
                          <p>Adnan Chowdhury</p>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjUh_r6fI3Vsz2hrtDX4BLqXgRNhULv1-vcA&usqp=CAU" alt="" />
                        </div>
                        <div className="gif-like-info">
                          <p>like</p>
                          <p>Reply</p>
                          <span>. 54 minutes ago</span>
                        </div>
                      </div>
                      <div className="dot">
                        <p>...</p>
                      </div>
                    </div>
                    <div className="comment1">
                      <div className="up">
                        <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                        <div className="user-comment">
                          <p>Adnan Chowdhury</p>
                          <span>hlo</span>
                        </div>
                        <p>...</p>
                      </div>
                      <div className="down">
                        <p>
                          Like . <span>1 second ago</span>
                        </p>
                      </div>
                    </div>
                    <div className="write-comment">
                      <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                      <div className="icon-bar">
                        <p><BsFillEmojiSmileFill /></p>
                        <p><FaLink /></p>
                        <p><RiFileGifLine /></p>
                      </div>
                      <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-reply'><RiSendPlaneFill/></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adnan Chowdhury post here */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                  <p>
                    Adnan Chowdhury <span> 😊 is feeling ok </span>
                    <br />
                    <span>

                      1 hours ago <BsGlobe />
                    </span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                  <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>Have a good day!</p>
                  <div className="image-gallery">
                    <div className="up-image">
                      <img src="https://i.ibb.co/brgMB4B/download-1.jpg" alt="" />
                      <img src="https://i.ibb.co/xgXfxzb/download.jpg" alt="" />
                    </div>
                    <div className="down-image">
                      <img src="https://i.ibb.co/V9WrVtm/images-4.jpg" alt="" />
                      <img src="https://i.ibb.co/VjwwMyH/images-5.jpg" alt="" />
                      <div className="opacity-image">
                      <img src="https://i.ibb.co/4NSdNyY/images-6.jpg" alt="" />
                      <div className="image-content">
                      <h5 className='opacity-tag'>+1</h5>
                      </div>
                    
                      </div>
                      {/* <img src="https://i.ibb.co/4NSdNyY/images-6.jpg" alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                 
                  <p><span><FcLike/></span> You</p>
                  </div>
                </div>
                <div className="like-comment-bar">
                <p><FcLike/> Love</p>
                  <p>
                    <span> Comment</span>
                  </p>
                  <p>
                    <span> share</span>
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
           
            </div>

            {/* Alfared parchment post here */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/1nNkBPQ/vertical-shot-black-man-wearing-sanitary-mask-181624-40475.jpg" alt="" />
                  <p>
                    alfared parchment <span>updated her profile picture</span>
                    <br />
                    <span> 17 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <img src="https://i.ibb.co/1nNkBPQ/vertical-shot-black-man-wearing-sanitary-mask-181624-40475.jpg" alt="" />
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p><span className='text-primary'><AiFillLike/></span> 3</p>
                   
                  </div>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sakil ahmed post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/Tv1dd4b/images-3.jpg" alt="" />
                  <p>
                    Shakil Ahmed ➲ BLACK BUSINESS OWNERS <br />
                    <span> 21 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>Hi everyone</p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                    <p className='text-primary'><AiFillLike/><span className=''><FcLike/></span></p>
                    <span> 6</span>
                  </div>
                  <p>1Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
              </div>
            </div>



{/* Flo Pharoah post here */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                  <p>
                    Flo Pharoah <br />
                    <span> 23 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
            
              <div className="post-information">
                  {/* timeline post show here */}
                <div className="post">
                  <p>
                    Stop confusing tempoporay happiness for long term connection:
                    there are some people that come into your life that is just
                    there for the moments! Not everyone deserves your inside story
                    or all you commitment and loyalty abd not everyone is meant to
                    be placed in first,some are literally in your life. #learn your
                    placein peoples life and place people where they should be
                    inyours and don't force anything extra!!
                  </p>
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                </div>

                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/><span className=''><FcLike/></span><span className='text-danger'><FaAngry/></span></p>
                    <span> You and 2 others</span>
                  </div>
                </div>
              {/* timeline post end here */}

                {/* like comment bar start  */}
                <div className="like-comment-bar">
                  <p><span className='text-danger'><FaAngry /></span> Angry</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                {/* like comment bar end  */}

                {/*write comment area start here*/}
               <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
                {/*write comment area end here*/}

              </div>
            </div>

            {/* Habib hossain post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                  <p>
                    Habib Hossain <br />
                    <span> 24 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <img src="https://i.ibb.co/s6qLKLM/10-of-the-most-beautiful-places-to-visit-in-Laos.jpg" alt="" />
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/><span className=''><FcLike/></span></p>
                    <span> You and 1 other</span>
                  </div>
                  <p>1Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span className='text-primary'><FcLike /></span> Love</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment">
                    <p>View more comments</p>
                  </div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>


            {/* flo pharoah post */}

            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                  <p>
                    Flo Pharoah <br />
                    <span> 25 hour ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>
                    Stop confusing tempoporay happiness for long term connection:
                    there are some people that come into your life that is just
                    there for the moments! Not everyone deserves your inside story
                    or all you commitment and loyalty abd not everyone is meant to
                    be placed in first,some are literally in your life. #learn your
                    placein peoples life and place people where they should be
                    inyours and don't force anything extra!!💯💜
                  </p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/><span className='text-warning'><BsEmojiDizzyFill/></span><span className=''><FcLike/></span></p>
                    <span> 9</span>
                  </div>
                  <p>1Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mac dusa post */}

            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/0qRKNb6/download-2.jpg" alt="" />
                  <p>
                    Mac Dusa
                    <br />
                    <span> 25 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>
                    Without trust in a relationship, is there even a relationship?
                  </p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/></p>
                    <span> 3</span>
                  </div>
                  <p>3Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment">
                    <p>View more comments</p>
                  </div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* flo pharoah post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                  <p>
                    Flo Pharoah
                    <br />
                    <span> 26 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>
                    I never seeked validation so your opinion of my opinion is
                    something you really could've kept to yourself
                  </p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/></p>
                    <span> 2</span>
                  </div>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* flo pharoah post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                  <p>
                    Flo Pharoah
                    <br />
                    <span> 26 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>The fact that we are letting love die sicknens mel!!😖</p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/><span className=''><FcLike/></span></p>
                    <span> 3</span>
                  </div>
                </div>
                <div className="like-comment-bar">
                  <p><span className='red'><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* sadek hossain post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/3C4qB6K/0x0.jpg" alt="" />
                  <p>
                    Sadek Hossain
                    <br />
                    <span> 27 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className=" sadek-timeline-post" >
                  <span>
                    Click your home icon to refresh <br />
                    feed!
                  </span>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/><span className=' text-warning'><BsEmojiLaughingFill/></span></p>
                    <span> 3</span>
                  </div>
                  <p>3 Comments</p>
                </div>
                <div className="like-comment-bar">
                  <p><span className='red'><BiLike /></span> Love</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment">
                    <p>View more comments</p>
                  </div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kamran ahmed post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/xC8FFQN/istockphoto-1200677760-612x612.jpg" alt="" />
                  <p>
                    Kamran Ahmed
                    <br />
                    <span>

                      27 days ago <BsGlobe />
                    </span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>jhe</p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-warning'><BsEmojiLaughingFill/><span className='text-primary'><AiFillLike/></span></p>
                    <span> 3</span>
                  </div>
                  <p>1Comment</p>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Love</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment">
                    <p>View your comment</p>
                  </div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>


            {/* flo pharoah post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/ZdTbPDB/getty-481292845-77896.jpg" alt="" />
                  <p>
                    Flo Pharoah
                    <br />
                    <span> 28 days ago <BsGlobe /></span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>
                    #Grandrising 👷🏻‍♂️&💂🏻 !! remember, it is not a "mistake" for someone to
                    treat you in a way they wouldn't want to be treated! if they cared about
                    you enough those actions would've never been crossed their minds!!🥀💯
                  </p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className=''><FcLike/><span className='text-primary'><AiFillLike/></span><span className='text-warning'><BsEmojiDizzyFill/></span></p>
                    <span> 3</span>
                  </div>
                </div>
                <div className="like-comment-bar">
                  <p><span><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment"></div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>

            {/* salman ahmed post */}
            <div className="single-post">
              <div className="user-info-post">
                <div className="user-details">
                  <img src="https://i.ibb.co/3C4qB6K/0x0.jpg" alt="" />
                  <p>
                    salman Ahmed
                    <br />
                    <span>

                      29 days ago <BsGlobe />
                    </span>
                  </p>
                </div>
                <div className="arrowbar">
                <p><BiChevronDown/></p>
                <div class="side-menu">
                            <ul>
                                <li><FiSave /><span>Save Post</span></li>
                                <li><BsFillFlagFill/><span>Report Post</span> </li>
                                <li><GrEdit/><span> Edit Post</span></li>
                                <li><RiDeleteBin5Line/><span> Delete Post</span></li>
                                <p className="hr"></p>
                                <li><FiLink/><span>Open Post in new Tab</span> </li>
                            </ul>
                        </div>
                </div>
              </div>
              <div className="post-information">
                <div className="post">
                  <p>hello</p>
                </div>
                <div className="like-comment-count">
                  <div className="like">
                  <p className='text-primary'><AiFillLike/></p>
                    <span> 2</span>
                  </div>
                </div>
                <div className="like-comment-bar">
                  <p><span ><BiLike /></span> Like</p>
                  <p>
                    <span><GoComment /> </span>Comment
                  </p>
                  <p>
                    <span><RiShareForwardLine /> </span>Share
                  </p>
                </div>
                <div className="write-comment-info">
                  <div className="show-comment">
                    <p>View your comment</p>
                  </div>
                  <div className="write-comment">
                    <img src="https://images.assetsdelivery.com/compings_v2/tuktukdesign/tuktukdesign1606/tuktukdesign160600119.jpg" alt="" />
                    <div className="icon-bar">
                      <p><BsFillEmojiSmileFill /></p>
                      <p><FaLink /></p>
                      <p><RiFileGifLine /></p>
                    </div>
                    <input className='input-field' type="text" placeholder="Write a comment" />
                    <span className='icon-send'><RiSendPlaneFill/></span>
                  </div>
                </div>
              </div>
            </div>
           {/* single post end here */}

            {/* footer area */}
            <div className="footer">
              <h3>There are No Posts Found!</h3>
              <p>Keep checking back later or refresh to get more feeds!</p>
            </div>
          </div>
          {/* middle-area end here */}


          {/* right area start here */}
          <div className="right-side-content">
            <div className="follower">
              <h3>You Might Like</h3>
              <div className="profile">
                <img src="https://thumbs.dreamstime.com/b/user-icon-flat-style-person-icon-user-icon-web-site-user-icon-vector-illustration-user-icon-flat-style-person-icon-user-131140097.jpg" alt="" />
                <p>
                  Sadfa
                  <br />
                  <span>sdafa</span>
                </p>
              </div>
              <div className="follower-btn">

                <button className="secondary-btn me-2 ">Ignore</button>
                <button className="danger-btn">Follow</button>
              </div>
            </div>
            <div className="friends">
              <h3>Your Friends</h3>
              <span className='text-secondary icon'><BiSearchAlt2 /></span>
              <input className='input-field' type="search" />
              <div className="friends-profile">
                <div className="single-profile">
                  <img src="https://thumbs.dreamstime.com/b/user-icon-flat-style-person-icon-user-icon-web-site-user-icon-vector-illustration-user-icon-flat-style-person-icon-user-131140097.jpg" alt="" />
                  <p>admin .</p>
                </div>
                <div className="single-profile">
                  <img src="data:image/jpeg;base64,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" alt="" />
                  <p>Kazi Musharrof Shishir</p>
                </div>
              </div>
            </div>
          </div>
          {/* right area end here  */}
        </div>
      </div>
    </div>

  )
}




























