import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from "phosphor-react";
import "./global.css";

import twitterLogo from "./assets/logo-twitter.svg";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope/>
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>


      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/Caiocr8.png" alt="Caio Andrade" />
              <textarea id="tweet" placeholder="O que está acontecendo?"/>
            </label>

            <button type="submit">Tweet</button>
          </form>
          
          <div className="separator" />
        </main>
      </div>
    </div>
  </StrictMode>
);
