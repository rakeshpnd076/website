import React from 'react';
import vg from "../asseets/2.webp";
import 
{AiFillGoogleCircle,
     AiFillAmazonCircle,
      AiFillYoutube, 
      AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>Techystar</h1>
            <p>Solution to all your Problems!</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only soluction to the tech problems you face everyday. We are leading tech company who aim is to increase the problem solving ability in Children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit possimus, ipsam vitae corrupti amet et rerum, necessitatibus corporis nam cumque repellat a fugiat! Sit, veniam voluptates. Exercitationem, voluptatum inventore nisi natus quasi ullam reiciendis repudiandae corporis tempora vel, corrupti laudantium libero, quisquam laborum expedita praesentium atque nostrum ex adipisci consequuntur? Ratione ut obcaecati pariatur possimus quas nam non eligendi. Saepe repudiandae praesentium optio quo omnis, eum voluptatibus laboriosam sequi velit! Rem eligendi consequatur recusandae, cupiditate neque dicta explicabo distinctio totam sed!</p>
        </div>
    </div>

    <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={{animationDelay: "0.3s"}}>
                        <AiFillGoogleCircle />
                        <p>Google</p>
                    </div>
                    <div style={{animationDelay: "0.5s"}}>
                        <AiFillAmazonCircle />
                        <p>Amazon</p>
                    </div>
                    <div style={{animationDelay: "0.7s"}}>
                        <AiFillYoutube />
                        <p>Youtube</p>
                    </div>
                    <div style={{animationDelay: "0.9s"}}>
                        <AiFillInstagram />
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
    </div>
    </>
  )
}

export default Home;