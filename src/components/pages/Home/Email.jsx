const Email = () => {
  return (
    <div className="email-wrapper">
      <div className="my-container">
        <div className="email-box center">
          <p className="input-hed email-item">No Spam Promise</p>
          <h1 className="email-item">Are you a landlord?</h1>
          <p className="email-item">
            Discover ways to increase your home's value and get listed. No Spam.
          </p>
          <div className="email-input email-item">
            <input type="text" placeholder="Enter your email address" />
            <button type="button">Submit</button>
          </div>
          <p className="email-item">
            Join <span>10,000+</span> other landlords in our estatery community.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Email;
