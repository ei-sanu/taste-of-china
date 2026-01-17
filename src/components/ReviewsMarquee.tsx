import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Sanjukta Das",
    rating: 5,
    review: "A truly satisfying Chinese dining experience. The dishes were bursting with authentic flavors, perfectly cooked, and generously portioned. From the first bite to the last, everything was comforting and delicious.",
    time: "a week ago",
    mealType: "Lunch",
    priceRange: "₹600–800"
  },
  {
    name: "Harish Nanda",
    rating: 4,
    review: "I like this place I live in Gandhinagar I am Odia but when I go to Bhubaneswar I just wanted or I always taste it is a great place it has the best atmosphere I have seen the service is also good.",
    time: "2 months ago",
    mealType: "Dinner",
    priceRange: "₹600–800"
  },
  {
    name: "Aishani Srivastava",
    rating: 5,
    review: "Taste of China has multiple outlets in Bhubaneswar and all the outlets are great. The restaurant is generally less crowded, especially this outlet, so you can enjoy your food without much noise.",
    time: "3 months ago"
  },
  {
    name: "Spandan Mohanty",
    rating: 5,
    review: "This is one of my favourite restaurants of all time in Bhubaneswar. Delicious Asian food, and great service! Love the atmosphere! Had sushi for the first time here! The Mix Non-Veg Efu was freakin' delicious!",
    time: "3 months ago",
    mealType: "Dinner",
    priceRange: "₹200–400"
  },
  {
    name: "Niharika Sahoo",
    rating: 4,
    review: "Affordable food at the outlet. Great taste! The ambiance is wonderful and the staff is very friendly.",
    time: "2 weeks ago",
    mealType: "Dinner",
    priceRange: "₹1,800–2,000"
  },
  {
    name: "Nomad Traveler",
    rating: 4,
    review: "Yummy and delectable indo Chinese food options available with sufficient quantity and decent price. Hakka noodles, chicken lollipop & dragon chicken were amazing!",
    time: "4 months ago",
    mealType: "Dinner",
    priceRange: "₹800–1,000"
  },
  {
    name: "Mrutyunjay",
    rating: 5,
    review: "One of the best restaurant if you are looking for Chinese menu. Veg is ok ok, but non veg is paisa wasool. And it also has good cozy vibe. Suitable for friends, and date as well.",
    time: "4 months ago",
    mealType: "Lunch",
    priceRange: "₹400–600"
  },
  {
    name: "Ÿôgâ Dårshãn",
    rating: 5,
    review: "This restaurant is an excellent representative of modern Chinese cuisine. Their dishes retain the essence of traditional Chinese food while being adjusted to modern dietary preferences.",
    time: "a year ago",
    mealType: "Lunch",
    priceRange: "₹200–400"
  },
  {
    name: "Lela Behera",
    rating: 5,
    review: "Evening is very good I really love this place and food all staff's doing very well next time I really visit again.....😊😊😊",
    time: "3 weeks ago"
  },
  {
    name: "Sub Account",
    rating: 5,
    review: "It's an excellent place with truly authentic Kolkata-style flavors. I absolutely loved the food! I highly recommend all Bengali visitors to try this spot — the taste is awesome and the prices are very reasonable.",
    time: "a month ago",
    mealType: "Brunch",
    priceRange: "₹400–600"
  },
  {
    name: "Pronojit Roy",
    rating: 5,
    review: "This place is truly amazing! The food tastes just like Kolkata, and it instantly reminded me of home. I highly recommend it to anyone from Bengal — you must try it!",
    time: "a month ago",
    mealType: "Brunch",
    priceRange: "₹600–800"
  },
  {
    name: "Rituparna Deo",
    rating: 5,
    review: "Great experience with staff and all items here are so tasty recommended to must visit…",
    time: "a month ago",
    mealType: "Lunch",
    priceRange: "₹1,200–1,400"
  },
  {
    name: "Swayamprakash Rout",
    rating: 5,
    review: "Taste of China in Bapuji Nagar is a gem for Chinese cuisine lovers! I tried the Hunan Chicken and Chicken Tai Pan, and both dishes were absolutely delicious!",
    time: "a year ago",
    mealType: "Lunch",
    priceRange: "₹400–600"
  },
  {
    name: "Aishwarya Baral",
    rating: 4,
    review: "The service was too fast and we didn't expect that. Overall it was a good experience. Broccoli, mushroom and Pineapple corn fried rice were amazing!",
    time: "7 months ago",
    mealType: "Lunch",
    priceRange: "₹400–600"
  },
  {
    name: "Tanmaya Nayak",
    rating: 5,
    review: "Tried their chicken Hunan, Chicken tai-pan, chicken fried rice, E Fu noodles, chicken hoekings. The Hunan chicken and E fu noodles are personal recommendations!",
    time: "a year ago",
    mealType: "Lunch",
    priceRange: "₹400–600"
  }
];

const ReviewsMarquee = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="section-title text-foreground">
          What Our <span className="text-secondary glow-text-gold">Guests</span> Say
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it — hear from our happy customers
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* First Row */}
        <div className="flex overflow-hidden mb-6">
          <div className="marquee">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`row1-${index}`} {...review} />
            ))}
          </div>
        </div>

        {/* Second Row - Reverse Direction */}
        <div className="flex overflow-hidden">
          <div className="marquee" style={{ animationDirection: 'reverse' }}>
            {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((review, index) => (
              <ReviewCard key={`row2-${index}`} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsMarquee;
