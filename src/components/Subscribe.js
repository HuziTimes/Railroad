import React from 'react';

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe-container">
        <div className="subscribe-heading">
          <h3>Subscribe</h3>
        </div>
        <div className="subscribe-content">
          <p>
            Get update about our product on your email, no spam guaranteed we promise! 🔥
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="youremail123@gmail.com" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe; 