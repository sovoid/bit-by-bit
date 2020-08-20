import React from "react";
import styled from "styled-components";
import svgLinkedinWhite from "../svg/socials/linkedin-white.svg";
import svgGithubWhite from "../svg/socials/github-white.svg";

const Follow = styled.div`
  margin-top: 2em;
  text-align: left;
`;

const FollowLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: #20a8ea;
  color: #fff;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  .follow-link-text {
    padding: 5px 7px;
    background: #dfebf3;
    color: #445271;
    font-size: 14px;
    transition: 0.2s;
  }
  img {
    display: block;
    width: 31px;
    padding: 0 5px;
    height: 17px;
  }
  &:hover .follow-link-text {
    background: #d3ebfb;
  }
`;

const ShareButtons = () => {
  return (
    <>
      <Follow>
        <FollowLink href="https://linkedin.com/in/soham-parekh" rel="nofollow">
          <img src={svgLinkedinWhite} alt="Linkedin" />
          <div className="follow-link-text">@soham-parekh</div>
        </FollowLink>
      </Follow>
      <Follow>
        <FollowLink href="https://github.com/und3fined-v01d" rel="nofollow">
          <img src={svgGithubWhite} alt="Github" />
          <div className="follow-link-text">@und3fined-v01d</div>
        </FollowLink>
      </Follow>
    </>
  );
};

export default ShareButtons;
