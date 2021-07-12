import React, { Component } from 'react'

export default class ForHsGrads extends Component {
  render() {
    return (
      <div className="container">
        <h2> Minority Scholarships </h2>
        <img src="https://res.cloudinary.com/highereducation/image/upload/v1601504856/TheBestSchools.org/hero-images/scholarships-minority-students-hero.jpg" alt="man at school image"/> 
        <div className="main-text">
          <p> 
            A large percentage of the U.S. college population is comprised of minority students from various backgrounds and races, including <b> African Americans, Native Americans, Hispanic and Latinos, Asian and Pacific Islanders, and so forth.  </b> 
          </p>
          <p>
            <b>To qualify as minority student,</b> you don't need to be a first generation immigrant or the first person in your family to go to college. Specific organizations qualify women or LGBTQ students as minorities.
            <a href="https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/minority-scholarships/" target="_blank"> Read More...</a>
          </p>
        </div>

        <h2> Alternatives To College: What Are My Options? </h2>
        <img src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2018/01/alternatives-to-traditional-college-2400x1440.jpg" alt="man at school image"/> 
        <div className="main-text">
          <p> 
           Alternatives to college like apprenticeships or trade schools <b> may be a better fit for some students.  </b> 
          </p>
          <p>
            <b>A traditional four-year college</b> seems like the default next step for high school graduates, whether or not they have a career in mind. But with rising tuition costs, ballooning student debt and plenty of good jobs that don’t require a bachelor’s degree, it’s worth exploring all your options before enrolling in classes or designing your dorm room.
            <a href="https://www.nerdwallet.com/article/loans/student-loans/alternatives-to-college" target="_blank"> Read More...</a>
          </p>
        </div>
        
      </div>
    )
  }
}