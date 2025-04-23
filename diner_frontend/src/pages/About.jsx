import { React , useEffect } from "react";
import { Link } from "react-router-dom";


const About = () => {

    useEffect(() => {
        new Swiper('.swiper', {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 2, // Show 2 by default
          breakpoints: {
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },


        });
      }, []);


      const cards = [
        {
          title: 'Hassle-Free Table Booking',
          image: 'https://images.unsplash.com/photo-1576707769315-01a7474de445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          text: 'At DineEasy, we believe that booking a table should never be a daunting task. With our intuitive platform, hassle-free table booking redefines convenience in dining. Here how we make your reservation experience seamless and enjoyable:',
        },
        {
          title: 'Exclusive Deals',
          image: 'https://images.unsplash.com/photo-1727081979210-ff973479b458?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          text: 'At DineEasy, we understand that enjoying delightful dining experiences should not break the bank.Our exclusive deals extend to our loyal diners. Sign up for the DineEasy loyalty program to receive additional discounts, birthday specials, and rewards points with every reservation you make.',
        },
        {
          title: 'Curated Experiences',
          image: 'https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          text: 'Make every celebration special with our curated experiences. Be it a birthday, anniversary, or a simple get-together, DineEasy offers tailored dining options that cater to your events requirements, ensuring everything is set up for a fabulous time',
        },



        // strart

        {
            title: 'Efficient Reservation Process',
            image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy allows users to secure reservations in just a few clicks, optimizing the booking process and saving users valuable time.',
          },

          {
            title: 'Customized Recommendations',
            image: 'https://plus.unsplash.com/premium_photo-1679434184488-8fd5ee5b6d36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Utilizing sophisticated algorithms, the platform delivers personalized restaurant suggestions based on users unique tastes, previous dining experiences, and dietary needs, creating a tailor-made dining experience.',
          },

          {
            title: 'Real-Time Availability',
            image: 'https://images.unsplash.com/photo-1608816042754-d69cb2271bea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Users can view real-time availability updates for restaurant tables, enabling them to make confident decisions without the hassle of uncertainty regarding reservations.',
          },

          {
            title: ' Instant Booking Confirmations',
            image: 'https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy ensures users receive immediate confirmations for their bookings, reducing anxiety about whether a reservation is secured, and allowing users to plan their dining experiences with ease.',
          },

          {
            title: 'Secure Payment Processing',
            image: 'https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=1024x1024&w=is&k=20&c=SDepWtu5jUrc1Jk_GlQSqlD1mwUgfZXYjOJaoeadIQU=',
            text: 'The platform incorporates advanced security measures for payment processing, assuring users that their financial information is protected, fostering trust and reliability in transactions.',
          },


          {
            title: 'Loyalty and Rewards Programs',
            image: 'https://plus.unsplash.com/premium_photo-1728534025227-c757e558364a?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy’s loyalty program encourages repeat business by rewarding customers with points, discounts, and exclusive offers, increasing customer retention and brand loyalty.',
          },


          {
            title: 'Social Proof through Reviews',
            image: 'https://plus.unsplash.com/premium_photo-1739518892874-c31b2da91732?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'Customer reviews and ratings enhance credibility and trust in the dining options available on DineEasy, encouraging new users to explore and book through the platform.',
          },
          

          {
            title: 'Mobile Compatibility',
            image: 'https://plus.unsplash.com/premium_photo-1722110644446-738ede8972ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy mobile-friendly design allows users to book reservations on the go, catering to a modern audience that values convenience and accessibility.',
          },
          
          {
            title: 'Community Engagement',
            image: 'https://images.unsplash.com/photo-1542338332-76971ae8c292?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy actively engages with its user community through social media and newsletters, providing culinary insights, new restaurant promotions, and exclusive dining experiences, thus building a loyal customer base.',
          },
          

          {
            title: 'Scalability and Expansion Potential',
            image: 'https://images.unsplash.com/photo-1730382624709-81e52dd294d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'With the growing demand for online reservations, DineEasy is well-positioned for growth and can easily scale its offerings into new markets and regions, tapping into wider demographics and dining preferences.',
          },


          {
            title: ' User-Centric Design',
            image: 'https://plus.unsplash.com/premium_photo-1720201054067-adf2837be5e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            text: 'DineEasy platform prioritizes user experience, ensuring a clean, intuitive interface that simplifies the dining reservation process. This design reduces friction and enhances customer satisfaction.',
          },

          




      ];










    return (
        <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-900">
        {/* Background image section */}
        <div
            className="flex items-center justify-center bg-no-repeat bg-cover bg-center py-16"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1686836715835-65af22ea5cd4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
        >
            {/* Text Box with Scrollable Content */}
            <div className="w-full max-w-4xl bg-black bg-opacity-40 text-lg text-gray-100 p-8 rounded-lg shadow-lg backdrop-blur-md h-[460px] overflow-y-scroll scrollbar-hide">
    
            {/* Headline inside the box, underlined */}
            <h2 className="text-3xl font-semibold text-orange-400 mb-6 text-center underline underline-offset-4 decoration-orange-400">
                     🍽️ Why Choose DineEasy?
            </h2>
    
                <p className="mb-4">
                    At <strong>DineEasy</strong>, we believe that dining should be as simple and delightful as the meals themselves. Our mission is to bring food lovers and exceptional restaurants together by providing a seamless platform for discovering, booking, and enjoying the perfect dining experience.
                </p>
                <p className="mb-4">
                    Whether you're planning a romantic dinner, a family outing, or a quick lunch with colleagues, DineEasy makes it easy to find the right restaurant, explore menus, and reserve your table in just a few clicks.
                </p>
                <p className="mb-4">
                    But we don't stop there. We understand that dining is not just about food; it's about creating memorable experiences. That's why DineEasy goes beyond traditional reservation systems. Our platform offers personalized recommendations tailored to your preferences, ensuring that every meal is a delightful adventure.
                </p>
                <p className="mb-4">
                    In addition to convenience and personalization, DineEasy is committed to enhancing the dining experience through technology. Our platform integrates advanced features such as real-time availability updates, instant booking confirmations, and secure payment options, all designed to make your dining experience as smooth and enjoyable as possible.
                </p>
              

                <p className="mb-4">
                Join the thousands of food lovers who trust DineEasy to elevate their dining experiences. Our platform is tailored to explore and celebrate the art of dining, making it easy for you to discover new culinary gems within your city and beyond. Book your table and savor the best that culinary destinations have to offer, all at your fingertips. With DineEasy, each meal is not just dining; it’s a celebration of flavors, atmospheres, and most importantly, the company you choose to share those moments with.
                </p>

                <p className="mb-4">
                Enhanced Technology for Your Comfort
                In addition to convenience and personalization, DineEasy is dedicated to enhancing your dining experience through cutting-edge technology. Our platform integrates advanced features such as:
                </p>
                <p className="mb-4">
                Real-Time Availability Updates: Always know the exact availability of tables at your desired restaurant, enabling you to plan your outing with confidence and ease.
                </p>
                <p className="mb-4">
                Instant Booking Confirmations: Enjoy peace of mind with immediate confirmation of your reservations, so you can focus on what really matters—enjoying your meal.
                </p>
                <p className="mb-4">
                Secure Payment Options: Our platform offers secure payment options, ensuring that your data is protected and making checkout straightforward and hassle-free.
                </p>
                <p className="mb-4">
                Loyalty and Rewards Programs: Join our loyalty program to earn rewards and discounts with every reservation you make, further enhancing your dining experiences with added benefits.
                </p>

            </div>
        </div>
    

            {/* Other sections below on white background */}
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Features Section */}
                <h2 className="text-3xl font-semibold text-orange-500 mb-6 text-center">
                    What We Provide---
                </h2>


                <div className="swiper w-full px-2">
                <div className="swiper-wrapper">
                    {cards.map((card, index) => (
                <div className="swiper-slide" key={index}>
                 <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow h-full">
                        <img src={card.image} alt={card.title} className="rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination mt-6"></div>

      <div className="swiper-button-prev text-orange-500 hover:text-orange-700 absolute top-1/2 -translate-y-1/2 left-2 z-10"></div>
      <div className="swiper-button-next text-orange-500 hover:text-orange-700 absolute top-1/2 -translate-y-1/2 right-2 z-10"></div>

    </div>

                {/* Vision Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Our vision is to redefine how people dine out. By
                        combining technology with the joy of sharing meals, we
                        aim to create a dining experience that's personalized,
                        efficient, and accessible to everyone. At DineEasy,
                        we're not just connecting people to restaurants; we're
                        connecting them to memorable moments.
                    </p>
                </div>

                {/* Services Section */}
                <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-orange-500">
                        Our Services
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Seamless restaurant reservations with instant confirmation.</li>
                        <li>Explore menus and read reviews to make informed decisions.</li>
                        <li>Personalized recommendations tailored to your preferences.</li>
                        <li>Exclusive offers and discounts for loyal diners.</li>
                        <li>24/7 customer support to assist with all your dining needs.</li>
                    </ul>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <h3 className="text-3xl font-bold mb-4 text-orange-500">
                        Ready to Experience the Best in Dining?
                    </h3>
                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Join thousands of food enthusiasts who trust DineEasy to elevate their dining experiences.
                        Reserve your next table now and savor the difference!
                    </p>
                    <Link
                        to="/signup"
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                        Sign Up Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;