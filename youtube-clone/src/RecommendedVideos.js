import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Covid-19 updated news"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="data:image/png;base64,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"
          channel="BBC news"
          image="https://cdn.cnn.com/cnnnext/dam/assets/200415162611-lead-sanjay-gupta-live-jake-tapper-00011701-exlarge-169.jpg"
        />

        <VideoCard
          title="Trump announces a big news"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="data:image/png;base64,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"
          channel="BBC news"
          image="https://images.thestar.com/FRd9x6YaVHYGVBJdPnVsTute_OQ=/1086x700/smart/filters:cb(1600376176294)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/09/19/green-new-deal-might-be-popular-enough-to-doom-donald-trump/trump_and_climate_change.jpg"
        />
        <VideoCard
          title="Music trends"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Music Global"
          image="https://i.ytimg.com/vi/wiGUkUDoxpk/maxresdefault.jpg"
        />
        <VideoCard
          title="MTV hosts shows"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Entertainment Media"
          image="https://media3.s-nbcnews.com/i/newscms/2019_34/2983581/190823-vma-moon-man-think-ew-517p_8b326305e105f92446d2ab27b04c1ea1.jpg"
        />
        <VideoCard
          title="Fitness: lose fats in 2 weeks"
          views="1M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Fitness channel"
          image="https://hipshakefitness.com/wp-content/uploads/2018/02/Workout-Program-Free-Trial-960x560.jpg"
        />
        <VideoCard
          title="Football semi final"
          views="23k Views"
          timestamp="59 minutes ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Sport news"
          image="https://www.gannett-cdn.com/presto/2020/09/19/USAT/200e5a3b-53e6-4f26-a874-6fab2c2e2c14-GTY_1228600522.jpg?crop=5183,2915,x0,y360&width=660&height=370&format=pjpg&auto=webp"
        />
        <VideoCard
          title="Covid-19 updated news"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="data:image/png;base64,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"
          channel="BBC news"
          image="https://cdn.cnn.com/cnnnext/dam/assets/200415162611-lead-sanjay-gupta-live-jake-tapper-00011701-exlarge-169.jpg"
        />

        <VideoCard
          title="Trump announces a big news"
          views="2.3M Views"
          timestamp="2 days ago"
          channelImage="data:image/png;base64,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"
          channel="BBC news"
          image="https://images.thestar.com/FRd9x6YaVHYGVBJdPnVsTute_OQ=/1086x700/smart/filters:cb(1600376176294)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/09/19/green-new-deal-might-be-popular-enough-to-doom-donald-trump/trump_and_climate_change.jpg"
        />
        <VideoCard
          title="Music trends"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Music Global"
          image="https://i.ytimg.com/vi/wiGUkUDoxpk/maxresdefault.jpg"
        />
        <VideoCard
          title="MTV hosts shows"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Entertainment Media"
          image="https://media3.s-nbcnews.com/i/newscms/2019_34/2983581/190823-vma-moon-man-think-ew-517p_8b326305e105f92446d2ab27b04c1ea1.jpg"
        />
        <VideoCard
          title="Fitness: lose fats in 2 weeks"
          views="1M Views"
          timestamp="3 days ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Fitness channel"
          image="https://hipshakefitness.com/wp-content/uploads/2018/02/Workout-Program-Free-Trial-960x560.jpg"
        />
        <VideoCard
          title="Football semi final"
          views="23k Views"
          timestamp="59 minutes ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Jbm7P8PO0ABnbo4P0G8hdwHaE2%26pid%3DApi&f=1"
          channel="Sport news"
          image="https://www.gannett-cdn.com/presto/2020/09/19/USAT/200e5a3b-53e6-4f26-a874-6fab2c2e2c14-GTY_1228600522.jpg?crop=5183,2915,x0,y360&width=660&height=370&format=pjpg&auto=webp"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
