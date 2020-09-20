import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import "./SearchPage.css";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://gabrielamueller.com/wp-content/uploads/2019/01/gabriela-mueller-artifitcial-intelligence-2000.jpg"
        channel="Artificial Intelligence"
        verified
        subs="90k"
        noOfVideos={382}
        description="Learn about artificial intelligence most recent news and technologies.  "
      />

      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Self driving cars with AI technology"
        timestamp="1 min ago"
        channel="Artifical intelligence"
        title="Self driving car: Deep learning at scale"
        image="https://mitechnews.com/wp-content/uploads/2019/01/AICAV.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to have car that drives by itself? here it comes"
        timestamp="59 seconds ago"
        channel="AI news"
        title="Self-driving cards: a complete demo"
        image="https://miro.medium.com/max/7982/1*TNMBmpOOgXxJ0ItGg-Vh6A.jpeg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Tesla cars that just came out. Newest model. "
        timestamp="59 seconds ago"
        channel="AI news"
        title="new Tesla AI car XSL model 2020"
        image="https://cleantechnica.com/files/2019/11/Tesla-Cybertruck-Reveal-Elon-Musk-KYLE-FIELD-CLEANTECHNICA.png"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to get hands free? New experience of the future."
        timestamp="59 seconds ago"
        channel="New technology"
        title="Self-driving experience"
        image="https://cdn.mos.cms.futurecdn.net/SCCNZG4fzH9Y5rmPUi9UZ6.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Automatic sensors that detect cars in front of you"
        timestamp="59 seconds ago"
        channel="Cars today"
        title="Auto sensors cars"
        image="https://www.teslarati.com/wp-content/uploads/2019/04/tesla-autonomy-day-1.jpg"
      />
    </div>
  );
}
