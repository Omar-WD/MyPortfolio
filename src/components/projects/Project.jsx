import React from "react";
import "./Project.css";

export default function Project() {
  const gradVideosSrc = [
    "1.mp4",
    "2.mp4",
    "3.mp4",
    "4.mp4",
    "5.mp4",
    "6.mp4",
    "7.mp4",
  ];
  const CarShopVideoSrc=[
    "aa.mp4",
    "bb.mp4",
    "cc.mp4",
  ]
  return (
    <div className="myProjects" id="projects">
      <h1 className="myServiceTitle">My Projects</h1>
      <h3 className="videoSectionParg">Car-Shop Project:</h3>
      <p className="videoSectionParg">
        It consists of a landing page which show information about the car-shop company, a small review about the shop, its services, how to contact them, their address and customers reviews.
        User can navigate using the navbar and move to the used cars page that shows a list of the available cars and a small details about each one of them next to its images. The images of the cars are displayed in carosel.
        Also user can filter the displayed cars by lot of available filters like model year, price, runned kilo meter, and others.
        If the user is interested in a car, he can click on it and it will show him more details about it and all the extra features, then he can contact the seller directly.
        This webpage is made by HTML, CSS, Bootstrap, JavaScript, React, MongoDb, Cloudinary, Node.js, express, Bycript... and other libraries.
        The owner of the car shop can post new car using his platform. he should navigate to the signin path which will ask him to place his email and password. If his data matched, he will be directed to the create path and he can start creating his new post. he can fill the form and upload images using cloudinray. 
        When pressing on the submit button the data will be posted in the mongo db , then it will be retrieved and displayed in the product or car list. As long as the user is signedin, he can display the delete button next to each car. When he finish his tasks, he can signout to delete the token and protect his website. 
      </p>
      <div className="videoSection">
        {CarShopVideoSrc.map((v, index) => (
          <video controls  key={index}>
            <source src={v} type="video/mp4" />
          </video>
        ))}
      </div>
      <h3 style={{textAlign:"center", color:"white", marginBottom:"50px"}}>*******************************</h3>
      <h3 className="videoSectionParg">Graduation Project:</h3>
      <p className="videoSectionParg">
       The Graduation project was made by me, Fred and Marie. It is a social learning platform specified from graduated students from the tech industry.
       our web page starts with a landing page which containes a clear discrpition about Code road web page and what they can expect from it.Also it containes a small summary about us ; the developers of this page.
       When the user get interested he can signup to have an account in our platform.After he signs-in he can change his profile image and add more info about him self. After that he can display all the posts posted by other users on the community platform.
       He can place his own post or image and interact with other's posts by liking comminting or even saving them for future review.
       User can also find a job using our job platform. He can simply write his job key word, and then he will have plenty of available jobs. He can filter them by date of post, city or by other types of filters. He can apply directly to his intended job post, and he can also save it for future review .
       After finding a job, user will be concerned about the job interview questions. For this reason, we have created the job interview section, where user can place his question and then he will recive plenty of ansewrs on it. Both answers and questions can be ranked or reviewed by other users and have points. The more the number of votes is high, the more the question or the answer is useful. User can specify from the beginning if his question is technical or not, and if yes, it is based on which category or language. This helps in filtering the questions later on. As other features, user can save important questions in order to memorize them in the future.
       One more feature user can get benifit from is the learning cards. He can write his question in the card and the answer in the second side of the card, and then after adding many cards, he can start practicing them. He can read the question on the front face of the card, then flip it to display the answer and compare it with his expected answer. Then he can move through the other cards by hitting the next button. He can also filter the cards using our filters dop down lists.
       The last section of our project is the saved section, in which user can find his saved posts, questions, jobs or even learning cards.
       In this project we have used  HTML, CSS, Bootstrap, JavaScript, React, MongoDb, Cloudinary, Node.js, express, Bycript... and other libraries.
      </p>
      <div className="videoSection">
        {gradVideosSrc.map((v, index) => (
          <video controls  key={index}>
            <source src={v} type="video/mp4" />
          </video>
        ))}
      </div>
      <h3 style={{textAlign:"center", color:"white", marginBottom:"50px"}}>*******************************</h3>
      <h3 className="videoSectionParg">Product Management System:</h3>
      <p className="videoSectionParg">
       The Idea behind this project is to practice the CRUD functions (CREATE, READ, UPDATE & DELETE). In this web page I have used just HTML, CSS, and pure Java Script; without using any library or framework like react.
       As the video shows, the user can create his own product by filling the input fields and select from the drop down list. After submitting the data will be stored in the local storage of his browser and the retrieve to display the product list in the table below.
       The user can filter the products by their names or categories.
       Each product has the update and delete buttons in it's row. User can update the product name, quantity, price or category. Also he can delete the single product.
       If the user wanted to clear the stock from all the products, he can just hit the delete all button.
      </p>
      <div className="videoSection">
          <video controls  >
            <source src="8.mp4" type="video/mp4" />
          </video>
      </div>
      <h3 style={{textAlign:"center", color:"white", marginBottom:"50px"}}>*******************************</h3>
      <h3 className="videoSectionParg">Portfolio Web Page:</h3>
      <p className="videoSectionParg">
       As a full stack web developer I must have my own portfolio web page. For this reason I have created this simple and well designed web page. It is fully responsive to all screen types and sizes. The navbar changes its colors depending on the scroller position.
       The page contains many videos and cards that contain Icons. They show beautiful shaddow color when hovered over them. They are organized and displayed in flex which is responsive to screen sizes. The videos can be shown in full screen.
       User can display me WBS Certifiacte and even download my CV. He can also view my Work and Education status ordered by the outline below.
       At the end of the page there is the contact me section that shows my current city on map and my contact details.
      </p>
      <div className="videoSection">
          <video controls  >
            <source src="dd.mp4" type="video/mp4" />
          </video>
      </div>
    </div>
  );
}
