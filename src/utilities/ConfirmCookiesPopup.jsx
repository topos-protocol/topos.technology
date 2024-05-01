import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CookiePopupContainer = styled.div`
  position: fixed;
  max-width: 400px;
  width: 100%;
  bottom: 20px;
  right: 50px;
  opacity: 0.95;
  background-color: #fff;
  color: #333;
  font-weight: 400;
  padding: 20px 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  & a {
    color: black;
  }
  & a:hover {
    text-decoration: underline;
  }
`;

const ConfirmationButton = styled.button`
  background-color: transparent;
  padding: 5px 15px;
  border: none;
  border-bottom: 1px solid #333;
  cursor: pointer;
  margin-top: 20px;
`;

const ConfirmCookiesPopup = () => {
  const [isCookiesAccepted, setIsCookiesAccepted] = useState(false);
  const [isCookieShowed, setIsCookieShowed] = useState(false);

  useEffect(() => {
    const acceptCookiesCheck = localStorage.getItem('acceptCookies') === 'true';
    setIsCookiesAccepted(acceptCookiesCheck);

    if (!acceptCookiesCheck) {
      const timer = setTimeout(() => {
        setIsCookieShowed(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('acceptCookies', 'true');
    setIsCookiesAccepted(true);
    setIsCookieShowed(false);
  };

  return (
    <>
      {isCookieShowed && (
        <CookiePopupContainer>
          <div>
            <p>We use cookies on our website to enhance your experience. No personal information is being stored. Continue to browse or choose to accept that you agree to the use of cookies. Read our <a href='#' target="_blank" rel="noopener noreferrer">Privacy & Cookies</a> Policy to learn more.</p>
            <ConfirmationButton onClick={acceptCookies}>I ACCEPT COOKIES</ConfirmationButton>
          </div>
        </CookiePopupContainer>
      )}
    </>
  );
};

export default ConfirmCookiesPopup;
